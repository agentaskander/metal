type EmailAddress = {
  email: string
  name?: string
}

type EmailMessage = {
  from: EmailAddress
  html: string
  replyTo?: string
  subject: string
  text: string
  to: string | string[]
}

export type EmailBinding = {
  send: (message: EmailMessage) => Promise<unknown>
}

export type R2BucketBinding = {
  put: (
    key: string,
    value: ArrayBuffer | ReadableStream | string,
    options?: {
      httpMetadata?: {
        contentType?: string
      }
      customMetadata?: Record<string, string>
    },
  ) => Promise<unknown>
}

export type LeadEnv = {
  EMAIL?: EmailBinding
  LEAD_UPLOADS?: R2BucketBinding
  SALES_FROM_EMAIL?: string
  SALES_FROM_NAME?: string
  SALES_TO_EMAIL?: string
  TURNSTILE_SECRET_KEY?: string
}

export type PagesContext = {
  env: LeadEnv
  request: Request
}

export const maxUploadBytes = 100 * 1024 * 1024

export function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
    },
    status,
  })
}

export function getText(formData: FormData, key: string) {
  const value = formData.get(key)

  if (typeof value !== 'string') {
    return ''
  }

  return value.trim()
}

export function requireFields(formData: FormData, fields: string[]) {
  return fields.filter((field) => !getText(formData, field))
}

export async function verifyTurnstile(formData: FormData, request: Request, env: LeadEnv) {
  const secret = env.TURNSTILE_SECRET_KEY
  const token = getText(formData, 'cf-turnstile-response')

  if (!secret) {
    return { ok: false, message: 'Lead capture is not configured yet.' }
  }

  if (!token) {
    return { ok: false, message: 'Please complete the verification challenge.' }
  }

  const body = new FormData()
  body.set('secret', secret)
  body.set('response', token)

  const ip = request.headers.get('CF-Connecting-IP')
  if (ip) {
    body.set('remoteip', ip)
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    body,
    method: 'POST',
  })
  const result = await response.json<{ success?: boolean }>()

  if (!result.success) {
    return { ok: false, message: 'Verification failed. Please try again.' }
  }

  return { ok: true, message: '' }
}

export async function sendSalesEmail(env: LeadEnv, message: Omit<EmailMessage, 'from' | 'to'>) {
  if (!env.EMAIL || !env.SALES_TO_EMAIL || !env.SALES_FROM_EMAIL) {
    return { ok: false, message: 'Sales email delivery is not configured yet.' }
  }

  await env.EMAIL.send({
    ...message,
    from: {
      email: env.SALES_FROM_EMAIL,
      name: env.SALES_FROM_NAME || 'America’s Panel Fab Leads',
    },
    to: env.SALES_TO_EMAIL,
  })

  return { ok: true, message: '' }
}

export function renderHtmlLead(title: string, rows: Array<[string, string]>) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0f172a">
      <h1 style="font-size:22px;margin:0 0 16px">${escapeHtml(title)}</h1>
      <table style="border-collapse:collapse;width:100%;max-width:760px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <th style="border:1px solid #e2e8f0;background:#f8fafc;padding:8px;text-align:left;width:220px">${escapeHtml(label)}</th>
                <td style="border:1px solid #e2e8f0;padding:8px">${escapeHtml(value || 'Not provided')}</td>
              </tr>
            `,
          )
          .join('')}
      </table>
    </div>
  `
}

export function renderTextLead(title: string, rows: Array<[string, string]>) {
  return [
    title,
    '',
    ...rows.map(([label, value]) => `${label}: ${value || 'Not provided'}`),
  ].join('\n')
}

export function safeFileName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '') || 'upload'
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

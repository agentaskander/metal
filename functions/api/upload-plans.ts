import {
  getText,
  jsonResponse,
  maxUploadBytes,
  renderHtmlLead,
  renderTextLead,
  requireFields,
  safeFileName,
  sendSalesEmail,
  verifyTurnstile,
  type PagesContext,
} from './_shared'

const uploadFields = ['plans_pdf', 'drawings', 'structural_documents']

export async function onRequestPost({ request, env }: PagesContext) {
  if (!env.LEAD_UPLOADS) {
    return jsonResponse(503, {
      message: 'Plan upload storage is not configured yet.',
      ok: false,
    })
  }

  const formData = await request.formData()
  const missing = requireFields(formData, ['name', 'email', 'phone', 'project_address', 'state'])

  if (missing.length > 0) {
    return jsonResponse(400, {
      message: `Missing required fields: ${missing.join(', ')}`,
      ok: false,
    })
  }

  const verification = await verifyTurnstile(formData, request, env)
  if (!verification.ok) {
    return jsonResponse(400, { message: verification.message, ok: false })
  }

  const files = uploadFields.flatMap((field) =>
    formData.getAll(field).filter((value): value is File => value instanceof File && value.size > 0),
  )

  if (files.length === 0) {
    return jsonResponse(400, {
      message: 'Upload at least one plan, drawing, or structural document.',
      ok: false,
    })
  }

  const totalBytes = files.reduce((sum, file) => sum + file.size, 0)

  if (totalBytes > maxUploadBytes) {
    return jsonResponse(413, {
      message: 'Plan uploads must be 100MB or less.',
      ok: false,
    })
  }

  const leadId = crypto.randomUUID()
  const uploadedKeys: string[] = []

  for (const file of files) {
    const key = `leads/${new Date().toISOString().slice(0, 10)}/${leadId}/${safeFileName(file.name)}`
    await env.LEAD_UPLOADS.put(key, file.stream(), {
      customMetadata: {
        company: getText(formData, 'company'),
        email: getText(formData, 'email'),
        leadId,
        name: getText(formData, 'name'),
      },
      httpMetadata: {
        contentType: file.type || 'application/octet-stream',
      },
    })
    uploadedKeys.push(`${key} (${formatBytes(file.size)})`)
  }

  const rows: Array<[string, string]> = [
    ['Lead ID', leadId],
    ['Name', getText(formData, 'name')],
    ['Company', getText(formData, 'company')],
    ['Email', getText(formData, 'email')],
    ['Phone', getText(formData, 'phone')],
    ['Project Address', getText(formData, 'project_address')],
    ['State', getText(formData, 'state')],
    ['Uploaded Files', uploadedKeys.join('\n')],
    ['Total Upload Size', formatBytes(totalBytes)],
    ['Submitted From', request.headers.get('Referer') ?? 'Direct'],
  ]

  const emailResult = await sendSalesEmail(env, {
    html: renderHtmlLead('New Plan Upload', rows),
    replyTo: getText(formData, 'email'),
    subject: `Plan Upload: ${getText(formData, 'company') || getText(formData, 'name')}`,
    text: renderTextLead('New Plan Upload', rows),
  })

  if (!emailResult.ok) {
    return jsonResponse(503, { message: emailResult.message, ok: false })
  }

  return jsonResponse(200, {
    leadId,
    message: 'Plans uploaded.',
    ok: true,
    uploaded: uploadedKeys.length,
  })
}

export function onRequest() {
  return jsonResponse(405, { message: 'Method not allowed.', ok: false })
}

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`
  }

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

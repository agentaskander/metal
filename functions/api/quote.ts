import {
  getText,
  jsonResponse,
  renderHtmlLead,
  renderTextLead,
  requireFields,
  sendSalesEmail,
  verifyTurnstile,
  type PagesContext,
} from './_shared'

export async function onRequestPost({ request, env }: PagesContext) {
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

  const rows: Array<[string, string]> = [
    ['Name', getText(formData, 'name')],
    ['Company', getText(formData, 'company')],
    ['Email', getText(formData, 'email')],
    ['Phone', getText(formData, 'phone')],
    ['Project Address', getText(formData, 'project_address')],
    ['State', getText(formData, 'state')],
    ['Estimated Square Footage', getText(formData, 'estimated_square_footage')],
    ['Panel Type', getText(formData, 'panel_type')],
    ['Desired Completion Date', getText(formData, 'desired_completion_date')],
    ['Submitted From', request.headers.get('Referer') ?? 'Direct'],
  ]

  const emailResult = await sendSalesEmail(env, {
    html: renderHtmlLead('New Quote Request', rows),
    replyTo: getText(formData, 'email'),
    subject: `Quote Request: ${getText(formData, 'company') || getText(formData, 'name')}`,
    text: renderTextLead('New Quote Request', rows),
  })

  if (!emailResult.ok) {
    return jsonResponse(503, { message: emailResult.message, ok: false })
  }

  return jsonResponse(200, { message: 'Quote request received.', ok: true })
}

export function onRequest() {
  return jsonResponse(405, { message: 'Method not allowed.', ok: false })
}

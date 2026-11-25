// Server-only: tells the Google Sheet script that a registration was paid.
export async function markPaid(regId, reference) {
  const url = process.env.SHEET_WEBAPP_URL
  const token = process.env.SHEET_TOKEN
  if (!url || !token || !regId) return false
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ action: 'paid', regId, reference, token }),
      redirect: 'follow',
    })
    const j = await r.json().catch(() => ({}))
    return j.result === 'success'
  } catch (e) {
    return false
  }
}
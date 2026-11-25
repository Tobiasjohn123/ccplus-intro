import { SECRET, priceFor, paystack } from './_lib.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  if (!SECRET) return res.status(500).json({ error: 'Online payment is not configured.' })

  const { course, ageGroup, email, name, phone, regId } = req.body || {}
  const hit = priceFor(course, ageGroup)
  const idOk = regId === undefined || regId === '' || /^[\w-]{8,64}$/.test(String(regId))
  if (!hit || !idOk || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || ''))) {
    return res.status(400).json({ error: 'Invalid payment details.' })
  }

  const r = await paystack('/transaction/initialize', {
    method: 'POST',
    body: JSON.stringify({
      email,
      amount: hit.naira * 100,
      currency: 'NGN',
      metadata: { course: hit.course.slug, courseName: hit.course.name, ageGroup, name, phone, regId: regId || '' },
    }),
  })
  if (!r.ok || !r.data) return res.status(502).json({ error: r.message || 'Could not start the payment.' })
  return res.status(200).json({ access_code: r.data.access_code, reference: r.data.reference })
}
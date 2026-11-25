import { SECRET, priceFor, paystack } from './_lib.js'
import { markPaid } from './_sheet.js'

export default async function handler(req, res) {
  const reference = String((req.query && req.query.reference) || '')
  if (!SECRET || !/^[\w.=-]{6,100}$/.test(reference)) return res.status(400).json({ ok: false })

  const r = await paystack(`/transaction/verify/${encodeURIComponent(reference)}`)
  const t = r.data
  if (!r.ok || !t || t.status !== 'success' || t.currency !== 'NGN') return res.status(200).json({ ok: false })

  // metadata was set by our own server when the payment started
  const m = t.metadata || {}
  const hit = priceFor(m.course, m.ageGroup)
  const paid = t.amount / 100
  if (!hit || paid !== hit.naira) return res.status(200).json({ ok: false })

  // Payment is confirmed by Paystack: now mark the Sheet row as Paid.
  const sheet = await markPaid(m.regId, reference)

  return res.status(200).json({ ok: true, amount: paid, course: hit.course.name, reference, sheet })
}
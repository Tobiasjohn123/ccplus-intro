import { useState } from 'react'

const loadPaystack = () => new Promise((resolve, reject) => {
  if (window.PaystackPop) return resolve(window.PaystackPop)
  const s = document.createElement('script')
  s.src = 'https://js.paystack.co/v2/inline.js'
  s.onload = () => resolve(window.PaystackPop)
  s.onerror = () => reject(new Error('Could not load Paystack'))
  document.body.appendChild(s)
})

export default function PayOnline({ slug, ageGroup, email, name, phone, onPaid }) {
  const [state, setState] = useState('idle')
  const [msg, setMsg] = useState('')

  const verify = async (reference) => {
    setState('verifying')
    setMsg('')
    try {
      const r = await fetch(`/api/paystack-verify?reference=${encodeURIComponent(reference)}`)
      const j = await r.json()
      if (j.ok) { setState('paid'); if (onPaid) onPaid(j); return }
    } catch (e) { /* fall through */ }
    setState('error')
    setMsg('We could not confirm your payment yet. If you were charged, send your proof of payment on WhatsApp and we will confirm it.')
  }

  const pay = async () => {
    setState('working')
    setMsg('')
    try {
      const r = await fetch('/api/paystack-init', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course: slug, ageGroup, email, name, phone }),
      })
      const j = await r.json().catch(() => ({}))
      if (!r.ok || !j.access_code) throw new Error(j.error || 'init')
      const PaystackPop = await loadPaystack()
      new PaystackPop().resumeTransaction(j.access_code, {
        onSuccess: (tx) => verify((tx && tx.reference) || j.reference),
        onCancel: () => setState('idle'),
      })
      setState('idle')
    } catch (e) {
      setState('error')
      setMsg('We could not start the online payment. Please pay by bank transfer above, or try again.')
    }
  }

  if (state === 'paid') return <p className="rg-p"><b>Payment confirmed.</b> Thank you!</p>

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p className="rg-p"><b>Or pay securely online</b></p>
      <button type="button" className="pg-btn pg-btn--blue" onClick={pay} disabled={state === 'working' || state === 'verifying'}>
        {state === 'working' ? 'Starting payment...' : state === 'verifying' ? 'Confirming payment...' : 'Pay online with Paystack'}
      </button>
      {msg && <p className="rg-err">{msg}</p>}
    </div>
  )
}
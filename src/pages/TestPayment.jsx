import { useState } from 'react'
import PayOnline from '../components/PayOnline'
import { naira } from '../data/courses'

export default function TestPayment() {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')

  const handlePaid = (data) => {
    setDone(true)
    setMsg(`Paid via Paystack (Ref: ${data.reference || 'Success'})`)
  }

  if (done) {
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1>Payment Successful!</h1>
        <p>{msg}</p>
        <a href="/">Go back home</a>
      </div>
    )
  }

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>₦100 Test Payment</h1>
      <p>This uses the exact same secure backend as the main form.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
        <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} required style={{ padding: 10 }} />
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ padding: 10 }} />
        <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} required style={{ padding: 10 }} />
        
        <div style={{ marginTop: 20 }}>
          <PayOnline 
            slug="payment-test" 
            ageGroup="adult" 
            email={email} 
            name={name} 
            phone={phone} 
            onPaid={handlePaid} 
          />
        </div>
      </div>
    </div>
  )
}
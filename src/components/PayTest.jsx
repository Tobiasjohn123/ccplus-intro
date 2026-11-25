import { useState } from 'react'
import PayOnline from './PayOnline.jsx'

// TEMPORARY: render this anywhere to test Paystack, then delete it.
export default function PayTest() {
  const [email, setEmail] = useState('')
  const [slug, setSlug] = useState('test-50')
  const [done, setDone] = useState(null)

  return (
    <div style={{ maxWidth: 360, margin: '40px auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h3>Paystack test</h3>
      <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <select value={slug} onChange={(e) => setSlug(e.target.value)}>
        <option value="test-50">N50 test</option>
        <option value="test-100">N100 test</option>
      </select>
      <PayOnline key={slug} slug={slug} ageGroup="any" email={email} name="Test" phone="0000000000" onPaid={setDone} />
      {done && <pre>{JSON.stringify(done, null, 2)}</pre>}
    </div>
  )
}
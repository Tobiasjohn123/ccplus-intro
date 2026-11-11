import { useState } from 'react'

export default function SmartImg({ src, alt = '' }) {
  const [bad, setBad] = useState(false)
  if (!src || bad) return <span className="ph" aria-hidden="true" />
  return <img src={src} alt={alt} onError={() => setBad(true)} />
}
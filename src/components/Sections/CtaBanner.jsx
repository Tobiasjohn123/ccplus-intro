import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '../../data/config'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to register for the next cohort.')}`

export default function CtaBanner({ title = 'Ready to start your tech journey?', text = 'Pick a course, register, and join the next cohort.', primary = { label: 'Register now', to: '/register' }, secondary }) {
  return (
    <div className="sec-cta">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="sec-cta__btns">
        <Link className="sec-btn sec-btn--white" to={primary.to}>{primary.label} <ArrowRight size={16} /></Link>
        {secondary
          ? <Link className="sec-btn sec-btn--ghost" to={secondary.to}>{secondary.label}</Link>
          : <a className="sec-btn sec-btn--ghost" href={WA} target="_blank" rel="noreferrer">Chat on WhatsApp</a>}
      </div>
    </div>
  )
}
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { CONTACT } from '../data/config'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to know more about your courses.')}`
const MAP = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`

const Deco = () => (
  <>
    <circle cx="352" cy="14" r="84" fill="#fff" opacity=".08" />
    <circle cx="30" cy="176" r="64" fill="#fff" opacity=".08" />
  </>
)

const ART = {
  chat: (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Deco />
      <rect x="70" y="34" width="176" height="74" rx="26" fill="#fff" />
      <circle cx="112" cy="71" r="8" fill="#3d3bff" />
      <circle cx="144" cy="71" r="8" fill="#3d3bff" opacity=".6" />
      <circle cx="176" cy="71" r="8" fill="#3d3bff" opacity=".3" />
      <rect x="186" y="98" width="148" height="58" rx="22" fill="#b9c8ff" />
      <rect x="210" y="120" width="100" height="10" rx="5" fill="#fff" />
    </svg>
  ),
  call: (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Deco />
      <rect x="150" y="20" width="100" height="140" rx="22" fill="#fff" />
      <rect x="164" y="40" width="72" height="84" rx="12" fill="#dfe5ff" />
      <circle cx="200" cy="141" r="6" fill="#3d3bff" />
      <g stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".85">
        <path d="M264 62a38 38 0 0 1 0 56" />
        <path d="M280 46a62 62 0 0 1 0 88" />
        <path d="M136 62a38 38 0 0 0 0 56" />
        <path d="M120 46a62 62 0 0 0 0 88" />
      </g>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Deco />
      <rect x="96" y="50" width="208" height="112" rx="20" fill="#fff" />
      <path d="M102 60l98 64 98-64" stroke="#3d3bff" strokeWidth="8" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M306 34l62-16-26 58-16-26z" fill="#fff" opacity=".9" />
    </svg>
  ),
  map: (
    <svg viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <Deco />
      <path d="M0 62h400M0 124h400M118 0v180M284 0v180" stroke="#fff" strokeOpacity=".25" strokeWidth="12" />
      <path d="M200 26c-27 0-48 21-48 48 0 36 48 82 48 82s48-46 48-82c0-27-21-48-48-48z" fill="#fff" />
      <circle cx="200" cy="74" r="17" fill="#3d3bff" />
    </svg>
  ),
}

const ITEMS = [
  { k: 'chat', title: 'WhatsApp', text: 'Chat with us about courses, prices and registration.', href: WA, cta: 'Open WhatsApp', ext: true },
  { k: 'call', title: 'Call us', text: `${CONTACT.phone} / ${CONTACT.phone2}`, href: `tel:${CONTACT.phone}`, cta: 'Call now' },
  { k: 'mail', title: 'Email', text: CONTACT.email, href: `mailto:${CONTACT.email}`, cta: 'Send an email' },
  { k: 'map', title: 'Visit us', text: CONTACT.address, href: MAP, cta: 'Get directions', ext: true },
]

export default function Chat() {
  return (
    <PageShell kicker="Contact" title={<>Talk to <mark>us</mark></>} sub="Questions about a course, price or registration? Reach us any way you like.">
      <div className="cx-grid">
        {ITEMS.map((c) => (
          <a key={c.k} className="cx" href={c.href} {...(c.ext ? { target: '_blank', rel: 'noreferrer' } : {})}>
            <span className={`cx__art cx__art--${c.k}`}>{ART[c.k]}</span>
            <span className="cx__body">
              <b>{c.title}</b>
              <span>{c.text}</span>
              <em className="cx__cta">{c.cta} <ArrowRight size={16} /></em>
            </span>
          </a>
        ))}
      </div>
    </PageShell>
  )
}
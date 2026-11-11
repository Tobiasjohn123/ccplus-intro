import { MessageCircle, Phone, Mail, MapPin, Globe } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { CONTACT } from '../data/config'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to know more about your courses.')}`

export default function Chat() {
  const items = [
    [MessageCircle, 'WhatsApp', 'Chat with us now', WA, true],
    [Phone, 'Call us', CONTACT.phone, `tel:${CONTACT.phone}`],
    [Phone, 'Call us (2)', CONTACT.phone2, `tel:${CONTACT.phone2}`],
    [Mail, 'Email', CONTACT.email, `mailto:${CONTACT.email}`],
    [Globe, 'Website', CONTACT.website.replace('https://', ''), CONTACT.website, true],
    [MapPin, 'Visit us', CONTACT.address, null],
  ]
  return (
    <PageShell kicker="Contact" title={<>Talk to <mark>us</mark></>} sub="Questions about a course, price or registration? Reach us any way you like.">
      <div className="pg-grid pg-grid--contact">
        {items.map(([Icon, t, d, href, ext]) => {
          const inner = (
            <>
              <i><Icon size={24} /></i>
              <b>{t}</b>
              <span>{d}</span>
            </>
          )
          return href
            ? <a key={t} className="pg-card pg-contact" href={href} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
            : <div key={t} className="pg-card pg-contact">{inner}</div>
        })}
      </div>
    </PageShell>
  )
}
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { CONTACT } from '../data/config'
import { COURSES } from '../data/courses'

export default function Register() {
  const [params] = useSearchParams()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [course, setCourse] = useState(params.get('course') || '')

  const submit = (e) => {
    e.preventDefault()
    const text = `Hello, I would like to register for the next cohort.\nName: ${name}\nPhone: ${phone}\nCourse: ${course}`
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <PageShell kicker="Register" title={<>Join the <mark>next cohort</mark></>} sub="Fill in your details and we continue on WhatsApp to confirm your registration.">
      <form className="pg-card pg-form" onSubmit={submit}>
        <label>Full name
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" autoComplete="name" />
        </label>
        <label>Phone number
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 0801 234 5678" autoComplete="tel" />
        </label>
        <label>Course
          <select required value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="" disabled>Choose a course</option>
            {COURSES.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </label>
        <button type="submit" className="pg-btn pg-btn--blue">Continue on WhatsApp <ArrowRight size={16} /></button>
      </form>
    </PageShell>
  )
}
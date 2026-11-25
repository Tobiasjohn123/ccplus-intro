import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Plus, Award, Briefcase, Video, Laptop } from 'lucide-react'
import { CONTACT } from '../../data/config'
import { COURSES, naira } from '../../data/courses'
import { SCHEDULE, SCHEDULE_GROUPS, slotText } from '../../data/site'
import CtaBanner from './CtaBanner'
import './Sections.css'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to register for the next cohort.')}`
const MIN = Math.min(...COURSES.map((c) => c.price))

const PERKS = [
  [Award, 'Professional certificate', 'A certificate to show for your new skills.'],
  [Briefcase, 'Internship opportunities', 'Practical experience to start your career.'],
  [Video, 'Catch-up recordings', 'Missed a class? Watch the recording anytime.'],
  [Laptop, 'Live online classes', 'Learn hands-on from wherever you are.'],
]

const STEPS = [
  { t: 'Pick your course', d: 'Browse the courses and choose the one that fits your goal.', to: '/courses', cta: 'See courses' },
  { t: 'Fill the form & pay', d: 'Complete the registration form and make your payment.', to: '/register', cta: 'Register' },
  { t: 'Confirm on WhatsApp', d: 'Message us on WhatsApp so we can confirm your registration.', href: WA, cta: 'Open WhatsApp' },
]

const FAQ = [
  ['When are classes held?', `Classes hold ${SCHEDULE.summary}, ${SCHEDULE.mode.toLowerCase()}. ${SCHEDULE_GROUPS.map((g) => `${g.days}: ${g.slots.map(slotText).join(' or ')}`).join('. ')}.`],
  ['Do I need experience to join?', 'We have beginner courses, such as Computer Basic Class, Digital Marketing & Canva (Beginner) and Cybersecurity Beginners. Not sure which level fits you? Ask us on WhatsApp.'],
  ['Are the classes live or recorded?', 'Classes are held live online, and recorded sessions are available so you can catch up on anything you miss.'],
  ['Will I get a certificate?', 'Yes. A professional certificate is included.'],
  ['Is there an internship?', 'Yes. Internship opportunities come with our courses.'],
  ['How much do courses cost?', `Courses start from ${naira(MIN)}. The price depends on the course and age group, so check the courses page for the full list.`],
  ['How do I register?', 'Choose a course, fill the registration form, then confirm with us on WhatsApp.'],
]

export default function HomeSections() {
  const [open, setOpen] = useState(-1)

  return (
    <div className="sec-wrap">
      <section className="sec">
        <div className="sec-head">
          <span className="sec-kicker"><i className="dot" /> Why choose us</span>
          <h2 className="sec-h">What you get when <mark>you join</mark></h2>
        </div>
        <div className="sec-perks">
          {PERKS.map(([Icon, t, d]) => (
            <div key={t} className="sec-card sec-perk">
              <i><Icon size={24} /></i>
              <span><b>{t}</b><p>{d}</p></span>
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-head">
          <span className="sec-kicker"><i className="dot" /> How it works</span>
          <h2 className="sec-h">Three steps to <mark>get started</mark></h2>
        </div>
        <div className="sec-steps">
          {STEPS.map((s, i) => (
            <div key={s.t} className="sec-card sec-step">
              <span className="sec-step__n">{i + 1}</span>
              <b>{s.t}</b>
              <p>{s.d}</p>
              {s.to
                ? <Link className="sec-link" to={s.to}>{s.cta} <ArrowRight size={15} /></Link>
                : <a className="sec-link" href={s.href} target="_blank" rel="noreferrer">{s.cta} <ArrowRight size={15} /></a>}
            </div>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="sec-faq">
          <div className="sec-head">
            <span className="sec-kicker"><i className="dot" /> FAQ</span>
            <h2 className="sec-h">Questions? <mark>Answered.</mark></h2>
          </div>
          <div className="sec-faq__list">
            {FAQ.map(([q, a], i) => (
              <div key={q} className={`sec-q${open === i ? ' open' : ''}`}>
                <button type="button" className="sec-q__btn" aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{q}</span>
                  <i><Plus size={18} /></i>
                </button>
                <div className="sec-q__body" id={`faq-${i}`} role="region">
                  <div><p>{a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <CtaBanner />
      </section>
    </div>
  )
}
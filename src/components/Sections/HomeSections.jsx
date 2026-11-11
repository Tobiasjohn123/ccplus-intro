import { Link } from 'react-router-dom'
import { ArrowRight, Award, Briefcase, Video, Laptop, MapPin, Phone, Mail, Plus } from 'lucide-react'
import { CONTACT } from '../../data/config'
import { COURSES, naira } from '../../data/courses'
import { STATS } from '../../data/stats'
import './Sections.css'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to register for the next cohort.')}`
const MIN = Math.min(...COURSES.map((c) => c.price))

const PERKS = [
  [Award, 'Professional certificate', 'A certificate to show for your new skills.'],
  [Briefcase, 'Internship opportunities', 'Practical experience to start your career.'],
  [Video, 'Catch-up recordings', 'Missed a class? Watch the recording anytime.'],
  [Laptop, 'Live online classes', 'Learn hands-on from wherever you are.'],
]

const FEATURED = [
  { name: 'Web Development (Frontend)', blurb: 'Build modern, responsive websites from scratch.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Data Analytics (Power BI & SQL)', blurb: 'Turn raw data into dashboards and decisions.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
  { name: 'Cybersecurity Beginners', blurb: 'Learn how systems and data are protected.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80' },
]

const STEPS = [
  { t: 'Pick your course', d: 'Browse the courses and choose the one that fits your goal.', to: '/courses', cta: 'See courses' },
  { t: 'Fill the form & pay', d: 'Complete the registration form and make your payment.', to: '/register', cta: 'Register' },
  { t: 'Confirm on WhatsApp', d: 'Message us on WhatsApp so we can confirm your registration.', href: WA, cta: 'Open WhatsApp' },
]

const FAQ = [
  ['Do I need experience to join?', 'We have beginner courses, such as Computer Basic Class, Digital Marketing & Canva (Beginner) and Cybersecurity Beginners. Not sure which level fits you? Ask us on WhatsApp.'],
  ['Are the classes live or recorded?', 'Classes are held live online, and recorded sessions are available so you can catch up on anything you miss.'],
  ['Will I get a certificate?', 'Yes. A professional certificate is included.'],
  ['Is there an internship?', 'Yes. Internship opportunities come with our courses.'],
  ['How much do courses cost?', `Courses start from ${naira(MIN)}. The price depends on the course you pick, so check the courses page for the full list.`],
  ['How do I register?', 'Choose a course, fill the registration form, then confirm with us on WhatsApp.'],
]

export default function HomeSections() {
  const stats = [{ value: String(COURSES.length), label: 'Courses available' }, ...STATS.filter((s) => s.value && s.label)]

  return (
    <div className="sec-wrap">
      {/* Trust bar */}
      <section className="sec">
        <div className="sec-trust">
          {stats.map((s) => (
            <div key={s.label} className="sec-trust__item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="sec">
        <div className="sec-head">
          <span className="sec-kicker"><i className="dot" /> Why choose us</span>
          <h2 className="sec-h">What you get when <mark>you join</mark></h2>
        </div>
        <div className="sec-perks">
          {PERKS.map(([Icon, t, d]) => (
            <div key={t} className="sec-card sec-perk">
              <i><Icon size={26} /></i>
              <b>{t}</b>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="sec">
        <div className="sec-head sec-head--row">
          <div>
            <span className="sec-kicker"><i className="dot" /> Popular courses</span>
            <h2 className="sec-h">Start with a <mark>skill that pays</mark></h2>
          </div>
          <Link className="sec-btn sec-btn--line" to="/courses">View all {COURSES.length} courses <ArrowRight size={16} /></Link>
        </div>
        <div className="sec-feat">
          {FEATURED.map((f) => {
            const c = COURSES.find((x) => x.name === f.name)
            return (
              <Link key={f.name} to="/courses" className="sec-card sec-fc">
                <div className="sec-fc__img">
                  <img src={f.img} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                </div>
                <div className="sec-fc__body">
                  <b>{f.name}</b>
                  <p>{f.blurb}</p>
                  <div className="sec-fc__foot">
                    <span>{c ? `From ${naira(c.price)}` : 'See details'}</span>
                    <i><ArrowRight size={16} /></i>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* How it works */}
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

      {/* FAQ */}
      <section className="sec">
        <div className="sec-faq">
          <div className="sec-head">
            <span className="sec-kicker"><i className="dot" /> FAQ</span>
            <h2 className="sec-h">Questions? <mark>Answered.</mark></h2>
          </div>
          <div className="sec-faq__list">
            {FAQ.map(([q, a]) => (
              <details key={q} className="sec-card sec-q">
                <summary>
                  <span>{q}</span>
                  <i><Plus size={18} /></i>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="sec">
        <div className="sec-cta">
          <h2>Ready to start your tech journey?</h2>
          <p>Pick a course, register, and join the next cohort.</p>
          <div className="sec-cta__btns">
            <Link className="sec-btn sec-btn--white" to="/register">Register now <ArrowRight size={16} /></Link>
            <a className="sec-btn sec-btn--ghost" href={WA} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sec sec-foot">
        <div className="sec-foot__grid">
          <div>
            <b className="sec-foot__brand">Computer College Plus</b>
            <p>Hands-on online classes, recorded sessions, a professional certificate and internship opportunities.</p>
          </div>
          <div className="sec-foot__col">
            <span><MapPin size={16} /> {CONTACT.address}</span>
            <span><Phone size={16} /> {CONTACT.phone} / {CONTACT.phone2}</span>
            <span><Mail size={16} /> {CONTACT.email}</span>
          </div>
          <div className="sec-foot__col">
            <Link to="/courses">Courses</Link>
            <Link to="/register">Register</Link>
            <Link to="/chat">Contact us</Link>
          </div>
        </div>
        <div className="sec-foot__copy">&copy; {new Date().getFullYear()} Computer College Plus. All rights reserved.</div>
      </footer>
    </div>
  )
}
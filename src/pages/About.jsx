import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import CtaBanner from '../components/Sections/CtaBanner'
import { TILES } from '../data/heroImages'
import { STATS } from '../data/stats'

const [dataImg, codeImg, teamImg, designImg] = TILES.map((t) => t.img)

const VALUES = [
  ['Innovation', 'We stay at the forefront of technology, constantly updating our curriculum with the latest industry trends and tools.', codeImg],
  ['Student Success', 'Your success is our priority. We provide personalized support and mentorship throughout your learning journey.', designImg],
  ['Community', 'Join a vibrant community of learners, mentors, and industry professionals who support each other\u2019s growth.', teamImg],
  ['Excellence', 'We maintain the highest standards in education, ensuring our graduates are well-prepared for their careers.', dataImg],
]

function Clamp({ lines = 5, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`cl${open ? ' open' : ''}`}>
      <div className="cl__body" style={{ '--l': lines }}>{children}</div>
      <button type="button" className="cl__btn" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? 'Show less' : 'Read more'}</button>
    </div>
  )
}

export default function About() {
  const stats = STATS.filter((s) => s.value && s.label)
  return (
    <PageShell
      kicker="About us"
      title={<>About <mark>Computer College Plus</mark></>}
      sub="Empowering the next generation of tech professionals through innovative education and hands-on experience."
    >
      <section className="ab-mission">
        <div className="ab-mission__img"><img src={teamImg} alt="Students learning together" loading="lazy" /></div>
        <div className="ab-mission__txt">
          <h2>Our mission</h2>
          <Clamp lines={5}>
            <p>At Computer College Plus, we believe that everyone deserves access to high-quality tech education. Our mission is to bridge the digital divide by providing accessible, comprehensive training programmes for people of all ages, and to close the gap between traditional education and industry needs with practical, hands-on learning that prepares students for successful careers in technology.</p>
            <p>Since our founding, we&rsquo;ve helped thousands of students, both in person and online, transform their careers and achieve their dreams in the tech industry. Our comprehensive curriculum, expert instructors, and supportive community create the perfect environment for learning and growth.</p>
          </Clamp>
          <Link className="pg-btn pg-btn--blue" to="/courses">Explore our courses <ArrowRight size={16} /></Link>
        </div>
      </section>

      {stats.length > 0 && (
        <section className="ab-sec">
          <h2>Our impact</h2>
          <div className="rv-stats">
            {stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
          </div>
        </section>
      )}

      <section className="ab-sec">
        <h2>Our values</h2>
        <div className="ab-vals">
          {VALUES.map(([t, d, img]) => (
            <div key={t} className="ab-val">
              <img src={img} alt="" loading="lazy" />
              <span><b>{t}</b><p>{d}</p></span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ready to join our community?"
        text="Take the first step towards transforming your career with Computer College Plus."
        primary={{ label: 'Start learning today', to: '/courses' }}
        secondary={{ label: 'Get in touch', to: '/contact' }}
      />
    </PageShell>
  )
}
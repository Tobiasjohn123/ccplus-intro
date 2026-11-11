import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { COURSES, naira } from '../data/courses'

export default function Courses() {
  return (
    <PageShell kicker="Courses" title={<>Pick your <mark>course</mark></>} sub={`${COURSES.length} courses. Live online classes, recordings, a certificate and internship opportunities.`}>
      <div className="pg-grid">
        {COURSES.map((c, i) => (
          <div key={c.name} className="pg-card pg-course">
            <span className="pg-course__n">{String(i + 1).padStart(2, '0')}</span>
            <b>{c.name}</b>
            <div className="pg-course__price">
              <small>From</small>
              <strong>{naira(c.price)}</strong>
            </div>
            <span className="pg-course__tiers">Price options: {c.tiers}</span>
            <Link className="pg-btn pg-btn--dark" to={`/register?course=${encodeURIComponent(c.name)}`}>Register <ArrowRight size={16} /></Link>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
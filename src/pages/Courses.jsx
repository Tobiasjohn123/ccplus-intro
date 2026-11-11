import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { COURSES, naira } from '../data/courses'

// Tile slots in order: l = big square, t = tall, w = wide, s = small, x = full-width banner.
// Built for 15 courses so the grid has no gaps.
const SIZES = ['l', 's', 't', 's', 't', 'w', 's', 's', 'w', 'w', 't', 's', 'w', 's', 'x']
const LOOKS = ['blue', 'white', 'dark', 'soft', 'white', 'soft', 'white', 'dark', 'soft', 'blue', 'white', 'soft', 'dark', 'white', 'blue']

// Courses that take the big tiles (slot number -> course name). Change freely.
const SPOTLIGHT = {
  0: 'Web Development (Frontend)',
  2: 'Data Analytics (Power BI & SQL)',
  4: 'Cybersecurity Beginners',
}

function arrange() {
  const rest = [...COURSES]
  const fixed = {}
  Object.entries(SPOTLIGHT).forEach(([slot, name]) => {
    const i = rest.findIndex((c) => c.name === name)
    if (i > -1) fixed[slot] = rest.splice(i, 1)[0]
  })
  return COURSES.map((_, i) => fixed[i] || rest.shift())
}

export default function Courses() {
  const list = arrange()
  return (
    <PageShell
      kicker="Courses"
      title={<>Pick your <mark>course</mark></>}
      sub={`${COURSES.length} courses. Live online classes, recordings, a certificate and internship opportunities.`}
    >
      <div className="bento">
        {list.map((c, i) => {
          const size = SIZES[i % SIZES.length]
          const look = LOOKS[i % LOOKS.length]
          return (
            <Link
              key={c.name}
              className={`bt bt--${size} bt--${look}`}
              to={`/register?course=${encodeURIComponent(c.name)}`}
              aria-label={`Register for ${c.name}`}
            >
              <span className="bt__n">{String(i + 1).padStart(2, '0')}</span>
              <span className="bt__main">
                <b>{c.name}</b>
                <span className="bt__tiers">Options: {c.tiers}</span>
              </span>
              <span className="bt__foot">
                <span className="bt__price"><small>From</small><strong>{naira(c.price)}</strong></span>
                <i className="bt__go"><ArrowRight size={18} /></i>
              </span>
            </Link>
          )
        })}
      </div>
    </PageShell>
  )
}
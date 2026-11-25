import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import { COURSES, naira, tagText } from '../data/courses'

// Tile shapes: l = big, t = tall, w = wide, s = small, x = full width.
// Each block fills a rectangle exactly, so the grid never has holes.
const DESKTOP = [['l', 's', 's', 'w'], ['t', 's', 's', 't', 'w'], ['s', 's', 'l', 'w']]   // 4 columns
const MOBILE = [['l'], ['t', 's', 's'], ['w'], ['s', 't', 's']]                          // 2 columns
const LOOKS = ['blue', 'white', 'dark', 'soft', 'white', 'soft', 'dark', 'white']

// Courses that get the big tiles first (change freely).
const FEATURED = ['web-frontend', 'data-powerbi-sql', 'cyber-fundamentals', 'ui-ux', 'data-science', 'marketing-beginner', 'graphics-photoshop']

function sizesFor(n, blocks, wide) {
  const out = []
  for (let b = 0; ; b++) {
    const blk = blocks[b % blocks.length]
    if (n - out.length < blk.length) break
    out.push(...blk)
  }
  let rest = n - out.length
  const odd = rest % 2 === 1
  for (let i = 0; i < rest; i++) out.push(!wide || (odd && i === rest - 1) ? 'x' : 'w')
  return out
}

function useNarrow(q = '(max-width: 760px)') {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => {
    const mq = window.matchMedia(q)
    const f = () => setM(mq.matches)
    mq.addEventListener('change', f)
    return () => mq.removeEventListener('change', f)
  }, [q])
  return m
}

function arrange(narrow) {
  const sizes = narrow ? sizesFor(COURSES.length, MOBILE, false) : sizesFor(COURSES.length, DESKTOP, true)
  const pool = [...COURSES]
  const feat = FEATURED.map((s) => pool.find((c) => c.slug === s)).filter(Boolean)
  feat.forEach((c) => pool.splice(pool.indexOf(c), 1))
  const out = new Array(sizes.length)
  let f = 0
  sizes.forEach((sz, i) => { if ((sz === 'l' || sz === 't') && f < feat.length) out[i] = feat[f++] })
  sizes.forEach((_, i) => { if (!out[i]) out[i] = pool.shift() })
  return out.map((c, i) => ({ c, size: sizes[i] }))
}

export default function Courses() {
  const narrow = useNarrow()
  const list = arrange(narrow)
  return (
    <PageShell
      kicker="Courses"
      title={<>Pick your <mark>course</mark></>}
      sub={`${COURSES.length} courses. Tap a course to see the details, prices and class times.`}
    >
      <div className="bento">
        {list.map(({ c, size }, i) => (
          <Link key={c.slug} className={`bt bt--${size} bt--${LOOKS[i % LOOKS.length]}`} to={`/courses/${c.slug}`} aria-label={`${c.name}, read more`}>
            <span className="bt__n">{String(i + 1).padStart(2, '0')}</span>
            <span className="bt__main">
              <b>{c.name}</b>
              <span className="bt__tiers">{tagText(c)}</span>
            </span>
            <span className="bt__foot">
              <span className="bt__price"><small>From</small><strong>{naira(c.price)}</strong></span>
              <i className="bt__go"><ArrowRight size={18} /></i>
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}
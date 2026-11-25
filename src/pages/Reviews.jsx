import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import CtaBanner from '../components/Sections/CtaBanner'
import { TESTIMONIALS, GRADUATES } from '../data/reviews'
import { STATS } from '../data/stats'

const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Slides on its own, pauses on touch / hover / click, height follows the current slide.
function Slider({ items, label, every = 6500 }) {
  const [i, setI] = useState(0)
  const [h, setH] = useState(null)
  const [hold, setHold] = useState(false)
  const refs = useRef([])
  const startX = useRef(0)
  const timer = useRef(null)
  const n = items.length

  const go = (k) => setI(((k % n) + n) % n)
  const pause = (ms) => {
    setHold(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setHold(false), ms)
  }

  useLayoutEffect(() => {
    const el = refs.current[i]
    if (!el) return
    setH(el.offsetHeight)
    if (!('ResizeObserver' in window)) return
    const ro = new ResizeObserver(() => setH(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [i, n])

  useEffect(() => {
    if (hold || n < 2 || REDUCED) return
    const t = setInterval(() => setI((k) => (k + 1) % n), every)
    return () => clearInterval(t)
  }, [hold, n, every])

  useEffect(() => () => clearTimeout(timer.current), [])

  return (
    <div
      className="sx"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onClickCapture={() => pause(14000)}
      onTouchStart={(e) => { startX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 45) { go(i + (dx < 0 ? 1 : -1)); pause(10000) }
      }}
    >
      <div className="sx__view" style={h ? { height: h } : undefined}>
        <div className="sx__rail" style={{ transform: `translateX(-${i * 100}%)` }}>
          {items.map((render, k) => (
            <div className="sx__slide" key={k} ref={(el) => { refs.current[k] = el }} aria-hidden={k !== i}>
              {render(k === i)}
            </div>
          ))}
        </div>
      </div>
      <div className="sx__nav">
        <button type="button" className="sx__btn" onClick={() => go(i - 1)} aria-label="Previous"><ArrowLeft size={18} /></button>
        <div className="sx__dots">
          {items.map((_, k) => <button key={k} type="button" className={k === i ? 'on' : ''} onClick={() => go(k)} aria-label={`Go to slide ${k + 1}`} />)}
        </div>
        <button type="button" className="sx__btn" onClick={() => go(i + 1)} aria-label="Next"><ArrowRight size={18} /></button>
      </div>
    </div>
  )
}

function Avatar({ src, name }) {
  const [bad, setBad] = useState(false)
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return bad
    ? <span className="st__av">{initials}</span>
    : <img className="st__av" src={src} alt={name} loading="lazy" onError={() => setBad(true)} />
}

function Story({ t, active }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`st${open ? ' open' : ''}`}>
      <Avatar src={t.img} name={t.name} />
      <div>
        <b className="st__name">{t.name}</b>
        <span className="st__role">{t.role}</span>
      </div>
      <blockquote className="st__q">&ldquo;{t.quote}&rdquo;</blockquote>
      <div className="st__more">
        <div>
          <div className="st__stats">
            {t.stats.map(([v, l]) => (
              <div className="st__stat" key={l}><strong>{v}</strong><small>{l}</small></div>
            ))}
            <div className="st__stat"><span className="st__chip">{t.course}</span><small>Course Completed</small></div>
          </div>
        </div>
      </div>
      <button type="button" className="st__btn" tabIndex={active ? 0 : -1} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? 'Show less' : 'Read more'}
      </button>
    </div>
  )
}

export default function Reviews() {
  const stats = STATS.filter((s) => s.value && s.label)
  return (
    <PageShell kicker="Reviews" title={<>Student <mark>success stories</mark></>} sub="Hear from graduates who built real skills at Computer College Plus.">
      {stats.length > 0 && (
        <div className="rv-stats">
          {stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
        </div>
      )}

      <Slider label="Student success stories" every={7500} items={TESTIMONIALS.map((t) => (active) => <Story key={t.name} t={t} active={active} />)} />

      <div className="rv-head">
        <span className="pg__kicker"><i /> Graduates</span>
        <h2 className="rv-h">Meet our <mark>graduates</mark></h2>
        <p className="rv-sub">Celebration boards from recent cohorts.</p>
      </div>
      <Slider
        label="Graduate celebration boards"
        every={5500}
        items={GRADUATES.map((src, k) => () => (
          <div className="gr-wrap" key={src}>
            <div className="gr">
              <img src={src} alt={`Graduates celebration board ${k + 1}`} loading="lazy" onError={(e) => { e.currentTarget.closest('.gr').style.display = 'none' }} />
            </div>
          </div>
        ))}
      />

      <div className="rv-cta"><CtaBanner title="Ready to write your success story?" text="Pick a course and join the next cohort." /></div>
    </PageShell>
  )
}
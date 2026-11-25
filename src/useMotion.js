import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEL = '.sec-head, .sec-step, .sec-q, .sec-cta, .pg__head > *, .cd__head > *, .bt, .cd-sec, .cd-card, .rg-step, .rg-sum, .rg-acc, .pg-contact, .sx, .ab-val, .cx, .sec-perk, .ab-mission, .ab-card, .ab-sec, .rv-stats'

// Runs before the browser paints: elements already on screen "intro" in one by one,
// elements further down ease in when they scroll into view.
export default function useMotion() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            const el = e.target
            io.unobserve(el)
            el.classList.add('is-in')
            setTimeout(() => el.classList.remove('reveal', 'is-in'), 1500)
          })
        }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' })
      : null

    const vh = window.innerHeight
    let n = 0
    document.querySelectorAll(SEL).forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) {
        el.style.setProperty('--rd', 80 + Math.min(n++, 9) * 80 + 'ms')
        el.classList.add('intro')
        setTimeout(() => el.classList.remove('intro'), 2200)
      } else if (io) {
        const sibs = Array.from(el.parentElement.children).filter((c) => c.matches(SEL))
        el.style.setProperty('--rd', Math.min(sibs.indexOf(el), 6) * 70 + 'ms')
        el.classList.add('reveal')
        io.observe(el)
      }
    })
    return () => { if (io) io.disconnect() }
  }, [pathname])
}
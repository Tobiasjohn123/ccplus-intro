import { courseBySlug } from '../src/data/courses.js'

export const SECRET = process.env.PAYSTACK_SECRET_KEY

// The price always comes from the course list on the server, never from the browser.
export function priceFor(slug, ageGroup) {
  const course = courseBySlug(slug)
  return course && course.prices[ageGroup] ? { course, naira: course.prices[ageGroup] } : null
}

export async function paystack(path, init = {}) {
  const r = await fetch('https://api.paystack.co' + path, {
    ...init,
    headers: { Authorization: `Bearer ${SECRET}`, 'Content-Type': 'application/json' },
  })
  const j = await r.json().catch(() => ({}))
  return { ok: r.ok && j.status === true, data: j.data, message: j.message }
}
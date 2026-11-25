import { courseBySlug } from '../src/data/courses.js'

export const SECRET = process.env.PAYSTACK_SECRET_KEY

// Test prices only work when PAYSTACK_ALLOW_TEST_PRICES=1 is set in the environment.
const TEST_PRICES = {
  'test-50':  { slug: 'test-50',  name: 'Payment test (N50)',  naira: 50 },
  'test-100': { slug: 'test-100', name: 'Payment test (N100)', naira: 100 },
}

// The price always comes from the server, never from the browser.
export function priceFor(slug, ageGroup) {
  if (process.env.PAYSTACK_ALLOW_TEST_PRICES === '1' && TEST_PRICES[slug]) {
    const t = TEST_PRICES[slug]
    return { course: { slug: t.slug, name: t.name }, naira: t.naira }
  }
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
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageShell from '../components/Pages/PageShell'
import PayOnline from '../components/PayOnline'
import { CONTACT } from '../data/config'
import { COURSES, AGE_GROUPS, naira, courseBySlug } from '../data/courses'
import { SCHEDULE, SCHEDULE_GROUPS, PAYMENT, SHEET_URL } from '../data/site'

const TEST_COURSE = { slug: 'payment-test', name: 'Payment Test (₦100)', weeks: '1 Week', prices: { adult: 100, teen: 100, child: 100 }, intro: 'Temporary', learn: [], who: [], careers: [], promo: false };
const EMPTY = { fullName: '', email: '', phone: '', address: '', guardianName: '', guardianPhone: '', dob: '', notes: '', website: '' }
const PHONE = /^\+?[0-9][0-9\s-]{8,16}$/
const MAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const newId = () => (window.crypto && window.crypto.randomUUID)
  ? window.crypto.randomUUID()
  : 'r' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10)

export default function Register() {
  const [params] = useSearchParams()
  const startAge = AGE_GROUPS.some((g) => g.key === params.get('age')) ? params.get('age') : 'adult'
  const [age, setAge] = useState(startAge)
  const [slug, setSlug] = useState(() => {
    const c = courseBySlug(params.get('course'))
    return c && c.prices[startAge] ? c.slug : ''
  })
  const [slot, setSlot] = useState('')
  const [f, setF] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)
  const [err, setErr] = useState('')
  const [done, setDone] = useState(null)
  const [copied, setCopied] = useState('')

  const clear = (k) => setErrors((p) => (p[k] ? { ...p, [k]: undefined } : p))
  const set = (k) => (e) => { setF((p) => ({ ...p, [k]: e.target.value })); clear(k) }
  const isTest = params.get("test") === "true"; const activeCourses = isTest ? [TEST_COURSE, ...COURSES] : COURSES; const course = activeCourses.find(c => c.slug === slug)
  const options = activeCourses.filter((c) => c.prices[age])
  const fee = course ? (course.prices[age] || course.prices.adult || 100) : null
  const minor = age !== 'adult'
  const slotObj = SCHEDULE.slots.find((s) => s.id === slot)
  const ageLabel = AGE_GROUPS.find((g) => g.key === age).label
  const hasErrors = Object.values(errors).some(Boolean)

  const chooseAge = (k) => {
    setAge(k)
    if (course && !course.prices[k]) setSlug('')
  }

  const validate = () => {
    const e = {}
    if (!course) e.course = 'Please choose a course.'
    if (!slotObj) e.slot = 'Please choose a class time.'
    if (!f.fullName.trim()) e.fullName = 'Please enter the full name.'
    if (!f.email.trim()) e.email = 'Please enter an email address.'
    else if (!MAIL.test(f.email.trim())) e.email = 'This email address does not look right.'
    if (!f.phone.trim()) e.phone = 'Please enter a phone number.'
    else if (!PHONE.test(f.phone.trim())) e.phone = 'This phone number does not look right.'
    if (!f.address.trim()) e.address = 'Please enter the residential address.'
    if (minor && !f.dob) e.dob = 'Please enter the date of birth.'
    return e
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) {
      setTimeout(() => {
        const el = document.querySelector('.rg-f.err')
        if (!el) return
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        const inp = el.querySelector('input, select, textarea')
        if (inp) inp.focus({ preventScroll: true })
      }, 40)
      return
    }
    setBusy(true)
    setErr('')
    const data = {
      regId: newId(),
      ageGroup: age, course: course.name, fee, classTime: `${slotObj.days}, ${slotObj.label} (${slotObj.time})`,
      fullName: f.fullName.trim(), email: f.email.trim(), phone: f.phone.trim(), address: f.address.trim(),
      guardianName: f.guardianName.trim(), guardianPhone: f.guardianPhone.trim(), dob: f.dob, notes: f.notes.trim(), website: f.website,
    }
    try {
      if (SHEET_URL) {
        await fetch(SHEET_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(data) })
      } else {
        console.warn('SHEET_URL is empty: this registration was NOT saved to the Google Sheet.')
      }
      setDone({ ...data, ageLabel })
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } catch (x) {
      setErr('We could not send your registration. Check your connection and try again.')
    } finally {
      setBusy(false)
    }
  }

  // Closing the payment popup marks the row Cancelled (the Sheet script never overwrites Paid).
  const handleCancel = async () => {
    if (!SHEET_URL || !done) return
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ action: 'cancel', regId: done.regId }),
      })
    } catch (e) {
      console.error('Could not send cancelled status to the Sheet', e)
    }
  }

  const copy = (n) => {
    if (navigator.clipboard) navigator.clipboard.writeText(n)
    setCopied(n)
    setTimeout(() => setCopied(''), 1800)
  }

  const field = (k, label, p = {}) => (
    <label className={`rg-f${p.full ? ' rg-f--full' : ''}${errors[k] ? ' err' : ''}`}>
      {label}
      <input type={p.type || 'text'} value={f[k]} onChange={set(k)} placeholder={p.placeholder} autoComplete={p.autoComplete} max={p.max} aria-invalid={!!errors[k]} />
      {errors[k] && <em className="rg-msg" role="alert">{errors[k]}</em>}
    </label>
  )

  if (done) {
    const msg = `Hello, this is my proof of payment.\nName: ${done.fullName}\nCourse: ${done.course} (${done.ageLabel})\nAmount: ${naira(done.fee)}\nPhone: ${done.phone}`
    const wa = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`

    return (
      <PageShell kicker="Registration received" title={<>Thank you, <mark>{done.fullName.split(' ')[0]}</mark></>} sub="Your details have been received. Complete your payment below so we can confirm your place.">
        <div className="rg-done">
          <section className="rg-step">
            <h2 className="rg-step__t"><span>1</span>Pay by bank transfer</h2>
            <div className="rg-amount"><small>Amount to pay</small><strong>{naira(done.fee)}</strong><em>{done.course} &middot; {done.classTime}</em></div>
            <div className="rg-accs">
              {PAYMENT.accounts.map((a) => (
                <div className="rg-acc" key={a.number}>
                  <small>{a.bank}</small>
                  <b>{a.number}</b>
                  <span>{a.name}</span>
                  <button type="button" className="rg-copy" onClick={() => copy(a.number)}>{copied === a.number ? 'Copied' : 'Copy number'}</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <PayOnline
                onCancel={handleCancel}
                regId={done.regId}
                slug={course.slug}
                ageGroup={age}
                email={done.email}
                name={done.fullName}
                phone={done.phone}
              />
            </div>
          </section>

          <section className="rg-step">
            <h2 className="rg-step__t"><span>2</span>Send your proof of payment</h2>
            <p className="rg-p">After paying, send your proof of payment on WhatsApp and we will confirm your registration.</p>
            <a className="pg-btn pg-btn--blue" href={wa} target="_blank" rel="noreferrer">Send on WhatsApp <ArrowRight size={16} /></a>
          </section>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell kicker="Register" title={<>Join the <mark>next cohort</mark></>} sub="Three quick steps. It takes about two minutes.">
      <form className="rg" onSubmit={submit} noValidate>
        <div className="rg-form">
          <section className="rg-step">
            <h2 className="rg-step__t"><span>1</span>Who is registering?</h2>
            <div className="cd-tabs" role="group" aria-label="Age group">
              {AGE_GROUPS.map((g) => (
                <button key={g.key} type="button" aria-pressed={age === g.key} onClick={() => chooseAge(g.key)}>{g.label}</button>
              ))}
            </div>
          </section>

          <section className="rg-step">
            <h2 className="rg-step__t"><span>2</span>Choose your course and class time</h2>
            <label className={`rg-f${errors.course ? ' err' : ''}`}>Course
              <select value={slug} onChange={(e) => { setSlug(e.target.value); clear('course') }} aria-invalid={!!errors.course}>
                <option value="" disabled>Choose a course</option>
                {options.map((c) => <option key={c.slug} value={c.slug}>{c.name} &ndash; {naira(c.prices[age])}</option>)}
              </select>
              {errors.course ? <em className="rg-msg" role="alert">{errors.course}</em> : <small>Only courses available for {ageLabel.toLowerCase()} are listed.</small>}
            </label>
            <div className={`rg-f${errors.slot ? ' err' : ''}`}>Class time
              {SCHEDULE_GROUPS.map((g) => (
                <div key={g.days} className="rg-slotgroup">
                  <small>{g.days}</small>
                  <div className="rg-slots">
                    {g.slots.map((s) => (
                      <label key={s.id} className={`rg-slot${slot === s.id ? ' on' : ''}`}>
                        <input type="radio" name="slot" value={s.id} checked={slot === s.id} onChange={() => { setSlot(s.id); clear('slot') }} />
                        <b>{s.label}</b>
                        <span>{s.time}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              {errors.slot ? <em className="rg-msg" role="alert">{errors.slot}</em> : <small>{SCHEDULE.mode}.</small>}
            </div>
          </section>

          <section className="rg-step">
            <h2 className="rg-step__t"><span>3</span>Your details</h2>
            <div className="rg-grid">
              {field('fullName', 'Full name', { autoComplete: 'name', placeholder: 'Student full name' })}
              {field('email', 'Email address', { type: 'email', autoComplete: 'email', placeholder: 'name@email.com' })}
              {field('phone', 'Phone number (WhatsApp)', { type: 'tel', autoComplete: 'tel', placeholder: 'e.g. 0801 234 5678' })}
              {minor && field('dob', 'Date of birth', { type: 'date', max: new Date().toISOString().slice(0, 10) })}
              {field('address', 'Residential address', { full: true, autoComplete: 'street-address', placeholder: 'House number, street, area' })}
              <label className="rg-f rg-f--full">Anything else we should know? (optional)<textarea value={f.notes} onChange={set('notes')} /></label>
              <input className="rg-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="website" value={f.website} onChange={set('website')} />
            </div>
          </section>
        </div>

        <aside className="rg-sum">
          <h3>Your registration</h3>
          <dl>
            <div><dt>Age group</dt><dd>{ageLabel}</dd></div>
            <div><dt>Course</dt><dd>{course ? course.name : 'Not chosen yet'}</dd></div>
            <div><dt>Duration</dt><dd>{course ? course.weeks : '-'}</dd></div>
            <div><dt>Class time</dt><dd>{slotObj ? `${slotObj.days}: ${slotObj.label}, ${slotObj.time}` : 'Not chosen yet'}</dd></div>
          </dl>
          <div className="rg-sum__fee"><small>Training fee</small><strong>{fee ? naira(fee) : '-'}</strong></div>
          {hasErrors && <p className="rg-err">Please fill in the parts marked in red.</p>}
          {err && <p className="rg-err">{err}</p>}
          <button type="submit" className="pg-btn pg-btn--blue" disabled={busy}>{busy ? 'Sending...' : 'Submit registration'}</button>
          <p className="rg-sum__note">After you submit, you will see the bank details to complete your payment.</p>
        </aside>
      </form>
    </PageShell>
  )
}
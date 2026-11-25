import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Award, Video, Briefcase, Laptop } from 'lucide-react'
import Navbar, { BrandLogo } from '../Navbar/Navbar'
import VideoModal from './VideoModal'
import SmartImg from './SmartImg'
import { CONFIG, CONTACT } from '../../data/config'
import { COURSES, naira } from '../../data/courses'
import { HERO, TILES } from '../../data/heroImages'
import './Hero.css'

const WA = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent('Hello, I would like to register for the next cohort.')}`
const COURSES_URL = '/courses'

const PERKS = [
  [Laptop, 'Hands-on', 'Live online classes'],
  [Video, 'Recordings', 'Catch up anytime'],
  [Briefcase, 'Internship', 'In every course'],
]

export default function Hero() {
  const [open, setOpen] = useState(false)
  const min = Math.min(...COURSES.map((c) => c.price))
  const [a, b, c, d] = TILES

  const tile = (x, i) => (
    <Link key={x.k} className={`tile ${x.k} rise`} style={{ '--i': 5 + i }} to={COURSES_URL}>
      <SmartImg src={x.img} />
      <span className="tile__cap">
        <span className="tile__txt"><b>{x.tag}</b><small>{x.sub}</small></span>
        <i className="tile__go"><ArrowRight size={15} /></i>
      </span>
    </Link>
  )

  return (
    <section className={`hero${CONFIG.videoUrl ? ' has-video' : ''}`} id="top">
      <i className="orb o1" /><i className="orb o3" />
      <div className="hero__in">
        <Navbar />

        <div className="body">
          <div className="left">
            <span className="eyebrow rise" style={{ '--i': 1 }}><i className="dot" /> {CONFIG.cohort} now open</span>

            <div className="copy">
              <h1 className="rise" style={{ '--i': 2 }}>Learn the skill.<br /><mark>Start the career.</mark></h1>
              <p className="rise" style={{ '--i': 3 }}>Hands-on online classes, recorded sessions, a professional certificate and internship opportunities.</p>
              <div className="cta rise" style={{ '--i': 4 }}>
                <a className="btn btn--dark" href={WA} target="_blank" rel="noreferrer">Register on WhatsApp <ArrowRight size={16} /></a>
                <Link className="btn btn--line" to={COURSES_URL}>See courses</Link>
              </div>
            </div>

            <div className="perks rise" style={{ '--i': 5 }}>
              {PERKS.map(([Icon, t, s]) => (
                <div key={t} className="perk glass">
                  <i><Icon size={20} /></i>
                  <span><b>{t}</b><small>{s}</small></span>
                </div>
              ))}
            </div>
          </div>

          <div className="right rise" style={{ '--i': 2 }}>
            <div className="vbox">
              {CONFIG.videoUrl ? (
                <iframe src={CONFIG.videoUrl} title="About Computer College Plus" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
              ) : (
                <>
                  <button className="vbox__poster" onClick={() => setOpen(true)} aria-label="Play intro video">
                    <SmartImg src={HERO} />
                    <span className="vbox__btn"><Play size={38} fill="currentColor" /></span>
                  </button>
                  <span className="mlogo glass"><BrandLogo /></span>
                  <span className="fc fc--tl glass"><i className="dot" /> Live online classes</span>
                  <span className="fc fc--tr glass"><Award size={16} /> Certificate included</span>
                  <div className="vbar">
                    <span className="vbar__txt">
                      <i className="vbar__ico"><Play size={14} fill="currentColor" /></i>
                      <span><b>Watch the intro</b><small>See how our classes work</small></span>
                    </span>
                    <span className="vbar__items">
                      <span><Video size={16} /> Recordings</span>
                      <span><Briefcase size={16} /> Internship</span>
                    </span>
                  </div>

                  <div className="mintro">
                    <div className="mh">Learn the skill.<br /><mark>Start the career.</mark></div>
                    <p>Hands-on online classes, recorded sessions, a professional certificate and internship opportunities.</p>
                    <div className="mcta">
                      <a className="btn btn--white" href={WA} target="_blank" rel="noreferrer">Register now <ArrowRight size={16} /></a>
                      <button type="button" className="btn btn--play" onClick={() => setOpen(true)}>
                        <span className="pi"><Play size={15} fill="currentColor" /></span> Watch intro video
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {tile(a, 0)}
          {tile(b, 1)}
          <Link className="stat rise" style={{ '--i': 7 }} to={COURSES_URL}>
            <span className="stat__top">
              <strong>{COURSES.length}</strong>
              <small>Courses available</small>
            </span>
            <span className="stat__bot">
              <span className="stat__ico" aria-hidden="true">
                <i><Award size={16} /></i><i><Video size={16} /></i><i><Briefcase size={16} /></i>
              </span>
              <span className="stat__from">From {naira(min)}</span>
            </span>
          </Link>
          {tile(c, 3)}
          {tile(d, 4)}
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} url={CONFIG.videoUrl} />
    </section>
  )
}
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Video, Briefcase } from 'lucide-react'
import SmartImg from '../Hero/SmartImg'
import { COURSES, naira } from '../../data/courses'
import { TILES } from '../../data/heroImages'
import './CardRow.css'

export default function CardRow() {
  const min = Math.min(...COURSES.map((c) => c.price))
  const [a, b, c, d] = TILES

  const tile = (x) => (
    <Link key={x.k} to="/courses" className="cr-tile">
      <SmartImg src={x.img} />
      <span className="cr-cap">
        <span className="cr-txt"><b>{x.tag}</b><small>{x.sub}</small></span>
        <i className="cr-go"><ArrowRight size={16} /></i>
      </span>
    </Link>
  )

  return (
    <section className="cr-wrap">
      <div className="cr-in">
        <div className="cr-head">
          <div>
            <span className="cr-kicker"><i /> What you can learn</span>
            <h2 className="cr-h">Choose your <mark>skill path</mark></h2>
            <p className="cr-sub">From computer basics to coding, data, design and cybersecurity. Pick a path and start learning online.</p>
          </div>
          <Link className="cr-all" to="/courses">See all {COURSES.length} courses <ArrowRight size={16} /></Link>
        </div>

        <div className="cr">
          {tile(a)}
          {tile(b)}
          <Link to="/courses" className="cr-stat">
            <span className="cr-stat__top">
              <strong>{COURSES.length}</strong>
              <small>Courses available</small>
            </span>
            <span className="cr-stat__bot">
              <span className="cr-stat__ico" aria-hidden="true">
                <i><Award size={16} /></i><i><Video size={16} /></i><i><Briefcase size={16} /></i>
              </span>
              <span className="cr-stat__from">From {naira(min)}</span>
            </span>
          </Link>
          {tile(c)}
          {tile(d)}
        </div>
      </div>
    </section>
  )
}
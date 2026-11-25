import { Link } from 'react-router-dom'
import Navbar, { BrandLogo } from '../Navbar/Navbar'
import './Pages.css'

export default function PageShell({ kicker, title, sub, children }) {
  return (
    <div className="pg">
      <div className="pg__nav">
        <Link to="/" className="pg__logo" aria-label="Home"><BrandLogo /></Link>
        <Navbar />
      </div>
      <header className="pg__head">
        <span className="pg__kicker"><i /> {kicker}</span>
        <h1 className="pg__h">{title}</h1>
        {sub && <p className="pg__sub">{sub}</p>}
      </header>
      <div className="pg__body">{children}</div>
    </div>
  )
}
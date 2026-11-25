import Navbar from '../Navbar/Navbar'
import './Pages.css'

export default function PageShell({ kicker, title, sub, children }) {
  return (
    <div className="pg">
      <div className="pg__nav"><Navbar /></div>
      <header className="pg__head">
        <span className="pg__kicker"><i /> {kicker}</span>
        <h1 className="pg__h">{title}</h1>
        {sub && <p className="pg__sub">{sub}</p>}
      </header>
      <div className="pg__body">{children}</div>
    </div>
  )
}
import { NavLink, Link } from 'react-router-dom'
import { Home, BookOpen, Phone, MessageCircle } from 'lucide-react'
import './Navbar.css'

export function BrandLogo() {
  return <span className="brand"><b className="brand__t">Computer College Plus</b></span>
}

const cls = ({ isActive }) => (isActive ? 'on' : undefined)

export default function Navbar() {
  return (
    <>
      <nav className="nav glass" aria-label="Main">
        <Link to="/" aria-label="Computer College Plus home"><BrandLogo /></Link>
        <div className="nav__links">
          <NavLink to="/" end className={cls}>Home</NavLink>
          <NavLink to="/courses" className={cls}>Courses</NavLink>
          <NavLink to="/chat" className={cls}>Call us</NavLink>
        </div>
        <Link to="/register" className="btn btn--dark nav__reg">Register</Link>
      </nav>

      <nav className="bnav glass" aria-label="Mobile">
        <NavLink to="/" end className={cls}><Home size={22} />Home</NavLink>
        <NavLink to="/courses" className={cls}><BookOpen size={22} />Courses</NavLink>
        <NavLink to="/chat" className={cls}><Phone size={22} />Call</NavLink>
        <NavLink to="/register" className="reg"><MessageCircle size={22} />Register</NavLink>
      </nav>
    </>
  )
}
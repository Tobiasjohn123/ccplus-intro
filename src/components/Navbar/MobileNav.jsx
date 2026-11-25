import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Info, Star, Phone, MessageCircle } from 'lucide-react'
import './Navbar.css'

const cls = ({ isActive }) => (isActive ? 'on' : undefined)

// Rendered once at the top level of the app, so it always stays fixed to the screen.
export default function MobileNav() {
  return (
    <nav className="bnav glass" aria-label="Mobile">
      <NavLink to="/" end className={cls}><Home size={20} /><span>Home</span></NavLink>
      <NavLink to="/courses" className={cls}><BookOpen size={20} /><span>Courses</span></NavLink>
      <NavLink to="/about" className={cls}><Info size={20} /><span>About</span></NavLink>
      <NavLink to="/reviews" className={cls}><Star size={20} /><span>Reviews</span></NavLink>
      <NavLink to="/contact" className={cls}><Phone size={20} /><span>Contact</span></NavLink>
      <NavLink to="/register" className="reg"><MessageCircle size={20} /><span>Register</span></NavLink>
    </nav>
  )
}
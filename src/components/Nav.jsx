import { useState } from 'react'
import { profile } from '../data.js'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="logo" onClick={close}>
          {profile.firstName}<span>.</span>
        </a>
        <button
          className="menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>
        <nav className={`nav-links${open ? ' open' : ''}`}>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={close}>{s.label}</a>
          ))}
          <a href="#contact" className="nav-cta" onClick={close}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

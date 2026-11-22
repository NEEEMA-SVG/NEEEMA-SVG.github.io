import { profile, links } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <h2>Let's work together</h2>
        <p>
          I'm open to internships, graduate roles and remote opportunities in software
          development and IT. I'd love to hear from you.
        </p>
        <div className="hero-buttons center">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">{profile.email}</a>
          {links.map((l) => (
            <a key={l.label} href={l.url} className="btn btn-ghost-light" target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

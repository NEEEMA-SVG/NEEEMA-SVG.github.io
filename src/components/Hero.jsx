import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>
            Hi, I'm {profile.firstName}.<br />
            <span>{profile.headline}</span>
          </h1>
          <p className="lead">{profile.lead}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">See my work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero-photo">
          {profile.photo ? (
            <img src={profile.photo} alt={profile.name} className="avatar-img" />
          ) : (
            <div className="avatar" aria-hidden="true">{profile.initials}</div>
          )}
        </div>
      </div>
    </section>
  )
}

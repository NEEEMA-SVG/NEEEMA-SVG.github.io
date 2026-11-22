import { about, facts } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About me</h2>
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <ul className="facts">
          {facts.map((f) => (
            <li key={f.label}><strong>{f.label}</strong> {f.value}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

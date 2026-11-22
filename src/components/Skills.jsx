import { skills } from '../data.js'
import Tags from './Tags.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.group} className={`skill-card${s.highlight ? ' learning' : ''}`}>
              <h3>{s.group}</h3>
              <Tags items={s.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { experience, education } from '../data.js'

function TimelineItem({ item }) {
  return (
    <div className="t-item">
      <p className="t-date">{item.date}</p>
      <h3>{item.title}</h3>
      <p className="t-org">{item.org}</p>
      {item.points && (
        <ul>
          {item.points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
      )}
      {item.note && <p>{item.note}</p>}
      {item.quote && <blockquote>"{item.quote}"</blockquote>}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container two-col">
        <div>
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map((e) => <TimelineItem key={e.title} item={e} />)}
          </div>
        </div>
        <div>
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            {education.map((e) => <TimelineItem key={e.title} item={e} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

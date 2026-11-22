import { projects } from '../data.js'
import Tags from './Tags.jsx'

function ProjectCard({ project }) {
  const { title, status, inProgress, featured, subtitle, description, points, tags } = project
  return (
    <article className={`project${featured ? ' featured' : ''}`}>
      <div className="project-head">
        <h3>{title}</h3>
        <span className={`badge${inProgress ? ' badge-progress' : ''}`}>{status}</span>
      </div>
      {subtitle && <p className="project-for">{subtitle}</p>}
      <p>{description}</p>
      {points && (
        <ul className="checks">
          {points.map((pt) => <li key={pt}>{pt}</li>)}
        </ul>
      )}
      <Tags items={tags} />
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}

import { beyond } from '../data.js'

export default function Beyond() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Beyond the code</h2>
        <div className="beyond-grid">
          {beyond.map((b) => (
            <div key={b.title} className="beyond">
              <h3><span aria-hidden="true">{b.icon}</span> {b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

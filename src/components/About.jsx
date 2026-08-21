import PhotoPlaceholder from './PhotoPlaceholder.jsx'
import { CheckIcon } from './icons.jsx'

const highlights = [
  '4+ years building enterprise web systems across government and private sector',
  'Laravel, Vue.js, React, MySQL, REST APIs',
  'B.S. Information Technology, Cum Laude — Bicol University, Polangui Campus',
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div data-aos="fade-right">
          <PhotoPlaceholder size="md" />
        </div>
        <div data-aos="fade-left" data-aos-delay="150">
          <div className="tag">02 — Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="about-bio">
            I&rsquo;m a full-stack developer specializing in Laravel, Vue.js, and React, with
            experience building workflow-driven, scalable, and data-centric systems. Strong in
            business process automation, REST API integration, and cloud storage using AWS S3 —
            experienced in financial systems, timekeeping systems, and enterprise dashboards.
          </p>
          <ul className="checklist">
            {highlights.map((item) => (
              <li key={item}>
                <CheckIcon width={16} height={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

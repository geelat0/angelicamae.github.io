import { useRef } from 'react'
import skills from '../data/skills.js'
import { CodeIcon, DatabaseIcon, ToolsIcon, BulbIcon, ChartIcon } from './icons.jsx'

const icons = {
  'Web Development': CodeIcon,
  Database: DatabaseIcon,
  Tools: ToolsIcon,
  Concepts: BulbIcon,
  'Data Visualization': ChartIcon,
}

export default function Skills() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({ left: dir * 280, behavior: 'smooth' })
  }

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <div className="section-head" data-aos="fade-up">
          <div>
            <div className="tag">04 — Toolbox</div>
            <h2 className="section-title">Skills</h2>
          </div>
        </div>
      </div>
      <div className="skills-carousel">
        <button className="carousel-arrow" aria-label="Scroll left" onClick={() => scroll(-1)}>
          ‹
        </button>
        <div className="skills-track" ref={trackRef}>
          {skills.map((row, i) => {
            const Icon = icons[row.label] ?? CodeIcon
            return (
              <div className="skill-card" key={row.label} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="skill-icon">
                  <Icon width={20} height={20} />
                </div>
                <h4>{row.label}</h4>
                <p>{row.items}</p>
              </div>
            )
          })}
        </div>
        <button className="carousel-arrow" aria-label="Scroll right" onClick={() => scroll(1)}>
          ›
        </button>
      </div>
    </section>
  )
}

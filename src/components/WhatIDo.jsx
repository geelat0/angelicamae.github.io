import services from '../data/services.js'
import { CodeIcon, ShieldIcon, ChartIcon } from './icons.jsx'

const icons = { code: CodeIcon, shield: ShieldIcon, chart: ChartIcon }

export default function WhatIDo() {
  return (
    <section className="section" id="what-i-do">
      <div className="wrap">
        <div className="section-head" data-aos="fade-up">
          <div>
            <div className="tag">01 — Capabilities</div>
            <h2 className="section-title">What I Do</h2>
          </div>
        </div>
        <div className="service-grid">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <div
                className="service-card"
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="service-icon">
                  <Icon width={22} height={22} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

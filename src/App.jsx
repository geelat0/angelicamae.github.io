import { useEffect } from 'react'
import AOS from 'aos'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import About from './components/About.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import Skills from './components/Skills.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import projects from './data/projects.js'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])

  return (
    <>
      <Nav />
      <div id="top" />
      <Hero />
      <WhatIDo />
      <About />

      <section className="section" id="work">
        <div className="wrap">
          <div className="section-head" data-aos="fade-up">
            <div>
              <div className="tag">03 — Portfolio</div>
              <h2 className="section-title">Portfolio</h2>
            </div>
            <div className="section-note">
              Seven systems, five employers, government and private sector.
            </div>
          </div>

          <div className="projects">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <CTA />
      <Footer />
    </>
  )
}

import PhotoPlaceholder from './PhotoPlaceholder.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div data-aos="fade-right">
          <p className="hi-there">Hi There!</p>
          <h1 className="name">I&rsquo;m Angelica Mae Bonganay</h1>
          <span className="role-badge">Full Stack Developer</span>
          <p className="thesis">
            I build the systems that sit behind payroll, budgets, and approvals — Laravel and Vue on
            the backend, React and typed frontends on top, and enough attention to permissions and
            audit trails that the people relying on these systems can trust them.
          </p>
          <p className="hero-meta">Laravel · Vue · React · MySQL — based in the Philippines, currently at DSWD Region V</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:angelicamae.bonganay@gmail.com">
              Hire Me
            </a>
            <a className="btn btn-ghost" href="#work">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap" data-aos="fade-left" data-aos-delay="150">
          <PhotoPlaceholder size="lg" />
        </div>
      </div>
    </header>
  )
}

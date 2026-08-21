import { MailIcon, GithubIcon, LinkedinIcon, PhoneIcon, PinIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <h3>Angelica Mae Bonganay</h3>
          <span className="role-badge">Full Stack Developer</span>
          <p className="footer-copy">© 2026 Angelica Mae Bonganay. All rights reserved.</p>
        </div>
        <ul className="footer-contacts">
          <li>
            <PinIcon width={18} height={18} />
            <span>Tabaco City, Albay, Philippines</span>
          </li>
          <li>
            <PhoneIcon width={18} height={18} />
            <span>0945 635 8958</span>
          </li>
          <li>
            <MailIcon width={18} height={18} />
            <a href="mailto:angelicamae.bonganay@gmail.com">angelicamae.bonganay@gmail.com</a>
          </li>
          <li>
            <GithubIcon width={18} height={18} />
            <a href="https://github.com/geelat0" target="_blank" rel="noreferrer">
              github.com/geelat0
            </a>
          </li>
          <li>
            <LinkedinIcon width={18} height={18} />
            <a href="https://www.linkedin.com/in/angelica-mae-bonganay/" target="_blank" rel="noreferrer">
              linkedin.com/in/angelica-mae-bonganay
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

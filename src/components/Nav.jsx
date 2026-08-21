const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-brand">
          AB
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

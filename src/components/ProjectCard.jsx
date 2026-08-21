import { useState } from 'react'
import Gallery from './Gallery.jsx'
import Lightbox from './Lightbox.jsx'

export default function ProjectCard({ project }) {
  const images = project.images ?? []
  const [cover, ...rest] = images
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const nav = (dir) => {
    setLightboxIndex((i) => (i + dir + images.length) % images.length)
  }

  return (
    <article className="case" data-aos="fade-up">
      {cover ? (
        <button
          className="case-cover"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View larger: ${cover.alt ?? 'cover screenshot'}`}
        >
          <img src={cover.src} alt={cover.alt ?? ''} />
        </button>
      ) : (
        <div className="case-cover case-cover-placeholder">
          <span>⌘</span>
        </div>
      )}
      <div className="case-body">
        <div className="case-top">
          <span className="case-org">{project.org}</span>
          <span className={`stamp ${project.stampColor}`}>{project.stamp}</span>
        </div>
        <h3 className="case-title">{project.title}</h3>
        <p className="case-desc">{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ul className="case-points">
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <Gallery images={rest} onSelect={(i) => setLightboxIndex(i + 1)} />
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={nav}
        />
      )}
    </article>
  )
}

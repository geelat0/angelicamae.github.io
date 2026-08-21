import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNav])

  const image = images[index]

  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      {images.length > 1 && (
        <button
          className="lightbox-arrow lightbox-arrow-left"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation()
            onNav(-1)
          }}
        >
          ‹
        </button>
      )}
      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt ?? ''} />
        {image.alt && <figcaption>{image.alt}</figcaption>}
      </figure>
      {images.length > 1 && (
        <button
          className="lightbox-arrow lightbox-arrow-right"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation()
            onNav(1)
          }}
        >
          ›
        </button>
      )}
      {images.length > 1 && (
        <div className="lightbox-count">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.getElementById('root')
  )
}

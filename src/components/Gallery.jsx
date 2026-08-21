/**
 * Image container for a project. Pass `images` as an array of
 * { src, alt } objects to render real screenshots. Projects with no
 * images render nothing — no empty placeholder container.
 *
 * Example:
 *   images={[{ src: '/screens/dtr-1.png', alt: 'DTR dashboard' }]}
 */
export default function Gallery({ images = [], onSelect }) {
  if (images.length === 0) return null

  return (
    <div>
      <span className="gallery-label">Screenshots</span>
      <div className="gallery">
        {images.map((image, i) => (
          <button
            className="slot filled"
            key={i}
            onClick={() => onSelect?.(i)}
            aria-label={`View larger: ${image.alt ?? 'screenshot'}`}
          >
            <img src={image.src} alt={image.alt ?? ''} />
          </button>
        ))}
      </div>
    </div>
  )
}

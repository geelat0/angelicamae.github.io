export default function PhotoPlaceholder({ size = 'lg' }) {
  return (
    <div className={`photo-stack photo-stack-${size}`}>
      <div className="photo-frame-back" />
      <div className="photo-frame-front">
        <span className="photo-symbol">⌘</span>
      </div>
    </div>
  )
}

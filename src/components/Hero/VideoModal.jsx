import { useEffect } from 'react'
import { X } from 'lucide-react'
import './VideoModal.css'

export default function VideoModal({ open, onClose, url }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="vm" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="vm__box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="vm__x" onClick={onClose} aria-label="Close video"><X size={20} /></button>
        {url ? (
          <iframe src={url} title="Intro video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        ) : (
          <div className="vm__empty">Intro video coming soon.<br />Add the link in src/data/config.js</div>
        )}
      </div>
    </div>
  )
}
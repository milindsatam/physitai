import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CloseIcon } from './icons'
import { colors, pillPrimary } from '../lib/theme'

const mobileLinkStyle = {
  fontSize: 17,
  fontWeight: 600,
  color: '#0E1726',
  padding: '14px 4px',
  borderBottom: `1px solid ${colors.border}`,
}

function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <>
      <div className={`mobile-nav-overlay${open ? ' is-open' : ''}`} onClick={onClose} aria-hidden="true" />
      <div
        id="mobile-nav-panel"
        className={`mobile-nav-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px' }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              border: 'none',
              background: colors.card,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '8px 24px 32px' }}>
          <Link to="/" className="nav-link" onClick={onClose} style={mobileLinkStyle}>
            Home
          </Link>
          <Link to="/about" className="nav-link" onClick={onClose} style={mobileLinkStyle}>
            About
          </Link>
          <Link to="/contact" className="nav-link" onClick={onClose} style={{ ...mobileLinkStyle, borderBottom: 'none' }}>
            Contact
          </Link>
          <Link
            to="/contact"
            className="btn-primary-navy"
            onClick={onClose}
            style={{ ...pillPrimary, textAlign: 'center', marginTop: 20 }}
          >
            Request a Demo
          </Link>
        </nav>
      </div>
    </>
  )
}

export default MobileNav

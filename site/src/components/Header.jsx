import { forwardRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/physitai-logo.png'
import { pillPrimary } from '../lib/theme'
import { MenuIcon } from './icons'
import MobileNav from './MobileNav'

const Header = forwardRef(function Header(_props, ref) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      ref={ref}
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '16px clamp(12px,3.6vw,48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(8px,2.6vw,20px)',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto', padding: '2px 0' }}>
          <img
            src={logo}
            alt="PhysiTAI"
            width={200}
            height={68}
            style={{ display: 'block', height: 'clamp(22px,6.5vw,32px)', width: 'auto' }}
          />
        </Link>
        <nav
          className="header-nav-desktop"
          style={{
            marginLeft: 'auto',
            alignItems: 'center',
            gap: 'clamp(8px,2.2vw,32px)',
            whiteSpace: 'nowrap',
          }}
        >
          <Link to="/" className="nav-link" style={{ fontSize: 'clamp(12.5px,3.6vw,14.5px)', fontWeight: 500, color: '#0E1726' }}>
            Home
          </Link>
          <Link to="/about" className="nav-link" style={{ fontSize: 'clamp(12.5px,3.6vw,14.5px)', fontWeight: 500, color: '#0E1726' }}>
            About
          </Link>
          <Link to="/contact" className="nav-link" style={{ fontSize: 'clamp(12.5px,3.6vw,14.5px)', fontWeight: 500, color: '#0E1726' }}>
            Contact
          </Link>
        </nav>
        <Link to="/contact" className="btn-primary-navy header-actions-desktop" style={{ ...pillPrimary, flex: '0 0 auto' }}>
          Request a Demo
        </Link>
        <button
          type="button"
          className="header-mobile-toggle"
          onClick={() => setMobileOpen(true)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label="Open menu"
          style={{
            marginLeft: 'auto',
            width: 40,
            height: 40,
            borderRadius: 12,
            border: 'none',
            background: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            flex: '0 0 auto',
          }}
        >
          <MenuIcon />
        </button>
      </div>
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
})

export default Header

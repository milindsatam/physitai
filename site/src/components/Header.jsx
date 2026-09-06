import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/physitai-logo.png'
import { pillPrimary } from '../lib/theme'

const Header = forwardRef(function Header(_props, ref) {
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
          <img src={logo} alt="PhysiTAI" style={{ display: 'block', height: 'clamp(22px,6.5vw,32px)', width: 'auto' }} />
        </Link>
        <nav
          style={{
            marginLeft: 'auto',
            display: 'flex',
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
        <Link to="/contact" className="btn-primary-navy" style={{ ...pillPrimary, flex: '0 0 auto' }}>
          Request a Demo
        </Link>
      </div>
    </header>
  )
})

export default Header

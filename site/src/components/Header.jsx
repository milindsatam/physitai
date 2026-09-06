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
          padding: '16px clamp(16px,4vw,48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(10px,3vw,20px)',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto', padding: '2px 0' }}>
          <img src={logo} alt="PhysiTAI" style={{ display: 'block', height: 'clamp(26px,7vw,32px)', width: 'auto' }} />
        </a>
        <nav
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(14px,2.4vw,32px)',
            whiteSpace: 'nowrap',
          }}
        >
          <Link to="/about" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, color: '#0E1726' }}>
            About
          </Link>
          <a href="#contact" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, color: '#0E1726' }}>
            Contact
          </a>
        </nav>
        <a href="#contact" className="btn-primary-navy" style={{ ...pillPrimary, flex: '0 0 auto' }}>
          Request a Demo
        </a>
      </div>
    </header>
  )
})

export default Header

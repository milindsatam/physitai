import { forwardRef } from 'react'
import logo from '../assets/images/physitai-logo.png'
import { colors, pillPrimary } from '../lib/theme'

const Header = forwardRef(function Header(_props, ref) {
  return (
    <header
      ref={ref}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 80,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colors.border}`,
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '16px clamp(24px,4vw,48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto', padding: '2px 0' }}>
          <img src={logo} alt="PhysiTAI" style={{ display: 'block', height: 32, width: 'auto' }} />
        </a>
        <nav
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(18px,2.4vw,32px)',
            whiteSpace: 'nowrap',
          }}
        >
          <a href="#about" style={{ fontSize: 14.5, fontWeight: 500, color: '#0E1726' }}>
            About
          </a>
          <a href="#contact" style={{ fontSize: 14.5, fontWeight: 500, color: '#0E1726' }}>
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

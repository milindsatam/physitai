import logo from '../assets/images/physitai-logo.png'
import { colors } from '../lib/theme'

const navLabel = {
  fontSize: 11.5,
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#7E9CC2',
}

const navLink = {
  fontSize: 14.5,
  color: '#DCE7F4',
}

function Footer() {
  return (
    <footer style={{ background: colors.navy }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(64px,8vw,104px) clamp(24px,4vw,48px) 36px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: 'clamp(32px,4vw,56px)',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <img
              src={logo}
              alt="PhysiTAI"
              style={{ display: 'block', height: 30, width: 'auto', background: colors.white, borderRadius: 8, padding: '6px 10px' }}
            />
            <div style={{ fontSize: 14.5, lineHeight: 1.7, color: '#B9CBE2', marginTop: 20, maxWidth: '34ch' }}>
              Making pain visible. Making recovery measurable.
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={navLabel}>Navigate</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              <a href="#solution" className="nav-link" style={navLink}>Solution</a>
              <a href="#technology" className="nav-link" style={navLink}>Technology</a>
              <a href="#serve" className="nav-link" style={navLink}>Who We Serve</a>
              <a href="#about" className="nav-link" style={navLink}>About</a>
              <a href="#contact" className="nav-link" style={navLink}>Contact</a>
            </div>
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={navLabel}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 20 }}>
              <div style={navLink}>hello@physitai.example</div>
              <div style={navLink}>+00 000 000 0000</div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1px solid #1D446F',
            marginTop: 'clamp(40px,5vw,64px)',
            paddingTop: 26,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 13, color: '#7E9CC2' }}>&copy; 2026 PhysiTAI. All rights reserved.</div>
          <div style={{ fontSize: 13, color: '#7E9CC2' }}>Rehabilitation intelligence</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

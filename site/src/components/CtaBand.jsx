import { Link } from 'react-router-dom'
import { colors, eyebrow, pillPrimaryOnDark, pillOutlineOnDark } from '../lib/theme'

function CtaBand() {
  return (
    <section id="contact" style={{ background: colors.bg, padding: 'clamp(72px,9vw,128px) clamp(16px,3vw,32px)' }}>
      <div
        data-reveal
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          background: colors.navy,
          borderRadius: 24,
          padding: 'clamp(48px,6vw,88px) clamp(28px,4vw,72px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'center',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ ...eyebrow, color: colors.cyan }}>Get Started</div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px,3.6vw,46px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: colors.white,
              margin: '18px 0 0',
              textWrap: 'pretty',
            }}
          >
            See PhysiTAI in action.
          </div>
          <p style={{ fontSize: 16.5, lineHeight: 1.75, color: '#C6D8EC', margin: '18px 0 0', maxWidth: '44ch', textWrap: 'pretty' }}>
            Book a demo and see how objective rehabilitation works in your setting.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-start', minWidth: 0 }}>
          <Link
            to="/contact"
            className="btn-primary-white"
            style={{ ...pillPrimaryOnDark, padding: '16px 32px' }}
          >
            Request a Demo
          </Link>
          <a
            href="#solution"
            className="btn-outline-white"
            style={{ ...pillOutlineOnDark, padding: '14.5px 30px' }}
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaBand

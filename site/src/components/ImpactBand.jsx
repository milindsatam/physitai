import { colors } from '../lib/theme'

function ImpactBand() {
  return (
    <section style={{ background: colors.navy }}>
      <div
        data-reveal
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px clamp(24px,4vw,48px)',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: colors.teal }} />
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: 'clamp(17px,2vw,23px)',
            letterSpacing: '-0.015em',
            color: colors.white,
            textWrap: 'pretty',
          }}
        >
          Better care. Lower cost. Stronger recovery for clinics, athletes, and communities.
        </div>
      </div>
    </section>
  )
}

export default ImpactBand

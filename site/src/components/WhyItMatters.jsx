import { colors, eyebrow, heading2, panelShell } from '../lib/theme'

const stat = {
  background: colors.card,
  borderRadius: 16,
  padding: 32,
}

const statNumber = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(32px,3.2vw,40px)',
  letterSpacing: '-0.025em',
  color: colors.navy,
  lineHeight: 1,
}

const statLine = {
  fontSize: 15,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 14,
}

function WhyItMatters() {
  return (
    <section id="why-it-matters" style={{ background: colors.bg, padding: '0 clamp(16px,3vw,32px) clamp(48px,6vw,80px)' }}>
      <div style={panelShell}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)' }}>
          <div data-reveal style={{ maxWidth: 720 }}>
            <div style={eyebrow}>Why It Matters</div>
            <h2 style={heading2}>Designed to make recovery faster and clearer.</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: 24,
              marginTop: 'clamp(56px,7vw,96px)',
            }}
          >
            <div className="hover-card" data-reveal style={stat}>
              <div style={statNumber}>25 to 35%</div>
              <div style={statLine}>Designed to support faster recovery.</div>
            </div>
            <div className="hover-card" data-reveal data-reveal-delay="1" style={stat}>
              <div style={statNumber}>Up to 40%</div>
              <div style={statLine}>Aims to improve treatment adherence.</div>
            </div>
            <div className="hover-card" data-reveal data-reveal-delay="2" style={stat}>
              <div style={statNumber}>Up to 30%</div>
              <div style={statLine}>Built to help reduce recurrence.</div>
            </div>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.65, color: colors.mutedSoft, margin: '24px 0 0', maxWidth: '70ch' }}>
            Targets based on the clinical rationale behind objective, data-driven rehabilitation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyItMatters

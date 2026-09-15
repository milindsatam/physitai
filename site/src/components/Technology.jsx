import thermalBack from '../assets/images/thermal-back.webp'
import { colors, eyebrow, heading2, panelShell } from '../lib/theme'
import { BarsIcon, ScanSearchIcon, ShieldCheckIcon } from './icons'

const featureRow = {
  display: 'flex',
  gap: 18,
  alignItems: 'flex-start',
  background: colors.card,
  borderRadius: 16,
  padding: 24,
}

const featureIcon = {
  width: 44,
  height: 44,
  flex: '0 0 auto',
  borderRadius: 12,
  background: colors.tealTint,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const featureTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 16,
  color: colors.navy,
}

const featureLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 6,
}

function Technology() {
  return (
    <section id="technology" style={{ background: colors.bg, padding: '0 clamp(16px,3vw,32px) clamp(48px,6vw,80px)' }}>
      <div style={panelShell}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 'clamp(40px,6vw,88px)',
            alignItems: 'center',
          }}
        >
          <div data-reveal style={{ position: 'relative', minWidth: 0 }}>
            <img
              src={thermalBack}
              alt="Thermal scan of a patient's back"
              width={1018}
              height={1018}
              loading="lazy"
              style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 4px 24px rgba(10,46,92,0.10)' }}
            />
          </div>
          <div data-reveal data-reveal-delay="1" style={{ minWidth: 0 }}>
            <div style={eyebrow}>The Technology</div>
            <h2 style={{ ...heading2, maxWidth: '22ch' }}>Structured underneath, clear at the point of care.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: colors.muted, margin: '20px 0 0', maxWidth: '54ch', textWrap: 'pretty' }}>
              PhysiTAI separates what is observed, what is calculated, and what a clinician
              concludes. Thermal imaging adds visual context, structured analytics organise the
              inputs, and AI drafts summaries for the clinician to review.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 40 }}>
              <div className="hover-card" data-reveal style={featureRow}>
                <div style={featureIcon}>
                  <BarsIcon />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={featureTitle}>Relative thermal context</div>
                  <div style={featureLine}>Visual thermal signal for context, not calibrated temperature.</div>
                </div>
              </div>
              <div className="hover-card" data-reveal data-reveal-delay="1" style={featureRow}>
                <div style={featureIcon}>
                  <ScanSearchIcon />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={featureTitle}>Deterministic analytics</div>
                  <div style={featureLine}>Defined calculations organise inputs, kept separate from interpretation.</div>
                </div>
              </div>
              <div className="hover-card" data-reveal data-reveal-delay="2" style={featureRow}>
                <div style={featureIcon}>
                  <ShieldCheckIcon />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={featureTitle}>Clinician-led interpretation</div>
                  <div style={featureLine}>AI drafts summaries. The clinician reviews and decides.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology

import dashboard from '../assets/images/dashboard.webp'
import { colors, eyebrow, heading2, panelShell } from '../lib/theme'
import { ClockIcon, CameraIcon, ScanSearchIcon, CompassIcon, TrendUpIcon } from './icons'

const loopTile = {
  background: colors.card,
  borderRadius: 16,
  padding: 32,
}

const loopIcon = {
  width: 44,
  height: 44,
  borderRadius: 12,
  background: colors.tealTint,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const loopTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 19,
  letterSpacing: '-0.015em',
  color: colors.navy,
  marginTop: 26,
}

const loopLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 10,
}

const loopGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))',
  gap: 24,
}

const stageRow = (num, title, line) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }} key={num}>
    <div
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: '0.04em',
        color: colors.teal,
        flex: '0 0 26px',
      }}
    >
      {num}
    </div>
    <div style={{ minWidth: 0 }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: colors.navy }}>
        {title}
      </div>
      <div style={{ fontSize: 13.5, lineHeight: 1.55, color: colors.muted, marginTop: 3 }}>{line}</div>
    </div>
  </div>
)

function Solution() {
  return (
    <section id="solution" style={{ background: colors.bg, padding: '0 clamp(16px,3vw,32px) clamp(48px,6vw,80px)' }}>
      <div style={panelShell}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)' }}>
          <div
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 'clamp(28px,4vw,64px)',
              alignItems: 'start',
            }}
          >
            <div style={{ minWidth: 0 }} />
            <div style={{ minWidth: 0, maxWidth: 620 }}>
              <div style={eyebrow}>Our Solution</div>
              <h2 style={heading2}>Distinct signals, one shared recovery story.</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.75, color: colors.muted, margin: '20px 0 0', maxWidth: '56ch', textWrap: 'pretty' }}>
                Each input keeps its meaning. Structured analytics organise the evidence, and
                clinicians interpret it.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginTop: 'clamp(64px,8vw,104px)' }}>
            <div
              className="hover-card"
              data-reveal
              style={{
                position: 'relative',
                flex: '3 1 460px',
                minWidth: 0,
                background: colors.navy,
                borderRadius: 16,
                padding: 'clamp(18px,2vw,24px)',
                boxShadow: '0 4px 24px rgba(10,46,92,0.06)',
              }}
            >
              <img
                src={dashboard}
                alt="PhysiTAI patient dashboard"
                width={1274}
                height={849}
                loading="lazy"
                style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 10 }}
              />
              <div
                style={{
                  position: 'absolute',
                  right: 'clamp(28px,3vw,40px)',
                  top: 'clamp(28px,3vw,40px)',
                  background: 'rgba(7,33,63,0.72)',
                  borderRadius: 999,
                  padding: '7px 14px',
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: colors.white,
                }}
              >
                Illustrative concept, not patient data.
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: 'clamp(28px,3vw,40px)',
                  bottom: 'clamp(28px,3vw,40px)',
                  background: colors.white,
                  borderRadius: 999,
                  padding: '9px 16px',
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: colors.navy,
                  boxShadow: '0 4px 24px rgba(4,18,35,0.24)',
                }}
              >
                Real-time patient dashboard
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: '1 1 320px', minWidth: 0 }}>
              <div
                className="hover-card"
                data-reveal
                data-reveal-delay="1"
                style={{ background: colors.navy, borderRadius: 16, padding: 32, boxShadow: '0 4px 24px rgba(10,46,92,0.06)' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ClockIcon />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(21px,2vw,25px)', letterSpacing: '-0.02em', color: colors.white, marginTop: 26, textWrap: 'pretty' }}>
                  How the workflow runs
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.65, color: '#C6D8EC', marginTop: 12 }}>
                  From assessment to a reviewed recovery report.
                </div>
              </div>
              <div className="hover-card" data-reveal data-reveal-delay="2" style={{ background: colors.card, borderRadius: 16, padding: 32, flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {stageRow('01', 'Capture', 'Record pain, movement and function with relevant imaging.')}
                  <div style={{ height: 1, background: colors.border }} />
                  {stageRow('02', 'Organise', 'Bring observations together and calculate defined measures.')}
                  <div style={{ height: 1, background: colors.border }} />
                  {stageRow('03', 'Review', 'The clinician checks findings, limitations and any AI summary.')}
                  <div style={{ height: 1, background: colors.border }} />
                  {stageRow('04', 'Report', 'Use the reviewed report to support the next conversation.')}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
              gap: 24,
              marginTop: 24,
            }}
          >
            <div style={loopGrid}>
              <div className="hover-card" data-reveal style={loopTile}>
                <div style={loopIcon}>
                  <CameraIcon />
                </div>
                <div style={loopTitle}>Listen</div>
                <div style={loopLine}>Patient-reported pain and context, recorded from the patient.</div>
              </div>
              <div className="hover-card" data-reveal data-reveal-delay="1" style={loopTile}>
                <div style={loopIcon}>
                  <ScanSearchIcon />
                </div>
                <div style={loopTitle}>Assess</div>
                <div style={loopLine}>Range of motion and functional assessment, tracked over time.</div>
              </div>
            </div>
            <div style={loopGrid}>
              <div className="hover-card" data-reveal data-reveal-delay="2" style={loopTile}>
                <div style={loopIcon}>
                  <CompassIcon />
                </div>
                <div style={loopTitle}>Observe</div>
                <div style={loopLine}>Thermal imaging for visual context. Relative signal only, not temperature.</div>
              </div>
              <div className="hover-card" data-reveal data-reveal-delay="3" style={loopTile}>
                <div style={loopIcon}>
                  <TrendUpIcon />
                </div>
                <div style={loopTitle}>Review</div>
                <div style={loopLine}>AI drafts summaries. The clinician reviews and decides.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution

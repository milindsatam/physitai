import { colors, eyebrow, heading2 } from '../lib/theme'
import { GlobeIcon, BrokenCircleIcon, TrendDownIcon, ClipboardIcon } from './icons'

const cardBase = {
  background: colors.white,
  borderRadius: 16,
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 320,
  boxShadow: '0 4px 24px rgba(10,46,92,0.06)',
}

const iconWrap = {
  width: 44,
  height: 44,
  borderRadius: 12,
  background: colors.tealTint,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const numberStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 'clamp(32px,3.2vw,40px)',
  letterSpacing: '-0.025em',
  color: colors.navy,
  lineHeight: 1,
}

const lineStyle = {
  fontSize: 15,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 14,
  maxWidth: '24ch',
}

const gridPair = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))',
  gap: 24,
  alignItems: 'stretch',
}

function Problem() {
  return (
    <section className="hero-cover" style={{ background: colors.bg }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(96px,12vw,168px) clamp(24px,4vw,48px)',
        }}
      >
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: 'clamp(28px,4vw,64px)',
            alignItems: 'start',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={eyebrow}>The Problem</div>
            <h2 style={{ ...heading2, maxWidth: '20ch' }}>Recovery is still difficult to measure objectively.</h2>
          </div>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.75,
              color: colors.muted,
              margin: 0,
              maxWidth: '52ch',
              alignSelf: 'end',
              textWrap: 'pretty',
            }}
          >
            Traditional tools like pain scales and manual notes cannot show inflammation,
            asymmetry, or fatigue in real time, which makes progress hard to measure objectively.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,480px),1fr))',
            gap: 24,
            marginTop: 'clamp(72px,9vw,120px)',
          }}
        >
          <div style={gridPair}>
            <div className="hover-card" data-reveal style={cardBase}>
              <div style={iconWrap}>
                <GlobeIcon />
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 40 }}>
                <div style={numberStyle}>1.7B+</div>
                <div style={lineStyle}>People live with chronic pain globally</div>
              </div>
            </div>
            <div className="hover-card" data-reveal data-reveal-delay="1" style={cardBase}>
              <div style={iconWrap}>
                <BrokenCircleIcon />
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 40 }}>
                <div style={numberStyle}>40 to 50%</div>
                <div style={lineStyle}>Of patients do not get adequate relief</div>
              </div>
            </div>
          </div>
          <div style={gridPair}>
            <div className="hover-card" data-reveal data-reveal-delay="2" style={cardBase}>
              <div style={iconWrap}>
                <TrendDownIcon />
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 40 }}>
                <div style={numberStyle}>30 to 40%</div>
                <div style={lineStyle}>Productivity loss reported by those affected</div>
              </div>
            </div>
            <div className="hover-card" data-reveal data-reveal-delay="3" style={{ ...cardBase, background: colors.navy }}>
              <div style={{ ...iconWrap, background: 'rgba(255,255,255,0.12)' }}>
                <ClipboardIcon />
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 40 }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(28px,2.9vw,36px)',
                    letterSpacing: '-0.025em',
                    color: colors.white,
                    lineHeight: 1,
                  }}
                >
                  Paper-based
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.65, color: '#C6D8EC', marginTop: 14, maxWidth: '26ch' }}>
                  Progress tracked mostly on paper, with no real-time view of inflammation or
                  fatigue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem

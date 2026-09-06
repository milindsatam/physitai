import heroSpine from '../assets/images/hero-spine.png'
import { colors, pillPrimaryOnDark, pillOutlineOnDark } from '../lib/theme'

function Hero({ heroRef, heroInnerRef, bgRef, figureRef }) {
  return (
    <section
      ref={heroRef}
      style={{
        position: 'sticky',
        top: 0,
        overflow: 'hidden',
        background: 'linear-gradient(115deg,#07213F 0%,#0A2E5C 45%,#116A8C 100%)',
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-15% -10%',
          background:
            'radial-gradient(60% 55% at 78% 30%, rgba(23,169,189,0.30) 0%, rgba(23,169,189,0) 70%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={heroInnerRef}
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'clamp(80px,10vw,140px) clamp(24px,4vw,48px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 'clamp(28px,3vw,48px)',
          alignItems: 'center',
          willChange: 'transform,opacity',
        }}
      >
        <div style={{ minWidth: 0, position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.14)',
              border: '1px solid rgba(255,255,255,0.28)',
              color: colors.white,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '8px 14px',
              borderRadius: 999,
            }}
          >
            Rehabilitation Intelligence
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(38px,5.2vw,62px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: colors.white,
              margin: '26px 0 0',
              textWrap: 'pretty',
            }}
          >
            Objective rehabilitation, powered by AI.
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px,1.4vw,18px)',
              lineHeight: 1.7,
              color: '#DCE8F2',
              margin: '22px 0 0',
              maxWidth: '50ch',
              textWrap: 'pretty',
            }}
          >
            PhysiTAI uses thermal imaging and AI to make pain visible and recovery measurable, so
            clinicians can treat with data, not guesswork.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 38 }}>
            <a href="#contact" className="btn-primary-white" style={pillPrimaryOnDark}>
              Request a Demo
            </a>
            <a href="#solution" className="btn-outline-white" style={pillOutlineOnDark}>
              See How It Works
            </a>
          </div>
        </div>
        <div
          ref={figureRef}
          style={{
            position: 'relative',
            minWidth: 0,
            marginLeft: 'clamp(-64px,-3vw,0px)',
            alignSelf: 'end',
            marginBottom: 'calc(-1 * clamp(80px,10vw,140px))',
            willChange: 'transform',
          }}
        >
          <img
            src={heroSpine}
            alt="Thermal spine visualization"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              maxHeight: 'clamp(340px,44vw,540px)',
              objectFit: 'contain',
              objectPosition: 'bottom',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: -28,
              zIndex: 4,
              background: colors.white,
              borderRadius: 16,
              padding: '16px 20px',
              boxShadow: '0 18px 44px rgba(4,18,35,0.32)',
              minWidth: 186,
            }}
          >
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#7A879A',
              }}
            >
              Recovery Progress
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: colors.navy,
                }}
              >
                72%
              </div>
              <div style={{ fontSize: 12, color: colors.teal, fontWeight: 600 }}>on track</div>
            </div>
            <div
              style={{
                height: 6,
                borderRadius: 999,
                background: '#EEF3FB',
                marginTop: 10,
                overflow: 'hidden',
              }}
            >
              <div style={{ width: '72%', height: '100%', background: colors.teal }} />
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 24,
              background: colors.white,
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 4px 24px rgba(4,18,35,0.28)',
            }}
          >
            <div
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#7A879A',
              }}
            >
              Thermal Asymmetry
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 20,
                color: colors.navy,
                marginTop: 4,
              }}
            >
              1.4 &deg;C
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import { Link } from 'react-router-dom'
import thermalBack from '../assets/images/thermal-back.webp'
import { colors, pillPrimaryOnDark, pillOutlineOnDark, iconChip } from '../lib/theme'
import { MessageIcon, CompassIcon, ScanSearchIcon, ArrowRightIcon } from './icons'

const rowIcon = { ...iconChip, width: 40, height: 40 }

const rowIndex = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 10.5,
  letterSpacing: '0.08em',
  color: colors.teal,
}

const rowTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 14.5,
  color: colors.navy,
  marginTop: 2,
}

const rowSub = {
  fontSize: 12.5,
  color: colors.muted,
  marginTop: 2,
}

function BarsMark() {
  const heights = [8, 15, 11, 20, 13]
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 22 }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{ width: 4, height: h, borderRadius: 2, background: i === 3 ? colors.teal : colors.border }}
        />
      ))}
    </div>
  )
}

function TrendMark() {
  return (
    <svg width="48" height="22" viewBox="0 0 48 22" fill="none" aria-hidden="true">
      <polyline
        points="2,19 13,14 22,16 33,7 46,3"
        stroke={colors.teal}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

const inputRows = [
  {
    index: '01',
    Icon: MessageIcon,
    title: 'Patient-reported pain',
    sub: 'Self-reported, in context',
    Mark: BarsMark,
  },
  {
    index: '02',
    Icon: CompassIcon,
    title: 'Movement and function',
    sub: 'ROM and functional assessment',
    Mark: TrendMark,
  },
]

function Hero({ heroRef, pinned }) {
  return (
    <section
      ref={heroRef}
      className="hero-section"
      style={{
        position: pinned ? 'fixed' : 'relative',
        top: pinned ? 0 : 'auto',
        left: pinned ? 0 : 'auto',
        right: pinned ? 0 : 'auto',
        width: '100%',
        zIndex: pinned ? 1 : 'auto',
        overflow: 'hidden',
        background: 'linear-gradient(115deg,#07213F 0%,#0A2E5C 45%,#116A8C 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-15% -10%',
          background:
            'radial-gradient(60% 55% at 78% 30%, rgba(23,169,189,0.30) 0%, rgba(23,169,189,0) 70%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          maxWidth: 1200,
          margin: '0 auto',
          paddingTop: 'clamp(104px,12vw,168px)',
          paddingBottom: 'clamp(80px,10vw,140px)',
          paddingLeft: 'clamp(24px,4vw,48px)',
          paddingRight: 'clamp(24px,4vw,48px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 'clamp(28px,3vw,48px)',
          alignItems: 'center',
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
            Making recovery measurable.
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
            PhysiTAI brings patient-reported pain, movement and function, and thermal imaging
            into one structured view of rehabilitation progress, with clinicians at the centre.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 38 }}>
            <Link to="/contact" className="btn-primary-white" style={pillPrimaryOnDark}>
              Get in touch
            </Link>
            <Link to="/#how-it-works" className="btn-outline-white" style={pillOutlineOnDark}>
              See How It Works
            </Link>
          </div>
          <div style={{ fontSize: 13.5, color: '#9FB4CC', marginTop: 18 }}>
            In development. Designed to support clinical review.
          </div>
        </div>
        <div style={{ position: 'relative', minWidth: 0 }}>
          <div
            className="hover-card"
            data-reveal
            data-reveal-delay="1"
            style={{
              background: 'rgba(255,255,255,0.96)',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: 24,
              boxShadow: '0 24px 60px rgba(4,18,35,0.28)',
              padding: 'clamp(20px,2.6vw,28px)',
              maxWidth: 460,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: colors.teal }}>
                The Recovery Picture
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: colors.tealDeep,
                  background: colors.tealTint,
                  borderRadius: 999,
                  padding: '4px 10px',
                  flex: '0 0 auto',
                }}
              >
                Illustrative
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 20 }}>
              {inputRows.map((row) => (
                <div key={row.index} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={rowIcon}>
                    <row.Icon />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={rowIndex}>{row.index}</div>
                    <div style={rowTitle}>{row.title}</div>
                    <div style={rowSub}>{row.sub}</div>
                  </div>
                  <div style={{ flex: '0 0 auto', marginTop: 6 }}>
                    <row.Mark />
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={rowIcon}>
                  <ScanSearchIcon />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={rowIndex}>03</div>
                  <div style={rowTitle}>Thermal context</div>
                  <div style={rowSub}>Relative signal only</div>
                </div>
                <img
                  src={thermalBack}
                  alt=""
                  width={40}
                  height={40}
                  style={{ width: 40, height: 40, borderRadius: 10, objectFit: 'cover', display: 'block', flex: '0 0 auto' }}
                />
              </div>
            </div>

            <div style={{ borderTop: `1px solid ${colors.border}`, marginTop: 20, paddingTop: 14 }}>
              <div style={{ fontSize: 12, color: colors.mutedSoft, textAlign: 'center' }}>
                Structured analytics plus clinician review
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: colors.tealTint,
                borderRadius: 999,
                padding: '12px 18px',
                marginTop: 16,
              }}
            >
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14.5, color: colors.navy }}>
                Recovery report
              </span>
              <ArrowRightIcon stroke={colors.tealDeep} />
            </div>

            <div style={{ fontSize: 11.5, color: colors.mutedSoft, textAlign: 'center', marginTop: 14 }}>
              Conceptual view, not patient data.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

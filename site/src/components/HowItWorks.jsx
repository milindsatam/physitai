import { colors, eyebrow, heading2, iconChip, cardShadow } from '../lib/theme'
import { MessageIcon, TrendUpIcon, ScanSearchIcon, BarsIcon, ShieldCheckIcon, ClipboardIcon } from './icons'

const card = {
  background: colors.white,
  borderRadius: 16,
  padding: 32,
  boxShadow: cardShadow,
  display: 'flex',
  flexDirection: 'column',
}

const indexLabel = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 12.5,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  color: colors.teal,
  marginTop: 20,
}

const cardTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 18,
  color: colors.navy,
  marginTop: 8,
}

const cardLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 10,
}

const cards = [
  {
    Icon: MessageIcon,
    index: '01 / Listen',
    title: 'Patient-reported pain',
    line: "Capture the patient's own pain ratings and relevant context. Pain remains a reported experience, never an inference from an image.",
  },
  {
    Icon: TrendUpIcon,
    index: '02 / Assess',
    title: 'ROM and function',
    line: 'Bring range of motion and functional assessment into the recovery record, with session context to support review over time.',
  },
  {
    Icon: ScanSearchIcon,
    index: '03 / Observe',
    title: 'Thermal imaging',
    line: 'Add visual thermal context. The current thermal source provides relative image signal, not calibrated temperature.',
  },
  {
    Icon: BarsIcon,
    index: '04 / Structure',
    title: 'Deterministic analytics',
    line: 'Use defined calculations to organise recorded inputs and changes. Keep computed results separate from narrative interpretation.',
  },
  {
    Icon: ShieldCheckIcon,
    index: '05 / Review',
    title: 'AI-assisted summaries',
    line: 'Turn structured findings into draft summaries for clinician review. AI supports documentation, and the clinician checks the interpretation.',
  },
  {
    Icon: ClipboardIcon,
    index: '06 / Communicate',
    title: 'Recovery reports',
    line: 'Bring observations, trends and reviewed summaries into a clear report for rehabilitation conversations and follow-up.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: colors.bg, padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          data-reveal
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 'clamp(28px,4vw,64px)',
            alignItems: 'start',
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div style={eyebrow}>How It Works</div>
            <h2 style={{ ...heading2, maxWidth: '20ch' }}>Distinct signals, one shared recovery story.</h2>
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
            Each input keeps its meaning. Analytics organise the evidence, and clinicians
            interpret it.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
            gap: 24,
            marginTop: 'clamp(56px,7vw,96px)',
          }}
        >
          {cards.map((c, i) => (
            <div key={c.title} className="hover-card" data-reveal data-reveal-delay={String(i % 4)} style={card}>
              <div style={iconChip}>
                <c.Icon />
              </div>
              <div style={indexLabel}>{c.index}</div>
              <div style={cardTitle}>{c.title}</div>
              <div style={cardLine}>{c.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

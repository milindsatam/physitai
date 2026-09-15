import { colors, eyebrow, heading2 } from '../lib/theme'

const step = {
  borderTop: `1px solid ${colors.border}`,
  paddingTop: 24,
}

const stepNumber = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: '0.06em',
  color: colors.teal,
}

const stepTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 18,
  color: colors.navy,
  marginTop: 14,
}

const stepLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 10,
}

const steps = [
  {
    num: '01',
    title: 'Capture',
    line: 'Record pain, movement, function and relevant imaging in the assessment context.',
  },
  {
    num: '02',
    title: 'Organise',
    line: 'Bring observations together and calculate defined measures from supported inputs.',
  },
  {
    num: '03',
    title: 'Review',
    line: 'The clinician checks findings, limitations and any AI-generated summary.',
  },
  {
    num: '04',
    title: 'Report and revisit',
    line: 'Use the reviewed recovery report to support discussion at the next assessment.',
  },
]

function TheWorkflow() {
  return (
    <section id="the-workflow" style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(72px,9vw,128px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div data-reveal style={{ maxWidth: 640 }}>
          <div style={eyebrow}>The Workflow</div>
          <h2 style={heading2}>From assessment to a clearer conversation.</h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
            gap: 24,
            marginTop: 'clamp(48px,6vw,72px)',
          }}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="hover-card" data-reveal data-reveal-delay={String(i % 4)} style={step}>
              <div style={stepNumber}>{s.num}</div>
              <div style={stepTitle}>{s.title}</div>
              <div style={stepLine}>{s.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheWorkflow

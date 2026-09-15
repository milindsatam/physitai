import { colors, eyebrow, heading2, panelShell } from '../lib/theme'
import { ClipboardIcon, ScanSearchIcon, CompassIcon, ShieldCheckIcon } from './icons'

const item = {
  display: 'flex',
  gap: 18,
  alignItems: 'flex-start',
  background: colors.card,
  borderRadius: 16,
  padding: 24,
}

const itemIcon = {
  width: 44,
  height: 44,
  flex: '0 0 auto',
  borderRadius: 12,
  background: colors.tealTint,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const itemTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 16,
  color: colors.navy,
}

const itemLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 6,
}

const items = [
  {
    Icon: ClipboardIcon,
    title: 'No diagnosis or automated treatment decisions',
    line: "Outputs support review and documentation. They do not replace a clinician's assessment or establish a diagnosis.",
  },
  {
    Icon: ScanSearchIcon,
    title: 'No pain inference from images',
    line: 'Thermal images do not measure pain. Patient-reported pain is recorded separately and interpreted in context.',
  },
  {
    Icon: CompassIcon,
    title: 'Non-radiometric thermal',
    line: 'The current thermal source provides relative signal, not temperature. No calibrated temperature, temperature-difference or inflammation claims are made from it.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Human review remains essential',
    line: 'AI summaries require clinician review. This site does not claim validated clinical performance, regulatory clearance or proven patient outcomes.',
  },
]

function ClinicalPositioning() {
  return (
    <section id="clinical-positioning" style={{ background: colors.bg, padding: '0 clamp(16px,3vw,32px) clamp(48px,6vw,80px)' }}>
      <div style={panelShell}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)' }}>
          <div data-reveal style={{ maxWidth: 720 }}>
            <div style={eyebrow}>Clinical Positioning</div>
            <h2 style={heading2}>Built to support clinical judgment.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: colors.muted, margin: '20px 0 0', maxWidth: '62ch', textWrap: 'pretty' }}>
              PhysiTAI is a rehabilitation intelligence platform in development. Its role is to
              help organise assessments and communicate progress, with clinicians at the centre.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
              gap: 16,
              marginTop: 'clamp(56px,7vw,96px)',
            }}
          >
            {items.map((it, i) => (
              <div key={it.title} className="hover-card" data-reveal data-reveal-delay={String(i % 4)} style={item}>
                <div style={itemIcon}>
                  <it.Icon />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={itemTitle}>{it.title}</div>
                  <div style={itemLine}>{it.line}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClinicalPositioning

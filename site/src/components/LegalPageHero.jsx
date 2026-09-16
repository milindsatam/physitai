import { colors, eyebrow, heading2 } from '../lib/theme'

function LegalPageHero({ title, lastUpdated }) {
  return (
    <section style={{ background: colors.bg, padding: 'clamp(64px,8vw,104px) clamp(24px,4vw,48px) clamp(24px,3vw,32px)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={eyebrow}>Legal</div>
        <h1 style={{ ...heading2, fontSize: 'clamp(30px,3.6vw,42px)' }}>{title}</h1>
        <div style={{ fontSize: 14, color: colors.mutedSoft, marginTop: 14 }}>{lastUpdated}</div>
      </div>
    </section>
  )
}

export default LegalPageHero

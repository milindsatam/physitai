import { colors } from '../lib/theme'

const sectionHeading = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 19,
  color: colors.navy,
  marginTop: 40,
}

const sectionBody = {
  fontSize: 15.5,
  lineHeight: 1.75,
  color: colors.muted,
  marginTop: 12,
  textWrap: 'pretty',
}

function LegalSection({ heading, children }) {
  return (
    <div data-reveal>
      {heading && <h2 style={sectionHeading}>{heading}</h2>}
      <p style={sectionBody}>{children}</p>
    </div>
  )
}

export default LegalSection

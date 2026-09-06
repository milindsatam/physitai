export const colors = {
  navy: '#0A2E5C',
  navyDeep: '#07213F',
  teal: '#17A9BD',
  tealDeep: '#116A8C',
  tealTint: '#E7F6F8',
  cyan: '#8FE3EF',
  bg: '#F2F5F9',
  card: '#F5F8FC',
  border: '#E6ECF4',
  muted: '#5B6B7F',
  mutedSoft: '#8A97A8',
  white: '#FFFFFF',
}

export const fonts = {
  heading: "'Space Grotesk', sans-serif",
  body: 'Inter, Helvetica, Arial, sans-serif',
}

export const container = {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 clamp(24px,4vw,48px)',
}

export const eyebrow = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: colors.teal,
}

export const heading2 = {
  fontFamily: fonts.heading,
  fontWeight: 700,
  fontSize: 'clamp(32px,3.6vw,46px)',
  lineHeight: 1.1,
  letterSpacing: '-0.025em',
  color: colors.navy,
  margin: '18px 0 0',
  textWrap: 'pretty',
}

export const bodyCopy = {
  fontSize: 16.5,
  lineHeight: 1.75,
  color: colors.muted,
  margin: '20px 0 0',
  textWrap: 'pretty',
}

export const cardShadow = '0 4px 24px rgba(10,46,92,0.06)'

export const panelShell = {
  maxWidth: 1240,
  margin: '0 auto',
  background: colors.white,
  borderRadius: 24,
  boxShadow: cardShadow,
}

export const iconChip = {
  width: 44,
  height: 44,
  borderRadius: 12,
  background: colors.tealTint,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 auto',
}

export const iconChipOnNavy = {
  ...iconChip,
  background: 'rgba(255,255,255,0.12)',
}

export const pillPrimary = {
  background: colors.navy,
  color: colors.white,
  fontSize: 14.5,
  fontWeight: 600,
  padding: '12px 24px',
  borderRadius: 999,
  display: 'inline-block',
}

export const pillPrimaryOnDark = {
  background: colors.white,
  color: colors.navy,
  fontSize: 15,
  fontWeight: 600,
  padding: '15px 30px',
  borderRadius: 999,
  display: 'inline-block',
}

export const pillOutlineOnDark = {
  border: '1.5px solid rgba(255,255,255,0.55)',
  color: colors.white,
  fontSize: 15,
  fontWeight: 600,
  padding: '13.5px 28px',
  borderRadius: 999,
  display: 'inline-block',
}

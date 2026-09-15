import { colors, eyebrow, heading2, bodyCopy, iconChip } from '../lib/theme'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import CtaBand from '../components/CtaBand'
import { TargetIcon, HeartIcon, ClipboardIcon, TrendUpIcon, ShieldCheckIcon } from '../components/icons'
import photoRajani from '../assets/images/team-rajani-jadhav.webp'
import photoManjusha from '../assets/images/team-manjusha-pathade.webp'
import photoAnjali from '../assets/images/team-anjali-randive.webp'

const cardBase = {
  background: colors.white,
  borderRadius: 16,
  padding: 32,
  boxShadow: '0 4px 24px rgba(10,46,92,0.06)',
}

const cardTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 17,
  color: colors.navy,
  marginTop: 22,
}

const cardLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 8,
}

const values = [
  { Icon: TargetIcon, title: 'Structured records', line: 'Assessments organised consistently, so progress is easier to review.' },
  { Icon: HeartIcon, title: 'Accessible to all', line: 'Affordable, portable technology built to reach underserved settings.' },
  { Icon: ClipboardIcon, title: 'Repeatable assessment', line: 'Consistent methods that make review easier over time.' },
  { Icon: TrendUpIcon, title: 'Clinician-led', line: 'Technology that supports professional judgment, never replaces it.' },
]

const team = [
  { name: 'Dr. Rajani Pandurang Jadhav', role: 'Mentor', line: 'Radiologist and clinical advisor guiding our medical direction.', photo: photoRajani },
  { name: 'Mrs. Manjusha Pathade', role: 'Founder and CEO / CTO', line: 'Leads product, technology, and the AI platform.', photo: photoManjusha },
  { name: 'Mrs. Anjali Yogesh Randive', role: 'Business Analyst', line: 'Drives strategy, operations, and growth.', photo: photoAnjali },
]

const helpItems = [
  { Icon: HeartIcon, label: 'Patients and clinics' },
  { Icon: TrendUpIcon, label: 'Athletes and teams' },
  { Icon: ShieldCheckIcon, label: 'Hospitals and rehab centers' },
  { Icon: TargetIcon, label: 'Defense and tactical units' },
]

const delays = ['0', '1', '2', '3']

function AboutPage() {
  useRevealAnimations()
  useDocumentMeta(
    'About PhysiTAI — Our mission and team',
    'PhysiTAI brings patient-reported pain, movement and function, and thermal imaging into one structured view. Learn about our mission, values, and the team behind it.'
  )

  return (
    <>
      {/* Compact page hero, navy panel, consistent with the site's CTA-band language */}
      <section style={{ background: colors.bg, padding: 'clamp(56px,7vw,96px) clamp(16px,3vw,32px) clamp(24px,4vw,40px)' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            background: colors.navy,
            borderRadius: 24,
            padding: 'clamp(48px,7vw,96px) clamp(28px,4vw,72px)',
            textAlign: 'center',
          }}
        >
          <div style={{ ...eyebrow, color: colors.cyan }}>About PhysiTAI</div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px,4vw,50px)',
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: colors.white,
              margin: '18px auto 0',
              maxWidth: '18ch',
              textWrap: 'pretty',
            }}
          >
            Making rehabilitation measurable and accessible.
          </h1>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.75,
              color: '#C6D8EC',
              margin: '20px auto 0',
              maxWidth: '58ch',
              textWrap: 'pretty',
            }}
          >
            PhysiTAI brings patient-reported pain, movement and function, and thermal imaging
            into one structured view, so clinicians can review recovery with more context.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: colors.bg, padding: 'clamp(56px,7vw,96px) clamp(24px,4vw,48px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }} data-reveal>
          <div style={eyebrow}>Our Mission</div>
          <h2 style={{ ...heading2, margin: '18px auto 0' }}>Rehabilitation you can measure.</h2>
          <p style={{ ...bodyCopy, margin: '20px auto 0', maxWidth: '62ch' }}>
            Recovery has always been hard to see in one place. PhysiTAI brings patient-reported
            pain, movement and function, and thermal context into a consistent view, so
            clinicians can review progress over time. Our goal is simple: clearer recovery
            conversations and care that reaches more people.
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div style={eyebrow}>What Drives Us</div>
            <h2 style={{ ...heading2, margin: '18px auto 0' }}>The principles behind every build.</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
              gap: 24,
              marginTop: 'clamp(48px,6vw,72px)',
            }}
          >
            {values.map((v, i) => (
              <div key={v.title} className="hover-card" data-reveal data-reveal-delay={delays[i]} style={cardBase}>
                <div style={iconChip}>
                  <v.Icon />
                </div>
                <div style={cardTitle}>{v.title}</div>
                <div style={cardLine}>{v.line}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 data-reveal style={{ ...heading2, margin: 0, maxWidth: '24ch' }}>
            The people behind PhysiTAI.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
              gap: 24,
              marginTop: 'clamp(48px,6vw,72px)',
            }}
          >
            {team.map((member, i) => (
              <div
                key={member.name}
                className="hover-card hover-card-img"
                data-reveal
                data-reveal-delay={delays[i]}
                style={{ background: colors.white, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(10,46,92,0.06)' }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  width={917}
                  height={960}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: '100%',
                    aspectRatio: '4 / 5',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                />
                <div style={{ padding: 24 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16.5, color: colors.navy }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: colors.teal, marginTop: 6 }}>
                    {member.role}
                  </div>
                  <div style={{ fontSize: 14.5, lineHeight: 1.6, color: colors.muted, marginTop: 10 }}>{member.line}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we help */}
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 data-reveal style={{ ...heading2, margin: 0, maxWidth: '24ch' }}>
            Who we help.
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
              gap: 20,
              marginTop: 'clamp(40px,5vw,56px)',
            }}
          >
            {helpItems.map((item, i) => (
              <div
                key={item.label}
                className="hover-card"
                data-reveal
                data-reveal-delay={delays[i]}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: colors.card,
                  borderRadius: 16,
                  padding: 22,
                }}
              >
                <div style={iconChip}>
                  <item.Icon />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: colors.navy }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band, reused unchanged */}
      <CtaBand />
    </>
  )
}

export default AboutPage

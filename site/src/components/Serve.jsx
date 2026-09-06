import { forwardRef } from 'react'
import serveClinics from '../assets/images/serve-clinics.png'
import serveSports from '../assets/images/serve-sports.png'
import serveHospitals from '../assets/images/serve-hospitals.png'
import serveDefense from '../assets/images/serve-defense.png'
import { colors, heading2 } from '../lib/theme'

const card = {
  background: colors.white,
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 4px 24px rgba(10,46,92,0.06)',
  display: 'flex',
  flexDirection: 'column',
}

const cardImg = {
  display: 'block',
  width: '100%',
  aspectRatio: '3 / 2',
  height: 'auto',
  objectFit: 'cover',
  objectPosition: 'center 32%',
}

const cardTitle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 600,
  fontSize: 17,
  color: colors.navy,
}

const cardLine = {
  fontSize: 14.5,
  lineHeight: 1.65,
  color: colors.muted,
  marginTop: 8,
}

const gridPair = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,170px),1fr))',
  gap: 24,
}

const items = [
  { img: serveClinics, alt: 'Therapist treating a seated patient', title: 'Physiotherapy Clinics', line: 'Objective assessment and progress tracking.' },
  { img: serveSports, alt: 'Therapist assessing an athlete knee', title: 'Sports and Athletic Teams', line: 'Injury prevention and faster return to play.' },
  { img: serveHospitals, alt: 'Patient walking with parallel bars assisted by a nurse', title: 'Hospitals and Rehab Centers', line: 'In-patient rehab and post-surgical recovery.' },
  { img: serveDefense, alt: 'Clinician attending to a kneeling soldier', title: 'Defense and Tactical Units', line: 'Field readiness and injury management.' },
]

const Serve = forwardRef(function Serve(_props, ref) {
  return (
    <section id="serve" style={{ background: colors.bg }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(24px,4vw,48px)' }}>
        <h2 style={{ ...heading2, margin: 0, maxWidth: '24ch' }}>Built for everyone who cares about recovery.</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))',
            gap: 24,
            marginTop: 'clamp(64px,8vw,104px)',
          }}
        >
          <div style={gridPair}>
            {items.slice(0, 2).map((it) => (
              <div style={card} key={it.title}>
                <img src={it.img} alt={it.alt} style={cardImg} />
                <div style={{ padding: 28 }}>
                  <div style={cardTitle}>{it.title}</div>
                  <div style={cardLine}>{it.line}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={gridPair}>
            {items.slice(2, 4).map((it) => (
              <div style={card} key={it.title}>
                <img src={it.img} alt={it.alt} style={cardImg} />
                <div style={{ padding: 28 }}>
                  <div style={cardTitle}>{it.title}</div>
                  <div style={cardLine}>{it.line}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default Serve

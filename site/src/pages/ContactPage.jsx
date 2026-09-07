import { useState } from 'react'
import { colors, eyebrow, cardShadow, iconChip, pillPrimary, panelShell } from '../lib/theme'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { MailIcon, PhoneIcon, PinIcon, ShieldCheckIcon } from '../components/icons'
import CtaBand from '../components/CtaBand'

// Replace with your real Formspree form ID (from formspree.io), e.g.
// "https://formspree.io/f/abcdwxyz".
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const panelHeading = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontWeight: 700,
  fontSize: 22,
  color: colors.navy,
  letterSpacing: '-0.01em',
}

const labelStyle = {
  display: 'block',
  fontSize: 13.5,
  fontWeight: 600,
  color: colors.navy,
  marginBottom: 8,
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: `1.5px solid ${colors.border}`,
  background: colors.white,
  fontSize: 15,
  color: '#0E1726',
  outline: 'none',
}

const details = [
  { Icon: MailIcon, label: 'Email', value: 'physitaillp@gmail.com', href: 'mailto:physitaillp@gmail.com' },
  { Icon: PhoneIcon, label: 'Phone', value: '+91 99643 16900', href: 'tel:+919964316900' },
  { Icon: PinIcon, label: 'Location', value: 'Belagavi, Karnataka, India' },
]

function ContactDetails() {
  return (
    <div data-reveal>
      <div style={panelHeading}>Reach us directly.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: 32 }}>
        {details.map((d) => (
          <div key={d.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
            <div style={iconChip}>
              <d.Icon />
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: colors.mutedSoft }}>
                {d.label}
              </div>
              {d.href ? (
                <a href={d.href} style={{ display: 'block', fontSize: 16, fontWeight: 600, color: colors.navy, marginTop: 4 }}>
                  {d.value}
                </a>
              ) : (
                <div style={{ fontSize: 16, fontWeight: 600, color: colors.navy, marginTop: 4 }}>{d.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div data-reveal data-reveal-delay="1">
        <div style={{ background: colors.tealTint, borderRadius: 16, padding: 32 }}>
          <div style={iconChip}>
            <ShieldCheckIcon />
          </div>
          <div style={{ ...panelHeading, fontSize: 20, marginTop: 20 }}>Request sent.</div>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: colors.muted, marginTop: 10 }}>
            Thanks for reaching out. Our team will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="nav-link"
            style={{ background: 'none', border: 'none', padding: 0, marginTop: 16, fontSize: 14.5, fontWeight: 600, color: colors.teal, cursor: 'pointer' }}
          >
            Send another message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div data-reveal data-reveal-delay="1">
      <div style={panelHeading}>Send us a message.</div>
      {status === 'error' && (
        <div style={{ background: colors.card, borderRadius: 12, padding: '14px 18px', marginTop: 20 }}>
          <div style={{ fontSize: 14.5, fontWeight: 600, color: colors.navy }}>Something went wrong.</div>
          <div style={{ fontSize: 13.5, color: colors.muted, marginTop: 4 }}>
            Please try again, or email us directly at{' '}
            <a href="mailto:physitaillp@gmail.com" style={{ fontWeight: 600 }}>
              physitaillp@gmail.com
            </a>
            .
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ marginTop: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16 }}>
          <div>
            <label style={labelStyle} htmlFor="firstName">First name</label>
            <input className="form-input" style={inputStyle} type="text" id="firstName" name="firstName" required />
          </div>
          <div>
            <label style={labelStyle} htmlFor="lastName">Last name</label>
            <input className="form-input" style={inputStyle} type="text" id="lastName" name="lastName" required />
          </div>
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={labelStyle} htmlFor="email">Work email</label>
          <input className="form-input" style={inputStyle} type="email" id="email" name="email" required />
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={labelStyle} htmlFor="organization">Organization</label>
          <input className="form-input" style={inputStyle} type="text" id="organization" name="organization" />
        </div>
        <div style={{ marginTop: 16 }}>
          <label style={labelStyle} htmlFor="message">Message</label>
          <textarea
            className="form-input"
            style={{ ...inputStyle, resize: 'vertical', minHeight: 120, fontFamily: 'inherit' }}
            id="message"
            name="message"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary-navy"
          style={{ ...pillPrimary, marginTop: 24, border: 'none', cursor: status === 'sending' ? 'default' : 'pointer', opacity: status === 'sending' ? 0.7 : 1 }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </div>
  )
}

function ContactPage() {
  useRevealAnimations()
  useDocumentMeta(
    'Contact PhysiTAI — Get in touch',
    'Tell us about your clinic, team, or unit, and we will show you how PhysiTAI works in your setting.'
  )

  return (
    <>
      {/* Compact intro band, full-bleed navy, same gradient as the homepage hero */}
      <section
        style={{
          background: 'linear-gradient(115deg,#07213F 0%,#0A2E5C 45%,#116A8C 100%)',
          padding: 'clamp(88px,11vw,140px) clamp(24px,4vw,48px) clamp(240px,26vw,340px)',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ ...eyebrow, color: colors.cyan }}>Contact</div>
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
            Get in touch with our team.
          </h1>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.75,
              color: '#C6D8EC',
              margin: '20px auto 0',
              maxWidth: '52ch',
              textWrap: 'pretty',
            }}
          >
            Tell us about your clinic, team, or unit, and we will show you how PhysiTAI works in
            your setting.
          </p>
        </div>
      </section>

      {/* Floating white panel, overlapping the band above. The wrapping
          section itself stays transparent so the navy band shows through
          in the gutters around the card while it overlaps — giving it a
          floating look instead of just an early section boundary. */}
      <section
        style={{
          position: 'relative',
          zIndex: 2,
          marginTop: 'calc(-1 * clamp(200px,22vw,280px))',
          padding: '0 clamp(16px,3vw,32px) clamp(56px,7vw,96px)',
        }}
      >
        <div
          style={{
            ...panelShell,
            padding: 'clamp(40px,5vw,64px) clamp(28px,4vw,56px)',
            boxShadow: '0 20px 48px rgba(4,18,35,0.16)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 'clamp(40px,5vw,72px)',
            }}
          >
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }} data-reveal>
          <iframe
            title="PhysiTAI location in Belagavi, Karnataka"
            src="https://maps.google.com/maps?q=Belagavi,Karnataka,India&z=12&output=embed"
            style={{ display: 'block', width: '100%', height: 'clamp(280px,36vw,420px)', border: 0, borderRadius: 24, boxShadow: cardShadow }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* CTA band, reused unchanged */}
      <CtaBand />
    </>
  )
}

export default ContactPage

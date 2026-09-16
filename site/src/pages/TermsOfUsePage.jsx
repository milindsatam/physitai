import { colors } from '../lib/theme'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import LegalPageHero from '../components/LegalPageHero'
import LegalSection from '../components/LegalSection'

const linkStyle = { color: colors.teal, fontWeight: 600 }

function TermsOfUsePage() {
  useRevealAnimations()
  useDocumentMeta(
    'PhysiTAI Terms of Use',
    'The terms governing use of the PhysiTAI website, including the medical disclaimer for the platform currently in development.'
  )

  return (
    <>
      <LegalPageHero title="Terms of Use" lastUpdated="Last updated: September 2026" />
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(72px,9vw,120px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: colors.muted, textWrap: 'pretty' }} data-reveal>
            These Terms of Use govern your use of the PhysiTAI website, operated by Simplifyne
            Technologies Private Limited ("Simplifyne", "we", "us"). By accessing or using this
            website, you agree to these terms. If you do not agree, please do not use the
            website.
          </p>

          <LegalSection heading="About this website">
            This website provides general information about PhysiTAI, a rehabilitation
            intelligence platform that is currently in development. The information here
            describes our intended approach and current development status. It does not
            represent a finished product, and features described may change.
          </LegalSection>

          <LegalSection heading="Medical disclaimer">
            PhysiTAI is not a medical device, and this website does not provide medical advice,
            diagnosis, or treatment. Nothing on this website is intended to replace the judgment
            of a qualified healthcare professional. PhysiTAI is designed to support clinicians in
            organising assessments and communicating progress, with clinicians making all
            clinical decisions. The platform does not diagnose conditions, does not infer pain
            from images, and its current thermal input provides relative visual signal only, not
            calibrated temperature. No statement on this website should be taken as a claim of
            validated clinical performance, regulatory clearance, or proven patient outcomes.
            Always seek the advice of a qualified health professional for any medical condition,
            and never disregard professional advice based on information from this website.
          </LegalSection>

          <LegalSection heading="No warranties">
            This website and its content are provided on an "as is" and "as available" basis,
            without warranties of any kind, express or implied. We do not warrant that the
            website will be uninterrupted, error-free, or that the information is complete or
            current at all times.
          </LegalSection>

          <LegalSection heading="Limitation of liability">
            To the fullest extent permitted by law, Simplifyne Technologies Private Limited will
            not be liable for any direct, indirect, incidental, or consequential loss or damage
            arising from your use of, or inability to use, this website or its content.
          </LegalSection>

          <LegalSection heading="Intellectual property">
            All content on this website, including text, graphics, logos, the PhysiTAI name and
            branding, and design, is owned by or licensed to Simplifyne Technologies Private
            Limited and is protected by applicable intellectual property laws. You may not copy,
            reproduce, or reuse it without our prior written permission.
          </LegalSection>

          <LegalSection heading="Acceptable use">
            You agree to use this website lawfully and not to attempt to disrupt it, gain
            unauthorised access to it, or misuse the contact form. Enquiries submitted through the
            contact form should be genuine and relevant.
          </LegalSection>

          <LegalSection heading="Third-party links">
            This website may contain links to third-party websites, including the Simplifyne
            Technologies website. We are not responsible for the content or practices of those
            websites.
          </LegalSection>

          <LegalSection heading="Changes to these terms">
            We may update these Terms of Use from time to time. The "Last updated" date reflects
            the current version. Continued use of the website means you accept the updated terms.
          </LegalSection>

          <LegalSection heading="Governing law">
            These terms are governed by the laws of India. Any disputes will be subject to the
            jurisdiction of the courts of Belagavi, Karnataka.
          </LegalSection>

          <LegalSection heading="Contact us">
            For questions about these terms, contact Simplifyne Technologies Private Limited at{' '}
            <a href="mailto:physitaillp@gmail.com" style={linkStyle}>
              physitaillp@gmail.com
            </a>
            .
          </LegalSection>
        </div>
      </section>
    </>
  )
}

export default TermsOfUsePage

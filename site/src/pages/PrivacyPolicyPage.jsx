import { colors } from '../lib/theme'
import { useRevealAnimations } from '../hooks/useRevealAnimations'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import LegalPageHero from '../components/LegalPageHero'
import LegalSection from '../components/LegalSection'

const linkStyle = { color: colors.teal, fontWeight: 600 }

function PrivacyPolicyPage() {
  useRevealAnimations()
  useDocumentMeta(
    'PhysiTAI Privacy Policy',
    'How Simplifyne Technologies collects, uses and protects information submitted through the PhysiTAI website.'
  )

  return (
    <>
      <LegalPageHero title="Privacy Policy" lastUpdated="Last updated: September 2026" />
      <section style={{ background: colors.bg, padding: '0 clamp(24px,4vw,48px) clamp(72px,9vw,120px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: colors.muted, textWrap: 'pretty' }} data-reveal>
            This Privacy Policy explains how Simplifyne Technologies Private Limited
            ("Simplifyne", "we", "us"), which operates the PhysiTAI website, handles information
            collected through this website. PhysiTAI is a rehabilitation intelligence platform in
            development. By using this website or contacting us through it, you agree to the
            practices described here.
          </p>

          <LegalSection heading="Information we collect">
            We collect only the information you choose to provide. When you submit the contact
            form, we collect your name, email address, organization name, and the content of your
            message. This website is a static informational site and does not require you to
            create an account. We do not knowingly collect sensitive personal data or any patient
            health information through this website.
          </LegalSection>

          <LegalSection heading="How we use your information">
            We use the information you provide to respond to your enquiry, to communicate with
            you about PhysiTAI, and to understand interest in the platform as it is developed. We
            do not use it for automated decision-making, and we do not sell it.
          </LegalSection>

          <LegalSection heading="How your information is handled">
            Contact form submissions are delivered to us through Formspree, a third-party form
            service, which processes the submission solely to transmit it to us. This website is
            hosted on a static hosting service, which may process basic technical request
            information as part of serving the site. We do not run advertising or third-party
            tracking on this website.
          </LegalSection>

          <LegalSection heading="Legal basis and consent">
            We process the information you provide on the basis of your consent, given when you
            submit the contact form. You may withdraw your consent at any time by contacting us,
            after which we will stop using your information for further communication, subject to
            any records we are required to keep.
          </LegalSection>

          <LegalSection heading="Data retention">
            We keep enquiry information only as long as needed to respond to and follow up on
            your enquiry, or as required by applicable law, after which it is deleted or
            anonymised.
          </LegalSection>

          <LegalSection heading="Your rights">
            Subject to applicable law, including India's Digital Personal Data Protection Act,
            you may request access to the information we hold about you, ask us to correct or
            update it, ask us to delete it, or withdraw your consent. To exercise any of these
            rights, contact us using the details below. We will respond within a reasonable time.
          </LegalSection>

          <LegalSection heading="Security">
            We take reasonable measures to protect the information you provide. However, no
            method of transmission over the internet or electronic storage is completely secure,
            and we cannot guarantee absolute security.
          </LegalSection>

          <LegalSection heading="Third-party links">
            This website may link to third-party websites, including the Simplifyne Technologies
            website. We are not responsible for the privacy practices or content of those
            websites. Please review their policies separately.
          </LegalSection>

          <LegalSection heading="Children">
            This website is intended for clinicians, organizations, and business contacts. It is
            not directed at children, and we do not knowingly collect information from anyone
            under the age of eighteen.
          </LegalSection>

          <LegalSection heading="Changes to this policy">
            We may update this Privacy Policy from time to time. The "Last updated" date at the
            top reflects the latest version. Continued use of the website after changes means you
            accept the updated policy.
          </LegalSection>

          <LegalSection heading="Contact us">
            For any questions about this policy or your information, or to exercise your rights,
            contact Simplifyne Technologies Private Limited at{' '}
            <a href="mailto:physitaillp@gmail.com" style={linkStyle}>
              physitaillp@gmail.com
            </a>
            . We are based in Belagavi, Karnataka, India.
          </LegalSection>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicyPage

import LegalLayout, { LegalSection } from "../components/legal/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <LegalSection title="Overview">
        <p>
          PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect
          when you use our website, waitlist form, and RMIE roadmap tools, and how we use it.
        </p>
      </LegalSection>

      <LegalSection title="Information We Collect">
        <p>
          When you join the waitlist, create an account, or generate a business roadmap, we may collect your
          name, email address, phone number, business idea details, and interest level. We also collect basic
          usage data (pages visited, features used) to improve the platform.
        </p>
      </LegalSection>

      <LegalSection title="How We Use Your Information">
        <p>
          We use your information to generate your roadmap, respond to inquiries, send you updates about
          PEN2PRO plans and launch timing, and improve our products. We do not sell your personal information
          to third parties.
        </p>
      </LegalSection>

      <LegalSection title="Affiliate & Partner Links">
        <p>
          Some pages contain affiliate links to third-party services (LLC formation, banking, credit, funding,
          and more). If you click one of these links and sign up, PEN2PRO may earn a commission at no extra
          cost to you. We only recommend tools we believe are useful to founders.
        </p>
      </LegalSection>

      <LegalSection title="Data Security">
        <p>
          We use reasonable technical and organizational measures to protect your information. No method of
          transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="Your Choices">
        <p>
          You can request access to, correction of, or deletion of your personal information at any time by
          emailing support@pen2pro.com.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>Questions about this policy? Email support@pen2pro.com.</p>
      </LegalSection>
    </LegalLayout>
  );
}

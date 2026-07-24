import LegalPageLayout, { LegalSection } from "../components/layout/LegalPageLayout";

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" updated="July 2026">
      <LegalSection heading="What we collect">
        <p>
          When you use PEN2PRO — including the free roadmap builder, waitlist, Builder, Accelerator, and
          account sign-up — we collect information you provide directly, such as your name, email, phone
          number, business idea details, and payment information (handled by Stripe, never stored on our
          servers).
        </p>
      </LegalSection>
      <LegalSection heading="How we use it">
        <p>
          We use your information to generate your business roadmap, operate your account and dashboard,
          send launch and product updates, process payments, and improve the RMIE (Rapid Monetization
          Intelligence Engine). We do not sell your personal information to third parties.
        </p>
      </LegalSection>
      <LegalSection heading="Affiliate & referral links">
        <p>
          Some pages on PEN2PRO (LLC formation, business banking, funding, credit tools, and other
          resources) contain affiliate links. If you use one of these links, PEN2PRO may earn a commission
          at no additional cost to you.
        </p>
      </LegalSection>
      <LegalSection heading="Data storage & security">
        <p>
          We take reasonable technical measures to protect your data. As with any online platform, no
          method of transmission or storage is 100% secure. You can request deletion of your account data
          at any time by emailing support@pen2pro.com.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Email{" "}
          <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
            support@pen2pro.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

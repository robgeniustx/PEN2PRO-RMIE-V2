import LegalLayout, { LegalSection } from "../components/legal/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title="Terms of Service" updated="July 2026">
      <LegalSection title="Acceptance of Terms">
        <p>
          By accessing or using PEN2PRO ("the platform"), you agree to these Terms of Service. If you do not
          agree, do not use the platform.
        </p>
      </LegalSection>

      <LegalSection title="What PEN2PRO Provides">
        <p>
          PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates
          business roadmaps, strategy guidance, credit and funding readiness tools, branding direction, and
          related educational content. PEN2PRO is a planning and strategy tool — it is not a law firm,
          accounting firm, credit repair organization, or licensed financial advisor.
        </p>
      </LegalSection>

      <LegalSection title="Plans & Billing">
        <p>
          Free, Pro, Elite, and Founders Lifetime plans are described on our Pricing page. Subscription plans
          (Pro, Elite) renew automatically until canceled. Founders Lifetime is a one-time payment for lifetime
          access to the features described at the time of purchase. You can manage or cancel a subscription at
          any time from your account, or by contacting support@pen2pro.com.
        </p>
      </LegalSection>

      <LegalSection title="No Guarantee of Results">
        <p>
          PEN2PRO does not guarantee income, business success, credit repair results, or funding/loan approval.
          Outcomes depend on your individual effort, market conditions, and factors outside our control. The
          platform provides education, strategy, organization, and readiness tools — not a promise of results.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable Use">
        <p>
          You agree not to misuse the platform, attempt to access it through unauthorized means, or use it for
          unlawful purposes. We may suspend or terminate accounts that violate these terms.
        </p>
      </LegalSection>

      <LegalSection title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted means
          you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>Questions about these Terms? Email support@pen2pro.com.</p>
      </LegalSection>
    </LegalLayout>
  );
}

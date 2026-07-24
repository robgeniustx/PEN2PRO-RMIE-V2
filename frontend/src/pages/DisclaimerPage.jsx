import LegalPageLayout, { LegalSection } from "../components/layout/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" updated="July 2026">
      <LegalSection heading="Educational tool, not a guarantee">
        <p>
          PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or
          business success of any kind. The platform provides education, strategy, organization, and
          readiness tools — not a promise of outcomes.
        </p>
      </LegalSection>
      <LegalSection heading="Not legal, financial, or credit-repair services">
        <p>
          Content on PEN2PRO — including the Builder, Accelerator, Funding Readiness, and Credit Repair
          pages — is for informational and planning purposes only. It is not legal advice, tax advice,
          financial advice, or credit repair services. Consult a licensed attorney, accountant, or credit
          professional before making legal, financial, or credit-related decisions.
        </p>
      </LegalSection>
      <LegalSection heading="Results vary">
        <p>
          Every business, credit profile, and funding situation is different. Results depend on individual
          effort, market conditions, timing, and factors entirely outside PEN2PRO's control. Testimonials
          and examples shown on this platform are not a guarantee that you will achieve similar results.
        </p>
      </LegalSection>
      <LegalSection heading="Affiliate relationships">
        <p>
          PEN2PRO may earn a commission from affiliate partners recommended on this platform (LLC
          formation, business banking, funding, credit, and other tools). These recommendations reflect
          tools we believe are useful, not a guarantee of their performance.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

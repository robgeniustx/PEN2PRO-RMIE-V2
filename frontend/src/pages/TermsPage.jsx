import LegalPageLayout, { LegalSection } from "../components/layout/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026">
      <LegalSection heading="Using PEN2PRO">
        <p>
          PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through
          the RMIE (Rapid Monetization Intelligence Engine). By creating an account or using the free
          roadmap tool, you agree to these terms.
        </p>
      </LegalSection>
      <LegalSection heading="Plans & billing">
        <p>
          Free Roadmap access requires no payment. Pro, Elite, and Founders Lifetime plans are billed
          through Stripe. Subscriptions renew automatically until cancelled from your account settings.
          Founders Lifetime is a one-time payment for lifetime access to the tier benefits described on the
          Founders page at time of purchase.
        </p>
      </LegalSection>
      <LegalSection heading="No guarantee of outcomes">
        <p>
          PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
          repair results. Roadmaps, strategies, and templates are educational and organizational tools —
          your results depend on your own effort, market conditions, and factors outside our control.
        </p>
      </LegalSection>
      <LegalSection heading="Acceptable use">
        <p>
          You agree not to misuse the platform, attempt to access other users' data, or use PEN2PRO for
          unlawful purposes. We may suspend accounts that violate these terms.
        </p>
      </LegalSection>
      <LegalSection heading="Changes to these terms">
        <p>
          We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means
          you accept the updated terms.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          Questions? Email{" "}
          <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
            support@pen2pro.com
          </a>
          .
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}

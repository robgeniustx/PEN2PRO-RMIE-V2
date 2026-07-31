import LegalPageLayout from "../components/layout/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026">
      <p>
        These Terms govern your use of PEN2PRO, an AI-powered RMIE (Rapid Monetization Intelligence Engine)
        platform. By using the platform, you agree to these Terms.
      </p>
      <h2 className="text-lg font-bold text-white">Use of the Platform</h2>
      <p>
        PEN2PRO provides business roadmaps, strategy guidance, and educational tools generated with the help
        of AI. You agree to use the platform for lawful purposes and to provide accurate information when
        building your roadmap or account.
      </p>
      <h2 className="text-lg font-bold text-white">No Guarantee of Results</h2>
      <p>
        PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
        repair results. Roadmaps, strategies, and checklists are educational tools — outcomes depend on your
        effort, market conditions, and factors outside our control.
      </p>
      <h2 className="text-lg font-bold text-white">Subscriptions &amp; Billing</h2>
      <p>
        Pro, Elite, and Founders plans are billed on the cadence disclosed at checkout. You can cancel a
        recurring subscription at any time; access continues through the end of the current billing period.
      </p>
      <h2 className="text-lg font-bold text-white">Intellectual Property</h2>
      <p>
        The PEN2PRO name, brand, platform, and generated content templates are the property of PEN2PRO. Your
        business idea and roadmap content remain yours.
      </p>
      <h2 className="text-lg font-bold text-white">Changes to These Terms</h2>
      <p>We may update these Terms as the platform evolves. Continued use after changes means you accept them.</p>
    </LegalPageLayout>
  );
}

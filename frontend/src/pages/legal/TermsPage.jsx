import LegalPageLayout from "./LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="August 2026">
      <p>
        These Terms of Service govern your use of PEN2PRO, an AI-powered RMIE (Rapid Monetization Intelligence
        Engine) platform. By creating an account or using PEN2PRO, you agree to these terms.
      </p>

      <h2 className="text-lg font-bold text-white">Use of the Platform</h2>
      <p>
        PEN2PRO provides AI-generated business roadmaps, strategy guidance, and educational tools across our Free,
        Pro, Elite, and Founders tiers. You agree to use the platform lawfully and not to misuse, scrape, or resell
        generated content without permission.
      </p>

      <h2 className="text-lg font-bold text-white">Subscriptions &amp; Payments</h2>
      <p>
        Pro, Elite, and Founders plans are billed as described on the Pricing page at checkout. Subscriptions renew
        automatically unless canceled. Founders Lifetime access is a one-time payment for the benefits described on
        the Founders page. Payments are processed securely through Stripe.
      </p>

      <h2 className="text-lg font-bold text-white">No Guarantee of Results</h2>
      <p>
        PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business
        success, credit repair results, funding approval, or loan approval. Outcomes depend on individual effort,
        execution, and market conditions.
      </p>

      <h2 className="text-lg font-bold text-white">Intellectual Property</h2>
      <p>
        The PEN2PRO brand, platform, and AI-generated roadmap templates are the property of PEN2PRO. Roadmaps
        generated for your business idea are yours to use for your own venture.
      </p>

      <h2 className="text-lg font-bold text-white">Termination</h2>
      <p>
        We may suspend or terminate accounts that violate these terms. You may cancel your subscription or delete
        your account at any time.
      </p>

      <h2 className="text-lg font-bold text-white">Changes to These Terms</h2>
      <p>We may update these terms as PEN2PRO evolves. Continued use of the platform means you accept the updated terms.</p>
    </LegalPageLayout>
  );
}

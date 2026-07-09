import LegalPageLayout from "./LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service" updated="July 2026">
      <p>
        These Terms govern your use of PEN2PRO, an AI-powered RMIE (Rapid
        Monetization Intelligence Engine) platform. By using the platform, you agree
        to these Terms.
      </p>
      <h2 className="text-base font-bold text-white">The Service</h2>
      <p>
        PEN2PRO generates business roadmaps, strategy plans, and readiness checklists
        using AI, based on information you provide. Free, Pro, Elite, and Founders
        tiers unlock different levels of depth and support, described on our Pricing
        page.
      </p>
      <h2 className="text-base font-bold text-white">Your Responsibilities</h2>
      <p>
        You're responsible for the accuracy of the information you provide, for
        keeping your account credentials secure, and for making your own final
        business, legal, and financial decisions. PEN2PRO's output is guidance, not
        professional legal, tax, or financial advice.
      </p>
      <h2 className="text-base font-bold text-white">Payments &amp; Upgrades</h2>
      <p>
        Paid tiers (Pro, Elite, Founders) are billed as described at checkout.
        Founders pricing, where offered, is tied to availability and may be limited.
        You can review current pricing anytime on the Pricing page.
      </p>
      <h2 className="text-base font-bold text-white">No Guarantees</h2>
      <p>
        PEN2PRO does not guarantee income, funding approval, credit outcomes, or
        business success. Results depend on your effort, market conditions, and
        factors outside our control. See our Disclaimer for details.
      </p>
      <h2 className="text-base font-bold text-white">Changes</h2>
      <p>
        We may update these Terms as the platform evolves. Continued use after an
        update means you accept the revised Terms.
      </p>
    </LegalPageLayout>
  );
}

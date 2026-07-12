import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO provides an AI-powered business roadmap, strategy, and execution-support platform (the RMIE — Rapid Monetization Intelligence Engine). By using the free roadmap, Starter, Builder, Accelerator, Pro, Elite, or Founders experiences, you agree to these terms.",
            "You must be 18 or older, or have permission from a parent or guardian, to create an account.",
          ],
        },
        {
          heading: "Plans & billing",
          body: [
            "Free Roadmap access is available at no cost. Pro, Elite, and Founders are paid tiers with pricing shown on the Pricing page. Where checkout is not yet live, joining the waitlist reserves your spot at current pricing at launch — it is not a purchase or payment.",
            "Subscriptions, where active, renew automatically until canceled. You can cancel anytime from your dashboard once billing is live.",
          ],
        },
        {
          heading: "No guarantees",
          body: [
            "PEN2PRO provides education, strategy, organization, and planning tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "Don't use PEN2PRO to generate content for illegal activity, to impersonate others, or to abuse the platform's AI tools. We may suspend accounts that violate these terms.",
          ],
        },
      ]}
    />
  );
}

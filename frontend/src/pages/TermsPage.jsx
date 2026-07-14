import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          paragraphs: [
            "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
          ],
        },
        {
          heading: "The Platform",
          paragraphs: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy recommendations, and readiness checklists based on the information you provide. Free, Pro, Elite, and Founders tiers unlock different levels of access, detail, and support.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          paragraphs: [
            "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Your Responsibilities",
          paragraphs: ["When using PEN2PRO, you agree to:"],
          list: [
            "Provide accurate information during intake and roadmap generation",
            "Use the platform for lawful business purposes",
            "Not resell, scrape, or redistribute PEN2PRO-generated content as your own SaaS product",
            "Keep your account credentials secure",
          ],
        },
        {
          heading: "Payments and Upgrades",
          paragraphs: [
            "Pro, Elite, and Founders tiers may require payment. Pricing, billing terms, and cancellation policies will be presented at the time of purchase. Founders tier availability is limited and subject to change.",
          ],
        },
        {
          heading: "Changes to These Terms",
          paragraphs: [
            "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted means you accept the updated terms.",
          ],
        },
      ]}
    />
  );
}

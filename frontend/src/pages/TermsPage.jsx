import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By using the platform, you agree to use it for lawful purposes and to provide accurate information when creating your roadmap or account.",
        },
        {
          heading: "Plans and Billing",
          body: "Starter access is free. Pro, Elite, and Founders plans are paid tiers billed through our payment processor. Pricing, features, and availability are subject to change. Founders pricing, where offered, is locked in for the term stated at the time of purchase.",
        },
        {
          heading: "No Guarantees",
          body: "PEN2PRO provides strategy, education, and organizational tools. We do not guarantee business success, income, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
        },
        {
          heading: "Your Content",
          body: "You retain ownership of the business ideas and information you submit. You grant PEN2PRO permission to process that information solely to generate your roadmap and provide the service.",
        },
        {
          heading: "Acceptable Use",
          body: "You may not use PEN2PRO to submit unlawful content, attempt to disrupt the platform, or misrepresent your identity for fraudulent purposes.",
        },
        {
          heading: "Changes",
          body: "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
        },
      ]}
    />
  );
}

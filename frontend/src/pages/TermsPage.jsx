import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, and readiness checklists based on the information you provide. By using the platform, you agree to provide accurate information and use the output responsibly.",
          ],
        },
        {
          heading: "Plans & Access",
          body: [
            "The Starter tier provides a free preview roadmap. Pro, Elite, and Legacy Founder tiers unlock deeper roadmap detail, tracking, branding support, and additional tools, subject to the pricing and availability shown on the Pricing page.",
            "Where checkout is not yet live for a tier, joining the waitlist reserves your interest and does not create a billing obligation.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides education, strategy, structure, and organization tools. It does not guarantee business success, funding approval, loan approval, credit score changes, or any specific financial outcome. Your results depend on your own effort, market conditions, and factors outside PEN2PRO's control.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: [
            "You agree not to use PEN2PRO to generate content for illegal purposes, misrepresent yourself, or attempt to disrupt or reverse-engineer the platform.",
          ],
        },
        {
          heading: "Changes to the Platform",
          body: [
            "We may update features, pricing, and these terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the current terms.",
          ],
        },
      ]}
    />
  );
}

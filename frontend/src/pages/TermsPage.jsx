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
            "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through its Rapid Monetization Intelligence Engine (RMIE). By using the platform you agree to use it for lawful purposes and to provide accurate information during intake.",
          ],
        },
        {
          heading: "Plans & Access",
          body: [
            "Free Roadmap access is available to all users. Pro, Elite, and Founders tiers unlock additional tools and are billed according to the plan you select at checkout. Founders pricing is limited and subject to availability.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair outcomes, funding approval, or loan approval. Results depend on individual effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "Roadmaps generated for your account are yours to use for your business. The PEN2PRO platform, brand, and underlying technology remain the property of PEN2PRO.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated Terms.",
          ],
        },
      ]}
    />
  );
}

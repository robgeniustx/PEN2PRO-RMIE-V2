import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="June 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Rapid Monetization Intelligence Engine (RMIE). By using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
          ],
        },
        {
          heading: "Plans & Billing",
          body: [
            "Free, Pro, Elite, and Founders tiers each unlock different levels of access, as described on our Pricing page. Paid plans are billed on the cadence shown at checkout. You may cancel a subscription at any time; access continues through the end of the current billing period.",
          ],
        },
        {
          heading: "No Guarantees",
          body: [
            "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Roadmaps, strategies, and checklists are educational tools based on the information you provide — outcomes depend on your effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Your Content",
          body: [
            "You retain ownership of the business ideas and information you submit. You grant PEN2PRO permission to process that information to generate your roadmap and related outputs.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: [
            "Do not use PEN2PRO to submit unlawful content, attempt to disrupt the platform, or misrepresent your identity. We reserve the right to suspend accounts that violate these terms.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes take effect means you accept the updated terms.",
          ],
        },
      ]}
    />
  );
}

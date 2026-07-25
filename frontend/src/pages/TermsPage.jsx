import LegalPage from "../components/layout/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps people turn ideas, skills, and lived experience into business roadmaps, strategy, and execution support.",
            "By creating an account, generating a roadmap, or joining the waitlist, you agree to use PEN2PRO for lawful purposes and to provide accurate information.",
          ],
        },
        {
          heading: "Plans & Billing",
          body: [
            "Starter Roadmap access is free. Pro, Elite, and Founders plans are paid tiers with features described on their respective pages. Where checkout is not yet live, you can join the waitlist to be notified when it opens.",
            "Subscriptions renew automatically unless canceled. You can cancel anytime from your account settings; access continues through the end of the current billing period.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides education, strategy, organization, and readiness tools. PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval.",
            "Roadmaps, action plans, and AI-generated content are strategic guidance based on the information you provide — not legal, financial, or tax advice. Consult a licensed professional before making major business, credit, or funding decisions.",
          ],
        },
        {
          heading: "Your Content",
          body: [
            "You retain ownership of the business ideas and information you enter into PEN2PRO. We use that information to generate your roadmap and improve the platform, as described in the Privacy Policy.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.",
          ],
        },
      ]}
    />
  );
}

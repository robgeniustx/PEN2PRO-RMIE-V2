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
            "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps you turn ideas, skills, and lived experience into business roadmaps, strategy plans, and execution guidance.",
            "By creating an account, generating a roadmap, or joining the waitlist, you agree to these terms.",
          ],
        },
        {
          heading: "Plans and Billing",
          body: [
            "Free (Starter) access includes a preview roadmap at no cost. Pro, Elite, and Founders are paid tiers that unlock deeper strategy tools, tracking, and support, billed through Stripe.",
            "Subscriptions renew automatically unless canceled. Founders tier offers, where available, are limited and priced as advertised at time of purchase.",
          ],
        },
        {
          heading: "No Guarantee of Results",
          body: [
            "PEN2PRO provides education, strategy, organization, and readiness tools — not guarantees. We do not guarantee business success, revenue, funding approval, loan approval, or credit repair outcomes.",
            "Results depend on your individual effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Acceptable Use",
          body: [
            "You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, or to attempt to disrupt or reverse-engineer the platform.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "Roadmaps and content generated for your account are yours to use for your business. PEN2PRO's platform, branding, and underlying technology remain our property.",
          ],
        },
        {
          heading: "Changes",
          body: ["We may update these terms as the platform evolves. Continued use after changes means you accept the updated terms."],
        },
      ]}
    />
  );
}

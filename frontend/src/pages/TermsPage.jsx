import LegalPage from "./LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="July 2026"
      sections={[
        {
          heading: "Using PEN2PRO",
          body: [
            "PEN2PRO (\"the platform\") provides AI-generated business roadmaps, strategy tools, and readiness checklists through the RMIE — Rapid Monetization Intelligence Engine. Free, Pro, Elite, and Legacy Founder tiers unlock different levels of access, described on the Pricing page.",
            "You must provide accurate information when creating a roadmap or account. You are responsible for how you use the strategies, checklists, and guidance the platform provides.",
          ],
        },
        {
          heading: "No guarantees",
          body: [
            "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on individual effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Subscriptions and billing",
          body: [
            "Pro, Elite, and Legacy Founder tiers are billed according to the plan you select at checkout. You can view current pricing on the Pricing page. Founders pricing, where offered, is limited-availability and described on the Founders page at time of purchase.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to misuse the platform — including attempting to break the AI systems, resell platform output as your own software, or use PEN2PRO for unlawful purposes.",
          ],
        },
      ]}
    />
  );
}

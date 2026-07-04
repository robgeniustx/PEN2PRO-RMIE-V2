import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational Purpose",
          body: [
            "PEN2PRO is an educational and strategy platform. Roadmaps, checklists, and AI-generated guidance are meant to help you plan and organize — they are not legal, financial, tax, or credit repair advice.",
          ],
        },
        {
          heading: "No Guaranteed Outcomes",
          body: [
            "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every business, credit profile, and funding situation is different. The platform provides education, strategy, organization, and readiness tools — the execution and outcome depend on you.",
          ],
        },
        {
          heading: "Professional Advice",
          body: [
            "For legal formation (LLC, EIN), tax questions, or credit disputes, consult a licensed attorney, accountant, or credit professional. PEN2PRO's checklists are designed to prepare you for those conversations, not replace them.",
          ],
        },
        {
          heading: "Lived Experience, Not a Promise",
          body: [
            "Founder Robert Green's story reflects his own path. Individual results vary based on effort, resources, market, and circumstances.",
          ],
        },
      ]}
    />
  );
}

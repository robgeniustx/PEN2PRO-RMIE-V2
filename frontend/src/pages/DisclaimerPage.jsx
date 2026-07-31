import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "No Guaranteed Results",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, business success, or credit repair results. The Platform provides education, strategy, organization, and readiness tools — the outcome depends on your effort, execution, and market conditions.",
  },
  {
    heading: "Not Legal, Tax, or Financial Advice",
    body: "Roadmap output, checklists, and strategy guidance from PEN2PRO's AI engine are for informational and planning purposes only. They are not a substitute for advice from a licensed attorney, accountant, tax professional, or financial advisor. Consult a qualified professional before making legal, tax, or major financial decisions.",
  },
  {
    heading: "Credit & Funding Disclaimer",
    body: "PEN2PRO does not perform credit repair services, is not a credit repair organization, and does not guarantee any change to your credit score or approval for any loan, line of credit, or vendor account. Funding and credit-building steps described on the Platform are general strategies used by entrepreneurs and are not promises of approval.",
  },
  {
    heading: "Affiliate Relationships",
    body: "PEN2PRO may recommend third-party services (LLC formation, banking, credit monitoring, funding partners, and similar tools) and may earn a commission if you sign up through our links. We only recommend services we believe are useful, but we do not control their terms, pricing, or outcomes.",
  },
  {
    heading: "Founder Story Disclaimer",
    body: "Robert Green's story shared on the About page reflects his personal experience. Individual results and journeys vary — PEN2PRO does not claim that every user will have the same outcomes.",
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

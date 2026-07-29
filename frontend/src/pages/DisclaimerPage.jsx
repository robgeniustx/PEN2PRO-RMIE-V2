import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Educational purpose",
    body: "PEN2PRO's AI-generated roadmaps, checklists, and strategy content are for educational and organizational purposes only. They are not legal, tax, financial, or credit-repair advice.",
  },
  {
    heading: "No guaranteed results",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — results depend on individual effort, market conditions, and factors outside our control.",
  },
  {
    heading: "Credit and funding content",
    body: "Credit-building and funding-readiness content reflects general best practices, not a promise of any specific credit score change, credit line, loan, or investment. Always verify requirements directly with lenders, vendors, and credit bureaus.",
  },
  {
    heading: "Affiliate links",
    body: "Some pages contain affiliate links to third-party services (LLC formation, banking, funding, tools). PEN2PRO may earn a commission if you use these links, at no extra cost to you. We only recommend services we believe are useful to founders.",
  },
  {
    heading: "Professional advice",
    body: "For legal, tax, accounting, or credit-related decisions, consult a licensed professional. PEN2PRO is a strategy and organization tool, not a replacement for professional counsel.",
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

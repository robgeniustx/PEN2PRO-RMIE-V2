import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "No guaranteed outcomes",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every roadmap, strategy, and checklist is a planning tool — the results depend on your effort, market conditions, financial situation, and factors outside our control.",
    ],
  },
  {
    heading: "Education and strategy, not professional services",
    body: [
      "PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurship, funding readiness, and credit building. We are not a law firm, CPA firm, credit repair organization, or lender. Nothing on this platform is legal, tax, credit repair, or financial advice.",
      "Before making legal, tax, credit, or lending decisions, consult a licensed attorney, accountant, or financial professional.",
    ],
  },
  {
    heading: "Affiliate disclosure",
    body: [
      "Some links on PEN2PRO (LLC formation, business banking, business credit, funding partners, and similar tools) are affiliate links. We may earn a commission if you use them, at no extra cost to you. We only link to services we believe are genuinely useful to founders.",
    ],
  },
  {
    heading: "Your responsibility",
    body: [
      "You're responsible for evaluating any strategy, vendor, or opportunity referenced on PEN2PRO before acting on it. Business, credit, and funding decisions carry real risk — proceed with your own due diligence.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      updated="July 2026"
      sections={SECTIONS}
    />
  );
}

import LegalPage from "./LegalPage";

const sections = [
  {
    heading: "Educational purpose",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and pursue a business idea. It is not a guarantee of any outcome.",
  },
  {
    heading: "No guaranteed results",
    body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every roadmap, checklist, and strategy is a starting point — your results depend on your effort, execution, market conditions, and factors outside PEN2PRO's control.",
  },
  {
    heading: "Not professional advice",
    body: "Content on PEN2PRO is not legal, tax, financial, or credit repair advice. For decisions with legal or financial consequences — forming a business entity, disputing credit report items, or taking on funding — consult a licensed professional.",
  },
  {
    heading: "Affiliate relationships",
    body: "PEN2PRO may link to third-party services (LLC formation, business banking, funding partners, and similar tools) and may earn a commission if you use them. We recommend tools we believe are useful, but we do not control or guarantee their services.",
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={sections} />;
}

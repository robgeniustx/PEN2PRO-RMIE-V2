import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Educational Purpose",
    body: [
      "PEN2PRO RMIE (Rapid Monetization Intelligence Engine) provides business roadmaps, strategy guidance, funding readiness checklists, credit-building education, and execution tools for informational and educational purposes only.",
    ],
  },
  {
    heading: "No Guaranteed Outcomes",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every business and financial situation is different, and results depend on individual effort, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Not Legal, Financial, or Credit Repair Services",
    body: [
      "PEN2PRO is not a law firm, accounting firm, licensed credit repair organization, or lender. Content on this platform should not be treated as legal, tax, financial, or credit repair advice. Consult a qualified attorney, accountant, or licensed professional before making decisions that carry legal, financial, or credit implications.",
    ],
  },
  {
    heading: "Funding and Credit Content",
    body: [
      "Funding readiness and credit-building information is intended to help you organize, prepare, and understand the process. It does not constitute a promise of approval from any lender, bank, or credit bureau, and PEN2PRO is not affiliated with any credit bureau.",
    ],
  },
  {
    heading: "Affiliate Relationships",
    body: [
      "PEN2PRO may earn a commission when you use certain partner links (LLC formation, business banking, funding, and similar services). This does not increase your cost and does not influence the educational content we provide.",
    ],
  },
  {
    heading: "Your Responsibility",
    body: [
      "You are responsible for reviewing any roadmap, checklist, or AI-generated output and deciding what is right for your specific situation before taking action.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

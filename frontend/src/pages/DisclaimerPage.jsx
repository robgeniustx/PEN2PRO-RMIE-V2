import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Educational & Strategic Tool",
    body: [
      "PEN2PRO is an AI-powered roadmap and strategy platform. Every roadmap, checklist, funding readiness score, and credit-building step is provided for educational and planning purposes — it is not legal, tax, financial, credit repair, or investment advice.",
    ],
  },
  {
    heading: "No Guaranteed Results",
    body: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Every business, market, and financial situation is different, and results depend on individual effort, execution, and market conditions outside our control.",
    ],
  },
  {
    heading: "Funding & Credit Guidance",
    body: [
      "Content on the Funding Readiness and Credit Repair pages is meant to help you organize, prepare, and understand what lenders and credit bureaus typically look for. It does not guarantee approval by any lender, bank, or vendor, and it is not a substitute for advice from a licensed credit counselor, attorney, or financial advisor.",
    ],
  },
  {
    heading: "Affiliate Relationships",
    body: [
      "Some links on PEN2PRO (LLC formation, business banking, credit tools, funding partners, and other vendors) are affiliate links. We may earn a commission if you sign up through them, at no extra cost to you. We only recommend tools and partners we believe are useful for early-stage entrepreneurs.",
    ],
  },
  {
    heading: "Your Responsibility",
    body: [
      "Before making legal, financial, or business formation decisions, verify requirements with a qualified attorney, accountant, or licensed professional in your state.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

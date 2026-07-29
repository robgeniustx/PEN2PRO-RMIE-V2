import LegalPageLayout from "../components/legal/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Educational Purpose",
    body: [
      "PEN2PRO's Rapid Monetization Intelligence Engine (RMIE) provides education, strategy, organization, and readiness tools to help you plan and launch a business. It is not legal, tax, financial, or credit repair advice.",
    ],
  },
  {
    heading: "No Guaranteed Results",
    body: [
      "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Every roadmap, checklist, and strategy is a starting point — outcomes depend on your effort, execution, market conditions, and factors outside our control.",
    ],
  },
  {
    heading: "Credit and Funding Content",
    body: [
      "Content on the Funding Readiness and Credit Repair pages is for informational and organizational purposes only. We are not a credit repair organization, lender, or law firm. Always verify requirements directly with lenders, vendors, and licensed professionals before making financial decisions.",
    ],
  },
  {
    heading: "Affiliate Relationships",
    body: [
      "PEN2PRO may earn a commission from partners linked on the Affiliate, Funding, and Credit Repair pages. We only recommend services we believe can help, but you should evaluate any third-party offer independently before signing up.",
    ],
  },
  {
    heading: "Your Responsibility",
    body: [
      "You are responsible for the business, financial, and legal decisions you make using information from PEN2PRO. We recommend consulting a licensed attorney, accountant, or financial advisor for guidance specific to your situation.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPageLayout title="Disclaimer" updated="July 29, 2026" sections={SECTIONS} />;
}

import LegalPage from "../components/layout/LegalPage";

const SECTIONS = [
  {
    heading: "Education and strategy, not a guarantee",
    body: [
      "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not a promise of a specific outcome.",
    ],
  },
  {
    heading: "Roadmaps are a starting point",
    body: [
      "Your free, Pro, Elite, or Founders roadmap is generated from the information you provide and general business, marketing, and funding-readiness principles. It is not personalized legal, tax, financial, or investment advice, and it doesn't replace consulting a licensed attorney, accountant, or financial advisor for your specific situation.",
    ],
  },
  {
    heading: "Credit and funding readiness",
    body: [
      "Content on the Funding and Credit Repair pages is meant to help you get organized and understand what lenders and vendors typically look for. It is not a credit repair service, and it does not guarantee any lender, bank, or vendor will approve you.",
    ],
  },
  {
    heading: "Affiliate links",
    body: [
      "Some resources on the Affiliate page link to third-party services (LLC formation, business banking, funding partners, and similar tools). PEN2PRO may earn a referral fee from these partners. We only link to services we believe are useful — but you should evaluate any third-party service on its own terms before signing up.",
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

import LegalPage from "../components/legal/LegalPage";

const SECTIONS = [
  {
    heading: "Educational, Not Guaranteed",
    body: [
      "PEN2PRO provides education, strategy, organization, and readiness tools for building a business. PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Results depend on your individual effort, execution, and market conditions.",
    ],
  },
  {
    heading: "Not Legal, Financial, or Tax Advice",
    body: [
      "Nothing on PEN2PRO — including roadmap output, LLC/EIN checklists, funding readiness plans, and credit-building steps — is legal, financial, tax, or credit repair advice. Consult a licensed attorney, accountant, or financial professional before making business, legal, or credit decisions.",
    ],
  },
  {
    heading: "Credit & Funding",
    body: [
      "Funding readiness checklists and credit-building strategies on PEN2PRO are provided for organization and education only. PEN2PRO is not a credit repair organization, lender, or funding provider, and cannot guarantee a specific credit score outcome, dispute result, or loan/funding approval.",
    ],
  },
  {
    heading: "Affiliate Relationships",
    body: [
      "PEN2PRO may earn a commission when you use links to third-party partners (LLC formation, business banking, funding, bookkeeping, and similar services) featured on the Affiliate page. These are optional resources — you are never required to use them, and PEN2PRO does not control their pricing, service, or outcomes.",
    ],
  },
  {
    heading: "Your Responsibility",
    body: [
      "You are responsible for how you use PEN2PRO's roadmaps, checklists, and strategy output in your own business. Execution, due diligence, and final decisions are yours.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="August 2026" sections={SECTIONS} />;
}

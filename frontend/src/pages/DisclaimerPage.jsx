import LegalPageLayout from "../components/layout/LegalPageLayout";

const SECTIONS = [
  {
    heading: "Educational Purpose",
    paragraphs: [
      "PEN2PRO provides business education, strategy, planning tools, and organizational resources. Roadmaps, checklists, and AI-generated output are guidance — not professional legal, tax, financial, or credit-repair advice.",
    ],
  },
  {
    heading: "No Guaranteed Results",
    paragraphs: [
      "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every founder's situation, market, and effort level is different. What worked for one business will not automatically work for another.",
    ],
  },
  {
    heading: "Credit & Funding Tools",
    paragraphs: [
      "Our Credit Readiness and Funding Readiness tools are organizational and educational in nature. They help you prepare documentation and understand common lender/vendor expectations — they do not act as a credit repair organization, lender, or financial institution, and we do not process disputes on your behalf.",
    ],
  },
  {
    heading: "Third-Party Affiliate Partners",
    paragraphs: [
      "PEN2PRO may recommend or link to third-party partners (LLC formation, banking, business credit, funding, bookkeeping, and similar services). We may earn a referral commission from some of these partners. We do not control and are not responsible for the products, services, or outcomes provided by third parties.",
    ],
  },
  {
    heading: "Your Responsibility",
    paragraphs: [
      "You are responsible for your own business decisions, legal compliance, and financial choices. When in doubt, consult a licensed attorney, accountant, or financial advisor before making major decisions.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPageLayout title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Education & Strategy, Not Guarantees",
    body: [
      "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcomes depend on your effort, execution, and market conditions.",
    ],
  },
  {
    heading: "Not Legal, Financial, or Credit Repair Services",
    body: [
      "Nothing on PEN2PRO constitutes legal, tax, financial, or professional credit repair advice. Roadmaps, checklists, and strategy guidance are meant to help you organize and prepare — always consult a licensed attorney, accountant, or financial advisor for decisions specific to your situation.",
      "Credit and funding readiness tools help you understand and prepare your profile; they do not remove accurate negative information from your credit report and do not guarantee any lender or investor decision.",
    ],
  },
  {
    heading: "AI-Generated Content",
    body: [
      "Roadmaps and recommendations are generated with AI based on the information you provide. Review all output critically and verify anything related to legal formation (LLC/EIN), licensing, or regulated industries with the appropriate authority before acting on it.",
    ],
  },
  {
    heading: "Affiliate Relationships",
    body: [
      "PEN2PRO may earn a commission when you use partner links for services like LLC formation, business banking, or funding. We only recommend resources we believe can genuinely help — but you should evaluate any third-party service independently before committing.",
    ],
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

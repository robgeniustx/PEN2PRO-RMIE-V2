import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Educational Purpose",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and pursue a business idea. It is not legal, tax, financial, or credit-repair advice, and it does not replace guidance from a licensed attorney, accountant, or financial professional.",
  },
  {
    heading: "No Guaranteed Outcomes",
    body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Every roadmap, checklist, and strategy is a starting point — results depend on your individual effort, execution, resources, and market conditions.",
  },
  {
    heading: "Founder Story",
    body: "The founder story shared on this platform reflects one person's real, lived experience. It is shared for context and inspiration, not as a promise that any specific outcome will be repeated for every user.",
  },
  {
    heading: "Third-Party & Affiliate Resources",
    body: "PEN2PRO may recommend or link to third-party services (LLC formation, banking, credit, funding, marketing, and similar partners). We are not responsible for the products, services, pricing, or outcomes provided by these third parties.",
  },
  {
    heading: "Your Decisions Are Your Own",
    body: "Any business, financial, credit, or legal decision you make based on PEN2PRO content is your decision and your responsibility. Please consult qualified professionals before making significant business or financial commitments.",
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

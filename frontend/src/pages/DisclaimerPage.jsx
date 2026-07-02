import LegalPage from "./LegalPage";

const SECTIONS = [
  {
    heading: "Education and strategy, not guarantees",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. The platform provides education, strategy, organization, and readiness tools — the execution is up to you.",
  },
  {
    heading: "Not legal, financial, or credit repair services",
    body: "PEN2PRO is not a law firm, accounting firm, lender, or credit repair organization. Roadmap output, funding readiness checklists, and credit-building steps are informational. Consult a licensed attorney, accountant, or credit professional for advice specific to your situation.",
  },
  {
    heading: "Affiliate and partner links",
    body: "Some pages on PEN2PRO — including LLC formation, business banking, business credit, funding, domain, bookkeeping, payment, CRM, and insurance resources — contain affiliate links. PEN2PRO may earn a commission if you use these links, at no extra cost to you. We only recommend partners we believe add real value to founders.",
  },
  {
    heading: "Individual results vary",
    body: "Every business, market, and founder is different. Results shared on PEN2PRO, including Robert Green's own story, reflect individual experience and are not a promise of what you will achieve.",
  },
];

export default function DisclaimerPage() {
  return <LegalPage title="Disclaimer" updated="July 2026" sections={SECTIONS} />;
}

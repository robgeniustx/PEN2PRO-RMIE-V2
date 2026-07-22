import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational & Strategic Tool, Not a Guarantee",
          body: "PEN2PRO is an AI-powered business strategy and roadmap platform. It provides education, planning frameworks, and readiness tools — not financial, legal, credit repair, or investment advice, and not a promise of any specific outcome.",
        },
        {
          heading: "Income & Business Results",
          body: "Any income examples, growth timelines, or business outcomes referenced on PEN2PRO are illustrative, not guarantees. Your results depend on your market, effort, capital, and execution.",
        },
        {
          heading: "Funding & Credit",
          body: "PEN2PRO does not guarantee funding approval, loan approval, vendor tradeline approval, or credit score improvement. Funding readiness and credit-building checklists are organizational and educational tools, not a substitute for advice from a licensed credit counselor, attorney, or financial advisor.",
        },
        {
          heading: "Affiliate & Partner Links",
          body: "PEN2PRO may link to third-party partners for LLC formation, business banking, funding, credit, domains, bookkeeping, payments, CRM, insurance, and marketing tools. We may earn a commission from these partners. We do not control and are not responsible for the products, services, or outcomes of third-party providers.",
        },
        {
          heading: "Your Responsibility",
          body: "Before making legal, financial, or credit decisions, consult a qualified professional. PEN2PRO is a tool to help you plan and organize — the decisions and the work are yours.",
        },
      ]}
    />
  );
}

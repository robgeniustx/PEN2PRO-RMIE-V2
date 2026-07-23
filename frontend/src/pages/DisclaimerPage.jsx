import LegalPage from "../components/layout/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Education, not guarantees",
          body: "PEN2PRO provides education, strategy, organization, and readiness tools. PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every result depends on individual effort, financial history, and market conditions.",
        },
        {
          heading: "Not legal, financial, or tax advice",
          body: "Roadmap output, funding readiness checklists, and credit-building steps are general guidance, not legal, financial, tax, or credit repair advice. For decisions with legal or financial consequences — entity formation, contracts, tax filings, loan agreements — consult a licensed attorney, accountant, or financial professional.",
        },
        {
          heading: "Affiliate relationships",
          body: "Pages like Affiliate, Funding, and Credit Repair link to third-party partners for services such as LLC formation, business banking, business credit, and funding. PEN2PRO may earn a commission from these partners. Inclusion on PEN2PRO does not constitute an endorsement of guaranteed results from any partner.",
        },
        {
          heading: "Your responsibility",
          body: "You are responsible for verifying any business, legal, or financial decision before acting on it. PEN2PRO is a tool to help you plan and organize — execution, diligence, and final decisions are yours.",
        },
      ]}
    />
  );
}

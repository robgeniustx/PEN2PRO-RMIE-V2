import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational purpose",
          body: "PEN2PRO's roadmaps, strategies, checklists, and AI-generated recommendations are for educational and planning purposes. They are not legal, tax, financial, or credit-repair advice.",
        },
        {
          heading: "No guaranteed results",
          body: "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the outcome depends on your effort, execution, and market conditions.",
        },
        {
          heading: "Credit and funding readiness",
          body: "Funding readiness and credit-building content on PEN2PRO is general guidance, not a substitute for advice from a licensed credit counselor, attorney, or financial advisor. Always verify requirements with lenders and official agencies directly.",
        },
        {
          heading: "Affiliate relationships",
          body: "PEN2PRO may earn a commission when you sign up for a partner service (LLC formation, banking, credit, funding, and similar tools) through a link on this site. We only recommend partners we believe can genuinely help — but do your own research before committing.",
        },
      ]}
    />
  );
}

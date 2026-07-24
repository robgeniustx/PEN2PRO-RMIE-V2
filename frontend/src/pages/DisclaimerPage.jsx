import LegalPage from "../components/layout/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational Purpose",
          body: "PEN2PRO and its RMIE (Rapid Monetization Intelligence Engine) roadmaps, checklists, and strategy tools are provided for educational and organizational purposes. They are not financial, legal, tax, or credit repair advice.",
        },
        {
          heading: "No Guarantee of Results",
          body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every builder's outcome depends on their own effort, resources, market, and execution. Past results — including the founder's story — are not a promise of future results for any user.",
        },
        {
          heading: "Funding & Credit Content",
          body: "Content on the Funding Readiness and Credit Repair pages is strategy and organization guidance, not a substitute for advice from a licensed financial advisor, attorney, or credit counselor. Always verify requirements directly with lenders, credit bureaus, and relevant agencies.",
        },
        {
          heading: "Affiliate Relationships",
          body: "PEN2PRO may earn a commission when you use certain partner links (LLC formation, business banking, funding, and similar services). This does not change the price you pay and does not influence our recommendation of PEN2PRO's own plans.",
        },
      ]}
    />
  );
}

import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Educational and strategic tool, not a guarantee",
          body: [
            "PEN2PRO does not guarantee income, funding approval, loan approval, business success, or credit repair results. The platform provides education, strategy, organization, and readiness tools — the outcome depends on your effort, execution, and market conditions.",
          ],
        },
        {
          heading: "Not legal, financial, or credit repair services",
          body: [
            "PEN2PRO is not a law firm, accounting firm, licensed credit repair organization, or lender. Business formation, funding readiness, and credit-building guidance is provided for informational purposes. Consult a licensed attorney, accountant, or financial professional before making legal, tax, or lending decisions.",
          ],
        },
        {
          heading: "Affiliate relationships",
          body: [
            "Some links on the Affiliate, Funding, and Credit Repair pages are affiliate links to third-party partners (LLC formation, business banking, business credit, funding, and related services). PEN2PRO may earn a commission if you use these links. We only recommend partners we believe add real value to founders using the platform.",
          ],
        },
      ]}
    />
  );
}

import LegalPageLayout from "../components/legal/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      eyebrow="LEGAL"
      title="Disclaimer"
      updated="July 8, 2026"
      sections={[
        {
          heading: "Educational Purpose",
          body: [
            "PEN2PRO provides business education, strategy frameworks, roadmap generation, and readiness tools. Nothing on this platform constitutes legal, tax, financial, or credit repair advice.",
          ],
        },
        {
          heading: "No Guaranteed Outcomes",
          body: [
            "PEN2PRO does not guarantee income, funding approval, loan approval, business success, or credit repair results. Every roadmap, strategy, and checklist is a starting point — results depend on your effort, execution, market conditions, and factors we do not control.",
          ],
        },
        {
          heading: "Credit & Funding Tools",
          body: [
            "Funding readiness and credit-building content is provided for organizational and educational purposes only. Always verify requirements directly with lenders, vendors, and credit bureaus before making financial decisions.",
          ],
        },
        {
          heading: "Affiliate Relationships",
          body: [
            "PEN2PRO may earn commissions from affiliate partners recommended on this platform (LLC formation, banking, credit, funding, and other business tools). We only recommend tools we believe in — commissions do not change our recommendations.",
          ],
        },
        {
          heading: "Your Responsibility",
          body: [
            "You are responsible for your own business, legal, and financial decisions. Consult a licensed attorney, accountant, or financial advisor for guidance specific to your situation.",
          ],
        },
      ]}
    />
  );
}

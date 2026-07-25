import LegalPage from "../components/layout/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Education & Strategy, Not Guarantees",
          body: [
            "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the execution and outcome depend on your individual effort, market conditions, and factors outside our control.",
          ],
        },
        {
          heading: "Not Legal, Financial, or Credit Repair Services",
          body: [
            "PEN2PRO is not a law firm, accounting firm, lender, or credit repair organization. Content on this platform — including roadmaps, funding readiness checklists, and credit-building guidance — is for informational and strategic planning purposes only.",
            "Before forming a business entity, applying for funding, or disputing credit report items, consult a licensed attorney, accountant, or credit professional.",
          ],
        },
        {
          heading: "Affiliate Relationships",
          body: [
            "PEN2PRO may earn a commission when you use certain partner links for services like LLC formation, business banking, funding, or bookkeeping. This does not change the price you pay and does not influence the strategic guidance we provide.",
          ],
        },
        {
          heading: "Your Responsibility",
          body: [
            "You are responsible for verifying information, complying with applicable laws, and making your own final decisions about your business, credit, and finances.",
          ],
        },
      ]}
    />
  );
}

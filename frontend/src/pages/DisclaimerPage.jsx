import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          heading: "Education and strategy, not guarantees",
          body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — the work of building your business is still yours to do.",
        },
        {
          heading: "Not financial, legal, or credit repair advice",
          body: "Roadmap output, funding readiness checklists, and credit-building steps are for informational purposes only and are not a substitute for advice from a licensed attorney, accountant, credit counselor, or financial advisor.",
        },
        {
          heading: "Affiliate relationships",
          body: "PEN2PRO may earn a commission when you sign up for LLC formation, banking, credit, funding, or other partner services through links on this site. We only recommend tools we believe are useful for builders.",
        },
        {
          heading: "Individual results vary",
          body: "Every business, market, and situation is different. Examples, case studies, and founder stories shared on PEN2PRO reflect individual experiences and are not a promise of what you will achieve.",
        },
      ]}
    />
  );
}

import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="August 2026"
      sections={[
        {
          heading: "Educational Purpose Only",
          body: "PEN2PRO provides business strategy education, roadmap generation, and organizational tools. Nothing on this platform constitutes legal, tax, financial, credit repair, or investment advice.",
        },
        {
          heading: "No Guarantee of Income, Funding, or Credit Results",
          body: "PEN2PRO does not guarantee income, funding approval, loan approval, or business success. It does not guarantee any specific credit repair outcome, credit score change, or removal of items from a credit report. Results depend on your individual effort, market conditions, lender or credit bureau decisions, and factors outside our control.",
        },
        {
          heading: "Founder Story",
          body: "Any founder or customer stories shared on this platform reflect individual experiences and are not a promise of similar results for any other user.",
        },
        {
          heading: "Affiliate Relationships",
          body: "PEN2PRO may earn a commission when you use partner links for services like LLC formation, business banking, funding, or credit repair. These partnerships do not increase your cost and do not influence the honesty of our guidance.",
        },
        {
          heading: "Professional Advice",
          body: "Always consult a licensed attorney, accountant, credit counselor, or financial advisor before making significant legal, tax, credit, or financial decisions for your business.",
        },
      ]}
    />
  );
}

import LegalPage from "./LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="DISCLAIMER"
      title="Disclaimer"
      updated="July 2026"
      sections={[
        {
          title: "Educational Purpose Only",
          body: (
            <p>
              PEN2PRO and its Rapid Monetization Intelligence Engine (RMIE) provide business roadmaps,
              strategy guidance, funding readiness checklists, and credit-building education. This
              content is for informational and educational purposes only and does not constitute
              financial, legal, tax, or credit repair advice.
            </p>
          ),
        },
        {
          title: "No Guaranteed Outcomes",
          body: (
            <p>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, income,
              or business success. Every business, credit profile, and financial situation is different.
              Results depend on individual effort, market conditions, lender requirements, and factors
              outside PEN2PRO's control.
            </p>
          ),
        },
        {
          title: "Consult a Professional",
          body: (
            <p>
              Before making financial, legal, or credit decisions, consult a licensed attorney,
              accountant, financial advisor, or credit counselor. PEN2PRO's checklists and strategy tools
              are designed to help you prepare and organize — they are not a substitute for professional
              advice.
            </p>
          ),
        },
        {
          title: "Affiliate & Partner Resources",
          body: (
            <p>
              PEN2PRO may recommend third-party services (LLC formation, banking, credit, funding,
              insurance, and more) and may earn a commission if you use those services. Recommendations
              are based on what we believe is useful to builders — always review a partner's own terms
              before signing up.
            </p>
          ),
        },
      ]}
    />
  );
}

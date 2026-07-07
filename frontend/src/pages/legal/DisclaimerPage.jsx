import LegalPageLayout from "./LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" updated="July 2026">
      <p>
        PEN2PRO is an education, strategy, and organization platform. It does not guarantee credit repair
        results, funding approval, loan approval, or business success. Roadmaps, checklists, and AI-generated
        guidance are strategic tools meant to help you plan and take action — not promises of a specific
        outcome.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Not Financial, Legal, or Credit Repair Advice</h2>
      <p>
        Nothing on PEN2PRO constitutes formal financial, legal, tax, or credit repair advice. Funding
        readiness and credit-building content is provided for educational purposes. Consult a licensed
        professional before making financial, legal, or credit-related decisions.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Individual Results Vary</h2>
      <p>
        Outcomes depend on your effort, market conditions, industry, location, and many factors outside
        PEN2PRO's control. Past results referenced anywhere on this site — including the founder's story — are
        individual experiences and are not typical or guaranteed for every user.
      </p>
      <h2 className="text-lg font-bold text-white pt-2">Affiliate Relationships</h2>
      <p>
        PEN2PRO may earn a commission when you use certain partner links (LLC formation, banking, funding,
        credit, and other tools) referenced on the Affiliate, Funding, and Credit Repair pages. This does not
        cost you anything extra and does not influence our educational content.
      </p>
    </LegalPageLayout>
  );
}

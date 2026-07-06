import { useEffect } from "react";
import LegalLayout from "../components/legal/LegalLayout";

const SECTIONS = [
  {
    heading: "Not Financial, Legal, or Credit Advice",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. Nothing on this platform is financial, legal, tax, or credit repair advice. Roadmaps, funding readiness checklists, and credit-building steps are general guidance, not personalized professional advice.",
  },
  {
    heading: "No Guaranteed Outcomes",
    body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, business income, or business success. Outcomes depend on your individual effort, market conditions, lender/vendor decisions, and factors outside our control.",
  },
  {
    heading: "Third-Party Vendors & Affiliates",
    body: "PEN2PRO may link to or recommend third-party vendors (LLC formation, banking, credit monitoring, funding, and marketing partners) on our Affiliate, Funding, and Credit Repair pages. We may earn a commission from some of these links. We do not control and are not responsible for the products, services, or outcomes provided by third parties.",
  },
  {
    heading: "Your Responsibility",
    body: "You are responsible for verifying information, consulting a licensed attorney, accountant, or credit professional where appropriate, and making your own business decisions. Use PEN2PRO's tools as a starting structure, not a substitute for professional advice.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <LegalLayout title="Disclaimer" updated="July 6, 2026">
      {SECTIONS.map((s) => (
        <div key={s.heading}>
          <h2 className="mb-2 text-lg font-bold text-white">{s.heading}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </LegalLayout>
  );
}

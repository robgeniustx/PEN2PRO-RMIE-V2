import LegalPageLayout from "../components/layout/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" updated="July 2026">
      <p>
        PEN2PRO is an education, strategy, and organization platform. It is not a bank, lender, credit repair
        organization, law firm, or financial advisor.
      </p>
      <h2 className="text-lg font-bold text-white">No Guarantees</h2>
      <p>
        PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
        repair results. Roadmaps, checklists, and strategies are tools to help you plan and take action —
        results depend on individual effort, execution, and market conditions.
      </p>
      <h2 className="text-lg font-bold text-white">Not Financial, Legal, or Credit Repair Advice</h2>
      <p>
        Content on PEN2PRO, including funding readiness and credit-building guidance, is for informational
        purposes only and should not be treated as professional financial, legal, tax, or credit repair
        advice. Consult a licensed professional for advice specific to your situation.
      </p>
      <h2 className="text-lg font-bold text-white">Affiliate Relationships</h2>
      <p>
        PEN2PRO may earn a commission when you use certain partner links for services like LLC formation,
        business banking, funding, or bookkeeping. We only recommend resources we believe can help
        founders — commissions do not change the price you pay.
      </p>
      <h2 className="text-lg font-bold text-white">Your Responsibility</h2>
      <p>
        You are responsible for the decisions you make for your business, including entity formation,
        contracts, spending, and applications for credit or funding.
      </p>
    </LegalPageLayout>
  );
}

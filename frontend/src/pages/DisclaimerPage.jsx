import LegalPage from "../components/layout/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" updated="July 2026">
      <p>
        PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs,
        veterans, returning citizens, creators, and working-class builders. It is not a guarantee of
        any outcome.
      </p>
      <p>
        <strong className="text-white">No income guarantee.</strong> Roadmaps, business plans, and
        strategy output are generated to help you plan and execute — actual results depend on your
        effort, market conditions, execution, and factors outside PEN2PRO's control.
      </p>
      <p>
        <strong className="text-white">No credit repair guarantee.</strong> PEN2PRO does not guarantee
        credit repair results, credit score increases, or removal of negative items. The Credit
        Readiness tools provide education and organization only.
      </p>
      <p>
        <strong className="text-white">No funding or loan guarantee.</strong> PEN2PRO does not
        guarantee funding approval, loan approval, investment, or vendor/tradeline acceptance. Funding
        Readiness tools help you prepare and organize documentation — approval decisions are made
        solely by lenders and third parties.
      </p>
      <p>
        <strong className="text-white">Not legal, tax, or financial advice.</strong> Nothing on
        PEN2PRO constitutes legal, tax, accounting, or licensed financial advice. Consult a qualified
        professional for guidance specific to your situation.
      </p>
      <p>
        By using PEN2PRO, you acknowledge that business ownership carries risk and that success
        depends on individual effort, decisions, and market conditions.
      </p>
    </LegalPage>
  );
}

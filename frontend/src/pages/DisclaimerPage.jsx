import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p className="text-white font-semibold">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval,
            or business success.
          </p>
          <p>
            The platform provides education, strategy, organization, and readiness tools — not
            legal, financial, credit repair, or investment advice, and not a promise of any
            particular outcome. Every business, credit profile, and funding situation is
            different, and results depend on individual effort, market conditions, and factors
            outside PEN2PRO's control.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Business & funding readiness</h2>
            <p>
              Startup cost estimates, revenue models, funding readiness checklists, and lender
              preparation content are strategic guidance based on general best practices. They
              are not a guarantee of loan, grant, or investment approval.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Credit-building content</h2>
            <p>
              Credit-building steps, utilization strategy, and dispute readiness content are
              educational only. PEN2PRO is not a credit repair organization and does not dispute
              items on your credit report on your behalf.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Professional advice</h2>
            <p>
              For legal, tax, accounting, or licensed financial advice specific to your
              situation, consult a qualified professional before making major business or
              financial decisions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Disclaimer</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools for entrepreneurs. It is
            not a law firm, credit repair organization, lender, or financial advisor.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. Roadmaps, strategies, and checklists are based on general best practices and the
              information you provide — actual outcomes depend on your market, effort, and circumstances.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Not Legal, Financial, or Credit Advice</h2>
            <p>
              Nothing on PEN2PRO constitutes legal, tax, financial, investment, or credit repair advice.
              Consult a licensed attorney, accountant, or financial professional before making business,
              legal, or financial decisions.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Affiliate Relationships</h2>
            <p>
              Some links on PEN2PRO (LLC formation, banking, funding, tools) are affiliate links. We may earn
              a commission if you use them, at no additional cost to you. We only recommend resources we
              believe add value.
            </p>
          </div>
          <p className="text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

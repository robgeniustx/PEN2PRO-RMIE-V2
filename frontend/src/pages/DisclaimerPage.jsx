import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Please read this before acting on any PEN2PRO roadmap, strategy, or resource.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-xl border border-[#1A2235] p-8 space-y-8" style={{ background: "#0F1520" }}>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">No Guaranteed Outcomes</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business
              success. The platform provides education, strategy, organization, and readiness tools — not a
              promise of any specific outcome. Results depend on your individual circumstances, effort, market
              conditions, and decisions made by third parties such as lenders and credit bureaus.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Not Legal, Financial, or Credit Repair Services</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO is not a law firm, credit repair organization, or licensed financial advisory service.
              Content on this platform — including roadmaps, checklists, and strategy guidance — is for
              informational and educational purposes only and should not be treated as legal, tax, financial, or
              credit repair advice. Consult a licensed professional before making legal, financial, or credit
              decisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Affiliate Relationships</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO may earn commissions from partners linked throughout the platform (including on the
              Affiliate, Funding, and Credit Repair pages). Recommendations reflect tools we believe are useful,
              but you should evaluate any third-party service on your own before signing up.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Responsibility</h2>
            <p className="text-slate-400 leading-7">
              Starting and running a business carries real risk, including the risk of financial loss. You are
              responsible for your own business, legal, and financial decisions. PEN2PRO is a tool to help you
              plan and execute — it does not replace due diligence, licensed advice, or your own judgment.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

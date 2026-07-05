import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Disclaimer
        </h1>
        <p className="text-slate-400 mb-12">Effective date: January 1, 2026</p>

        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">No Guaranteed Results</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair
              results. The Platform provides education, strategy, organization, and readiness tools — not promises.
              Results depend on your own effort, execution, industry, and market conditions.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Not Legal, Tax, or Financial Advice</h2>
            <p className="text-slate-400 leading-7">
              Roadmaps, checklists, and AI-generated plans are for informational and planning purposes only. They are
              not a substitute for advice from a licensed attorney, accountant, tax professional, or financial advisor.
              Consult a qualified professional before making legal, tax, or financial decisions for your business.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Credit & Funding Disclaimer</h2>
            <p className="text-slate-400 leading-7">
              Credit-building steps and funding readiness checklists are educational. PEN2PRO is not a credit repair
              organization, lender, or broker, and does not guarantee any specific credit score change, dispute
              outcome, or loan/funding approval.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Affiliate Relationships</h2>
            <p className="text-slate-400 leading-7">
              PEN2PRO may earn a referral commission when you use links to partner services for LLC formation,
              business banking, credit tools, funding, or other third-party providers. This does not increase your
              cost, and PEN2PRO is not responsible for the products, services, or outcomes of third-party partners.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-2">AI-Generated Content</h2>
            <p className="text-slate-400 leading-7">
              Roadmap and strategy output is generated with the help of artificial intelligence based on the
              information you provide. AI output can be incomplete or imperfect. Review all recommendations
              critically before acting on them.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-500">
            See also our <a href="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</a> and{" "}
            <a href="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

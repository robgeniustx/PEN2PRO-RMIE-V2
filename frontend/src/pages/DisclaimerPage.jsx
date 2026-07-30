import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Disclaimer</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            PEN2PRO is an AI-powered education, strategy, and organization platform. It does not guarantee
            income, business success, funding approval, loan approval, credit repair results, or removal of
            negative credit items.
          </p>
          <p>
            Roadmaps, funding readiness checklists, credit-building steps, and strategy output are tools to
            help you plan and execute — they are not financial, legal, tax, or credit repair advice.
            Results depend on your individual effort, execution, financial history, and market conditions.
          </p>
          <p>
            For funding, credit, tax, or legal decisions, consult a qualified professional (lender,
            attorney, accountant, or licensed credit repair organization) before acting.
          </p>
          <p>
            Affiliate and partner links on PEN2PRO may earn us a commission at no extra cost to you. We only
            recommend resources we believe can genuinely help entrepreneurs and small business owners.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

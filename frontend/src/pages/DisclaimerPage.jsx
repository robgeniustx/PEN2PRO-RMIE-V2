import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "💼",
    title: "No Business Success Guarantee",
    body: `PEN2PRO provides AI-generated business roadmaps, strategies, and planning tools. We do not guarantee that using PEN2PRO will result in business success, income growth, profitable operations, or any specific outcome. Business results depend entirely on individual effort, market conditions, timing, execution, and many other factors outside our control.`,
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: `PEN2PRO's credit readiness content is educational and organizational in nature. We are not a credit repair organization as defined by federal or state law. We do not dispute items on your credit report, negotiate with creditors on your behalf, or guarantee any improvement in your credit score. Credit outcomes depend on your individual credit history, payment behavior, and the policies of credit bureaus and creditors.`,
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: `PEN2PRO provides funding readiness checklists, preparation strategies, and educational resources. We do not guarantee loan approval, credit approval, investor interest, grant eligibility, or any form of funding. Funding decisions are made exclusively by lenders, investors, and funding institutions based on their own criteria.`,
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: `Nothing on PEN2PRO constitutes legal advice, financial advice, accounting advice, or tax advice. The platform provides general business planning information and AI-generated roadmaps for educational purposes. For legal, financial, or tax matters, consult a licensed professional in your jurisdiction.`,
  },
  {
    icon: "🤖",
    title: "AI-Generated Content Limitations",
    body: `PEN2PRO uses artificial intelligence to generate business roadmaps and strategy content. AI-generated content may contain errors, outdated information, or recommendations that are not suitable for your specific situation. Always verify AI-generated advice with qualified professionals before making major business decisions.`,
  },
  {
    icon: "🔗",
    title: "Affiliate Links Disclosure",
    body: `PEN2PRO's affiliate page and related content may contain affiliate links to third-party products and services. We may receive compensation when you click these links or make purchases through them. Affiliate relationships do not influence our editorial content or platform recommendations. All affiliate products are listed for informational purposes — we do not guarantee the quality, reliability, or suitability of any third-party product or service.`,
  },
  {
    icon: "📊",
    title: "Earnings Representations",
    body: `Any income examples, revenue projections, or financial illustrations used on PEN2PRO are for illustrative purposes only. They are not representations of typical or expected results. Individual results will vary based on effort, market conditions, skills, resources, and many other factors. There is no guarantee that you will earn any specific income using PEN2PRO tools or strategies.`,
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black">Disclaimer</h1>
        <p className="mb-2 text-sm text-slate-500">Last updated: June 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO is an AI-powered business planning platform. The following disclaimers apply to all content,
          tools, and services provided through the PEN2PRO platform.
        </p>

        <div className="space-y-8">
          {DISCLAIMERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{d.icon}</span>
                <h2 className="font-display text-lg font-black text-white">{d.title}</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-6">
          <p className="text-sm font-semibold text-yellow-200 leading-relaxed">
            By using PEN2PRO, you acknowledge that you have read and understood this disclaimer and agree
            that PEN2PRO, its founders, employees, and affiliates are not liable for any outcomes resulting
            from your use of the platform.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy →
          </Link>
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "💼",
    title: "No Guarantee of Business Success",
    body: "PEN2PRO provides business roadmaps, strategy tools, and AI-generated plans for educational and planning purposes. The platform does not guarantee that any business idea, strategy, or roadmap will result in revenue, profit, or business success. Results depend entirely on individual effort, market conditions, execution quality, and factors outside the platform's control.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "The credit strategy and funding readiness tools provided by PEN2PRO are educational in nature. PEN2PRO does not guarantee credit score improvements, dispute outcomes, tradeline approvals, or changes to credit profiles. Credit results vary based on individual history, creditor policies, and reporting agencies. Consult a licensed credit counselor for personalized advice.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: "PEN2PRO provides funding readiness checklists and preparation guidance. We do not guarantee funding approval, loan approval, grant eligibility, or investor interest. Funding decisions are made by third-party lenders, grant organizations, and investors based on their own criteria. PEN2PRO has no influence over these decisions.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on the PEN2PRO platform constitutes legal advice, financial advice, accounting advice, or professional consulting of any kind. Information provided through roadmaps, blueprints, or AI-generated content is for general educational purposes only. Always consult qualified legal, financial, or accounting professionals before making major business decisions.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate roadmaps, strategies, scripts, and recommendations. AI output may contain inaccuracies, outdated information, or suggestions that are not appropriate for your specific situation. Review all AI-generated content critically and verify with qualified professionals when necessary.",
  },
  {
    icon: "🔗",
    title: "Affiliate Links & Third-Party Resources",
    body: "PEN2PRO may include affiliate links to third-party products and services such as LLC formation, business banking, and marketing tools. We may earn a commission if you purchase through these links at no additional cost to you. These recommendations are based on general use cases and do not constitute an endorsement of any specific product or company.",
  },
  {
    icon: "📊",
    title: "Individual Results May Vary",
    body: "Any testimonials, case studies, or examples of income or business results featured on the platform represent individual experiences and are not typical. Most people who use business planning tools do not achieve significant income without substantial effort, investment, and persistence. Past results do not guarantee future outcomes.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Please read this disclaimer carefully. By using PEN2PRO, you acknowledge and agree to the following limitations and disclosures.
          </p>
        </div>

        <div className="space-y-6">
          {DISCLAIMERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">{d.icon}</span>
                <h2 className="font-bold text-white text-lg">{d.title}</h2>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">
          <p className="text-sm text-yellow-200 leading-relaxed">
            <strong>Summary:</strong> PEN2PRO is an AI-powered business education and planning platform. We provide structure, strategy, and tools — but your results depend on your own actions, your market, and conditions we cannot control. Use this platform as one resource among many, and always seek qualified professional advice for important business, legal, and financial decisions.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy →
          </Link>
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

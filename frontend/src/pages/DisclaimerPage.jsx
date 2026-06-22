import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income or Business Results Guarantee",
    body: `PEN2PRO provides business roadmaps, strategy frameworks, and educational resources. We do not guarantee that using PEN2PRO will result in business success, revenue, profit, or income of any kind. Results depend entirely on the individual user's effort, execution, market conditions, industry, competition, and many other factors outside our control. Any income figures mentioned in testimonials, case studies, or examples represent individual results and are not typical or guaranteed.`,
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: `PEN2PRO provides credit education, credit-building strategy frameworks, and readiness checklists. PEN2PRO is not a credit repair organization and does not offer credit repair services as defined by the Credit Repair Organizations Act (CROA). We do not guarantee any improvement to your credit score, credit profile, or creditworthiness. Individual credit outcomes depend on your specific credit history, creditor policies, and many other factors.`,
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: `PEN2PRO provides funding readiness tools, checklists, and educational resources to help users prepare for the funding process. PEN2PRO does not guarantee loan approval, funding approval, or access to any specific financing product. Funding decisions are made by lenders and financial institutions based on their own criteria. We are not a lender and do not provide loan brokerage services.`,
  },
  {
    icon: "⚖️",
    title: "No Legal Advice",
    body: `Nothing on the PEN2PRO platform constitutes legal advice. Business formation guidance, LLC information, trademark basics, and operating agreement references are provided for educational purposes only. Consult a licensed attorney for legal advice specific to your business situation, jurisdiction, and circumstances.`,
  },
  {
    icon: "📈",
    title: "No Financial or Investment Advice",
    body: `Nothing on the PEN2PRO platform constitutes financial advice, investment advice, or tax advice. Financial projections, revenue models, and pricing strategies provided through RMIE tools are estimates for planning purposes only and are not guaranteed outcomes. Consult a licensed financial advisor or accountant for financial guidance specific to your situation.`,
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: `PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content may contain errors, omissions, or outdated information. Always verify important business, legal, and financial information with qualified professionals. PEN2PRO is not responsible for business decisions made based solely on AI-generated output.`,
  },
  {
    icon: "🔗",
    title: "Affiliate Links and Third-Party Services",
    body: `PEN2PRO may include affiliate links to third-party products and services. When you click these links and make a purchase, PEN2PRO may earn a commission at no additional cost to you. We only recommend products and services we believe may be useful to our users, but we are not responsible for the quality, accuracy, or reliability of third-party services. Use your own judgment when engaging with any third-party provider.`,
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
        <h1 className="mb-3 font-display text-4xl font-black">Disclaimer</h1>
        <p className="mb-2 text-sm text-slate-400">Effective Date: June 15, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO is an educational and organizational platform. The following disclaimers apply to all content, tools, roadmaps, AI output, and resources provided through the PEN2PRO platform.
        </p>

        <div className="space-y-6">
          {DISCLAIMERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <div className="mb-3 text-2xl">{d.icon}</div>
              <h2 className="mb-3 font-bold text-white text-lg">{d.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#FF8A00]/30 bg-[#1a0f00] p-6">
          <p className="text-sm font-bold text-[#FF8A00] mb-2">Summary</p>
          <p className="text-sm text-slate-300 leading-relaxed">
            PEN2PRO provides tools, education, and strategy frameworks to help you build a business. We do not guarantee income, credit improvement, funding approval, business success, or any specific results. Always consult qualified legal, financial, and business professionals for advice specific to your situation.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

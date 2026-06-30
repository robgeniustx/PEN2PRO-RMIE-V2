import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income or Earnings Guarantee",
    body: "PEN2PRO does not guarantee any specific level of income, revenue, profit, or business success. The roadmaps, blueprints, strategies, and guidance provided by the platform are educational tools only. Individual results will vary significantly based on effort, market conditions, execution, experience, capital, and many other factors beyond PEN2PRO's control. Any examples of income or business results shown are not representative of typical outcomes.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO provides credit readiness education, organizational tools, and strategy guidance. PEN2PRO is not a credit repair organization and does not guarantee any improvement to your credit score, removal of negative items, or approval for any credit product. The credit guidance provided is educational only and does not constitute legal or financial advice.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: "PEN2PRO does not guarantee funding approval, loan approval, grant access, or the availability of any specific financial product. Funding readiness information is provided for educational and organizational purposes only. Approval decisions are made entirely by lenders, investors, or grant-awarding organizations based on their own criteria.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on PEN2PRO constitutes legal advice, financial advice, investment advice, tax advice, or any other professional advisory service. PEN2PRO is not a licensed attorney, financial advisor, CPA, or broker. Before making significant business, legal, or financial decisions, you should consult with qualified licensed professionals.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, copy, and guidance. AI-generated content may contain errors, outdated information, or suggestions that are not appropriate for your specific situation. You are responsible for reviewing, verifying, and applying any AI-generated output with appropriate judgment.",
  },
  {
    icon: "🔗",
    title: "Third-Party Links & Affiliates",
    body: "PEN2PRO may contain affiliate links to third-party services including LLC formation providers, business banking platforms, insurance providers, and other tools. PEN2PRO may earn a commission if you click through and make a purchase. We only recommend services we believe are relevant to our users, but we are not responsible for the quality, accuracy, or performance of third-party services.",
  },
  {
    icon: "📱",
    title: "Platform Availability",
    body: "PEN2PRO is provided on an 'as is' and 'as available' basis. We do not guarantee uninterrupted access, error-free operation, or that the platform will meet your specific needs. We reserve the right to update, modify, suspend, or discontinue any feature at any time.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-2 font-display text-4xl font-black">Disclaimer</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 30, 2026</p>

        <div className="mb-8 rounded-2xl border border-[#FF8A00]/20 bg-[#FF8A00]/5 p-5">
          <p className="text-sm font-semibold text-[#FF8A00] leading-relaxed">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, income results, or business success. The platform provides education, strategy, organization, and readiness tools. Individual results depend on personal effort, market conditions, and factors outside our control.
          </p>
        </div>

        <div className="space-y-5">
          {DISCLAIMERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 flex items-center gap-3 font-bold text-white text-lg">
                <span className="text-xl">{d.icon}</span>
                {d.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/terms" className="text-sm font-semibold text-[#2d9cff] hover:underline">Terms of Service →</Link>
          <Link to="/privacy" className="text-sm font-semibold text-[#2d9cff] hover:underline">Privacy Policy →</Link>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

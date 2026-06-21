import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee that using the platform will result in income, revenue, profit, or business success. All financial projections, roadmaps, and strategies provided by the platform are for educational and planning purposes only. Individual results will vary based on effort, execution, market conditions, industry, location, and other factors outside PEN2PRO's control.",
  },
  {
    icon: "💳",
    title: "No Credit Score Guarantee",
    body: "PEN2PRO provides credit readiness education, strategy, and organizational tools. We do not guarantee improvement in personal or business credit scores. Credit repair results depend on individual credit history, debt situation, payment behavior, and creditor responses. We are not a licensed credit repair organization.",
  },
  {
    icon: "🏦",
    title: "No Funding Approval Guarantee",
    body: "PEN2PRO provides funding readiness guidance, documentation frameworks, and lender preparation tools. We do not guarantee loan approval, grant funding, investor interest, or any form of financing. Lending decisions are made entirely by financial institutions based on their own criteria.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on this platform constitutes legal advice, financial advice, tax advice, or accounting advice. We are not attorneys, CPAs, or licensed financial advisors. Consult a licensed professional for legal, financial, tax, or accounting decisions.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses AI to generate business roadmaps, strategies, and recommendations. AI-generated content may contain errors, outdated information, or advice not suited to your specific situation. Always verify AI-generated suggestions with qualified professionals before making major business decisions.",
  },
  {
    icon: "🔗",
    title: "Affiliate Links",
    body: "PEN2PRO's Affiliate Resources page includes links to third-party products and services. We may receive commissions if you purchase through these links. We only recommend services we believe are valuable, but we are not responsible for third-party products, their pricing, or their performance.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black">Disclaimer</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-2xl space-y-8">
          <div className="rounded-2xl border border-[#FF8A00]/30 bg-[#FF8A00]/05 p-6 text-sm text-slate-300 leading-relaxed">
            <strong className="text-[#FF8A00]">Important:</strong> PEN2PRO provides education, strategy tools, and business roadmap guidance. We do not guarantee income, credit repair results, funding approval, or business success. Please read the full disclaimer below.
          </div>

          <div className="grid gap-5">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-2xl">{d.icon}</span>
                  <h2 className="font-bold text-white">{d.title}</h2>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-relaxed">
            By using PEN2PRO, you acknowledge that you have read and understood this disclaimer. You agree that PEN2PRO is a tool to support your business journey, not a replacement for professional legal, financial, or credit advice.
          </div>

          <div className="border-t border-[#1A2D50] pt-8 flex flex-wrap gap-4">
            <Link to="/privacy" className="text-sm text-[#2d9cff] hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-[#2d9cff] hover:underline">Terms of Service</Link>
            <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

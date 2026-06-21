import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Income Guarantee",
    body: "PEN2PRO provides business roadmaps, strategies, and monetization frameworks. We do not guarantee that following our recommendations will result in any specific level of income, revenue, or profit. Business results vary significantly based on individual effort, market conditions, execution, capital, and many other factors outside our control.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO's credit readiness tools provide educational guidance and organizational frameworks. We are not a credit repair company, credit counselor, or credit bureau. We do not guarantee improvements to your credit score, credit profile, or creditworthiness. Always consult with a licensed credit professional for personalized credit advice.",
  },
  {
    icon: "🏦",
    title: "No Funding Guarantee",
    body: "Information provided through our funding readiness tools is educational in nature. PEN2PRO does not guarantee that you will receive any loan, grant, line of credit, investor funding, or other financing. Funding approval is at the sole discretion of lenders, investors, and institutions. We are not a lender, broker, or financial advisor.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on PEN2PRO constitutes legal, financial, tax, or professional advice. Roadmaps, checklists, and strategy content are informational only. For legal questions (LLC formation, contracts, trademarks, etc.) consult a licensed attorney. For financial and tax guidance, consult a licensed CPA or financial advisor.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate personalized business roadmaps and strategies. AI output is based on patterns and information provided at time of generation. It may contain errors, outdated information, or recommendations that are not suitable for your specific situation. Always apply your own judgment before acting on AI-generated content.",
  },
  {
    icon: "🔗",
    title: "Third-Party Affiliate Links",
    body: "PEN2PRO's Affiliate and Resource pages may contain links to third-party products and services. We may earn a commission if you make a purchase through these links. We only recommend products and services we believe may be useful to our users, but we do not control or guarantee the quality, performance, or terms of any third-party service.",
  },
  {
    icon: "🔄",
    title: "Forward-Looking Statements",
    body: "Any statements on this platform about potential business outcomes, market opportunities, revenue models, or growth projections are forward-looking and based on general assumptions. They are not predictions or guarantees. Actual results may differ materially from any projected outcomes.",
  },
  {
    icon: "🛡️",
    title: "Platform Availability",
    body: "PEN2PRO is provided \"as is\" and \"as available.\" We do not guarantee uninterrupted, error-free access to the platform. We reserve the right to modify, suspend, or discontinue any part of the service with or without notice.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400 text-sm">
            Effective Date: June 15, 2026 &nbsp;·&nbsp; Last Updated: June 15, 2026
          </p>
        </div>
      </section>

      {/* Intro Banner */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border p-6 text-sm text-slate-300 leading-relaxed"
            style={{ borderColor: "rgba(255,138,0,0.3)", background: "rgba(255,138,0,0.05)" }}>
            <p className="font-bold text-white mb-2">Important Notice</p>
            PEN2PRO is an AI-powered business strategy and education platform. We are not financial advisors, attorneys, credit counselors, or licensed lenders. All content, tools, roadmaps, and recommendations on this platform are for informational and educational purposes only. Please read the following disclaimers carefully before using our services.
          </div>
        </div>
      </section>

      {/* Disclaimer Cards */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6 md:grid-cols-2">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-black text-white mb-2">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          {/* Full Disclaimer Text */}
          <div className="mt-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="font-black text-white mb-3">Full Disclaimer</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              By using PEN2PRO and its associated tools, resources, roadmaps, AI-generated content, affiliate links, educational materials, and any related services, you acknowledge and agree that PEN2PRO, its founder Robert Earl Green Jr., officers, employees, contractors, and affiliates are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the platform or reliance on any content provided herein. You assume full responsibility for your business decisions, financial commitments, credit actions, and the results of following any strategies or recommendations generated by PEN2PRO. Results are never guaranteed and depend entirely on your individual circumstances, effort, market conditions, and execution.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center border-t border-[#1A2D50] pt-10">
            <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              ← Back to Home
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

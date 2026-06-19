import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📈",
    title: "No Income Guarantee",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational content. We do not guarantee that using PEN2PRO will result in any specific level of income, revenue, profit, or business success. Individual results depend on personal effort, market conditions, resources, execution, and many other factors outside our control.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO's credit readiness tools are educational and organizational in nature. We do not provide licensed credit counseling or credit repair services. We do not guarantee any improvement in your personal or business credit scores. For regulated credit repair services, consult a licensed credit counselor or attorney.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: "PEN2PRO's funding readiness tools help you prepare for and understand the funding process. We do not guarantee approval for any loan, line of credit, SBA program, grant, investor funding, or other financial product. Funding decisions are made by lenders, institutions, and investors — not PEN2PRO.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on PEN2PRO constitutes legal advice, financial advice, tax advice, or regulated business consulting. PEN2PRO is not a licensed attorney, CPA, financial advisor, or business consultant. All content is for educational, planning, and organizational purposes only. Consult qualified professionals for legal, financial, and tax decisions.",
  },
  {
    icon: "🤝",
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you click affiliate links and make a purchase through those links. We only recommend tools and services we believe may be useful to our users. Affiliate commissions do not affect the price you pay. All affiliate relationships are disclosed where required.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses AI to generate business roadmaps, strategies, and recommendations. AI-generated content may contain errors, inaccuracies, or outdated information. You should independently verify important information before making business decisions based on AI output. PEN2PRO is not liable for decisions made based on AI-generated content.",
  },
  {
    icon: "🌐",
    title: "Third-Party Resources",
    body: "PEN2PRO may link to or reference third-party websites, tools, platforms, or resources. We do not endorse or control these third parties and are not responsible for their content, services, or practices. Use of third-party resources is at your own risk.",
  },
  {
    icon: "📊",
    title: "Forward-Looking Statements",
    body: "Any references to expected platform features, launch dates, pricing, or business outcomes are forward-looking and subject to change. PEN2PRO makes no warranty that the platform will continue to operate as described, that planned features will be delivered on any specific timeline, or that pricing will remain unchanged.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
    return () => { document.title = "PEN2PRO — Turn Your Idea Into Income"; };
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-4xl">Disclaimer</h1>
          <p className="text-sm text-slate-500">Effective for all PEN2PRO users, subscribers, and visitors</p>
        </div>
      </section>

      {/* Intro banner */}
      <section className="px-5 pt-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-white">Important:</strong> PEN2PRO is an educational and planning platform — not a licensed financial institution, credit counselor, attorney, or regulated business advisor. The information, tools, and AI-generated content on this platform are provided for educational and organizational purposes only. Please read the disclaimers below carefully before using PEN2PRO for any financial, legal, or business decision.
          </p>
        </div>
      </section>

      {/* Disclaimer Cards */}
      <section className="px-5 py-12">
        <div className="mx-auto max-w-3xl space-y-6">
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
      </section>

      {/* Acknowledgement */}
      <section className="px-5 pb-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-[#FF8A00]/20 bg-[#0F1520] p-6">
          <p className="text-sm text-slate-400 leading-relaxed">
            By using PEN2PRO, you acknowledge that you have read and understood this disclaimer. You agree that PEN2PRO, its founder, team, and affiliates are not liable for any decisions, losses, or outcomes resulting from your use of the platform. If you disagree with any part of this disclaimer, please discontinue use of the platform.
          </p>
        </div>
      </section>

      {/* Bottom links */}
      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-xl">
          <p className="mb-6 text-sm text-slate-500">
            Ready to build something real? PEN2PRO gives you the structure, strategy, and tools — the results depend on you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Terms of Service →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

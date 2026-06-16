import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Guarantee of Business Success",
    body: "PEN2PRO provides business roadmaps, strategy frameworks, monetization guidance, and execution plans based on AI analysis of your input. We do not guarantee any specific business outcome, revenue level, profit margin, or success. Your results will depend on many factors including your execution, market conditions, competition, timing, and personal circumstances.",
  },
  {
    icon: "💳",
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO's credit readiness tools provide educational guidance on credit strategy, utilization, dispute preparation, and credit building. PEN2PRO is not a credit repair organization and does not guarantee any improvement in your credit score, approval for credit, or removal of any credit item. Credit results vary by individual circumstances.",
  },
  {
    icon: "🏦",
    title: "No Funding or Loan Approval Guarantee",
    body: "PEN2PRO's funding readiness tools help you organize documentation and prepare for conversations with lenders. PEN2PRO does not provide loans, does not guarantee funding approval, and is not affiliated with any lender or financial institution. Funding approval decisions are made entirely by third-party lenders based on their own criteria.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on the PEN2PRO platform constitutes legal advice, tax advice, financial advice, or investment advice. Information provided is for educational and organizational purposes only. Consult a licensed attorney, CPA, or financial advisor for guidance specific to your legal or financial situation.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate roadmaps, strategies, scripts, and business plans. AI-generated content may not be perfectly accurate, complete, or suited to every situation. Always review AI output critically and apply your own judgment before acting on any recommendation.",
  },
  {
    icon: "🔗",
    title: "Affiliate & Third-Party Links",
    body: "PEN2PRO's affiliate page and platform may contain links to third-party services and products. PEN2PRO may receive a commission when you purchase through affiliate links at no additional cost to you. These links are provided for convenience and information only. PEN2PRO does not endorse, guarantee, or take responsibility for third-party products or services.",
  },
  {
    icon: "📱",
    title: "Platform Availability",
    body: "PEN2PRO is provided 'as is' and 'as available.' We do not guarantee uninterrupted access or that the platform will be error-free. We may update, modify, or temporarily suspend the platform at any time.",
  },
  {
    icon: "📣",
    title: "Testimonials & Results",
    body: "Any results, stories, or examples referenced on PEN2PRO represent individual experiences and are not guarantees of similar outcomes. Individual results will vary based on effort, execution, market conditions, and many other factors.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,201,177,0.10) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#00C9B1] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Disclaimer</h1>
          <p className="text-slate-400">Effective Date: June 15, 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Main disclaimer box */}
          <div className="mb-10 rounded-2xl border border-[#FF8A00]/30 bg-[#0F1520] p-6 text-center">
            <p className="text-lg font-bold text-white mb-2">Important Notice</p>
            <p className="text-slate-400 leading-relaxed text-sm">
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools. Results depend on your individual circumstances and execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-3 text-3xl">{d.icon}</div>
                <h2 className="mb-3 text-base font-bold text-white">{d.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400 leading-relaxed">
              By using the PEN2PRO platform, you acknowledge that you have read, understood, and agree to this Disclaimer as well as our{" "}
              <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link>
              {" "}and{" "}
              <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
              If you have questions or concerns, contact us at legal@pen2pro.com.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center">
            <Link to="/" className="text-sm font-semibold text-[#FF8A00] hover:underline">← Back to Home</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/privacy" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden sm:inline text-slate-600">|</span>
            <Link to="/terms" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

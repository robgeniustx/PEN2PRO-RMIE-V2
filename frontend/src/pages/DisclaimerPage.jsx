import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    icon: "📊",
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee business success, revenue generation, client acquisition, or any specific financial outcome. The roadmaps, blueprints, strategies, and tools provided on this platform are educational in nature. Your results will depend entirely on your own effort, consistency, execution, market conditions, and factors outside PEN2PRO's control.",
  },
  {
    icon: "💳",
    title: "No Guarantee of Credit Repair or Improvement",
    body: "PEN2PRO provides educational content and strategic frameworks related to credit building and credit readiness. We are not a credit repair organization as defined under the Credit Repair Organizations Act (CROA) or any applicable state law. We make no guarantee that following our guidance will result in any improvement to your credit score, credit profile, or credit standing.",
  },
  {
    icon: "🏦",
    title: "No Guarantee of Funding or Loan Approval",
    body: "PEN2PRO provides guidance on funding readiness, business documentation, and preparation strategies. We are not a lender, broker, or financial institution. We do not guarantee that you will qualify for, receive, or be approved for any loan, line of credit, grant, or other form of funding. Funding decisions are made entirely by the respective lenders or institutions.",
  },
  {
    icon: "⚖️",
    title: "Not Legal or Financial Advice",
    body: "Nothing on the PEN2PRO platform constitutes legal advice, tax advice, accounting advice, or professional financial advice. The information provided is general in nature and should not be relied upon as a substitute for advice from a licensed attorney, certified accountant, financial planner, or other qualified professional. Always consult a qualified professional for your specific situation.",
  },
  {
    icon: "🤖",
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. AI-generated content is based on patterns and data — not personal knowledge of your specific market, circumstances, or history. All AI output should be reviewed critically and verified independently before acting on it. PEN2PRO is a tool to help you think, plan, and organize — not a replacement for professional judgment.",
  },
  {
    icon: "🔗",
    title: "Affiliate Links & Third-Party Services",
    body: "PEN2PRO's affiliate and resource pages contain links to third-party services and partners from which we may earn referral compensation. The presence of an affiliate link does not constitute an endorsement of the company, product, or service. PEN2PRO is not responsible for the performance, reliability, accuracy, or suitability of any third-party service. Research any third party independently before engaging.",
  },
  {
    icon: "📈",
    title: "Forward-Looking Statements",
    body: "Any projections, revenue estimates, growth targets, or forward-looking statements in PEN2PRO content, roadmap outputs, or marketing materials are illustrative examples only. They are not predictions, guarantees, or representations of what you will earn or achieve. Actual outcomes vary based on individual circumstances, skills, effort, and market conditions.",
  },
  {
    icon: "🔄",
    title: "Platform Availability",
    body: "PEN2PRO is provided 'as is' and 'as available.' We do not guarantee uninterrupted availability, error-free operation, or that the platform will meet your specific needs. We reserve the right to modify, suspend, or discontinue any features or the platform itself at any time.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-5 py-20 text-center border-b border-[#1A2D50]">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Disclaimer</h1>
          <p className="mt-4 text-slate-400">Effective date: June 15, 2026</p>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            PEN2PRO is a business strategy and education platform. Please read this disclaimer carefully so you understand what PEN2PRO is and what it is not.
          </p>
        </div>
      </section>

      {/* Summary box */}
      <section className="px-5 pt-12 pb-4">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: "rgba(255,138,0,0.3)", background: "rgba(255,138,0,0.05)" }}
          >
            <p className="text-sm font-bold text-[#FF8A00] uppercase tracking-widest mb-2">Important Notice</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              PEN2PRO does not guarantee income, credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools only. Results depend on individual effort, discipline, consistency, and market conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer cards */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-3xl space-y-5">
          {DISCLAIMERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0 mt-0.5">{d.icon}</span>
                <div>
                  <h2 className="font-display text-lg font-bold text-white mb-3">{d.title}</h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{d.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 py-10">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
            <h3 className="font-display text-xl font-bold text-white mb-3">Questions About This Disclaimer?</h3>
            <p className="text-slate-400 text-sm mb-5">
              If you have questions about our disclaimers, terms, or policies, reach out at{" "}
              <span className="font-semibold" style={{ color: "#D4A017" }}>support@pen2pro.com</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-14 border-t border-[#1A2D50] text-center">
        <div className="mx-auto max-w-xl">
          <h3 className="font-display text-2xl font-black text-white mb-3">
            Ready to Start Building?
          </h3>
          <p className="text-slate-400 text-sm mb-6">
            PEN2PRO gives you structure, strategy, and tools. The rest is up to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/starter" className="btn-gold rounded-xl px-7 py-3 text-sm font-bold text-[#0A0F1E]">
              Start Free Roadmap
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              View Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

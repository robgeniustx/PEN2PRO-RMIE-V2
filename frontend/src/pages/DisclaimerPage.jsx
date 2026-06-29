import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    title: "No Income Guarantee",
    body: "PEN2PRO provides business roadmaps, strategies, and planning tools. Results depend on individual effort, market conditions, business type, execution quality, and many factors outside our control. We do not guarantee any specific income, revenue, profit, or business success.",
  },
  {
    title: "Not Financial or Legal Advice",
    body: "Nothing on PEN2PRO constitutes financial advice, legal advice, tax advice, or investment advice. All content is for educational and organizational purposes only. Consult a licensed financial advisor, attorney, CPA, or other qualified professional before making financial or legal decisions.",
  },
  {
    title: "No Credit Repair Guarantee",
    body: "PEN2PRO provides credit education, readiness checklists, and strategy guidance. We are not a licensed credit repair organization. We do not guarantee any credit score improvement, removal of negative items, or credit approval. Credit results vary by individual and are subject to lender and bureau decisions.",
  },
  {
    title: "No Funding Guarantee",
    body: "PEN2PRO provides funding readiness education and preparation tools. We do not guarantee loan approval, grant approval, investor interest, or any funding outcome. Funding decisions are made by third-party lenders, investors, and institutions based on their own criteria.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business plans, roadmaps, scripts, and recommendations. AI output may contain errors, inaccuracies, or outdated information. Always verify AI-generated content with qualified professionals before acting on it.",
  },
  {
    title: "Affiliate Disclosures",
    body: "Some links on PEN2PRO are affiliate links. PEN2PRO may earn a commission if you click a link and make a purchase. This does not affect our recommendations — we only promote resources we believe provide genuine value. All affiliate relationships are disclosed on our Affiliate page.",
  },
  {
    title: "Third-Party Resources",
    body: "PEN2PRO may reference or link to third-party websites, tools, vendors, or services. We are not responsible for the content, accuracy, or practices of third-party resources. Use them at your own discretion.",
  },
  {
    title: "Platform Availability",
    body: "PEN2PRO is provided on an 'as is' and 'as available' basis. We do not warrant that the platform will be uninterrupted, error-free, or completely secure. We reserve the right to modify, suspend, or discontinue features at any time.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
            <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
          </div>

          <div className="mb-10 rounded-2xl border p-5" style={{ borderColor: "rgba(212,160,23,0.3)", background: "rgba(212,160,23,0.05)" }}>
            <p className="text-sm leading-7 font-semibold" style={{ color: "#D4A017" }}>
              PEN2PRO does not guarantee income, business success, credit improvement, loan approval, or funding.
              The platform provides education, strategy tools, roadmaps, and organizational support.
              Results depend on individual effort and circumstances.
            </p>
          </div>

          <div className="space-y-8">
            {DISCLAIMERS.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{d.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{d.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-bold text-white">Questions or Concerns</h2>
            <p className="text-sm leading-7 text-slate-400">
              If you have questions about these disclaimers, contact us at{" "}
              <span className="font-semibold text-white">support@pen2pro.com</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="text-slate-500 hover:text-yellow-400 transition">Privacy Policy →</Link>
            <Link to="/terms" className="text-slate-500 hover:text-yellow-400 transition">Terms of Service →</Link>
            <Link to="/" className="text-slate-500 hover:text-yellow-400 transition">Back to Home →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

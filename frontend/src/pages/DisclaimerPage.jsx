import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const DISCLAIMERS = [
  {
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee any specific income, revenue, profit, or financial outcome. Business results depend on individual effort, market conditions, execution quality, timing, competition, and many other factors outside our control. Any earnings examples shown are not typical and should not be interpreted as promises of similar results.",
  },
  {
    title: "No Funding or Credit Approval Guarantee",
    body: "PEN2PRO provides education, readiness checklists, and strategy tools related to business credit and funding. We do not guarantee credit approval, loan approval, grant award, or any specific funding outcome. Funding decisions are made by lenders, investors, and other third parties based on their own criteria.",
  },
  {
    title: "Not Legal or Financial Advice",
    body: "The content and tools provided by PEN2PRO — including AI-generated roadmaps, business plans, financial projections, and strategic recommendations — are for educational and informational purposes only. This content does not constitute legal, financial, accounting, tax, or professional advice. Always consult qualified professionals before making legal, financial, or business decisions.",
  },
  {
    title: "AI-Generated Content",
    body: "PEN2PRO uses artificial intelligence to generate business roadmaps, strategy documents, sales scripts, and related content. AI systems can make errors, produce outdated information, or generate content that does not apply to your specific situation. All AI-generated content should be reviewed, verified, and adapted with professional guidance before implementation.",
  },
  {
    title: "Affiliate Disclosures",
    body: "PEN2PRO may earn affiliate commissions from tools, services, lenders, and business resources linked within the platform. These affiliate relationships do not affect the objectivity of our recommendations. We only recommend resources we believe provide value to our users. Affiliate links are disclosed where required by law.",
  },
  {
    title: "Third-Party Resources",
    body: "PEN2PRO may link to third-party websites, tools, services, and resources. We are not responsible for the accuracy, availability, or practices of third-party content. Links to external resources do not constitute endorsements of those services.",
  },
  {
    title: "Individual Results May Vary",
    body: "Testimonials and success stories featured on PEN2PRO represent individual results and are not guarantees of similar outcomes. Every business situation is unique. What works for one person may not work for another. Success requires consistent effort, sound execution, and market conditions that may or may not be present in your situation.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black leading-tight md:text-5xl">Disclaimer</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-5">
            <p className="text-sm font-semibold text-yellow-300 leading-relaxed">
              PEN2PRO is an educational and strategy platform. We help people build plans, organize their ideas, and prepare for business execution. We do not guarantee income, funding approval, credit repair results, or business success. All content is for informational purposes only.
            </p>
          </div>

          {DISCLAIMERS.map((d) => (
            <div key={d.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{d.title}</h2>
              <p className="text-slate-400 leading-relaxed">{d.body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-2 text-lg font-bold text-white">Questions About This Disclaimer?</h2>
            <p className="text-sm text-slate-400">
              Contact us at <span className="text-[#FF8A00]">support@pen2pro.com</span> or{" "}
              <Link to="/about" className="text-[#1E88E5] hover:underline">learn more about PEN2PRO</Link>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

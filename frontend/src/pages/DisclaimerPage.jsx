import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational, Not Financial or Legal Advice",
    body: "PEN2PRO's roadmaps, strategy output, and checklists are educational and organizational tools. They are not financial, legal, tax, or credit repair advice. Consult a licensed professional before making financial, legal, or tax decisions for your business.",
  },
  {
    title: "No Guaranteed Results",
    body: "PEN2PRO does not guarantee income, business success, credit score improvement, credit repair outcomes, funding approval, or loan approval. Results depend on your effort, execution, market conditions, and circumstances outside PEN2PRO's control.",
  },
  {
    title: "Credit Repair Disclaimer",
    body: "The Credit Repair Readiness tools provide organization and strategy — dispute readiness, utilization tracking, documentation checklists. PEN2PRO is not a credit repair organization and does not file disputes on your behalf.",
  },
  {
    title: "Funding & Lending Disclaimer",
    body: "Funding readiness checklists and vendor/tradeline information are provided for preparation purposes only. PEN2PRO is not a lender and does not guarantee approval from any bank, lender, or vendor referenced on the platform.",
  },
  {
    title: "Affiliate Relationships",
    body: "Some links on PEN2PRO (LLC formation, business banking, funding, tools) are affiliate links. PEN2PRO may earn a commission if you sign up through these links, at no additional cost to you. We only list tools we believe are useful for builders.",
  },
  {
    title: "Individual Results Vary",
    body: "Every business, market, and founder is different. Examples, projections, and success stories referenced on PEN2PRO are illustrative and not a promise of similar results for your specific situation.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">
            Disclaimer
          </h1>
          <p className="mb-12 text-slate-400">
            PEN2PRO gives you structure, strategy, and readiness tools — not guarantees. Please read this before
            acting on any roadmap, checklist, or strategy output.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            See also our{" "}
            <Link to="/terms" className="font-semibold text-[#FF8A00]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-semibold text-[#FF8A00]">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

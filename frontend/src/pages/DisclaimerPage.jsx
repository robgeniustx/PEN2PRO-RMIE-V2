import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational & Strategic Tool, Not a Guarantee",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. It does not guarantee income, business success, loan approval, funding approval, or credit repair results. Every outcome depends on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
  },
  {
    title: "Not Financial, Legal, or Credit Repair Advice",
    body: "Nothing on PEN2PRO constitutes formal financial, legal, tax, or credit repair advice. LLC/EIN checklists, funding readiness scores, and credit-building steps are general guidance — always confirm requirements with a licensed attorney, accountant, or financial professional before making business or credit decisions.",
  },
  {
    title: "Credit Repair Disclosure",
    body: "PEN2PRO does not perform credit repair services on your behalf and does not guarantee removal of negative items, score increases, or dispute outcomes. Credit-related content is for education and organization only.",
  },
  {
    title: "Funding & Lending Disclosure",
    body: "PEN2PRO is not a lender and does not guarantee approval for any loan, grant, credit line, or funding program. Funding readiness checklists reflect general lender expectations, not a promise of approval.",
  },
  {
    title: "Affiliate Disclosure",
    body: "PEN2PRO may link to third-party services (LLC formation, business banking, funding partners, and similar tools). Some of these links are affiliate links, meaning PEN2PRO may earn a commission at no additional cost to you if you sign up. We only link to services we believe can genuinely help our users.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for verifying information, complying with applicable laws and regulations, and making your own final decisions about your business, credit, and finances.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-5xl">Disclaimer</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[#1A2D50] pt-8">
            <Link to="/privacy" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/" className="rounded-lg px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

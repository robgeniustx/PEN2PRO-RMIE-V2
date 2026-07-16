import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guaranteed Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every business outcome depends on individual effort, market conditions, execution, timing, and factors outside our control.",
  },
  {
    title: "Educational & Strategic Tool",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools — an AI-generated roadmap, checklists, and structured next steps. It is not a substitute for licensed legal, tax, financial, or credit counseling advice.",
  },
  {
    title: "Credit & Funding Readiness",
    body: "Funding readiness checklists and credit-building guidance describe common lender and vendor expectations. They do not guarantee approval by any bank, lender, vendor, or funding partner. Approval decisions are made solely by the third party you apply with.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you sign up for third-party services (LLC formation, business banking, credit tools, funding partners, and other tools) referenced on the platform. Recommendations are based on genuine usefulness to entrepreneurs, but you should independently evaluate any third-party service before purchasing.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmap output, strategy suggestions, and checklists are generated using AI and may not account for every detail of your specific situation, industry regulations, or local laws. Always verify legal, licensing, and regulatory requirements for your business and location.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for evaluating and acting on any information provided through PEN2PRO. Business ownership carries real risk, including the risk of financial loss. Only invest time and money you can afford to risk.",
  },
];

export default function DisclaimerPage() {
  useEffect(() => {
    document.title = "Disclaimer | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black md:text-4xl">Disclaimer</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            The platform provides education, strategy, organization, and readiness tools. See our{" "}
            <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

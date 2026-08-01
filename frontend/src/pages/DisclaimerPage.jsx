import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational Purpose",
    body: "PEN2PRO's roadmaps, strategy tools, and RMIE outputs are for educational and planning purposes. They are not legal, financial, tax, or credit-repair advice, and are not a substitute for guidance from a licensed attorney, accountant, or financial advisor.",
  },
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or any specific financial outcome. Every business and market is different, and results depend on your effort, resources, and circumstances outside our control.",
  },
  {
    title: "Credit Repair",
    body: "PEN2PRO does not guarantee credit repair results. The Credit Readiness tools provide education, organization, and strategy — not dispute services or promises of score changes. Always verify your rights under the Credit Repair Organizations Act (CROA) and FCRA before working with any third party.",
  },
  {
    title: "Funding & Lending",
    body: "PEN2PRO does not guarantee funding or loan approval. Funding readiness checklists help you prepare and organize — final lending decisions are made solely by lenders, banks, and funding partners.",
  },
  {
    title: "Third-Party & Affiliate Links",
    body: "PEN2PRO may link to third-party services (LLC formation, banking, bookkeeping, credit, funding partners, and more). We may earn a referral commission from some of these links. We do not control and are not responsible for the products, services, or outcomes of third parties.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          <span className="gradient-text">Disclaimer</span>
        </h1>
        <p className="text-slate-400 mb-12">Please read this carefully before acting on any PEN2PRO roadmap, strategy, or recommendation.</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            See also our <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

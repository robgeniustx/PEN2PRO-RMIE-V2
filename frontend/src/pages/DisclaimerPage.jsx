import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational Purpose",
    body: "PEN2PRO's roadmaps, strategy plans, and checklists are provided for educational and planning purposes. They are not legal, tax, financial, or credit repair advice.",
  },
  {
    title: "No Guaranteed Outcomes",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Every business, credit profile, and funding situation is different, and results depend on individual effort, market conditions, and factors outside our control.",
  },
  {
    title: "Credit & Funding Tools",
    body: "The Funding Readiness and Credit Repair tools help you organize documentation, understand utilization strategy, and prepare for lenders — they do not remove negative items from your credit report, guarantee a dispute outcome, or guarantee any lender's approval decision.",
  },
  {
    title: "Professional Guidance",
    body: "For legal formation (LLC/EIN), tax, credit repair, or lending decisions, consult a licensed attorney, accountant, credit counselor, or financial professional. PEN2PRO's affiliate partners are independent third parties, and PEN2PRO does not control their services or outcomes.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">Disclaimer</h1>
        <p className="text-slate-400 mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO provides roadmaps, strategy, and structure — not a promise of revenue, profit, or business success. Every business outcome depends on your effort, market conditions, execution, and factors outside PEN2PRO's control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding-readiness checklists, vendor tradeline guidance, and lender-preparation content are educational tools to help you get organized. PEN2PRO does not guarantee approval from any lender, bank, investor, or funding partner.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-building and dispute-readiness guidance is educational. PEN2PRO is not a credit repair organization, does not perform disputes on your behalf, and does not guarantee any change to your credit score or credit report.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Content on PEN2PRO — including LLC/EIN checklists, business formation guidance, and financial projections — is for informational purposes only and is not a substitute for advice from a licensed attorney, accountant, or financial advisor. Consult a qualified professional before making legal, tax, or financial decisions.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission when you use partner links for services such as LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, or insurance. We only recommend partners we believe add real value, but you should independently evaluate any third-party service before purchasing.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps and strategy output are generated with AI based on the information you provide. Review all AI-generated content for accuracy before acting on it — PEN2PRO is a planning tool, and the final decisions and execution are yours.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Disclaimer
        </h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
          The platform provides education, strategy, organization, and readiness tools — the work of building your
          business is yours.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Terms of Service</Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Your Free Roadmap</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

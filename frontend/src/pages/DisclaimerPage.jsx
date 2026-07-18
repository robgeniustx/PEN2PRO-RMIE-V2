import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee that following a PEN2PRO roadmap, strategy plan, or execution guide will result in income, profit, or business success. Results depend on your market, effort, resources, and execution.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists and lender-preparation guidance are educational tools to help you organize your business and improve your position. PEN2PRO does not guarantee approval for any loan, grant, line of credit, or investment.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-building and credit-readiness content on PEN2PRO is educational. PEN2PRO is not a credit repair organization, does not perform disputes on your behalf, and does not guarantee any change to your credit score or credit report.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO constitutes legal, tax, accounting, or licensed financial advice. Business entity formation (LLC/EIN), tax treatment, and financing decisions should be reviewed with a qualified attorney, accountant, or financial advisor before you act.",
  },
  {
    title: "Affiliate & Partner Relationships",
    body: "PEN2PRO may recommend third-party partners (LLC formation services, business banks, funding platforms, credit tools, and similar providers) and may earn a referral commission when you use these links. We vet partners in good faith but are not responsible for their products, pricing, or outcomes.",
  },
  {
    title: "Individual Results Vary",
    body: "Any success stories, examples, or projections shared by PEN2PRO — including the founder's own story — reflect individual experiences and are not typical or guaranteed outcomes for every user.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Disclaimer</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

          <div className="mb-8 rounded-2xl border p-6" style={{ borderColor: "rgba(212,160,23,0.4)", background: "rgba(212,160,23,0.08)" }}>
            <p className="text-sm font-bold leading-7" style={{ color: "#D4A017" }}>
              PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
              The platform provides education, strategy, organization, and readiness tools.
            </p>
          </div>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="font-display text-lg font-black text-white mb-2">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions? Email{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
              support@pen2pro.com
            </a>
            . See also our{" "}
            <Link to="/privacy" className="text-[#D4A017] hover:underline">Privacy Policy</Link>
            {" "}and{" "}
            <Link to="/terms" className="text-[#D4A017] hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

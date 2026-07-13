import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO is an AI-powered strategy and planning platform. The roadmaps, plans, and guidance we provide are educational tools designed to help you organize and execute a business idea. We do not guarantee that following a PEN2PRO roadmap will result in income, profit, or business success. Outcomes depend on your effort, market conditions, execution, and factors outside our control.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Our Credit Repair Readiness content provides education, organization, and strategy around credit-building and dispute readiness. PEN2PRO is not a credit repair organization, does not perform disputes on your behalf, and does not guarantee any change to your credit score, report, or history.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Our Funding Readiness content helps you organize documentation and understand what lenders and vendors typically look for. PEN2PRO does not guarantee approval for any loan, line of credit, grant, or vendor tradeline. Lending decisions are made solely by third-party financial institutions.",
  },
  {
    title: "Not Legal, Financial, or Tax Advice",
    body: "Content on PEN2PRO — including LLC/EIN checklists, business structure guidance, and financial projections — is for informational purposes only and is not legal, financial, accounting, or tax advice. Consult a licensed attorney, accountant, or financial advisor for advice specific to your situation.",
  },
  {
    title: "Third-Party Tools & Affiliate Links",
    body: "PEN2PRO recommends third-party tools and services (LLC formation, banking, bookkeeping, insurance, marketing, and similar categories) on pages such as Affiliate Resources. Some links are affiliate links, and PEN2PRO may earn a commission at no additional cost to you. We do not control and are not responsible for the products, services, pricing, or outcomes of third-party providers.",
  },
  {
    title: "Individual Results Vary",
    body: "Any examples, testimonials, or case studies referenced on PEN2PRO reflect individual experiences and are not a promise or guarantee of similar results for any other user.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
          The platform provides education, strategy, organization, and readiness tools. Please read the details below.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/privacy" className="btn-outline px-5 py-2.5 text-sm font-bold">Privacy Policy</Link>
          <Link to="/terms" className="btn-outline px-5 py-2.5 text-sm font-bold">Terms of Service</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

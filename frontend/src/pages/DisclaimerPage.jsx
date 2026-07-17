import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. Every roadmap, strategy, and checklist is generated to give you a realistic starting point — outcomes depend on your effort, market conditions, financial history, and factors outside PEN2PRO's control.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Content on PEN2PRO — including business roadmaps, branding direction, pricing strategy, and funding readiness checklists — is provided for general educational and organizational purposes only. It is not a substitute for advice from a licensed attorney, accountant, tax professional, or financial advisor. Consult a qualified professional before making legal, tax, or financial decisions for your business.",
  },
  {
    title: "Credit Repair Disclaimer",
    body: "PEN2PRO's Credit Repair tools provide education, organization, and readiness strategy — they are not a credit repair service and do not dispute items on your credit report on your behalf. You have the right to dispute inaccurate information on your credit report yourself, for free, directly with the credit bureaus. Under the Credit Repair Organizations Act, you cannot be guaranteed specific credit results by any person or company.",
  },
  {
    title: "Funding & Lending Disclaimer",
    body: "PEN2PRO is not a lender, broker, or funding provider. Funding readiness checklists and vendor/lender references are informational only. Approval decisions are made solely by the third-party banks, lenders, or vendors you apply with, based on their own criteria.",
  },
  {
    title: "Business Success Disclaimer",
    body: "Starting and running a business carries inherent risk. Any income examples, case studies, or founder story shared on PEN2PRO — including Robert Green's personal experience — reflect individual results and are not a promise or guarantee that you will achieve similar outcomes.",
  },
  {
    title: "Third-Party & Affiliate Links",
    body: "PEN2PRO may reference or link to third-party services (LLC formation, business banking, credit monitoring, funding partners, marketing tools, and more) on our Affiliate page. Some of these links may be affiliate links, meaning PEN2PRO may earn a commission at no additional cost to you if you choose to use them. We only reference services we believe can genuinely help our users — but we do not control, and are not responsible for, the products, pricing, or services of any third party.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">Disclaimer</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: January 1, 2026</p>

        <div className="mt-8 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.35)", background: "#0D1528" }}>
          <p className="text-sm font-semibold leading-7 text-white">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
            The platform provides education, strategy, organization, and readiness tools — not a promise of outcome.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="text-lg font-bold text-white">Questions</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              If anything here is unclear, reach out through our{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>waitlist form</Link>.
              See also our{" "}
              <Link to="/terms" className="font-semibold" style={{ color: "#D4A017" }}>Terms of Service</Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-semibold" style={{ color: "#D4A017" }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

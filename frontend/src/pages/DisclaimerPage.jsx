import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Income Guarantee",
    body: "PEN2PRO does not guarantee any level of income, revenue, or business success. Roadmaps, strategies, and projections are educational tools based on the information you provide — actual results depend on your effort, execution, market conditions, and factors outside our control.",
  },
  {
    title: "No Funding or Loan Guarantee",
    body: "Funding readiness checklists and guidance do not guarantee approval for any loan, grant, line of credit, or investment. Lenders and funders make their own independent decisions.",
  },
  {
    title: "No Credit Repair Guarantee",
    body: "Credit-building and credit readiness content is educational only. PEN2PRO does not guarantee any change to your credit score, removal of negative items, or approval for any credit product. If you need dispute or repair services, work with a licensed credit repair organization or attorney.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Content on PEN2PRO — including LLC/EIN checklists, business structure guidance, and financial projections — is for general informational purposes only and is not a substitute for advice from a licensed attorney, accountant, or financial advisor. Consult a qualified professional before making legal, tax, or financial decisions.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps and recommendations are generated with the help of AI based on your inputs. Review all output critically — AI-generated guidance can be incomplete or imperfect for your specific situation.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission from some of the tools and partners recommended on the Platform (LLC formation, banking, credit, funding, and other services). This does not change the price you pay, and we only recommend tools we believe provide real value.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Disclaimer
          </h1>
          <p className="text-slate-400 text-sm">Please read this before acting on any PEN2PRO guidance.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and build a
          business. It does not guarantee credit repair results, funding approval, loan approval, or business success.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            See also our <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
            <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

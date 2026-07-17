import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Business Success",
    body: "PEN2PRO provides roadmaps, strategy tools, and educational content to help you plan and organize a business. We do not guarantee income, sales, profitability, or business success. Results depend on your effort, execution, market conditions, and factors outside PEN2PRO's control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists, lender preparation guidance, and vendor/tradeline information are educational tools. PEN2PRO does not guarantee approval for any loan, grant, line of credit, or funding source.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit-building and credit readiness content is provided for education and organization purposes only. PEN2PRO does not guarantee any specific change to a credit score, removal of negative items, or approval from any creditor or bureau.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO — including LLC/EIN checklists, business bank guidance, or branding direction — should be treated as legal, tax, or financial advice. Consult a licensed attorney, accountant, or financial professional for guidance specific to your situation.",
  },
  {
    title: "AI-Generated Output",
    body: "Roadmaps and strategy plans are generated with AI assistance based on the information you provide. Review all output critically and verify anything related to regulations, licensing, contracts, or compliance before acting on it.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "PEN2PRO may link to third-party partners for business formation, banking, credit, funding, domains, bookkeeping, payments, CRM, insurance, or marketing services. PEN2PRO may earn a referral commission from some of these links. We do not control and are not responsible for the products, services, or outcomes provided by third parties.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="font-display text-4xl font-black text-white">Disclaimer</h1>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success.
          The platform provides education, strategy, organization, and readiness tools — not guarantees.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Also see our{" "}
            <Link to="/privacy" className="font-semibold" style={{ color: "#FF8A00" }}>Privacy Policy</Link>{" "}
            and{" "}
            <Link to="/terms" className="font-semibold" style={{ color: "#FF8A00" }}>Terms of Service</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

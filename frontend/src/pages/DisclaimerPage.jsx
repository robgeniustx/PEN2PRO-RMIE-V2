import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO does not guarantee income, business success, revenue, or profit of any kind. Roadmaps, blueprints, and strategy output are educational and strategic tools based on the information you provide. Results depend on individual effort, market conditions, execution, and factors outside our control.",
  },
  {
    title: "No Guarantee of Funding or Loan Approval",
    body: "Funding readiness checklists, lender preparation guidance, and vendor/tradeline information are provided for educational and organizational purposes only. PEN2PRO does not guarantee approval for any loan, grant, line of credit, or funding source.",
  },
  {
    title: "No Guarantee of Credit Repair Results",
    body: "Credit strategy content, dispute readiness guidance, and utilization strategy are educational tools, not a credit repair service. PEN2PRO does not guarantee any change to your credit score, report, or credit history.",
  },
  {
    title: "Not Legal, Tax, or Financial Advice",
    body: "Nothing on PEN2PRO — including AI-generated roadmaps, LLC/EIN checklists, and branding guidance — constitutes legal, tax, accounting, or financial advice. Consult a licensed attorney, accountant, or financial professional before making business, legal, or financial decisions.",
  },
  {
    title: "Affiliate & Third-Party Links",
    body: "PEN2PRO may link to third-party services (banking, LLC formation, funding partners, tools, and vendors) and may earn a commission from these partnerships. We do not control and are not responsible for the products, services, or actions of third parties.",
  },
  {
    title: "Educational Platform",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools to help you plan and execute a business idea. It is your responsibility to verify information, comply with applicable laws, and make your own business decisions.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 pb-16 pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">Disclaimer</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

          <p className="mt-8 text-base leading-7 text-slate-400">
            PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or
            business success. The platform provides education, strategy, organization, and readiness
            tools — the work of building your business is yours to do.
          </p>

          <div className="mt-10 space-y-8">
            {SECTIONS.map((section) => (
              <div key={section.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="font-display text-lg font-bold text-white mb-2">{section.title}</h2>
                <p className="text-sm leading-6 text-slate-400">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              See also our{" "}
              <Link to="/privacy" className="font-semibold text-[#D4A017] hover:underline">Privacy Policy</Link>{" "}
              and{" "}
              <Link to="/terms" className="font-semibold text-[#D4A017] hover:underline">Terms of Service</Link>,
              or contact{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#D4A017] hover:underline">support@pen2pro.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

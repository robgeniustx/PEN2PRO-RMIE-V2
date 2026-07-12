import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational & Strategic Guidance Only",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy recommendations, and readiness checklists for educational and planning purposes. Nothing on this platform constitutes legal, tax, financial, credit, or investment advice.",
  },
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO does not guarantee that you will earn any specific amount of income, launch a successful business, or achieve any particular outcome. Business results depend on your effort, market conditions, execution, and factors outside our control.",
  },
  {
    title: "No Guarantee of Funding, Loan, or Credit Approval",
    body: "PEN2PRO does not guarantee funding approval, business loan approval, vendor credit approval, or credit score improvement. Funding and credit readiness checklists are preparation tools, not approval guarantees from any lender, vendor, or bureau.",
  },
  {
    title: "Third-Party & Affiliate Resources",
    body: "PEN2PRO may recommend third-party services (LLC formation, banking, funding, credit monitoring, marketing tools, and similar resources) and may earn an affiliate commission from some links. We do not control and are not responsible for the products, services, or outcomes of third-party providers.",
  },
  {
    title: "Consult Licensed Professionals",
    body: "Before making significant legal, tax, credit, or financial decisions, consult a licensed attorney, accountant, credit counselor, or financial advisor. PEN2PRO is a strategy and planning tool, not a substitute for professional advice.",
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
          <p className="text-slate-400 max-w-2xl mx-auto">
            Please read this disclaimer carefully before acting on any PEN2PRO roadmap, strategy, or recommendation.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            See also our{" "}
            <Link to="/terms" className="font-semibold" style={{ color: "#D4A017" }}>Terms of Service</Link>{" "}
            and{" "}
            <Link to="/privacy" className="font-semibold" style={{ color: "#D4A017" }}>Privacy Policy</Link>.
          </p>
        </div>

        <div className="text-center pt-4">
          <Link to="/waitlist" className="btn-gold px-8 py-3 text-sm font-bold inline-block">Join the Waitlist</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

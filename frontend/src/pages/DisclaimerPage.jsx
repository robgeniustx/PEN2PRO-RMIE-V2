import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Educational Purpose",
    body: "PEN2PRO provides education, strategy, structure, and readiness tools to help you plan and build a business. Nothing on this platform constitutes legal, tax, financial, credit repair, or investment advice.",
  },
  {
    title: "No Guaranteed Outcomes",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, investor interest, or credit repair results. Every business and financial situation is different, and results depend on your effort, resources, market conditions, and factors outside our control.",
  },
  {
    title: "Credit & Funding Tools",
    body: "Our Credit Readiness and Funding Readiness tools are organizational and educational in nature. They help you understand and prepare your profile — they do not repair your credit, guarantee lender approval, or replace guidance from a licensed credit counselor, attorney, or financial advisor.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps, strategies, scripts, and checklists are generated using artificial intelligence based on the information you provide. Review all AI-generated output critically and verify anything related to legal formation, licensing, taxes, or regulated industries with a qualified professional.",
  },
  {
    title: "Your Responsibility",
    body: "You are responsible for the decisions you make in your business. PEN2PRO is a tool to help you plan and execute — it does not act on your behalf, sign contracts for you, or assume liability for your business outcomes.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          <span className="gradient-text">Disclaimer</span>
        </h1>
        <p className="text-slate-400 mb-10">Effective date: January 1, 2026</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="text-lg font-black text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-600">
          See also our{" "}
          <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link> and{" "}
          <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}

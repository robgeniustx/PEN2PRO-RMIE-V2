import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "No Guarantee of Income or Success",
    body: "PEN2PRO does not guarantee income, revenue, funding approval, loan approval, credit repair results, or business success of any kind. Every roadmap, strategy plan, and checklist is a planning tool, not a promise. Your results depend on your market, effort, execution, timing, and factors outside PEN2PRO's control.",
  },
  {
    title: "Educational & Strategic Purpose Only",
    body: "PEN2PRO's Rapid Monetization Intelligence Engine (RMIE) provides education, structure, and strategy — including business roadmaps, pricing guidance, marketing plans, funding readiness checklists, and credit-building steps. Nothing on this platform is legal, tax, accounting, credit repair, or investment advice. Always consult a licensed professional (attorney, accountant, credit counselor, or financial advisor) before making legal, tax, or financial decisions for your business.",
  },
  {
    title: "Credit & Funding Readiness",
    body: "Content on the /funding and /credit-repair pages is designed to help you organize, prepare, and understand what lenders and vendors typically look for. PEN2PRO is not a credit repair organization, a lender, or a financial institution, and cannot guarantee that any dispute, utilization strategy, or readiness step will improve your credit score or result in approval for funding, tradelines, or loans.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps, financial estimates, sales scripts, and other output are generated using AI based on the information you provide. AI can make mistakes, produce generic suggestions, or misjudge your specific situation. Review all AI-generated content critically and verify facts, figures, and legal requirements independently before acting on them.",
  },
  {
    title: "Affiliate & Partner Relationships",
    body: "PEN2PRO may earn a commission when you use links to third-party tools and services referenced on pages like /affiliate, /funding, and /credit-repair. These are independent businesses, and PEN2PRO is not responsible for their pricing, terms, service quality, or outcomes.",
  },
  {
    title: "Founder Story & Testimonials",
    body: "Robert Green's story and any testimonials shared on PEN2PRO reflect individual, real experiences. They are shared for inspiration and context, not as a guarantee that any other user will achieve the same results.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Disclaimer</h1>
          <p className="text-slate-400">Please read this before acting on any PEN2PRO roadmap or strategy.</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="mb-10 rounded-2xl border p-6" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0F1520" }}>
          <p className="text-sm leading-7 text-slate-300">
            <strong className="text-white">PEN2PRO does not guarantee credit repair results, funding approval, loan
            approval, or business success.</strong> The platform provides education, strategy, organization, and
            readiness tools — the work of building your business is still yours to do.
          </p>
        </div>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 mb-4">
            For the full legal picture, review our Privacy Policy and Terms of Service.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/privacy" className="btn-outline px-5 py-2.5 text-sm font-bold">Privacy Policy</Link>
            <Link to="/terms" className="btn-outline px-5 py-2.5 text-sm font-bold">Terms of Service</Link>
            <Link to="/starter" className="btn-gold px-5 py-2.5 text-sm font-bold">Start Your Free Roadmap</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

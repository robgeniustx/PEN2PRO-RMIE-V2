import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that provides business roadmaps, strategy tools, funding and credit readiness education, branding direction, and execution support. PEN2PRO is an educational and planning tool — it is not a law firm, accounting firm, lender, or credit repair organization.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Free, Pro, Elite, and Founders tiers may include recurring or one-time charges. By subscribing, you authorize PEN2PRO to charge your chosen payment method through our payment processor (Stripe). You may cancel a recurring subscription at any time; cancellation takes effect at the end of the current billing period.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair outcomes. Results depend on your individual effort, market conditions, and factors outside our control.",
  },
  {
    title: "User Responsibilities",
    body: "You agree to provide accurate information, use the platform lawfully, and not misuse, resell, or reverse-engineer PEN2PRO's tools or AI outputs without permission.",
  },
  {
    title: "Affiliate Relationships",
    body: "PEN2PRO may earn a commission from partner links (LLC formation, banking, credit, funding, domains, bookkeeping, payment processing, CRM, insurance) presented on the platform. This does not change the price you pay.",
  },
  {
    title: "Changes to These Terms",
    body: "PEN2PRO may update these terms as the platform evolves. Continued use after changes means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="mb-12 text-slate-400">Last updated: 2026. Please read these terms carefully before using PEN2PRO.</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

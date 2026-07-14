import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO — including the free Starter roadmap, Pro, Elite, or Founders tiers — you agree to these Terms of Service.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, and execution support. PEN2PRO provides education, strategy, and organizational tools — it is not a law firm, accounting firm, licensed financial advisor, or lender.",
  },
  {
    title: "3. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control. Roadmaps and strategies are guidance, not promises.",
  },
  {
    title: "4. Account Responsibilities",
    body: "You are responsible for the accuracy of the information you submit and for keeping your account credentials secure. You agree not to misuse the platform, attempt to disrupt its operation, or resell PEN2PRO's outputs as your own software product.",
  },
  {
    title: "5. Subscriptions & Billing",
    body: "Pro, Elite, and Founders plans are billed as described at checkout. Founders pricing, where offered, is a limited early-access offer subject to the terms presented at signup. You may cancel a recurring subscription at any time; access continues through the end of the paid period.",
  },
  {
    title: "6. Intellectual Property",
    body: "The PEN2PRO platform, brand, RMIE methodology, and underlying software are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business.",
  },
  {
    title: "7. Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform or reliance on its guidance.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after an update means you accept the revised Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">
          Effective date: January 1, 2026. Please read these terms carefully before using PEN2PRO.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border p-6 text-center" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
          <p className="text-sm text-slate-400 mb-4">Ready to build your roadmap?</p>
          <Link to="/starter" className="btn-gold inline-block px-6 py-2.5 text-sm font-bold rounded-xl">
            Start Free Roadmap
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

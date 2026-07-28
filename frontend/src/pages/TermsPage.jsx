import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, branding direction, and execution support. PEN2PRO provides education, strategy, and organizational tools — it does not guarantee business, financial, credit, or funding outcomes.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
  },
  {
    title: "4. Plans, Billing & Upgrades",
    body: "Free, Pro, Elite, and Legacy Founder plans each unlock different levels of access as described on the Pricing page. Paid plans are billed according to the terms shown at checkout. You may cancel a recurring plan at any time; access continues through the end of the current billing period.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to misuse PEN2PRO — including attempting to disrupt the platform, reverse-engineer the AI systems, resell access without authorization, or submit unlawful, fraudulent, or harmful content through the intake or roadmap tools.",
  },
  {
    title: "6. Intellectual Property",
    body: "PEN2PRO's platform, brand, RMIE engine, and content are the property of PEN2PRO. Roadmaps and outputs generated for your account are yours to use for your own business purposes.",
  },
  {
    title: "7. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Outcomes depend on individual effort, market conditions, and factors outside PEN2PRO's control.",
  },
  {
    title: "8. Limitation of Liability",
    body: "To the fullest extent permitted by law, PEN2PRO and its founders are not liable for indirect, incidental, or consequential damages arising from use of the platform, including business or financial decisions made based on roadmap output.",
  },
  {
    title: "9. Termination",
    body: "PEN2PRO may suspend or terminate accounts that violate these Terms. You may close your account at any time.",
  },
  {
    title: "10. Changes to These Terms",
    body: "These Terms may be updated as PEN2PRO evolves. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#1A2D50] p-8 text-center sm:flex-row sm:items-center sm:justify-between" style={{ background: "#0D1528" }}>
          <p className="text-sm text-slate-400">Ready to build your roadmap under these terms?</p>
          <Link to="/starter" className="btn-gold rounded-lg px-6 py-3 text-sm font-black whitespace-nowrap">
            Start Free Roadmap
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

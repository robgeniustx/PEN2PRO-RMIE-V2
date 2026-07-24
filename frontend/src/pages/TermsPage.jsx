import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO — including the Starter, Pro, Elite, or Founders tiers — you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform. It generates business roadmaps, strategy guidance, launch plans, branding direction, and funding/credit readiness education based on the information you provide. It is a planning and education tool, not a guarantee of outcomes.",
  },
  {
    title: "3. Accounts & Subscriptions",
    body: "Pro, Elite, and Founders access are subscription or one-time paid tiers billed through Stripe. You can cancel a recurring subscription at any time; cancellation stops future billing but does not refund past charges except where required by law.",
  },
  {
    title: "4. Acceptable Use",
    body: "You agree not to misuse the platform — including reverse-engineering the AI systems, submitting unlawful content, impersonating others, or reselling PEN2PRO output as your own software product without permission.",
  },
  {
    title: "5. AI-Generated Content",
    body: "Roadmaps, strategies, and recommendations are generated with the help of AI and founder-built frameworks. You are responsible for verifying any legal, tax, financial, or regulatory information before acting on it — PEN2PRO output is a starting point, not professional advice.",
  },
  {
    title: "6. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control. See our Disclaimer for details.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO name, brand, platform, and underlying RMIE methodology are owned by PEN2PRO. Your business ideas and the roadmaps generated for your account remain yours to use.",
  },
  {
    title: "8. Termination",
    body: "We may suspend or terminate accounts that violate these terms or misuse the platform. You may close your account at any time.",
  },
  {
    title: "9. Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    title: "10. Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use after changes take effect means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-black text-white mb-3">{s.title}</h2>
            <p className="text-sm leading-7 text-slate-400">{s.body}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm leading-7 text-slate-400">
            Related policies: our{" "}
            <Link to="/privacy" className="font-bold text-[#FF8A00] hover:opacity-80 transition">Privacy Policy</Link>{" "}
            and{" "}
            <Link to="/disclaimer" className="font-bold text-[#FF8A00] hover:opacity-80 transition">Disclaimer</Link>.
            Ready to start? <Link to="/starter" className="font-bold text-[#FF8A00] hover:opacity-80 transition">Build your free roadmap →</Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By creating an account, joining the waitlist, or otherwise using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
    ],
  },
  {
    title: "2. Description of Service",
    body: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps users turn ideas, skills, and lived experience into business roadmaps, launch strategies, and monetization guidance. PEN2PRO provides education, strategy, and organizational tools — it does not guarantee any business, financial, credit, or funding outcome.",
    ],
  },
  {
    title: "3. Account Registration",
    body: [
      "You must provide accurate information when creating an account and are responsible for keeping your login credentials secure. You are responsible for all activity that occurs under your account.",
    ],
  },
  {
    title: "4. Subscription Tiers & Billing",
    body: [
      "PEN2PRO offers a free Starter tier and paid Pro, Elite, and Founders tiers. Paid subscriptions are billed on a recurring basis until canceled. Founders tier pricing, where offered, reflects limited-availability early-access positioning and is subject to the terms presented at time of purchase.",
      "You may cancel a paid subscription at any time; access continues through the end of the current billing period.",
    ],
  },
  {
    title: "5. Acceptable Use",
    body: [
      "You agree not to misuse PEN2PRO — including attempting to disrupt the platform, reverse-engineer the software, resell access without authorization, or submit unlawful, fraudulent, or harmful content through the platform.",
    ],
  },
  {
    title: "6. Intellectual Property",
    body: [
      "PEN2PRO, its branding, design, and underlying technology are owned by PEN2PRO. Roadmaps, strategies, and content you generate through your account are yours to use for your own business purposes.",
    ],
  },
  {
    title: "7. Disclaimers",
    body: [
      "PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or business success. Roadmap output, strategy recommendations, and readiness checklists are educational tools, not professional legal, tax, credit repair, or financial advice. See our full Disclaimer page for details.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform, including business losses or missed opportunities.",
    ],
  },
  {
    title: "9. Termination",
    body: [
      "We may suspend or terminate accounts that violate these Terms. You may stop using PEN2PRO and request account deletion at any time.",
    ],
  },
  {
    title: "10. Changes to These Terms",
    body: [
      "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes take effect constitutes acceptance of the updated Terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Effective date: January 1, 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-3 text-sm leading-7 text-slate-400">{p}</p>
              ))}
            </div>
          ))}

          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="text-lg font-bold text-white">11. Contact Us</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              Questions about these Terms? Reach out through our{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>waitlist form</Link>{" "}
              and our team will respond. See also our{" "}
              <Link to="/disclaimer" className="font-semibold" style={{ color: "#D4A017" }}>Disclaimer</Link>{" "}
              and{" "}
              <Link to="/privacy" className="font-semibold" style={{ color: "#D4A017" }}>Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.",
  },
  {
    title: "Description of Service",
    body: "PEN2PRO provides an AI-powered business development platform (RMIE — Rapid Monetization Intelligence Engine) that generates business roadmaps, launch plans, funding readiness guides, credit strategy content, and related resources. The platform is provided for informational and educational purposes.",
  },
  {
    title: "Free & Paid Accounts",
    body: "PEN2PRO offers a free tier and paid subscription plans (Pro, Elite) as well as a one-time Legacy Founder lifetime access option. Paid features are unlocked upon successful payment processing. Subscriptions auto-renew unless cancelled before the renewal date.",
  },
  {
    title: "Refund Policy",
    body: "Monthly subscription fees are non-refundable after the billing cycle begins. Legacy Founder lifetime access purchases may be eligible for a full refund within 7 days of purchase, provided no roadmap generation or feature access has occurred. Refund requests must be submitted in writing to robertg@xlr8pressurewashing.com.",
  },
  {
    title: "Acceptable Use",
    body: "You agree to use PEN2PRO only for lawful purposes. You may not use the platform to generate content that is fraudulent, defamatory, or harmful. You may not attempt to reverse-engineer, scrape, or copy the platform's AI systems, outputs, or underlying infrastructure.",
  },
  {
    title: "AI-Generated Content Disclaimer",
    body: "PEN2PRO uses AI to generate business roadmaps, strategies, and recommendations. This content is generated based on information you provide and is intended as a starting framework — not professional legal, financial, or accounting advice. Always consult qualified professionals before making business, legal, or financial decisions.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO platform, branding, design, and underlying systems are owned by PEN2PRO and its creator. AI-generated roadmap outputs produced using your data are provided to you for your own use. You may not resell, repackage, or distribute PEN2PRO's AI output as your own product or service.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is not liable for any business losses, missed opportunities, funding denials, credit impacts, or other damages arising from use of the platform. The platform is provided 'as is' without warranty of any kind.",
  },
  {
    title: "Modifications",
    body: "We reserve the right to update these Terms at any time. Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.",
  },
  {
    title: "Contact",
    body: "For legal inquiries or Terms-related questions, contact: robertg@xlr8pressurewashing.com",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
        <h1 className="mb-3 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 2025 · Effective immediately</p>

        <p className="mb-10 rounded-xl border border-[#1A2235] bg-[#0F1520] p-5 text-sm text-slate-400">
          Please read these Terms carefully before using PEN2PRO. By using this platform you agree to be bound by these terms.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-[#1A2235] pt-8">
          <Link to="/privacy" className="text-sm font-semibold text-[#D4A017] hover:underline">Privacy Policy</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#D4A017] hover:underline">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white">← Back to Home</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

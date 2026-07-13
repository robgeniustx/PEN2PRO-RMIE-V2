import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. Description of Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, and execution tools based on information you provide. Free, Pro, Elite, and Founders tiers offer different levels of access, as described on our Pricing page.",
  },
  {
    title: "3. Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately of any unauthorized use.",
  },
  {
    title: "4. Subscriptions & Payments",
    body: "Paid plans are billed on a recurring or one-time basis as described at checkout and processed securely through Stripe. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Founders tier pricing, where offered, is a limited-availability lifetime-access offer subject to the terms presented at purchase.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, credit repair outcomes, funding approval, or loan approval. Results depend on your effort, market conditions, and factors outside our control. See our full Disclaimer for details.",
  },
  {
    title: "6. Acceptable Use",
    body: "You agree not to misuse the platform, including attempting to disrupt service, reverse-engineer the AI systems, resell access without authorization, or submit unlawful content through roadmap intake forms.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO platform, brand, and RMIE technology are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your own business purposes.",
  },
  {
    title: "8. Termination",
    body: "We may suspend or terminate access for violation of these terms. You may stop using PEN2PRO and cancel your subscription at any time.",
  },
  {
    title: "9. Limitation of Liability",
    body: "PEN2PRO is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    title: "10. Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use after changes take effect constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          These Terms of Service govern your use of PEN2PRO. Please read them carefully before using the platform.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link to="/privacy" className="btn-outline px-5 py-2.5 text-sm font-bold">Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-5 py-2.5 text-sm font-bold">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

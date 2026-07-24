import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, respond to inquiries, send launch and product updates, improve PEN2PRO's AI models and content, and manage your account and subscription tier (Free, Pro, Elite, or Founders).",
  },
  {
    title: "3. How We Share Information",
    body: "We do not sell your personal information. We may share limited data with service providers who help us operate the platform (payment processing, email delivery, hosting, analytics) under confidentiality obligations, or when required by law.",
  },
  {
    title: "4. Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how your payment data is handled.",
  },
  {
    title: "5. Data Retention",
    body: "We retain waitlist, account, and roadmap data for as long as your account is active or as needed to provide the service, comply with legal obligations, and resolve disputes.",
  },
  {
    title: "6. Your Rights",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "7. Security",
    body: "We use reasonable administrative and technical safeguards to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected with an updated effective date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
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
            Questions about this policy or your data? Contact us through the{" "}
            <Link to="/waitlist" className="font-bold text-[#1E88E5] hover:opacity-80 transition">
              waitlist form
            </Link>{" "}
            or reach out via your account dashboard once you're a member. See also our{" "}
            <Link to="/terms" className="font-bold text-[#1E88E5] hover:opacity-80 transition">Terms of Service</Link>{" "}
            and{" "}
            <Link to="/disclaimer" className="font-bold text-[#1E88E5] hover:opacity-80 transition">Disclaimer</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — name, email, phone, business idea, and roadmap intake answers — when you join the waitlist, create an account, or generate a roadmap. We also collect basic usage data (pages visited, features used, referral source) to improve the product.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your roadmap, operate your account, respond to support requests, send product updates, and improve PEN2PRO. We do not sell your personal information.",
  },
  {
    title: "Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials — Stripe handles that data under its own security and compliance standards.",
  },
  {
    title: "Data Sharing",
    body: "We share data with service providers who help us run PEN2PRO (hosting, analytics, payment processing, email delivery) under confidentiality obligations. We may disclose information if required by law.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain account and roadmap data for as long as your account is active, plus a reasonable period after for support and legal purposes. We use industry-standard safeguards, but no system is 100% secure.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            PRIVACY POLICY
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Your Privacy <span className="gradient-text">Matters</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This policy explains what information PEN2PRO collects and how it's used. Last updated July 2026.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Contact us through the{" "}
            <Link to="/waitlist" className="font-semibold" style={{ color: "#1E88E5" }}>waitlist form</Link>{" "}
            or your account dashboard once registered.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

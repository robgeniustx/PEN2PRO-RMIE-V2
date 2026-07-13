import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your roadmap, operate your account, communicate with you about PEN2PRO (including waitlist and tier updates), improve our AI outputs, and understand how the platform is used. We do not sell your personal information.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored on secured infrastructure and access is restricted to systems and personnel required to operate PEN2PRO. No system is 100% secure, and we work continuously to protect your information.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO may use third-party services for payments (Stripe), analytics, hosting, and affiliate partnerships (LLC formation, business banking, credit, funding, domains, bookkeeping, payment processing, CRM, insurance). These providers have their own privacy policies.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data by contacting us. You may unsubscribe from marketing communications at any time.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to the PEN2PRO team through the contact options on our waitlist and account pages.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="mb-12 text-slate-400">Last updated: 2026. This policy explains how PEN2PRO collects, uses, and protects your information.</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — when you join the waitlist, create an account, or generate a business roadmap. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, communicate with you about your account and PEN2PRO updates, improve our AI models and product experience, and process payments if you upgrade to Pro, Elite, or Founders.",
  },
  {
    title: "3. How We Share Information",
    body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (payment processing, hosting, analytics, email delivery), and only to the extent needed for them to perform those services.",
  },
  {
    title: "4. Data Security",
    body: "We use industry-standard safeguards to protect your data. No system is 100% secure, so we cannot guarantee absolute security, but we work to protect your information against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect,
          how we use it, and the choices you have when you use the PEN2PRO RMIE platform.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            Questions about this policy or your data? Contact us through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> and we'll follow up.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used, device/browser type) needed to operate and improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, send you updates about your roadmap or waitlist status, improve PEN2PRO's AI outputs, and communicate about Pro, Elite, and Founders offers. We do not sell your personal information.",
  },
  {
    title: "3. Data Storage & Security",
    body: "Your data is stored on secured infrastructure with access limited to systems and personnel required to operate PEN2PRO. No system is 100% secure, and we work to apply reasonable safeguards against unauthorized access, alteration, or disclosure.",
  },
  {
    title: "4. Third-Party Services",
    body: "PEN2PRO may use third-party services for payments (Stripe), communications, analytics, and AI processing. These providers only receive the information needed to perform their function and are bound by their own privacy and security obligations.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link included in those messages.",
  },
  {
    title: "6. Cookies & Tracking",
    body: "PEN2PRO may use cookies or similar technologies to keep you signed in, remember preferences, and understand how the platform is used. You can control cookies through your browser settings.",
  },
  {
    title: "7. Children's Privacy",
    body: "PEN2PRO is not directed at children under 18. We do not knowingly collect information from anyone under 18 years of age.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Material changes will be reflected on this page with an updated effective date.",
  },
  {
    title: "9. Contact Us",
    body: "Questions about this Privacy Policy or your data can be sent to the PEN2PRO support team through the contact options listed on the platform.",
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
          <p className="text-sm text-slate-400">Have a question about your data or account?</p>
          <Link to="/waitlist" className="btn-gold rounded-lg px-6 py-3 text-sm font-black whitespace-nowrap">
            Contact PEN2PRO
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

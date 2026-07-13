import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with usage data such as pages visited, features used, and interactions with the RMIE (Rapid Monetization Intelligence Engine) roadmap generator. If you upgrade to a paid plan, payment details are processed by our payment provider (Stripe) and are never stored on our servers.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate and improve the platform, communicate with you about your account and waitlist status, provide customer support, and — where you've opted in — send updates about new features, plan changes, and relevant resources.",
  },
  {
    title: "3. How We Share Information",
    body: "We do not sell your personal information. We share data only with service providers who help us operate PEN2PRO (hosting, payment processing, email delivery, analytics) under contracts that require them to protect your data, or when required by law.",
  },
  {
    title: "4. Data Security",
    body: "We use industry-standard safeguards to protect your information, including encrypted connections and access controls. No system is 100% secure, and we encourage you to use a strong, unique password for your account.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it. You can disable cookies in your browser, though some features may not work correctly.",
  },
  {
    title: "7. Children's Privacy",
    body: "PEN2PRO is not directed at children under 13, and we do not knowingly collect information from children.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be posted on this page with an updated effective date.",
  },
  {
    title: "9. Contact Us",
    body: "Questions about this policy or your data can be directed to the PEN2PRO team through the contact options on our About page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          PEN2PRO ("we," "us," or "our") respects your privacy. This policy explains what information we collect,
          how we use it, and the choices you have when you use our website and RMIE roadmap platform.
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
          <Link to="/terms" className="btn-outline px-5 py-2.5 text-sm font-bold">Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-5 py-2.5 text-sm font-bold">Disclaimer</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

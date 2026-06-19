import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, and business information submitted through our forms, waitlist, or account registration. We also collect usage data such as pages visited, features used, and time on platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to provide and improve the PEN2PRO platform, send you launch updates and platform notifications, personalize your roadmap experience, and communicate about your account and subscription. We do not sell your personal information to third parties.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO may use cookies and analytics tools (such as Google Analytics or PostHog) to understand how users interact with the platform. These tools help us improve the user experience and measure feature adoption. You can disable cookies in your browser settings.",
  },
  {
    title: "Data Security",
    body: "We implement industry-standard security measures to protect your personal information. Passwords are hashed and never stored in plaintext. All data transmissions use HTTPS encryption. Access to user data is restricted to authorized personnel only.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including Stripe (payment processing), OpenAI (AI generation), ElevenLabs (voice AI), and Twilio (communications). These services have their own privacy policies. We encourage you to review them.",
  },
  {
    title: "Data Retention",
    body: "We retain your account data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time by contacting us.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.",
  },
  {
    title: "Contact",
    body: "For privacy-related questions or data requests, contact us at support@pen2pro.com. We aim to respond within 5 business days.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-slate-400">Last updated: June 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard information when you use the PEN2PRO platform.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service →
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

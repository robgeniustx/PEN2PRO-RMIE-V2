import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide when creating an account, submitting a business roadmap intake form, or joining the waitlist. This includes name, email address, phone number (optional), and business details. We also collect standard usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate personalized business roadmaps, deliver your account and dashboard features, send relevant updates about PEN2PRO (you can unsubscribe at any time), and improve the platform based on how it's used. We do not sell your personal information to third parties.",
  },
  {
    title: "Waitlist Data",
    body: "If you join the PEN2PRO waitlist, we store your name, email, and interest level to send updates about platform availability. You can request removal from the waitlist at any time by contacting us.",
  },
  {
    title: "Cookies & Tracking",
    body: "PEN2PRO uses essential cookies to keep you logged in and maintain session state. We may use analytics tools (such as PostHog) to understand how users interact with the platform. No personally identifiable information is shared with analytics providers beyond what is strictly necessary.",
  },
  {
    title: "Data Security",
    body: "We use industry-standard security measures including encrypted passwords, HTTPS connections, and token-based authentication. No method of transmission over the internet is 100% secure; we cannot guarantee absolute security.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO integrates with third-party services including Stripe (payment processing), OpenAI (AI generation), ElevenLabs (voice features), and Twilio (communications). These services have their own privacy policies. We share only the minimum data necessary to operate these integrations.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal data. You can request account deletion by contacting us at the email below. We will process deletion requests within 30 days.",
  },
  {
    title: "Contact",
    body: "For privacy questions or data requests, contact us at: robertg@xlr8pressurewashing.com",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        {/* Header */}
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
        <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 2025 · Effective immediately</p>

        <p className="mb-10 rounded-xl border border-[#1A2235] bg-[#0F1520] p-5 text-sm text-slate-400">
          PEN2PRO is committed to protecting the privacy of everyone who uses this platform. This policy explains how we collect, use, and protect your information.
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
          <Link to="/terms" className="text-sm font-semibold text-[#D4A017] hover:underline">Terms of Service</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#D4A017] hover:underline">Disclaimer</Link>
          <Link to="/" className="text-sm text-slate-500 hover:text-white">← Back to Home</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

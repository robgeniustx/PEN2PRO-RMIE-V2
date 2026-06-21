import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly to us, including your name, email address, phone number, and business information when you create an account, join our waitlist, or generate a business roadmap. We also collect usage data automatically when you interact with our platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to provide and improve our services, send you roadmap results and platform updates, communicate about your account, and personalize your experience. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Storage and Security",
    body: "Your information is stored securely using industry-standard encryption. We use MongoDB Atlas for data storage and implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or disclosure.",
  },
  {
    title: "Cookies and Tracking",
    body: "PEN2PRO uses cookies and similar tracking technologies to maintain session state, improve platform performance, and analyze usage patterns. You can control cookie settings through your browser, though some platform features may not function properly if cookies are disabled.",
  },
  {
    title: "Third-Party Services",
    body: "We use trusted third-party services including Stripe for payment processing, OpenAI for AI-powered roadmap generation, and ElevenLabs for voice features. These providers have their own privacy policies governing their use of your data.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, correct, or delete your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at support@pen2pro.com.",
  },
  {
    title: "Data Retention",
    body: "We retain your information for as long as your account is active or as needed to provide you services. If you close your account, we will delete or anonymize your data within 90 days, except where retention is required by law.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy periodically. We will notify you of material changes by posting the updated policy on this page and, where appropriate, sending you an email notification.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-4 text-slate-400">Last updated: June 2026</p>
          <p className="mb-12 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the PEN2PRO platform.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-3 text-lg font-bold text-white">Contact Us</h2>
            <p className="text-sm text-slate-400">
              If you have questions about this Privacy Policy or our data practices, contact us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link to="/terms" className="text-slate-500 hover:text-white transition">Terms of Service →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-white transition">Disclaimer →</Link>
            <Link to="/" className="text-slate-500 hover:text-white transition">Back to Home →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

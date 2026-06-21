import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly — name, email address, phone number (optional), and business information when you create an account, join the waitlist, or submit a roadmap intake form. We also collect usage data such as pages visited, features used, and session duration to improve the platform.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to deliver the PEN2PRO platform, send product updates and business strategy content, process payments, improve our AI roadmap engine, and respond to your support requests. We do not sell your personal information to third parties.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses cookies and similar technologies to keep you logged in, remember your preferences, and understand how the platform is used. You can disable cookies in your browser settings, but some features may not work correctly without them.`,
  },
  {
    title: "Data Storage and Security",
    body: `Your data is stored securely using industry-standard encryption. We use secure cloud infrastructure and follow best practices to protect your information. While no system is 100% secure, we take every reasonable precaution to protect your data.`,
  },
  {
    title: "Third-Party Services",
    body: `PEN2PRO integrates with third-party services including Stripe (payments), OpenAI (AI roadmap generation), and MongoDB (database). These services have their own privacy policies. We only share the minimum data necessary for these integrations to function.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, update, or delete your personal data at any time. To request data deletion or export, contact us at support@pen2pro.com. We will respond within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not designed for or directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy periodically. If we make material changes, we will notify registered users via email. Continued use of PEN2PRO after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `Questions about this Privacy Policy? Reach us at support@pen2pro.com or through the contact form on our website.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-2 text-sm text-slate-500">Last updated: June 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO is committed to protecting your privacy. This policy explains what information we collect,
          how we use it, and your rights regarding your data.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <div key={s.title}>
              <h2 className="mb-3 font-display text-xl font-black text-white">
                {i + 1}. {s.title}
              </h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service →
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer →
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

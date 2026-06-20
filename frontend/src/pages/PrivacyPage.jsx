import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you use PEN2PRO, we collect information you provide directly — such as your name, email address, business idea, and plan selection. We also collect usage data, including pages visited, features used, and roadmap generation activity. This helps us improve the platform and personalize your experience.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to generate your business roadmap, deliver platform features, send account-related emails, process payments securely through Stripe, and improve the PEN2PRO experience. We do not sell your personal information to third parties.`,
  },
  {
    title: "Data Storage and Security",
    body: `Your data is stored on secure servers. We use industry-standard encryption for data in transit and at rest. Account passwords are hashed and never stored in plain text. While no system is 100% secure, we take reasonable measures to protect your information.`,
  },
  {
    title: "Third-Party Services",
    body: `PEN2PRO uses third-party services including Stripe (payment processing), and infrastructure providers. These services have their own privacy policies and handle data according to their terms. Affiliate links on our platform may track referrals but do not share your personal information with us.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses session cookies and local storage to keep you logged in and to remember your preferences. We do not use third-party advertising trackers. You can clear cookies through your browser settings at any time.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or delete your personal data at any time. To request data deletion or export, contact us at support@pen2pro.com. We will process your request within 30 days.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not designed for or directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy as the platform evolves. We will notify registered users of material changes via email. Continued use of PEN2PRO after changes take effect constitutes acceptance of the updated policy.`,
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
        <h1 className="mb-3 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
        <p className="mb-3 text-slate-400">
          Last updated: June 20, 2026
        </p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and how we protect it.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-xl font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row">
          <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Disclaimer
          </Link>
          <Link to="/" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

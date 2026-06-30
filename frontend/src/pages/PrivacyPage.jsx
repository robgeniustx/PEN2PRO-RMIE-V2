import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly when you create an account, submit a business roadmap intake form, join the waitlist, or contact us. This includes your name, email address, business idea description, and any preferences you select. We also collect usage data — such as pages visited, features used, and session duration — to improve the platform.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to generate your business roadmap and blueprint, send you account-related communications, improve the PEN2PRO platform, notify you of platform updates and new features, and fulfill any subscription or plan you purchase. We do not sell your personal information to third parties.`,
  },
  {
    title: "Data Storage & Security",
    body: `Your data is stored securely using industry-standard encryption. We use access controls, encrypted connections (HTTPS), and secure credential storage. While we take reasonable measures to protect your information, no system is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Cookies & Tracking",
    body: `PEN2PRO uses cookies and local storage to maintain your session, remember your preferences, and track platform usage. You can disable cookies in your browser settings, but doing so may limit certain features of the platform.`,
  },
  {
    title: "Third-Party Services",
    body: `We use third-party services including Stripe for payment processing, and may use analytics services to understand platform usage. These services have their own privacy policies and data practices. We recommend reviewing their policies directly.`,
  },
  {
    title: "Your Rights",
    body: `You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also unsubscribe from marketing communications at any time using the link in any email we send.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not intended for use by individuals under 18 years of age. We do not knowingly collect personal information from minors.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will update the date at the top of this page. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact",
    body: `If you have questions about this Privacy Policy or how your data is handled, contact us through the platform or via the waitlist form.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
          Legal
        </div>
        <h1 className="mb-2 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: June 30, 2026</p>

        <p className="mb-10 text-slate-400 leading-relaxed">
          PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your information when you use the PEN2PRO platform and related services.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 flex items-start gap-3 font-bold text-white text-lg">
                <span className="text-[#FF8A00] shrink-0 font-display">{String(i + 1).padStart(2, "0")}.</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/terms" className="text-sm font-semibold text-[#2d9cff] hover:underline">Terms of Service →</Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-[#2d9cff] hover:underline">Disclaimer →</Link>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `When you create an account, we collect your name, email address, and password. When you use the RMIE roadmap tools, we collect the business information you provide (business idea, industry, target market, starting resources). When you join the waitlist, we collect your name, email, phone number (optional), and interest level. We may also collect usage data such as pages visited, features used, and session duration to improve the platform.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to: provide and improve the PEN2PRO platform; generate your AI business roadmap and related tools; send you updates about your account, new features, and platform news (you can opt out at any time); process payments through our payment processor (Stripe); respond to support requests; and analyze platform usage to improve the user experience.`,
  },
  {
    title: "Information Sharing",
    body: `We do not sell your personal information. We do not share your information with third parties except: our service providers (payment processing, email delivery, cloud hosting) who are contractually required to protect your data; when required by law or to protect the rights and safety of PEN2PRO and its users; in the event of a merger or acquisition, where your information would be transferred to the acquiring company.`,
  },
  {
    title: "Data Security",
    body: `We use industry-standard security practices including encrypted connections (HTTPS), hashed passwords, and secure data storage. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password for your PEN2PRO account.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses cookies and similar technologies to maintain your session, remember your preferences, and analyze platform usage. You can control cookies through your browser settings, but disabling cookies may affect the functionality of some features.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at support@pen2pro.com. You may also close your account at any time from your account settings. Upon account closure, your personal data will be deleted within 30 days, except where retention is required by law.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not directed at children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or by posting a notice on the platform. Your continued use of PEN2PRO after changes are posted constitutes your acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your data, contact us at: support@pen2pro.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
        <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
        <p className="mb-2 text-sm text-slate-400">Effective Date: June 15, 2026</p>
        <p className="mb-12 text-slate-400 leading-relaxed">
          PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use the PEN2PRO platform.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">
                {i + 1}. {s.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
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

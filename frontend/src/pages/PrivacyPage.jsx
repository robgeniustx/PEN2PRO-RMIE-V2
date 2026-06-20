import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly — such as your name, email address, phone number (optional), and business idea — when you create an account, submit a waitlist form, or use our roadmap tools. We also automatically collect usage data such as pages visited, features used, and session duration to improve the platform.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use your information to: deliver your business roadmap and platform features; send you updates about your account and PEN2PRO product launches; respond to your requests and support inquiries; improve platform performance; and send marketing communications (which you can opt out of at any time).`,
  },
  {
    title: "Information Sharing",
    body: `We do not sell your personal information. We may share your data with trusted service providers who help us operate the platform (payment processors, email services, cloud hosting) under strict confidentiality agreements. We may also disclose information when required by law.`,
  },
  {
    title: "Data Security",
    body: `We use industry-standard security practices including encrypted data storage, secure HTTPS connections, and access controls. However, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password and keep your credentials confidential.`,
  },
  {
    title: "Cookies & Tracking",
    body: `We use cookies and similar tracking technologies to maintain your session, remember preferences, and analyze how users interact with the platform. You can control cookie settings through your browser. Some features may not function correctly if cookies are disabled.`,
  },
  {
    title: "Your Rights",
    body: `You have the right to access, correct, or delete your personal information at any time. To make a request, contact us at support@pen2pro.com. We will respond within 30 days. You may also opt out of marketing emails using the unsubscribe link in any email we send.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has submitted information, we will promptly delete it.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date below. Continued use of PEN2PRO after changes constitutes your acceptance of the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mb-10 text-sm text-slate-500">Last Updated: June 20, 2026</p>

          <p className="mb-10 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the PEN2PRO platform at pen2pro.com.
          </p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400">
            <p className="mb-2 font-bold text-white">Contact Us</p>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 font-semibold text-[#FF8A00]">support@pen2pro.com</p>
          </div>

          <div className="mt-8 flex gap-6 text-sm">
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

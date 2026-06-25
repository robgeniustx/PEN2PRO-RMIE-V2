import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: `We collect information you provide directly to us — such as your name, email address, phone number, and business idea details — when you create an account, use the roadmap intake form, join the waitlist, or contact us. We also collect usage data automatically, including pages visited, features used, and device/browser information.`,
  },
  {
    title: "How We Use Your Information",
    body: `We use collected information to operate and improve the PEN2PRO platform, generate personalized business roadmaps, send product updates and relevant communications, process payments, provide customer support, and analyze platform performance. We do not sell your personal data to third parties.`,
  },
  {
    title: "Data Sharing",
    body: `We may share information with trusted service providers who assist in operating the platform (payment processors, email services, analytics). These providers are bound by confidentiality agreements. We may also disclose information when required by law. We will never sell, trade, or rent your personal information to marketing companies.`,
  },
  {
    title: "Cookies and Tracking",
    body: `PEN2PRO uses cookies and similar technologies to maintain session state, remember preferences, and analyze platform usage. You can disable cookies in your browser settings, though some features may not function correctly without them. We use analytics tools to understand how users interact with our platform so we can improve the experience.`,
  },
  {
    title: "Data Security",
    body: `We implement industry-standard security measures including encryption in transit (HTTPS/TLS), hashed password storage, and restricted access controls. No system is 100% secure, and we encourage you to use a strong, unique password and to notify us immediately if you suspect unauthorized access.`,
  },
  {
    title: "Your Rights",
    body: `You may access, update, or request deletion of your personal data at any time by contacting us at support@pen2pro.com. You may also opt out of marketing communications by using the unsubscribe link in any email we send. Requests will be processed within 30 days.`,
  },
  {
    title: "Third-Party Links",
    body: `The platform may contain links to third-party websites, including affiliate partners. PEN2PRO is not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before sharing any information.`,
  },
  {
    title: "Children's Privacy",
    body: `PEN2PRO is intended for users 18 years of age or older. We do not knowingly collect personal information from anyone under 18. If we become aware that a minor has provided personal data, we will delete it promptly.`,
  },
  {
    title: "Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. When we do, we will post the updated policy on this page with a revised effective date. Continued use of the platform after changes are posted constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    body: `If you have questions about this Privacy Policy or how we handle your data, please contact us at: support@pen2pro.com. We take privacy concerns seriously and will respond within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">
            Effective date: June 15, 2026 · Last updated: June 25, 2026
          </p>
          <p className="mt-4 text-slate-300 leading-relaxed">
            PEN2PRO ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect the information you provide when you use the PEN2PRO platform.
          </p>
        </div>

        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
          <p className="text-sm text-slate-500 mb-4">
            Have questions? We're here.
          </p>
          <a
            href="mailto:support@pen2pro.com"
            className="inline-flex items-center gap-2 rounded-xl border border-[#1A2D50] px-6 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            support@pen2pro.com
          </a>
          <div className="mt-6 flex justify-center gap-6 text-xs text-slate-600">
            <Link to="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="hover:text-slate-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — such as your name, email address, phone number, and business details when you sign up, submit a roadmap request, or join the waitlist. We also collect usage data automatically, including pages visited, features used, and session activity.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect to provide and improve PEN2PRO services, send you roadmap results and platform updates, respond to your questions and support requests, and send relevant marketing communications (which you can opt out of at any time).",
  },
  {
    title: "Data Sharing",
    body: "We do not sell your personal information. We may share information with trusted third-party service providers who assist us in operating the platform — such as payment processors, email delivery services, and analytics tools — under strict confidentiality agreements.",
  },
  {
    title: "Cookies & Tracking",
    body: "PEN2PRO uses cookies and similar tracking technologies to improve user experience, analyze traffic, and measure the effectiveness of our marketing. You can control cookies through your browser settings. Disabling cookies may affect some platform features.",
  },
  {
    title: "Data Retention",
    body: "We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and personal data by contacting us at the email below.",
  },
  {
    title: "Security",
    body: "We implement industry-standard security measures to protect your data, including encrypted connections (HTTPS), secure data storage, and access controls. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body: "Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information. To exercise these rights, contact us at the email address below.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is not directed to individuals under 18 years of age. We do not knowingly collect personal information from minors. If we become aware that a minor has provided us with personal information, we will delete it promptly.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of PEN2PRO after changes constitutes your acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or how we handle your data, contact us at: privacy@pen2pro.com",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Effective Date: June 1, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            PEN2PRO ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use the PEN2PRO platform.
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

        <div className="mt-12 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center">
          <p className="text-sm text-slate-400">
            Have questions?{" "}
            <a href="mailto:privacy@pen2pro.com" className="text-[#FF8A00] hover:underline font-semibold">
              privacy@pen2pro.com
            </a>
          </p>
          <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
            <Link to="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <span className="hidden sm:inline text-slate-600">·</span>
            <Link to="/disclaimer" className="text-sm text-slate-400 hover:text-white transition-colors">Disclaimer</Link>
            <span className="hidden sm:inline text-slate-600">·</span>
            <Link to="/" className="text-sm text-[#FF8A00] hover:underline font-semibold">Back to Home</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

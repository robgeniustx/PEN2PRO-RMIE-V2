import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, phone number, and business idea when you sign up, create an account, or join the waitlist. We also collect usage data about how you interact with the platform to improve your experience.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to operate and improve PEN2PRO, send you platform updates and launch notifications, generate your business roadmap and personalized recommendations, and communicate about your account and subscription.",
  },
  {
    title: "Information Sharing",
    body: "We do not sell your personal information. We may share your information with trusted service providers who help us operate the platform (such as payment processors and email delivery services), and we may share anonymized, aggregated data for business analysis.",
  },
  {
    title: "Data Security",
    body: "We use industry-standard encryption and security practices to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Cookies",
    body: "PEN2PRO uses cookies and similar technologies to keep you logged in, remember your preferences, and analyze platform usage. You can control cookies through your browser settings.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of marketing communications using the unsubscribe link in any email.",
  },
  {
    title: "Contact",
    body: "For privacy questions or data requests, contact us at support@pen2pro.com.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <div className="mb-10">
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="font-display text-4xl font-black text-white">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: June 2026</p>
        </div>

        <p className="mb-10 text-slate-400 leading-relaxed">
          PEN2PRO ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the PEN2PRO platform.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
              <h2 className="mb-3 font-bold text-white text-lg">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 text-sm">
          <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service →</Link>
          <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer →</Link>
          <Link to="/" className="text-slate-400 hover:text-white">← Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

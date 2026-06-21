import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — including your name, email address, phone number, and business idea when you join our waitlist or create an account. We also collect usage data such as pages visited, features used, and roadmaps generated to improve the platform experience.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to deliver the PEN2PRO platform, send you product updates and relevant communications, personalize your roadmap experience, process payments through Stripe, and improve our AI strategy engine. We do not sell your personal data to third parties.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored on secure servers using industry-standard encryption. We use MongoDB Atlas with encryption at rest and TLS in transit. Access to your data is restricted to authorized team members only. We retain your data as long as your account is active.",
  },
  {
    title: "Cookies & Tracking",
    body: "PEN2PRO uses cookies and analytics tools to understand how users interact with the platform. This includes session tracking, feature usage analytics, and conversion tracking. You may disable cookies in your browser settings, though some features may not function properly.",
  },
  {
    title: "Third-Party Services",
    body: "We use third-party services including Stripe (payment processing), OpenAI (AI roadmap generation), and analytics providers. These services have their own privacy policies and we encourage you to review them. We are not responsible for the privacy practices of third-party services.",
  },
  {
    title: "Your Rights",
    body: "You have the right to access, update, or delete your personal information at any time. You may request a copy of your data or request deletion by contacting us. We will respond to all verified requests within 30 days.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this privacy policy or how we handle your data, contact us at support@pen2pro.com. We take privacy seriously and will respond to all inquiries promptly.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="mx-auto max-w-2xl space-y-10">
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-sm text-slate-400 leading-relaxed">
            PEN2PRO RMIE is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
          </div>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-3 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}

          <div className="border-t border-[#1A2D50] pt-8 flex flex-wrap gap-4">
            <Link to="/terms" className="text-sm text-[#2d9cff] hover:underline">Terms of Service</Link>
            <Link to="/disclaimer" className="text-sm text-[#2d9cff] hover:underline">Disclaimer</Link>
            <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Back to Home</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

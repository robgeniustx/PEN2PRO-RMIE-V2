import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and answers to roadmap intake questions — along with basic usage data (pages visited, features used, referral source) needed to operate and improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account, communicate about your plan or waitlist status, improve our AI models and product experience, and send relevant updates about Pro, Elite, and Founders access. We do not sell your personal information.",
  },
  {
    title: "3. AI-Generated Content",
    body: "Roadmaps, strategies, and recommendations are generated using AI based on the information you provide. This content is for planning and educational purposes and should be reviewed with a qualified professional before you rely on it for legal, financial, or tax decisions.",
  },
  {
    title: "4. Data Sharing",
    body: "We share information only with service providers who help us operate PEN2PRO (such as hosting, payment processing, and email delivery), and only to the extent needed to provide the service. We do not share your data with third parties for their own marketing purposes.",
  },
  {
    title: "5. Data Security",
    body: "We use industry-standard safeguards to protect your information, including encrypted connections and access controls. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "6. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link included in every message.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected here with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 leading-7 mb-10">
          PEN2PRO (“we,” “us,” “our”) respects your privacy. This policy explains what information
          we collect when you use our AI-powered RMIE platform, how we use it, and the choices you have.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 mb-4">
            Questions about your data? Reach out and we'll help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/terms" className="rounded-lg border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2235] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

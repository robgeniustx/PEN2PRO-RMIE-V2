import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — your name, email, phone number, business idea, and roadmap intake answers. We also collect usage data such as pages visited, features used, and roadmap progress so we can improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, save your progress, communicate with you about your account and the PEN2PRO waitlist, improve our AI models and product, and — if you opt in — send updates about Pro, Elite, and Founders access.",
  },
  {
    title: "How We Protect Your Information",
    body: "We use industry-standard safeguards to protect your data, including encrypted connections and access controls on our systems. No system is 100% secure, and we continually work to improve how your information is stored and protected.",
  },
  {
    title: "Sharing Your Information",
    body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (such as hosting, email, and payment processing), and only to the extent needed for them to perform those services.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You can also unsubscribe from marketing emails using the link included in every message.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO uses basic analytics to understand how the platform is used so we can fix broken flows and improve the roadmap experience. This data is aggregated and is not sold to third parties.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or how your information is handled, reach out through the contact options listed on the PEN2PRO waitlist and support pages.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Last updated July 2026. We keep this simple — here's exactly what we collect and why.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-[#1A2235] p-8 text-center sm:flex-row sm:justify-center" style={{ background: "#0F1520" }}>
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold">
            Read Terms of Service
          </Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold">
            Start Free Roadmap
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

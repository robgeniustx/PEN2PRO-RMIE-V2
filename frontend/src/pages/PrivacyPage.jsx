import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect the information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — along with basic usage data (pages visited, features used, device/browser type) to help us improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, send updates about PEN2PRO plans and features, respond to support requests, and improve our AI-generated recommendations. We do not sell your personal information to third parties.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "PEN2PRO may recommend third-party services (LLC formation, business banking, funding partners, credit tools, and similar resources) and may earn a commission if you use those links. Recommendations are based on general fit for your roadmap, not a guarantee of results.",
  },
  {
    title: "Data Storage & Security",
    body: "Your account and roadmap data is stored using industry-standard security practices. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "Your Choices",
    body: "You can request a copy of your data, ask us to delete your account, or opt out of marketing emails at any time by contacting us. Some information may be retained where required for legal or legitimate business purposes.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated effective date.",
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
          <p className="text-slate-400 max-w-2xl mx-auto">
            Effective date: January 1, 2026. This policy explains what information PEN2PRO collects and how it's used.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s, i) => (
          <div key={i}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about your data? Contact us through the{" "}
            <Link to="/about" className="font-semibold" style={{ color: "#D4A017" }}>About page</Link> or your account settings.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

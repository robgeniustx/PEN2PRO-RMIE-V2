import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap answers — along with basic usage data (pages visited, features used, and device/browser information) to keep the platform running smoothly and improve it over time.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account and dashboard, respond to support requests, send updates about your plan or the platform, and improve PEN2PRO's AI outputs and features. We do not sell your personal information.",
  },
  {
    title: "Roadmap & AI-Generated Content",
    body: "Your roadmap intake answers may be processed by AI services to generate your business plan, strategy, and recommendations. This content is generated specifically for you and is not shared publicly without your permission.",
  },
  {
    title: "Sharing of Information",
    body: "We may share limited information with trusted service providers who help us operate PEN2PRO (such as hosting, payment processing, and analytics providers), and with affiliate partners only when you choose to engage with an affiliate offer. We do not sell or rent your personal data to third parties for marketing purposes.",
  },
  {
    title: "Data Security",
    body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO uses cookies and similar technologies to keep you signed in, remember your preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is not directed to children under 18, and we do not knowingly collect personal information from children.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 leading-8 mb-10">
          This Privacy Policy explains how PEN2PRO ("we," "us," "our") collects, uses, and protects
          information when you use our website, roadmap tools, and dashboard (the "Platform").
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-black text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-8">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about this Privacy Policy? Contact us through the support link in your dashboard
            or at the contact address listed on our <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

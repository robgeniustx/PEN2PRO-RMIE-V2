import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with usage data like pages visited, features used, and referral source (including any ?ref= tracking parameter).",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, respond to support requests, improve PEN2PRO's tools, and — where you've opted in — send updates about Pro, Elite, Founders, and waitlist opportunities. We do not sell your personal information.",
  },
  {
    title: "Waitlist & Intake Data",
    body: "Waitlist submissions (name, email, phone, business idea, interest level, and referral source) are stored securely and reviewed by the PEN2PRO team to follow up on your interest and improve the platform.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO may link to trusted third-party partners for services like business formation, banking, credit, funding, domains, bookkeeping, payments, and CRM tools. Those providers have their own privacy policies, and PEN2PRO is not responsible for their practices.",
  },
  {
    title: "Data Security",
    body: "We use reasonable technical and organizational measures to protect your information. No system is 100% secure, so we can't guarantee absolute security, but we work to safeguard your data at every layer of the platform.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">
          Last updated: 2026. This policy explains how PEN2PRO collects, uses, and protects your information
          as you use our RMIE platform.
        </p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-[#1A2D50] p-5 text-sm text-slate-500" style={{ background: "#0D1528" }}>
          Questions about this policy? Reach out through the Waitlist or Founders page and our team will follow up.
        </div>
      </div>
      <Footer />
    </div>
  );
}

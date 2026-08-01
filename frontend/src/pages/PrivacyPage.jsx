import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea details, and payment information when you join the waitlist, create an account, or subscribe to a paid tier. We also collect basic usage data (pages visited, features used, roadmap progress) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, process payments, respond to support requests, and communicate updates about PEN2PRO. We do not sell your personal information to third parties.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO uses trusted third-party providers to operate the platform, including payment processing (Stripe), hosting (Render), and AI processing to generate roadmap content. These providers only receive the information necessary to perform their function.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain account and roadmap data for as long as your account is active, and take reasonable technical measures to protect it. No system is 100% secure, and we cannot guarantee absolute security of information transmitted over the internet.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You may also unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy as PEN2PRO evolves. Continued use of the platform after changes are posted means you accept the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. This policy explains what information PEN2PRO collects and how it's used.</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about your data? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account contact, and we'll respond directly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

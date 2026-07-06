import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email address, phone number, business idea details, and roadmap intake answers — along with usage data like pages visited, features used, and referral source (including `?ref=` links).",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate the waitlist and account features, communicate with you about PEN2PRO updates and offers, improve the platform, and understand which tools and plans are most valuable to our users.",
  },
  {
    title: "3. How We Share Information",
    body: "We do not sell your personal information. We may share data with service providers who help us run PEN2PRO (such as payment processing, email delivery, and hosting), and when required by law.",
  },
  {
    title: "4. Data Storage & Security",
    body: "We take reasonable technical and organizational measures to protect your data. No online platform can guarantee absolute security, so please avoid submitting sensitive information (like full account numbers or passwords) through open text fields such as the business idea box.",
  },
  {
    title: "5. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
  {
    title: "6. Cookies & Analytics",
    body: "PEN2PRO may use cookies and similar technologies to keep you signed in, remember preferences, and understand aggregate usage patterns across the platform.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">
          This Privacy Policy explains how PEN2PRO collects, uses, and protects your information when you use our
          website, roadmap tools, and platform features.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline rounded-xl px-6 py-3 text-center text-sm font-bold">
            Read Terms of Service
          </Link>
          <Link to="/disclaimer" className="btn-outline rounded-xl px-6 py-3 text-center text-sm font-bold">
            Read Disclaimer
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

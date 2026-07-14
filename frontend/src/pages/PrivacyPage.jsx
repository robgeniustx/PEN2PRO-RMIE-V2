import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO — including the free roadmap tool, the waitlist form, Builder, Accelerator, or account sign-up — we collect information you provide directly, such as your name, email address, phone number (optional), business idea, and interest level. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, respond to waitlist and support requests, send updates about PEN2PRO plans and launch timing, improve our AI outputs, and maintain platform security. We do not sell your personal information to third parties.",
  },
  {
    title: "3. AI-Generated Content",
    body: "Business idea details you submit are processed to generate roadmap, branding, and strategy output. This processing may use third-party AI providers under standard data-processing agreements. Do not submit sensitive personal information (SSN, full account numbers, medical records) into any roadmap, builder, or chat field.",
  },
  {
    title: "4. Data Sharing",
    body: "We may share limited data with service providers who help us operate PEN2PRO (hosting, email delivery, payment processing, analytics). These providers are contractually restricted from using your data for any purpose other than providing services to PEN2PRO. We may also disclose information if required by law.",
  },
  {
    title: "5. Data Retention",
    body: "We retain waitlist, account, and roadmap data for as long as your account is active or as needed to provide the service. You can request deletion of your data at any time by contacting us.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time. To make a request, contact us using the details on our About page.",
  },
  {
    title: "7. Security",
    body: "We use reasonable administrative and technical safeguards to protect your information. No system is 100% secure, and we cannot guarantee absolute security of data transmitted to or from PEN2PRO.",
  },
  {
    title: "8. Changes to This Policy",
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
          Last updated: 2026. This policy explains how PEN2PRO collects, uses, and protects your information.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Read Terms of Service
          </Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">
            Read Disclaimer
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

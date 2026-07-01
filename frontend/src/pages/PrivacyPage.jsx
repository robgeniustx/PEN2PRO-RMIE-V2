import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect the information you provide directly — name, email, phone number, business idea, and answers you enter into the roadmap builder, waitlist form, or dashboard tools. We also collect basic technical data (browser type, device, pages visited, referral source) to keep the platform working and to understand how founders use it.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, respond to waitlist and account requests, improve the RMIE engine, send you updates about PEN2PRO (Pro, Elite, and Founders access, launch dates, and relevant offers), and protect the platform from abuse. We do not sell your personal information to third parties.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmap, strategy, and business content generated for you is created using AI models based on the inputs you provide. This content is for planning and educational purposes. Review AI-generated output before acting on it — PEN2PRO does not verify every fact, figure, or legal detail an AI response produces.",
  },
  {
    title: "Data Sharing",
    body: "We share data only with service providers who help us operate the platform (hosting, email delivery, payment processing, analytics) under confidentiality obligations, or when required by law. Affiliate and partner links on pages like /affiliate, /funding, and /credit-repair are operated by third parties with their own privacy practices — review their policies before submitting information to them.",
  },
  {
    title: "Data Retention & Security",
    body: "We retain your account, roadmap, and waitlist data for as long as needed to provide the service or as required by law. We use reasonable technical and administrative safeguards to protect your information, but no system is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data by contacting us. You can unsubscribe from marketing emails at any time using the link in those emails.",
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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Effective Date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm leading-7 text-slate-400 mb-10">
          PEN2PRO ("we", "us", "our") respects your privacy. This policy explains what information we collect
          through the PEN2PRO platform (the "Service"), how we use it, and the choices you have.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 mb-4">
            Questions about this policy or your data? See our full Terms of Service and Disclaimer, or reach out
            through the waitlist form and select "Other."
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/terms" className="btn-outline px-5 py-2.5 text-sm font-bold">Terms of Service</Link>
            <Link to="/disclaimer" className="btn-outline px-5 py-2.5 text-sm font-bold">Disclaimer</Link>
            <Link to="/waitlist" className="btn-gold px-5 py-2.5 text-sm font-bold">Contact Us</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

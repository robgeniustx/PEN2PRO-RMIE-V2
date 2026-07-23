import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with usage data like pages visited and features used, so we can improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about your plan, improve our AI models and product, and, where you've opted in, send updates about PEN2PRO tiers, waitlist status, and relevant offers.",
  },
  {
    title: "How We Protect Your Information",
    body: "We apply reasonable technical and organizational safeguards to protect your data. No system is 100% secure, so we encourage you to use a strong, unique password and avoid sharing sensitive personal or financial information in free-text fields unless necessary.",
  },
  {
    title: "Sharing of Information",
    body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (hosting, analytics, payment processing, email delivery) under confidentiality obligations, or when required by law.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link in any message we send.",
  },
  {
    title: "Cookies & Analytics",
    body: "PEN2PRO uses basic cookies and analytics to understand how the platform is used and to improve conversion and product experience. You can control cookies through your browser settings.",
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
      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-10">Effective date: January 1, 2026</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
              <h2 className="text-lg font-black text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-slate-600">
          Questions about this policy? Contact us through the platform, or read our{" "}
          <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
          <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect the information you give us directly — name, email, phone number, business idea details, and any answers you provide during roadmap intake, waitlist signup, or account creation. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account, respond to support requests, send product updates, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
  },
  {
    title: "Affiliate & Partner Links",
    body: "Some pages (Funding, Credit Repair, Affiliate) link to third-party services for LLC formation, business banking, credit building, and funding. PEN2PRO may earn a commission if you use these links. We do not share your personal data with these partners unless you choose to engage with them directly.",
  },
  {
    title: "Data Storage & Security",
    body: "Your data is stored using industry-standard security practices. We limit access to information that is reasonably necessary to operate and support the platform. No system is 100% secure, and we cannot guarantee absolute protection against unauthorized access.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may also unsubscribe from marketing emails using the link included in those emails.",
  },
  {
    title: "Contact",
    body: "Questions about this policy can be sent to the support address listed on your account or waitlist confirmation email.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Legal</p>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Privacy Policy</h1>
          <p className="mb-12 text-slate-400">
            Last updated 2026. This policy explains what information PEN2PRO collects, how it's used, and the choices you have.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/terms" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

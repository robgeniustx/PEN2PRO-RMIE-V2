import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect the information you provide directly — name, email, phone number (optional), business idea details, and roadmap intake answers. If you join the waitlist or create an account, we store what you submit along with the page you came from and any referral source in the URL.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, save your progress, communicate with you about PEN2PRO updates and tier access, and improve the RMIE engine. We do not sell your personal information to third parties.",
  },
  {
    title: "Roadmap & Business Data",
    body: "The business ideas, goals, and details you enter into Starter, Builder, Accelerator, Pro, or Elite tools are used to generate your personalized roadmap output and are stored so you can return to your progress. Treat any sensitive business information you enter accordingly.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO uses third-party providers for payment processing (Stripe), hosting, and — where enabled — affiliate partners for LLC formation, business banking, credit building, and funding. Interactions with those partners are governed by their own privacy policies.",
  },
  {
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted to or stored by PEN2PRO.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. Waitlist submissions can be withdrawn on request.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-5 text-sm text-slate-400">
          Questions about your data? Reach out through the{" "}
          <Link to="/waitlist" className="text-[#FF8A00] hover:underline">waitlist form</Link> or your account contact, and we'll respond directly.
        </div>
      </main>
      <Footer />
    </div>
  );
}

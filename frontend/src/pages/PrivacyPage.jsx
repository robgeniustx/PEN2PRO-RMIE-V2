import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account, process upgrades and payments, respond to support requests, and — if you opt in — send updates about PEN2PRO, launch timing, and relevant offers.",
  },
  {
    title: "Waitlist & Roadmap Data",
    body: "Details you submit through the Starter roadmap or Waitlist form (business idea, interest level, referral source) are stored so our team can follow up and so the admin dashboard can track signups. This data is never sold.",
  },
  {
    title: "Payment Information",
    body: "Subscription and Founders payments are processed by Stripe. PEN2PRO does not store your card number, CVV, or full billing credentials on our servers.",
  },
  {
    title: "Data Sharing",
    body: "We do not sell your personal information. We may share limited data with service providers (hosting, email delivery, payment processing) strictly to operate PEN2PRO, and only under confidentiality obligations.",
  },
  {
    title: "Your Choices",
    body: "You can request a copy of your data, ask us to correct it, or ask us to delete your account and associated data at any time by contacting support.",
  },
  {
    title: "Security",
    body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we encourage strong, unique passwords for your account.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-12 text-slate-400">
            Last updated July 2026. This policy explains what information PEN2PRO collects, how it's used, and the
            choices you have.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions about your data? Reach out through our{" "}
            <Link to="/waitlist" className="font-semibold text-[#FF8A00]">
              waitlist form
            </Link>{" "}
            or account contact channel and we'll respond directly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

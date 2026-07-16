import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — when you create an account, generate a roadmap, join the waitlist, or contact us. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, manage your account and subscription tier, respond to support requests, send product updates or waitlist communications, and improve PEN2PRO's features. We do not sell your personal information.",
  },
  {
    title: "AI Processing",
    body: "Roadmap and strategy content is generated using AI models. Intake details you submit (business idea, goals, background) are sent to our AI processing provider solely to generate your roadmap output and are not used to train third-party foundation models on our behalf.",
  },
  {
    title: "Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how payment data is handled.",
  },
  {
    title: "Data Sharing",
    body: "We share data only with service providers that help us operate PEN2PRO (hosting, payments, email delivery, analytics) under confidentiality obligations, or when required by law.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "Data Security",
    body: "We use reasonable technical and organizational safeguards to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted over the internet.",
  },
  {
    title: "Children's Privacy",
    body: "PEN2PRO is not directed at children under 18 and we do not knowingly collect information from minors.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this policy as PEN2PRO evolves. Continued use of the platform after changes means you accept the revised policy.",
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-3xl font-black md:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about your data? Contact us or review our{" "}
            <Link to="/terms" className="text-[#FF8A00] hover:underline">Terms of Service</Link> and{" "}
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

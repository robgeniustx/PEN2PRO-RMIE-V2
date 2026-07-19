import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we may collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with usage data like pages visited and features used, so we can generate your roadmap and improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account and dashboard, process upgrades and payments through our payment processor, send updates about your roadmap or the waitlist, and improve PEN2PRO's AI outputs and product experience.",
  },
  {
    title: "Payment Information",
    body: "Subscription and one-time payments are processed by Stripe. PEN2PRO does not store your full card number on our servers — Stripe handles payment data under its own security and privacy practices.",
  },
  {
    title: "How We Share Information",
    body: "We do not sell your personal information. We may share limited data with service providers who help us operate PEN2PRO (hosting, email delivery, payment processing, analytics), or when required by law.",
  },
  {
    title: "Data Retention",
    body: "We retain your account and roadmap data for as long as your account is active, or as needed to provide the service, resolve disputes, and comply with legal obligations.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by reaching out through the Waitlist page or your account contact. You may also unsubscribe from marketing emails at any time.",
  },
  {
    title: "Security",
    body: "We use industry-standard safeguards to protect your information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. We will update the \"last updated\" date below when changes are made.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated July 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          Your privacy matters to us. This policy explains what information PEN2PRO collects, how
          we use it, and the choices you have.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. What We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone (optional), business idea details, roadmap intake answers, and payment information processed by Stripe. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account and dashboard, process payments and subscriptions, respond to support requests, send you product updates or waitlist communications, and improve PEN2PRO's AI models and features. We do not sell your personal information to third parties.",
  },
  {
    title: "3. AI-Generated Content",
    body: "Your roadmap intake (business idea, goals, background) is sent to our AI providers to generate your personalized roadmap, strategy, and business plan output. This data is used solely to serve your request and improve the quality of your results — not for unrelated advertising.",
  },
  {
    title: "4. Payment Information",
    body: "All payments are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how your payment data is handled.",
  },
  {
    title: "5. Data Sharing",
    body: "We share data only with service providers necessary to run PEN2PRO (hosting, payment processing, AI inference, email delivery), and only to the extent required to provide the service. We do not share your personal data with third-party marketers.",
  },
  {
    title: "6. Data Retention & Deletion",
    body: "We retain your account and roadmap data as long as your account is active. You may request deletion of your account and associated data at any time by contacting us — we will remove your personal information except where retention is required by law.",
  },
  {
    title: "7. Your Rights",
    body: "Depending on your location, you may have the right to access, correct, export, or delete your personal data. Contact us to exercise these rights.",
  },
  {
    title: "8. Security",
    body: "We use industry-standard safeguards (encryption in transit, access controls) to protect your data. No system is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    title: "9. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Material changes will be reflected on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-10">Effective date: January 1, 2026</p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Questions about your data? Reach out through our{" "}
            <a href="/waitlist" className="text-[#FF8A00] font-semibold hover:underline">contact form</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

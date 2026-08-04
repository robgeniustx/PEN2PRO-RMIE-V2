import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — such as your name, email, phone number, business idea, and roadmap intake answers — along with usage data like pages visited, features used, and referral source. If you upgrade to Pro, Elite, or Founders, payment details are collected and processed by Stripe; PEN2PRO never stores your full card number.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, save your progress, communicate updates about your account or the waitlist, improve the RMIE engine, and provide customer support. We do not sell your personal information to third parties.",
  },
  {
    title: "3. AI-Generated Content",
    body: "Roadmap, blueprint, branding, and strategy content is generated using AI based on the information you provide. Business idea details you submit may be processed by our AI providers solely to generate your output. Treat AI-generated output as a starting point, not professional legal, tax, or financial advice.",
  },
  {
    title: "4. Data Sharing",
    body: "We may share information with service providers who help us operate PEN2PRO — such as hosting, payment processing (Stripe), and analytics providers — under confidentiality obligations. We may also disclose information if required by law.",
  },
  {
    title: "5. Data Security",
    body: "We use reasonable technical and organizational measures to protect your data. No system is 100% secure, and we cannot guarantee absolute security of information transmitted over the internet.",
  },
  {
    title: "6. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal information at any time by contacting us. You may unsubscribe from marketing emails using the link in any email we send.",
  },
  {
    title: "7. Cookies & Tracking",
    body: "PEN2PRO uses basic analytics to understand how the platform is used — which pages are visited, which CTAs are clicked, and which roadmap steps are completed — so we can improve the product. This data is aggregated and not sold.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO evolves. Material changes will be reflected with an updated effective date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 leading-7 mb-10">
          PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect, how
          we use it, and the choices you have when you use the PEN2PRO RMIE platform.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:privacy@pen2pro.com" className="text-[#D4A017] hover:underline">privacy@pen2pro.com</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

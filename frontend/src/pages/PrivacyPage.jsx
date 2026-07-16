import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers — when you use the Starter roadmap tool, join the waitlist, create an account, or contact us. We also collect basic usage data (pages visited, features used, device/browser type) to improve the platform.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use your information to generate your business roadmap, operate your account and dashboard, respond to support requests, send product updates and offers you've opted into, process payments for Pro, Elite, and Founders plans, and improve PEN2PRO's AI models and features.`,
  },
  {
    title: "3. AI Processing",
    body: `Roadmap intake answers may be processed by third-party AI providers (such as OpenAI) to generate your business plan, strategy, and recommendations. We do not sell your roadmap content or personal data to data brokers or advertisers.`,
  },
  {
    title: "4. Payment Information",
    body: `Subscription payments are processed by Stripe. PEN2PRO does not store your full credit card number. Stripe's own privacy policy governs how payment data is handled.`,
  },
  {
    title: "5. Data Sharing",
    body: `We do not sell your personal information. We may share data with service providers who help us operate the platform (hosting, email delivery, payment processing, analytics), and as required by law.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain account and roadmap data for as long as your account is active, or as needed to provide services, comply with legal obligations, and resolve disputes.`,
  },
  {
    title: "7. Your Rights",
    body: `You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from marketing emails using the link in any email we send.`,
  },
  {
    title: "8. Security",
    body: `We use industry-standard safeguards to protect your data, but no system is 100% secure. You are responsible for keeping your account credentials confidential.`,
  },
  {
    title: "9. Children's Privacy",
    body: `PEN2PRO is not directed at individuals under 18. We do not knowingly collect information from minors.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this Privacy Policy as the platform evolves. Continued use of PEN2PRO after changes means you accept the updated policy.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#0A0F1E" }}>
      <Navbar />

      <div className="border-b border-[#1A2D50]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 text-sm leading-7 mb-10">
          PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect,
          how we use it, and the choices you have when you use the PEN2PRO RMIE platform.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-3">{s.title}</h2>
              <p className="text-sm text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#1A2D50] p-5 text-center" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about your data? Contact us at{" "}
            <a href="mailto:privacy@pen2pro.com" className="text-[#FF8A00] hover:underline">privacy@pen2pro.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

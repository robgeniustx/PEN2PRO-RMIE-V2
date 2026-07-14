import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly — name, email, phone number, business idea, and roadmap answers — when you create an account, join the waitlist, or use the RMIE (Rapid Monetization Intelligence Engine) intake tools. We also collect usage data such as pages visited, features used, and referral source, to improve the product.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, communicate with you about PEN2PRO (including plan upgrades and launch updates), improve our AI models and product experience, and — where you've opted in — send marketing and affiliate communications.",
  },
  {
    title: "3. AI Processing",
    body: "Roadmap and blueprint generation is powered by third-party AI providers (including OpenAI). Business idea details you submit are processed to generate your roadmap output. We do not sell the content of your roadmap submissions to third parties.",
  },
  {
    title: "4. Data Sharing",
    body: "We do not sell your personal information. We may share data with service providers who help us operate PEN2PRO (payment processing, hosting, email delivery, analytics), and as required by law. Affiliate/partner links on pages such as Funding and Credit Repair are provided for your convenience — we are not responsible for the privacy practices of third-party sites you visit from those links.",
  },
  {
    title: "5. Data Retention & Security",
    body: "We retain account and roadmap data for as long as your account is active or as needed to provide the service. We use reasonable technical and organizational measures to protect your data, but no system is 100% secure.",
  },
  {
    title: "6. Your Rights",
    body: "You may request access to, correction of, or deletion of your personal data at any time by contacting us. You may also opt out of marketing communications using the unsubscribe link in any email.",
  },
  {
    title: "7. Cookies & Tracking",
    body: "We use cookies and similar technologies to keep you signed in, remember preferences, and understand how the platform is used so we can improve it.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy from time to time. Material changes will be reflected by an updated \"last revised\" date on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <h1 className="font-display text-4xl font-black text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last revised: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-14 space-y-10">
        <p className="text-slate-400 text-sm leading-7">
          PEN2PRO ("we," "us," "our") respects your privacy. This policy explains what information we collect,
          how we use it, and the choices you have. By using PEN2PRO, you agree to the practices described below.
        </p>

        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 text-sm leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about this policy? Contact us at{" "}
            <a href="mailto:privacy@pen2pro.com" className="text-[#FF8A00] hover:underline">privacy@pen2pro.com</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

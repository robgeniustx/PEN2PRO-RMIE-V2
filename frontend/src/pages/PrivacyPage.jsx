import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and roadmap intake answers. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, respond to support requests, send product updates, and improve PEN2PRO's AI recommendations. We do not sell your personal information.",
  },
  {
    title: "Waitlist & Marketing Communications",
    body: "If you join the waitlist or create an account, we may email you about product updates, tier upgrades, and relevant offers. You can unsubscribe at any time using the link in any email.",
  },
  {
    title: "Data Storage & Security",
    body: "Your information is stored using industry-standard security practices. Roadmap data, business details, and account credentials are protected against unauthorized access. No system is 100% secure, and we encourage strong, unique passwords.",
  },
  {
    title: "Third-Party Services",
    body: "PEN2PRO uses trusted third-party services for payments, hosting, analytics, and AI processing. These providers only receive the data necessary to perform their function and are bound by their own privacy obligations.",
  },
  {
    title: "Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting support. You may also close your account, which removes your active roadmap data from your dashboard.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be posted on this page with an updated effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-10">
          Effective date: January 1, 2026. This policy explains how PEN2PRO collects, uses, and protects your information.
        </p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Questions about your data? Contact us any time — we're glad to help.
        </p>
      </div>
      <Footer />
    </div>
  );
}

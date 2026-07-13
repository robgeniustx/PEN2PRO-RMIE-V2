import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "What We Collect",
    body: "When you use PEN2PRO — starting a free roadmap, joining the waitlist, creating an account, or upgrading to Pro, Elite, or Founders — we collect the information you give us directly: your name, email, phone number (optional), business idea details, and any intake answers you submit. We also collect basic usage data (pages visited, features used, referral source) to improve the platform.",
  },
  {
    title: "How We Use Your Information",
    body: "We use your information to generate your roadmap and AI-powered business strategy, deliver the features tied to your plan tier, follow up about your waitlist interest, send account and product updates, and improve PEN2PRO's tools. We do not sell your personal information.",
  },
  {
    title: "Payment Information",
    body: "Subscription payments are processed by Stripe. PEN2PRO does not store your full card number or banking credentials — those are handled entirely by our payment processor under its own security standards.",
  },
  {
    title: "Data Sharing",
    body: "We share data only with the service providers that power PEN2PRO (hosting, email, payments, analytics) and only as needed to operate the platform. Affiliate and partner links on pages like Affiliate, Funding, and Credit Repair are provided for your convenience — clicking them may take you to a third-party site with its own privacy practices.",
  },
  {
    title: "Data Retention & Control",
    body: "We keep your roadmap, account, and waitlist data as long as your account is active or as needed to provide the service. You can request access to, correction of, or deletion of your data at any time by contacting us.",
  },
  {
    title: "Security",
    body: "We use reasonable technical and administrative safeguards to protect your information. No system is 100% secure, and we encourage you to use a strong, unique password for your PEN2PRO account.",
  },
  {
    title: "Contact",
    body: "Questions about this policy or your data? Reach out through the Sign In / Create Account page or any waitlist form — we respond to every request personally.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            What we collect, how we use it, and how you stay in control of your data.
          </p>
          <p className="mt-4 text-xs text-slate-600">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-sm leading-7 text-slate-400">{s.body}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

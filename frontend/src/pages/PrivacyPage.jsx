import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. What We Collect",
    body: "When you use PEN2PRO — join the waitlist, build a roadmap, create an account, or upgrade to Pro, Elite, or Founders — we collect the information you provide directly: name, email, phone (optional), business idea, interest level, and account credentials. We also collect basic usage data (pages visited, features used, referral source from `?ref=` links) to improve the product.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account, process payments through Stripe, respond to support requests, and — if you've opted in — send updates about PEN2PRO. We do not sell your personal information to third parties.",
  },
  {
    title: "3. AI-Generated Content",
    body: "Roadmap, blueprint, and strategy content is generated using AI based on the details you provide. Your inputs may be processed by our AI infrastructure providers solely to generate your output. We do not use your personal business ideas to train public models.",
  },
  {
    title: "4. Payments",
    body: "Subscription and one-time payments (Pro, Elite, Founders) are processed by Stripe. PEN2PRO does not store your full card number. Stripe's own privacy policy governs how payment data is handled on their end.",
  },
  {
    title: "5. Affiliate & Third-Party Links",
    body: "Pages like Affiliate, Funding, and Credit Repair link out to third-party services (LLC formation, business banking, credit monitoring, funding partners, and more). We may earn a referral commission if you use these links. We don't control and aren't responsible for those third parties' privacy practices.",
  },
  {
    title: "6. Data Retention & Security",
    body: "We retain account and waitlist data as long as your account is active or as needed to operate the platform. We use reasonable technical safeguards to protect your data, but no system is 100% secure — please use a strong, unique password.",
  },
  {
    title: "7. Your Choices",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us. You can unsubscribe from email updates using the link in any email or by reaching out directly.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-4 py-1.5 text-xs font-semibold text-[#FF8A00] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-slate-400">Last updated: 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16 space-y-10">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
            <p className="text-slate-400 leading-7">{s.body}</p>
          </div>
        ))}

        <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400 leading-6">
            Questions about your data? Reach out and we'll respond as quickly as we can.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/about" className="btn-outline rounded-lg px-5 py-2.5 text-sm font-bold">
              About PEN2PRO
            </Link>
            <Link to="/terms" className="btn-outline rounded-lg px-5 py-2.5 text-sm font-bold">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="btn-outline rounded-lg px-5 py-2.5 text-sm font-bold">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

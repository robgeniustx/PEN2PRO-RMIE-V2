import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating a roadmap, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, branding direction, and execution support. Free, Pro, Elite, and Founders tiers unlock different levels of depth and support, as described on our Pricing page.",
  },
  {
    title: "3. No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "4. Accounts & Access",
    body: "You are responsible for keeping your login credentials secure and for all activity under your account. Tier access (Free, Pro, Elite, Founders) is granted based on your active subscription or purchase and may be suspended for non-payment or misuse.",
  },
  {
    title: "5. Payments & Subscriptions",
    body: "Pro and Elite plans are billed on a recurring basis until canceled. Founders access is a one-time or lifetime-style purchase as described at checkout. All payments are processed securely through Stripe. Refund eligibility, if any, is described at the point of purchase.",
  },
  {
    title: "6. Acceptable Use",
    body: "You agree not to misuse the platform — including attempting to bypass paywalls, scraping AI outputs for resale, submitting unlawful content, or using PEN2PRO to harass or defraud others.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps generated for your business idea are yours to use for your own business purposes.",
  },
  {
    title: "8. Limitation of Liability",
    body: "PEN2PRO and its founders are not liable for business losses, missed opportunities, or damages arising from decisions made using roadmap output, strategy guidance, or affiliate/partner referrals.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-sm text-slate-500">Effective Date: January 1, 2026</p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              PEN2PRO does not guarantee income, funding approval, or business success. See our{" "}
              <Link to="/disclaimer" className="font-semibold text-[#FF8A00] hover:underline">full disclaimer</Link>{" "}
              for details.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-xs">
            <Link to="/privacy" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Privacy Policy →</Link>
            <Link to="/disclaimer" className="text-slate-500 hover:text-[#FF8A00] transition-colors">Disclaimer →</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

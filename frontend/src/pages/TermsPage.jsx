import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO — including Starter, Pro, Elite, Founders, Builder, and Accelerator — you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy plans, branding direction, and funding/credit readiness guidance based on the information you provide. PEN2PRO is an educational and strategic planning tool, not a law firm, accounting firm, lender, credit repair organization, or investment advisor.",
  },
  {
    title: "3. Subscription Plans & Billing",
    body: "Pro, Elite, and Founders plans are billed on a recurring or one-time basis as described on the Pricing page at the time of purchase. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Founders pricing, availability, and benefits are limited and may change without notice.",
  },
  {
    title: "4. User Responsibilities",
    body: "You are responsible for the accuracy of the information you submit, for keeping your account credentials secure, and for how you use the roadmaps, strategies, and materials PEN2PRO generates. You agree not to use PEN2PRO for unlawful purposes or to misrepresent generated content as guaranteed outcomes.",
  },
  {
    title: "5. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, loan approval, funding approval, credit score improvement, or any specific outcome. Results depend on your effort, market conditions, and factors outside PEN2PRO's control. See our Disclaimer for full detail.",
  },
  {
    title: "6. Intellectual Property",
    body: "The PEN2PRO name, brand, platform design, and underlying technology are the property of PEN2PRO. Roadmaps and strategy documents generated for your account are yours to use for your own business.",
  },
  {
    title: "7. Termination",
    body: "PEN2PRO may suspend or terminate accounts that violate these terms, misuse the platform, or engage in fraudulent activity.",
  },
  {
    title: "8. Changes to These Terms",
    body: "PEN2PRO may update these Terms as the platform evolves. Continued use after changes means you accept the revised Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Terms of Service</h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. These Terms govern your use of the PEN2PRO platform.</p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            Related reading:{" "}
            <Link to="/privacy" className="text-[#FF8A00] font-semibold">Privacy Policy</Link> and{" "}
            <Link to="/disclaimer" className="text-[#FF8A00] font-semibold">Disclaimer</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

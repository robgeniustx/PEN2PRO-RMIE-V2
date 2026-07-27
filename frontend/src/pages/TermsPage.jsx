import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    title: "What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, funding and credit readiness checklists, branding direction, and related educational content. PEN2PRO provides tools and information — it does not act as your accountant, attorney, lender, or licensed financial advisor.",
  },
  {
    title: "Subscription Tiers & Billing",
    body: "Free, Pro, Elite, and Founders tiers each unlock different levels of access as described on the Pricing page. Paid subscriptions are billed through Stripe on a recurring basis until canceled. You can cancel at any time; access continues through the end of the current billing period.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, loan approval, funding approval, or credit repair outcomes. Roadmaps and strategies are generated based on the information you provide and general business best practices — results depend on your effort, market conditions, and execution.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse the platform, attempt to access other users' data, reverse-engineer the AI systems, or use PEN2PRO for unlawful purposes. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO name, brand, RMIE methodology, and platform content are owned by PEN2PRO. Roadmaps generated for your specific business idea are yours to use for your own business.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms as the platform evolves. Continued use of PEN2PRO after changes are posted constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-3 font-display text-3xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-sm text-slate-500">Last updated: 2026</p>

          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3 border-t border-[#1A2D50] pt-8">
            <Link to="/privacy" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-lg border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link to="/" className="rounded-lg px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

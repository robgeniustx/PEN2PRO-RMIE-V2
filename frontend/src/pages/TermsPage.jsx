import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Free, Pro, Elite, and Legacy Founder tiers. By creating an account or using the platform, you agree to use it for lawful purposes and to provide accurate information during intake.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro and Elite are billed on a recurring monthly basis until canceled. Legacy Founder access is a one-time or founder-priced offer as described on the Founders page. You can cancel a subscription at any time; access continues through the end of the current billing period.",
  },
  {
    title: "AI-Generated Content",
    body: "Roadmaps, strategy plans, and recommendations are generated with AI assistance based on the information you provide. They are strategic guidance, not professional legal, tax, financial, or investment advice. You are responsible for verifying details (legal structure, licensing, financial projections) with a qualified professional before acting on them.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, funding approval, loan approval, credit score improvement, or business success. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Account Responsibility",
    body: "You are responsible for keeping your login credentials secure and for all activity under your account. Notify us immediately if you suspect unauthorized access.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as the platform evolves. Continued use of PEN2PRO after an update means you accept the revised Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Legal</p>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="mb-12 text-slate-400">
            Last updated 2026. These Terms govern your use of PEN2PRO's website, roadmap tools, and subscription plans.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

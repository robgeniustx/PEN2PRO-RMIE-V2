import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO — including the free Starter roadmap, Pro, Elite, Builder, Accelerator, or Legacy Founder features — you agree to these Terms of Service.",
  },
  {
    title: "2. What PEN2PRO Is",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform. It generates business roadmaps, launch plans, funding-readiness checklists, branding direction, and strategy content based on the information you provide. It is a planning and education tool, not a guarantee of business, financial, or legal outcomes.",
  },
  {
    title: "3. Account Responsibilities",
    body: "You're responsible for keeping your login credentials secure and for the accuracy of the information you submit. Roadmap output quality depends on the detail and accuracy of what you provide.",
  },
  {
    title: "4. Plans & Billing",
    body: "Free, Pro, Elite, and Legacy Founder tiers each unlock different levels of access as described on the Pricing page. Where billing is active, charges recur on the schedule shown at signup and can be canceled at any time from your dashboard. Where a plan is waitlist-only, no charge occurs until that tier is live and you complete checkout.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to use PEN2PRO to generate content for illegal activity, to misrepresent your identity, or to attempt to disrupt, reverse-engineer, or abuse the platform or its AI systems.",
  },
  {
    title: "6. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control. See the full Disclaimer for details.",
  },
  {
    title: "7. Intellectual Property",
    body: "The PEN2PRO name, brand, and platform are owned by PEN2PRO. Roadmaps and content generated for your account are yours to use for your business.",
  },
  {
    title: "8. Termination",
    body: "We reserve the right to suspend accounts that violate these terms. You can close your account at any time.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. Please read these terms before using PEN2PRO.</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Privacy Policy</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Disclaimer</Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Your Free Roadmap</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

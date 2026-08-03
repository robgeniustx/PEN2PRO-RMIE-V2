import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    body: "When you use PEN2PRO, we collect information you provide directly — name, email, phone number, business idea details, and account credentials — along with usage data such as pages visited, roadmap steps completed, and features accessed. If you join the waitlist, we also store your interest level (Free Roadmap, Pro, Elite, Legacy Founder, Affiliate Partner, Funding Help, Credit Repair Help) and the page/referral source you came from.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use your information to generate your business roadmap, operate your account and dashboard, communicate with you about your plan and PEN2PRO updates, improve the RMIE (Rapid Monetization Intelligence Engine) output quality, and prioritize outreach based on the interest level you select. We do not sell your personal information.",
  },
  {
    title: "3. Data Storage",
    body: "Roadmap, waitlist, and account data are stored to power your dashboard experience and to let our team follow up with you about the plan you selected. You can request deletion of your data at any time by contacting us.",
  },
  {
    title: "4. Third-Party Services",
    body: "PEN2PRO may link to third-party partners for LLC formation, business banking, business credit, funding, domains, bookkeeping, payment processing, CRM, and insurance. Those partners have their own privacy policies, and PEN2PRO is not responsible for how they handle your data once you leave our platform.",
  },
  {
    title: "5. Cookies & Analytics",
    body: "We use basic analytics to understand how visitors use the site (pages viewed, buttons clicked, roadmap completion) so we can improve the product. This data is aggregated and is not sold to third parties.",
  },
  {
    title: "6. Your Rights",
    body: "You can request a copy of the data we hold on you, ask us to correct it, or ask us to delete it. Email us and we'll respond as quickly as we can.",
  },
  {
    title: "7. Changes to This Policy",
    body: "We may update this Privacy Policy as PEN2PRO grows. Material changes will be reflected on this page with an updated date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. This policy explains what PEN2PRO collects and how it's used.</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row">
          <Link to="/terms" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Terms of Service</Link>
          <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Read Disclaimer</Link>
          <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Your Free Roadmap</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

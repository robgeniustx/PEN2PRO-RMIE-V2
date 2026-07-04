import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CONTENT = {
  "/privacy": {
    label: "PRIVACY POLICY",
    title: "Your Data, Handled Straight",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "What We Collect",
        body: "When you use PEN2PRO, we collect information you give us directly — name, email, phone (optional), business idea, and roadmap intake answers — plus basic usage data (pages visited, features used, device/browser type) so we can improve the platform.",
      },
      {
        heading: "How We Use It",
        body: "We use your information to generate your business roadmap, save your progress, communicate updates about your account or the waitlist, and improve PEN2PRO's AI outputs. We do not sell your personal information to third parties.",
      },
      {
        heading: "Affiliate & Partner Links",
        body: "Some pages (like Affiliate, Funding, and Credit Repair) link to third-party services. If you click through and sign up, PEN2PRO may earn a commission. Those third parties have their own privacy policies — we don't control how they handle your data once you leave PEN2PRO.",
      },
      {
        heading: "Data Storage & Security",
        body: "Roadmap data, account information, and waitlist submissions are stored securely and used only to operate and improve the platform. We take reasonable steps to protect your information, but no system is 100% secure — use PEN2PRO at your own discretion when entering sensitive business details.",
      },
      {
        heading: "Your Choices",
        body: "You can request a copy of your data, ask us to correct it, or ask us to delete your account and associated data at any time by contacting support.",
      },
    ],
  },
  "/terms": {
    label: "TERMS OF SERVICE",
    title: "The Ground Rules",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Using PEN2PRO",
        body: "PEN2PRO (\"the platform\") provides AI-generated business roadmaps, strategy tools, and educational content through the RMIE (Rapid Monetization Intelligence Engine). By creating an account or using any free or paid tier, you agree to these terms.",
      },
      {
        heading: "No Guarantees",
        body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
      },
      {
        heading: "Subscriptions & Billing",
        body: "Pro, Elite, and Founders tiers are billed on the schedule shown at checkout. You can cancel a recurring subscription at any time; access continues through the end of the paid period. Founders/lifetime offers, where available, are limited and priced as shown at time of purchase.",
      },
      {
        heading: "Acceptable Use",
        body: "Don't use PEN2PRO to generate content for illegal activity, harass others, or misrepresent yourself. We reserve the right to suspend accounts that abuse the platform or violate these terms.",
      },
      {
        heading: "Changes",
        body: "We may update these terms as PEN2PRO evolves. Material changes will be reflected on this page with an updated date above.",
      },
    ],
  },
  "/disclaimer": {
    label: "DISCLAIMER",
    title: "Read This Before You Build",
    updated: "Last updated: January 2026",
    sections: [
      {
        heading: "Educational Tool, Not a Guarantee",
        body: "PEN2PRO does not guarantee credit repair results, funding approval, loan approval, or business success. The platform provides education, strategy, organization, and readiness tools — not financial, legal, or credit-repair services.",
      },
      {
        heading: "Not Financial or Legal Advice",
        body: "Roadmap output, funding readiness checklists, and credit-building steps are strategic guidance based on general best practices — not personalized financial, legal, or tax advice. Consult a licensed attorney, accountant, or financial advisor before making major business, legal, or credit decisions.",
      },
      {
        heading: "Your Effort, Your Results",
        body: "Business outcomes depend on execution, market demand, timing, and factors PEN2PRO cannot control. The 7/30/90-day plans and strategies in your roadmap are a starting structure, not a promise of revenue or funding.",
      },
      {
        heading: "Third-Party Services",
        body: "Affiliate and partner links (LLC formation, banking, credit, funding, insurance, and marketing tools) connect you to independent third parties. PEN2PRO is not responsible for their products, pricing, or outcomes.",
      },
    ],
  },
};

export default function LegalPage() {
  const { pathname } = useLocation();
  const data = CONTENT[pathname] || CONTENT["/terms"];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 text-xs font-semibold text-[#D4A017] mb-6">
            {data.label}
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            {data.title}
          </h1>
          <p className="text-sm text-slate-500">{data.updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-16 space-y-10">
        {data.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="font-display text-xl font-bold text-white mb-3">{s.heading}</h2>
            <p className="text-sm leading-7 text-slate-400">{s.body}</p>
          </div>
        ))}

        <div className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
          <p className="text-xs text-slate-500 leading-6">
            Questions about your data, billing, or these terms? Reach out through the{" "}
            <Link to="/waitlist" className="text-[#D4A017] hover:underline">waitlist form</Link> or contact support once you're a registered member.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

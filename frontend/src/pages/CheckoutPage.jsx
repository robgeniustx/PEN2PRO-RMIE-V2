import { useParams, useLocation, Link } from "react-router-dom";

const TIER_CONFIG = {
  pro: {
    name: "Pro",
    price: "Coming Soon",
    color: "#1E88E5",
    gradient: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)",
    features: [
      "Full 90-day business roadmap",
      "Progress tracking & milestones",
      "Business branding support",
      "PDF & email export",
      "AI refinement sessions",
      "Outreach strategy",
      "Credit & funding readiness checklist",
    ],
    waitlistTier: "pro",
  },
  elite: {
    name: "Elite",
    price: "Coming Soon",
    color: "#FF8A00",
    gradient: "linear-gradient(135deg, #E65100 0%, #FF8A00 100%)",
    features: [
      "Everything in Pro",
      "Advanced strategist guidance",
      "Financial projections",
      "Company formation checklist",
      "Vendor & funding resource center",
      "Trademark & legal guidance",
      "Social media & marketing guidance",
      "Done-with-you execution support",
      "Priority platform access",
    ],
    waitlistTier: "elite",
  },
  founders: {
    name: "Legacy Founder",
    price: "Lifetime — Coming Soon",
    color: "#9B59B6",
    gradient: "linear-gradient(135deg, #6C3483 0%, #9B59B6 100%)",
    features: [
      "Lifetime platform access",
      "Legacy Founder recognition",
      "Every future feature included",
      "Premium roadmap AI engine",
      "Priority strategy support",
      "Full financial & legal suite",
      "First access to all new tools",
    ],
    waitlistTier: "founders",
  },
};

export default function CheckoutPage() {
  const { tier } = useParams();
  const config = TIER_CONFIG[tier] || TIER_CONFIG.pro;

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <section className="relative overflow-hidden py-20 px-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${config.color} 0%, transparent 70%)` }}
        />
        <div className="relative mx-auto max-w-lg text-center">
          <span
            className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ background: `${config.color}15`, color: config.color, border: `1px solid ${config.color}30` }}
          >
            {config.name} Plan
          </span>
          <h1 className="mb-3 text-3xl font-black sm:text-4xl">
            Upgrade to <span style={{ color: config.color }}>{config.name}</span>
          </h1>
          <p className="mb-10 text-slate-400">Payments launching soon. Join the waitlist to lock in your spot.</p>

          {/* What's included */}
          <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0D1520] p-6 text-left">
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">What's Included</p>
            <ul className="space-y-3">
              {config.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold" style={{ color: config.color }}>✓</span>
                  <span className="text-sm text-slate-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <Link
              to={`/waitlist?tier=${config.waitlistTier}`}
              className="w-full rounded-xl py-4 text-base font-black text-white transition"
              style={{ background: config.gradient }}
            >
              Join {config.name} Waitlist — Get Early Access
            </Link>
            <Link
              to="/pricing"
              className="w-full rounded-xl border border-[#1A2D50] py-4 text-sm font-semibold text-slate-400 transition hover:border-slate-500 hover:text-white"
            >
              ← Back to Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

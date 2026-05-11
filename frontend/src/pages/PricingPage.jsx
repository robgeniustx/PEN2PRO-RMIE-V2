import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";

const plans = [
  {
    name: "Free Forever",
    price: "$0",
    cadence: "",
    tier: "free",
    accent: "slate",
    badge: null,
    cta: "Start Free",
    ctaHref: "/starter",
    features: [
      "1 starter business blueprint",
      "Basic offer framework",
      "Limited action checklist",
      "Access to Builder overview",
    ],
    locked: [
      "Full roadmap",
      "Content generator",
      "CRM and pipeline",
      "Export and branding",
    ],
  },
  {
    name: "Pro",
    price: "$89",
    cadence: "/mo",
    tier: "pro",
    accent: "cyan",
    badge: "Most Popular",
    cta: "Upgrade to Pro",
    ctaHref: null,
    features: [
      "Full business roadmap (30/60/90 day)",
      "AI-powered idea refinement",
      "Full checklist with tracking",
      "Content generator",
      "Brand kit starter",
      "Blueprint export (PDF-ready)",
      "Social calendar foundation",
      "Priority email support",
    ],
    locked: [],
  },
  {
    name: "Elite",
    price: "$149",
    cadence: "/mo",
    tier: "elite",
    accent: "amber",
    badge: "Advanced",
    cta: "Upgrade to Elite",
    ctaHref: null,
    features: [
      "Everything in Pro",
      "$100M Strategist Mode",
      "Financial projections (12-month)",
      "Legal foundation guidance",
      "Outreach strategy and scripts",
      "Ads blueprint (Meta + Google)",
      "CRM follow-up plan",
      "Landing page strategy",
      "Vendor integrations guidance",
      "Priority front-of-line support",
    ],
    locked: [],
  },
  {
    name: "Founders Lifetime",
    price: "$899",
    cadence: " one-time",
    tier: "founders",
    accent: "violet",
    badge: "Best Value",
    cta: "Become a Founding Member",
    ctaHref: null,
    features: [
      "Everything in Elite — forever",
      "No monthly renewal",
      "Future AI agent modules included",
      "Founding member recognition",
      "Early access to all new features",
      "Lifetime community access",
      "Priority guidance — always",
    ],
    locked: [],
  },
];

const accentMap = {
  slate: { border: "border-slate-700", btn: "bg-slate-800 hover:bg-slate-700 text-white", badge: "bg-slate-800 text-slate-400", check: "text-slate-400" },
  cyan: { border: "border-cyan-500/40", btn: "bg-cyan-500 hover:bg-cyan-400 text-slate-950", badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 border", check: "text-cyan-400" },
  amber: { border: "border-amber-500/40", btn: "bg-amber-500 hover:bg-amber-400 text-slate-950", badge: "bg-amber-500/10 text-amber-400 border-amber-500/20 border", check: "text-amber-400" },
  violet: { border: "border-violet-500/40", btn: "bg-violet-500 hover:bg-violet-400 text-white", badge: "bg-violet-500/10 text-violet-400 border-violet-500/20 border", check: "text-violet-400" },
};

export default function PricingPage() {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const paymentCancelled = useMemo(
    () => new URLSearchParams(location.search).get("payment") === "cancelled",
    [location.search]
  );

  const startCheckout = async (tier) => {
    setLoading(tier);
    setError("");
    const result = await createCheckoutSession({ tier });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
      return;
    }
    setError("Checkout is not configured yet. Add Stripe environment variables to enable payments.");
    setLoading("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
          Simple Pricing
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Choose Your PEN2PRO Plan
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Start free. Upgrade when you're ready to unlock your full roadmap, branding,
          and advanced strategist guidance.
        </p>
        {paymentCancelled && (
          <p className="mt-4 text-sm text-amber-400 bg-amber-900/20 border border-amber-800/40 rounded-lg inline-block px-4 py-2">
            Payment was cancelled. You can choose a plan whenever you're ready.
          </p>
        )}
        {error && (
          <p className="mt-4 text-sm text-red-400 bg-red-900/20 border border-red-800/40 rounded-lg inline-block px-4 py-2">
            {error}
          </p>
        )}
      </section>

      {/* Plans grid */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {plans.map((plan) => {
            const a = accentMap[plan.accent];
            return (
              <div
                key={plan.tier}
                className={`relative flex flex-col bg-slate-900 border ${a.border} rounded-2xl p-6 shadow-xl`}
              >
                {/* Badge */}
                {plan.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase ${a.badge}`}>
                    {plan.badge}
                  </span>
                )}

                {/* Plan header */}
                <div className="mb-5">
                  <h2 className="text-lg font-extrabold text-white mb-3">{plan.name}</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm">{plan.cadence}</span>
                  </div>
                </div>

                {/* CTA */}
                {plan.ctaHref ? (
                  <Link
                    to={plan.ctaHref}
                    className={`w-full rounded-xl font-bold py-2.5 text-sm text-center transition-colors mb-6 block ${a.btn}`}
                  >
                    {plan.cta}
                  </Link>
                ) : (
                  <button
                    onClick={() => startCheckout(plan.tier)}
                    disabled={loading === plan.tier}
                    className={`w-full rounded-xl font-bold py-2.5 text-sm transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed ${a.btn}`}
                  >
                    {loading === plan.tier ? "Redirecting..." : plan.cta}
                  </button>
                )}

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className={`mt-0.5 shrink-0 text-xs font-bold ${a.check}`}>✓</span>
                      {f}
                    </li>
                  ))}
                  {plan.locked.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-0.5 shrink-0 text-xs font-bold">✗</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Legacy Founder callout */}
        <div className="mx-auto max-w-2xl mt-12 text-center">
          <p className="text-slate-500 text-sm">
            Already a Legacy Founder?{" "}
            <Link to="/legacy-founder" className="text-violet-400 hover:underline font-semibold">
              Access your portal →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

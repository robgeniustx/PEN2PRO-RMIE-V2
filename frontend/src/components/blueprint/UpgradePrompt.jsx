import { useState } from "react";
import { createCheckoutSession } from "../../api/stripeApi";

const plans = [
  {
    tier: "pro",
    name: "PEN2PRO Pro",
    price: "$249/mo",
    points: [
      "Full RMIE business blueprint",
      "P2P Command Center access",
      "CRM basics",
      "Website Builder access",
      "Marketing and monetization roadmap",
      "Progress tracking",
      "Email and PDF export",
    ],
  },
  {
    tier: "elite",
    name: "PEN2PRO Elite",
    price: "$499/mo",
    points: [
      "Everything in Pro",
      "Advanced RMIE strategy engine",
      "P2P AI Voice Agent access",
      "Advanced automations",
      "Funding readiness tools",
      "Advanced CRM and pipeline tools",
      "Priority support",
    ],
  },
  {
    tier: "founders",
    name: "Founders Lifetime",
    price: "$1,899 for life",
    badge: "Only 200 Founders",
    points: [
      "Lifetime PEN2PRO access",
      "Everything in Elite",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "Funding readiness tools",
      "12-month 10M strategist framework",
      "Priority founder access",
    ],
  },
];

export default function UpgradePrompt({ compact = false }) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loadingTier, setLoadingTier] = useState("");

  const handleCheckout = async (tier) => {
    setMessage("");
    setError("");
    setLoadingTier(tier);

    try {
      const result = await createCheckoutSession({ tier });

      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }

      setError("Checkout is not configured yet. Please add Stripe environment variables.");
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Unable to start checkout. Please try again or contact support.");
    } finally {
      setLoadingTier("");
    }
  };

  return (
    <section className="rounded-2xl border border-amber-400/60 bg-slate-900/90 p-5">
      <h3 className="text-xl font-bold text-amber-300">
        Upgrade to Unlock Full Execution
      </h3>

      {!compact ? (
        <p className="mt-2 text-slate-200">
          Get the strategy depth, automation, and execution tools to turn your blueprint into revenue.
        </p>
      ) : null}

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`rounded-xl border p-3 ${
              plan.tier === "founders"
                ? "border-amber-400/70 bg-amber-400/10"
                : "border-cyan-500/40"
            }`}
          >
            {plan.badge ? (
              <p className="mb-2 inline-flex rounded-full bg-amber-400 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-950">
                {plan.badge}
              </p>
            ) : null}

            <p className="text-lg font-semibold text-cyan-300">
              {plan.name}
            </p>

            <p className="text-sm font-bold text-amber-200">
              {plan.price}
            </p>

            <ul className="mt-2 list-disc pl-5 text-sm text-slate-200">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout(plan.tier)}
              disabled={loadingTier === plan.tier}
              className="mt-3 w-full rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loadingTier === plan.tier ? "Starting Checkout..." : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      {message ? <p className="mt-3 text-sm text-cyan-200">{message}</p> : null}
      {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
    </section>
  );
}

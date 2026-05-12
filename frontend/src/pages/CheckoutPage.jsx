import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";

const TIER_DETAILS = {
  pro: {
    name: "Pro — Builder",
    price: "$89/mo",
    description: "Full roadmap, brand kit, content generator, and export tools.",
    color: "teal",
  },
  elite: {
    name: "Elite — Accelerator",
    price: "$149/mo",
    description: "Strategist Mode, financial projections, legal foundation, and priority guidance.",
    color: "purple",
  },
  founders: {
    name: "Founders Lifetime",
    price: "$899 one-time",
    description: "Everything, forever. All future modules included at no extra cost.",
    color: "amber",
  },
};

export default function CheckoutPage() {
  const { tier } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const plan = TIER_DETAILS[tier];

  useEffect(() => {
    if (plan) {
      handleCheckout();
    }
  }, [tier]);

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      setError(
        "Checkout is not configured yet. Please add your Stripe environment variables to activate payments."
      );
      setLoading(false);
    }
  };

  if (!plan) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-extrabold">Unknown plan.</h1>
        <Link to="/pricing" className="mt-4 text-teal-400 hover:underline">
          View all plans →
        </Link>
      </div>
    );
  }

  const accentColors = {
    teal: "border-teal-800 bg-teal-950/40 text-teal-400",
    purple: "border-purple-800 bg-purple-950/40 text-purple-400",
    amber: "border-amber-800 bg-amber-950/40 text-amber-400",
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <Link to="/" className="mb-10 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold">P2P</div>
        <span className="text-lg font-extrabold tracking-tight">PEN2PRO</span>
      </Link>

      <div className={`w-full max-w-md rounded-3xl border p-8 ${accentColors[plan.color]}`}>
        <p className="text-xs font-bold uppercase tracking-widest opacity-60">Upgrading to</p>
        <h1 className="mt-2 text-3xl font-extrabold text-white">{plan.name}</h1>
        <p className="mt-1 text-2xl font-extrabold">{plan.price}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{plan.description}</p>

        {loading && (
          <div className="mt-8 text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-slate-700 border-t-teal-500" />
            <p className="text-sm text-slate-400">Redirecting to secure checkout…</p>
          </div>
        )}

        {error && (
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
            <button
              onClick={handleCheckout}
              className="w-full rounded-xl bg-teal-700 py-3 text-sm font-extrabold text-white transition hover:bg-teal-600"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      <Link to="/pricing" className="mt-6 text-sm text-slate-500 hover:text-slate-300">
        ← Back to all plans
      </Link>
    </div>
  );
}

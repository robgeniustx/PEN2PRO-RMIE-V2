import { Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";
import { useState } from "react";

const features = [
  "$100M Strategist Mode — advanced AI-guided business strategy",
  "Financial projections (12-month revenue model)",
  "Legal foundation guidance (business structure, EIN, compliance)",
  "Outreach strategy and scripts",
  "Ads strategy blueprint (Meta, Google)",
  "CRM follow-up plan and lead pipeline setup",
  "Landing page strategy with copy framework",
  "Vendor and partner integration guidance",
  "Priority support — front of the line",
  "Everything in Pro included",
];

export default function ElitePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "elite" });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
      return;
    }
    setError("Checkout not configured yet. Add Stripe keys to enable payments.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-amber-400 uppercase mb-6">
            Elite Plan
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Advanced Strategist Mode.
            <br />
            <span className="text-amber-400">Built to Scale.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
            Elite is for entrepreneurs who are serious about building a real, sustainable business.
            Get financial projections, legal guidance, ad strategy, and priority access to the full platform.
          </p>

          <div className="inline-flex flex-col items-center">
            <div className="text-5xl font-extrabold text-white mb-1">$149</div>
            <div className="text-slate-400 text-sm mb-8">per month · cancel anytime</div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold px-10 py-4 text-base tracking-wide transition-colors shadow-lg shadow-amber-900/40"
            >
              {loading ? "Redirecting..." : "Upgrade to Elite →"}
            </button>
            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
            <p className="mt-3 text-xs text-slate-500">Cancel anytime · No contracts</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Everything in Elite</h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
                <span className="h-6 w-6 shrink-0 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-300">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-3">Want lifetime access instead?</p>
            <Link to="/founders" className="text-amber-400 hover:underline font-semibold text-sm">
              See the Founders Lifetime Plan →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";
import { useState } from "react";

const features = [
  "Full business roadmap (30/60/90 day plan)",
  "AI-powered business idea refinement",
  "Full checklist with progress tracking",
  "Content generator for social media",
  "Brand kit starter (logo guidance, color palette)",
  "Blueprint export (PDF-ready)",
  "Social calendar foundation",
  "Priority email support",
];

export default function ProPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "pro" });
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
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-6">
            Pro Plan
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Stop Guessing.
            <br />
            <span className="text-cyan-400">Start Building With a Real Roadmap.</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto mb-10">
            Pro unlocks your full business roadmap, tracking, branding tools, and stronger AI guidance
            to move from idea to execution.
          </p>

          <div className="inline-flex flex-col items-center">
            <div className="text-5xl font-extrabold text-white mb-1">$89</div>
            <div className="text-slate-400 text-sm mb-8">per month · cancel anytime</div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold px-10 py-4 text-base tracking-wide transition-colors shadow-lg shadow-cyan-900/40"
            >
              {loading ? "Redirecting..." : "Upgrade to Pro →"}
            </button>
            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
            <p className="mt-3 text-xs text-slate-500">Cancel anytime · No contracts</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">What You Get With Pro</h2>
          <ul className="space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
                <span className="h-6 w-6 shrink-0 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-300">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm mb-3">Need more advanced guidance?</p>
            <Link to="/elite" className="text-cyan-400 hover:underline font-semibold text-sm">
              See the Elite Plan →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

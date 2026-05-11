import { Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";
import { useState } from "react";

const perks = [
  "All Elite features — forever, no renewal",
  "Future AI agent modules at no extra cost",
  "Priority guidance and strategist access",
  "Founding member badge and recognition",
  "Early access to every new feature",
  "Lifetime community access",
  "Export + branding suite",
  "Financial projections and legal foundation guidance",
];

export default function FoundersPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier: "founders" });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
      return;
    }
    setError("Checkout not configured yet. Add Stripe keys to enable payments.");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-violet-400 uppercase mb-6">
            Founders Lifetime Access
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Own It. Forever.
            <br />
            <span className="text-violet-400">One Price. Lifetime Access.</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
            The Founders tier is for builders who are all in. Pay once, access everything — now and
            everything we add in the future.
          </p>

          <div className="mt-10 inline-flex flex-col items-center">
            <div className="text-5xl font-extrabold text-white mb-1">$899</div>
            <div className="text-slate-400 text-sm mb-8">one-time payment · lifetime access</div>
            <button
              onClick={handleCheckout}
              disabled={loading}
              className="rounded-xl bg-violet-500 hover:bg-violet-400 disabled:opacity-50 text-white font-bold px-10 py-4 text-base tracking-wide transition-colors shadow-lg shadow-violet-900/40"
            >
              {loading ? "Redirecting..." : "Become a Founding Member →"}
            </button>
            {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
            <p className="mt-3 text-xs text-slate-500">Secure checkout · 30-day guarantee</p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Everything Included — Forever
          </h2>
          <ul className="space-y-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl px-6 py-4">
                <span className="h-6 w-6 shrink-0 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 text-xs font-bold">
                  ✓
                </span>
                <span className="text-slate-300">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legacy Founder callout */}
      <section className="py-12 px-6">
        <div className="mx-auto max-w-2xl bg-gradient-to-br from-slate-900 to-slate-900 border border-violet-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">Already a Legacy Founder?</h3>
          <p className="text-slate-400 text-sm mb-6">
            If you joined PEN2PRO during our founding round, your legacy access is protected.
          </p>
          <Link
            to="/legacy-founder"
            className="text-violet-400 hover:text-violet-300 font-semibold text-sm underline underline-offset-4"
          >
            Access Legacy Founder Portal →
          </Link>
        </div>
      </section>
    </div>
  );
}

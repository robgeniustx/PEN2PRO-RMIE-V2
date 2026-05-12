import { Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";
import { useState } from "react";

const PERKS = [
  { icon: "♾️", title: "Lifetime Access", body: "Pay once. Use forever. Every future module included." },
  { icon: "🤖", title: "All Elite AI Features", body: "$100M Strategist Mode, financial projections, legal foundation, and more." },
  { icon: "🚀", title: "Future Agent Modules", body: "Autonomous business agents as they launch — yours at no extra cost." },
  { icon: "⚡", title: "Priority Guidance", body: "Skip the queue. Your questions and blueprints are processed first." },
  { icon: "🤝", title: "Founders Community", body: "Private access to a community of serious builders and second-chance entrepreneurs." },
  { icon: "🏆", title: "Premium Positioning", body: "Your brand carries the PEN2PRO Founders badge — built for credibility." },
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
    } else {
      setError("Checkout isn't configured yet. Add your Stripe environment variables to activate payments.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 text-xs font-extrabold">P2P</div>
            <span className="text-lg font-extrabold tracking-tight">PEN2PRO</span>
          </Link>
          <Link to="/pricing" className="text-sm font-semibold text-slate-400 hover:text-teal-400">
            Compare Plans
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="mb-5 inline-flex rounded-full border border-amber-600 bg-amber-950 px-5 py-2 text-sm font-extrabold text-amber-400">
          ✦ Founders Lifetime Access
        </div>
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
          One Payment.
          <br />
          <span className="text-amber-400">Everything. Forever.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed text-slate-400">
          The Founders tier is built for people who are serious. Not just about
          starting — about building something real that lasts.
        </p>

        <div className="mt-10 rounded-3xl border border-amber-800 bg-amber-950/40 p-8">
          <p className="text-4xl font-extrabold text-white">$899</p>
          <p className="mt-1 text-sm text-amber-400">One-time payment · No subscriptions · Forever</p>

          {error && (
            <p className="mt-4 rounded-xl border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-amber-500 py-4 text-base font-extrabold text-slate-950 shadow-xl shadow-amber-900/30 transition hover:bg-amber-400 disabled:opacity-60"
          >
            {loading ? "Redirecting to checkout…" : "Claim Founders Access →"}
          </button>

          <p className="mt-4 text-sm text-slate-500">
            Secure checkout via Stripe · 30-day satisfaction guarantee
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-white">
          What you get as a Founder
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="mb-3 text-3xl">{p.icon}</div>
              <h3 className="font-extrabold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison note */}
      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-xl font-extrabold text-white">Not sure yet?</h2>
          <p className="mt-3 text-slate-400">
            Compare all plans — Free, Pro, Elite, and Founders — side by side.
          </p>
          <Link
            to="/pricing"
            className="mt-6 inline-block rounded-xl border border-slate-700 px-6 py-3 text-sm font-extrabold text-slate-300 transition hover:border-teal-700 hover:text-white"
          >
            View All Plans
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <span className="font-bold text-slate-400">PEN2PRO RMIE</span>
          <nav className="flex gap-6">
            <Link to="/" className="hover:text-teal-400">Home</Link>
            <Link to="/pricing" className="hover:text-teal-400">Pricing</Link>
            <Link to="/about" className="hover:text-teal-400">About</Link>
          </nav>
          <p>© {new Date().getFullYear()} PEN2PRO RMIE</p>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const TIER_CONFIG = {
  pro: {
    name: "PEN2PRO Pro",
    price: "$249",
    per: "/month",
    color: "#D4A017",
    badge: "Most Popular",
    features: [
      "Full RMIE business roadmap",
      "7/30/90-day execution plan",
      "AI business refinement",
      "Sales scripts & outreach templates",
      "Credit & funding checklist",
      "Email & PDF export",
      "Progress tracking",
      "Branding direction",
    ],
    note: "Cancel anytime · 30-day money-back guarantee",
  },
  elite: {
    name: "PEN2PRO Elite",
    price: "$499",
    per: "/month",
    color: "#00C9B1",
    badge: "Best Value",
    features: [
      "Everything in Pro",
      "Financial projections",
      "Funding resource center",
      "Done-with-you strategist guidance",
      "Legal entity & trademark guidance",
      "Marketing launch calendar",
      "Vendor & tradeline readiness",
      "Priority support",
    ],
    note: "Cancel anytime · 30-day money-back guarantee",
  },
  founders: {
    name: "Founders Lifetime",
    price: "$1,899",
    per: " for life",
    color: "#D4A017",
    badge: "200 Spots Only",
    features: [
      "Lifetime PEN2PRO access",
      "Everything in Elite",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "12-month 10M strategist framework",
      "Founder badge & recognition",
      "All future features included",
    ],
    note: "One-time payment · Lifetime access · 30-day guarantee",
  },
};

export default function CheckoutPage() {
  const { tier = "pro" } = useParams();
  const navigate          = useNavigate();
  const config            = TIER_CONFIG[tier] || TIER_CONFIG.pro;

  const [email,   setEmail]   = useState("");
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("pen2pro_user");
    if (stored) {
      try { setEmail(JSON.parse(stored).email || ""); } catch (_) { /* no-op */ }
    }
  }, []);

  async function handleCheckout(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await createCheckoutSession({ tier, customerEmail: email });
    if (result.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      navigate(`/waitlist?tier=${tier}&email=${encodeURIComponent(email)}`);
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Checkout</p>
            <h1 className="font-display text-4xl font-black">
              You're one step away from
              <br />
              <span style={{ color: config.color }}>your next level.</span>
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            {/* LEFT — Order Summary */}
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">Order Summary</div>
              <div className="mb-4 flex items-center justify-between border-b border-[#1A2235] pb-4 mt-3">
                <div>
                  <p className="font-bold text-white text-lg">{config.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{config.badge}</p>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-black" style={{ color: config.color }}>{config.price}</span>
                  <span className="text-slate-500 text-sm">{config.per}</span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {config.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="mt-0.5 font-bold" style={{ color: config.color }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-[#1A2235] bg-[#080C14] p-4 text-xs text-slate-500 text-center">
                {config.note}
              </div>

              <div className="mt-4 space-y-2 text-xs text-center text-slate-600">
                <p>Payments are processed securely via Stripe.</p>
                <p>By purchasing you agree to PEN2PRO's Terms of Service.</p>
              </div>
            </div>

            {/* RIGHT — Checkout Form */}
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-7">
              <div className="mb-6">
                <p className="font-bold text-white text-lg mb-1">Payment Details</p>
                <p className="text-sm text-slate-500">Enter your email to continue to secure checkout.</p>
              </div>

              <form onSubmit={handleCheckout} className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-yellow-500 focus:outline-none"
                  />
                </div>

                {error && (
                  <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl py-4 text-base font-black text-[#080C14] btn-gold"
                  style={{ opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? "Redirecting to checkout…" : `Continue to Payment — ${config.price}${config.per}`}
                </button>

                <p className="text-center text-xs text-slate-600">
                  Stripe will handle your payment securely. PEN2PRO never stores card details.
                </p>
              </form>

              <div className="mt-8 border-t border-[#1A2235] pt-6 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-600">Prefer to wait?</p>
                <Link to={`/waitlist?tier=${tier}`}
                  className="block rounded-xl border border-[#1A2235] px-4 py-3 text-center text-sm font-semibold text-slate-400 hover:border-yellow-500/40 hover:text-yellow-400 transition">
                  Join the waitlist instead — lock in your tier
                </Link>
              </div>
            </div>
          </div>

          {/* Tier switcher */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-600 mb-3">Looking at a different plan?</p>
            <div className="inline-flex gap-3 flex-wrap justify-center">
              {Object.entries(TIER_CONFIG).map(([key, val]) => (
                <Link key={key} to={`/checkout/${key}`}
                  className={`rounded-lg px-4 py-2 text-xs font-bold border transition ${tier === key
                    ? "border-yellow-500/60 text-yellow-400 bg-yellow-500/10"
                    : "border-[#1A2235] text-slate-500 hover:text-white"}`}>
                  {val.name} — {val.price}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

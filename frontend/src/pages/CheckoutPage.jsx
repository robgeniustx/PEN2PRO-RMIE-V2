import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PLANS = {
  pro: {
    id: "pro",
    name: "PEN2PRO Pro",
    price: "$249/mo",
    badge: "Most Popular",
    badgeColor: "#2d9cff",
    accentColor: "#2d9cff",
    bgGlow: "rgba(45,156,255,0.15)",
    description: "For builders ready to move from idea to income with full execution tools and AI-powered strategy.",
    features: [
      "Full RMIE business blueprint",
      "P2P Command Center access",
      "CRM basics & pipeline",
      "Website Builder access",
      "P2P AI Voice (Basic)",
      "Marketing & monetization roadmap",
      "Progress tracking",
      "Email and PDF export",
    ],
    stripe_tier: "pro",
  },
  elite: {
    id: "elite",
    name: "PEN2PRO Elite",
    price: "$499/mo",
    badge: "Best Value",
    badgeColor: "#00C9B1",
    accentColor: "#00C9B1",
    bgGlow: "rgba(0,201,177,0.12)",
    description: "Advanced AI, automation, and business scaling support — for operators ready to go all in.",
    features: [
      "Everything in Pro",
      "Advanced RMIE strategy engine",
      "P2P AI Voice Agent (Advanced)",
      "Advanced automations & funnels",
      "Funding readiness tools",
      "Advanced CRM & pipeline",
      "Financial projection builder",
      "Vendor & credit resource center",
      "Priority support",
    ],
    stripe_tier: "elite",
  },
  founders: {
    id: "founders",
    name: "Founders Lifetime",
    price: "$1,899 for life",
    badge: "Only 200 Spots",
    badgeColor: "#D4A017",
    accentColor: "#D4A017",
    bgGlow: "rgba(212,160,23,0.12)",
    description: "Lifetime access to the full PEN2PRO platform plus a 12-month 10M strategist framework.",
    features: [
      "Lifetime PEN2PRO access",
      "Everything in Elite",
      "RMIE launch & scaling roadmap",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "CRM & automation tools",
      "Funding readiness tools",
      "Branding & launch execution tools",
      "12-month 10M strategist framework",
      "Founder recognition & early access",
    ],
    stripe_tier: "founders",
  },
};

export default function CheckoutPage({ tier }) {
  const navigate = useNavigate();
  const plan = PLANS[tier];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#080C14] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-400 mb-4">Plan not found.</p>
          <Link to="/pricing" className="text-[#D4A017] font-semibold hover:underline">← View Pricing</Link>
        </div>
      </div>
    );
  }

  async function handleCheckout(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: plan.stripe_tier, customerEmail: email || undefined });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      setError(result?.error || "Checkout is not configured yet. Please join the waitlist.");
    } catch {
      setError("Unable to start checkout. Please try again or join the waitlist.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-16">
        {/* Back link */}
        <Link to="/pricing" className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-white transition-colors">
          ← Back to Pricing
        </Link>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {/* Plan summary */}
          <div
            className="rounded-2xl border p-8"
            style={{ borderColor: plan.accentColor + "55", background: `radial-gradient(ellipse at top left, ${plan.bgGlow}, transparent 60%), #0F1520` }}
          >
            <span
              className="inline-block rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4"
              style={{ background: plan.accentColor, color: "#080C14" }}
            >
              {plan.badge}
            </span>

            <h1 className="font-display text-3xl font-black mb-1">{plan.name}</h1>
            <p className="text-2xl font-black mb-4" style={{ color: plan.accentColor }}>{plan.price}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{plan.description}</p>

            <ul className="space-y-2.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <span className="mt-0.5 font-bold flex-shrink-0" style={{ color: plan.accentColor }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-[#1A2D50] bg-[#080C14] p-4">
              <p className="text-xs text-slate-500 text-center">
                Secure checkout powered by Stripe · Cancel anytime · 256-bit encryption
              </p>
            </div>
          </div>

          {/* Checkout form */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <h2 className="font-display text-xl font-black mb-2">Complete Your Order</h2>
            <p className="text-sm text-slate-400 mb-8">You'll be securely redirected to Stripe to complete payment.</p>

            {error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-4 text-sm text-red-300">
                <p className="font-semibold mb-1">Checkout unavailable</p>
                <p>{error}</p>
                <Link to="/waitlist" className="mt-3 inline-block font-semibold underline" style={{ color: plan.accentColor }}>
                  Join the waitlist instead →
                </Link>
              </div>
            )}

            <form onSubmit={handleCheckout} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none"
                  style={{ "--tw-border-opacity": 1 }}
                  onFocus={(e) => e.target.style.borderColor = plan.accentColor}
                  onBlur={(e) => e.target.style.borderColor = "#1A2235"}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-4 text-sm font-black transition disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: plan.accentColor, color: "#080C14" }}
              >
                {loading ? "Redirecting to Checkout..." : `Continue to Secure Checkout →`}
              </button>
            </form>

            <div className="mt-6 space-y-3 text-center">
              <p className="text-xs text-slate-600">
                Don't have an account?{" "}
                <Link to="/signup" className="font-semibold hover:underline" style={{ color: plan.accentColor }}>
                  Create one free →
                </Link>
              </p>
              <p className="text-xs text-slate-600">
                Questions?{" "}
                <Link to="/waitlist" className="font-semibold hover:underline" style={{ color: plan.accentColor }}>
                  Join the waitlist
                </Link>{" "}
                and we'll reach out.
              </p>
            </div>

            {/* Trust signals */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-[#1A2235] pt-6">
              {[
                { icon: "🔒", label: "SSL Secure" },
                { icon: "↩️", label: "Cancel Anytime" },
                { icon: "⚡", label: "Instant Access" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

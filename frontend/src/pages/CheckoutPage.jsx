import { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const TIER_CONFIG = {
  pro: {
    name: "PEN2PRO Pro",
    price: "$249/mo",
    priceNote: "Cancel anytime. No contracts.",
    badge: "⚡ Pro Plan",
    badgeColor: "#1E88E5",
    gradient: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)",
    features: [
      "Full RMIE business blueprint",
      "Progress tracking dashboard",
      "Business branding support",
      "Email & PDF export",
      "AI refinement & follow-up Q&A",
      "Outreach strategy & scripts",
      "Credit & funding readiness checklist",
      "7/30/90-day action plans",
      "P2P Command Center access",
    ],
  },
  elite: {
    name: "PEN2PRO Elite",
    price: "$499/mo",
    priceNote: "Cancel anytime. No contracts.",
    badge: "🔥 Elite Plan",
    badgeColor: "#FF8A00",
    gradient: "linear-gradient(135deg, #FF8A00 0%, #D4A017 100%)",
    features: [
      "Everything in Pro",
      "Advanced strategist AI guidance",
      "Financial projections",
      "Legal foundation checklist",
      "Vendor & funding resource center",
      "Done-with-you strategy sessions",
      "Full marketing & sales system",
      "90-day execution plan",
      "Priority support access",
    ],
  },
  founders: {
    name: "Legacy Founder",
    price: "$997",
    priceNote: "One-time payment. Lifetime access. No monthly fees.",
    badge: "🏅 Founders — Limited",
    badgeColor: "#D4A017",
    gradient: "linear-gradient(135deg, #D4A017 0%, #FF8A00 100%)",
    features: [
      "Lifetime platform access",
      "All Elite features forever",
      "Early access to every new feature",
      "Founder recognition",
      "Private Founders community",
      "Priority strategy support",
      "Price locked — never increases",
      "Future modules included at no cost",
    ],
  },
};

export default function CheckoutPage() {
  const { tier: paramTier } = useParams();
  const [searchParams] = useSearchParams();
  const tier = paramTier || searchParams.get("tier") || "pro";
  const config = TIER_CONFIG[tier] || TIER_CONFIG.pro;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await createCheckoutSession(tier);
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Checkout session could not be created. Please try again or join the waitlist.");
      }
    } catch (err) {
      setError(err.message || "Checkout unavailable. Join the waitlist to be first when payments launch.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `Checkout — ${config.name} | PEN2PRO`;
  }, [config.name]);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white overflow-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)`, filter: "blur(50px)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <Navbar />

      <div className="mx-auto max-w-4xl px-5 py-20">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ borderColor: `${config.badgeColor}30`, background: `${config.badgeColor}15`, color: config.badgeColor }}>
            {config.badge}
          </div>
          <h1 className="font-display text-4xl font-black md:text-5xl">Unlock {config.name}</h1>
          <p className="mt-3 text-slate-400">{config.priceNote}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* What you get */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <h2 className="mb-6 font-bold text-white text-xl">What's Included</h2>
            <ul className="space-y-3">
              {config.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 text-[#1E88E5] font-bold">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Checkout card */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8">
            <div className="mb-6">
              <div className="mb-2 text-3xl font-black text-white">{config.price}</div>
              <div className="text-sm text-slate-400">{config.priceNote}</div>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="mb-4 w-full rounded-xl py-4 text-base font-black transition-all disabled:opacity-60"
              style={{ background: config.gradient, color: tier === "founders" ? "#080C14" : "#ffffff", boxShadow: `0 0 30px ${config.badgeColor}30` }}>
              {loading ? "Redirecting to checkout…" : `Get ${config.name}`}
            </button>

            <Link
              to={`/waitlist?tier=${tier}`}
              className="block w-full rounded-xl border border-[#1A2235] py-3.5 text-center text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Not ready? Join the waitlist instead
            </Link>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>🔒</span> Payments secured by Stripe
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>↩️</span> Cancel anytime from your dashboard
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>📧</span> Instant access after payment
              </div>
            </div>
          </div>
        </div>

        {/* Tier switcher */}
        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-slate-500">Looking at a different plan?</p>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(TIER_CONFIG).map(([key, t]) => (
              <Link
                key={key}
                to={`/checkout/${key}`}
                className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                  key === tier
                    ? "text-white"
                    : "border-[#1A2235] text-slate-500 hover:text-white"
                }`}
                style={key === tier ? { borderColor: t.badgeColor, background: `${t.badgeColor}15`, color: t.badgeColor } : {}}>
                {t.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

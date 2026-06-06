import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const PLANS = {
  pro: {
    name: "PEN2PRO Pro",
    price: "$249/mo",
    color: "#2d9cff",
    badge: "Most Popular",
    description: "For builders ready to move from idea to income with real execution tools.",
    features: [
      "Full RMIE business blueprint",
      "Unlimited roadmaps & 90-day execution plan",
      "Sales scripts & outreach strategy",
      "Credit readiness checklist",
      "Business branding direction",
      "PDF & email export",
      "AI business refinement",
      "Progress tracking",
      "P2P Command Center access",
      "Website Builder access",
    ],
    stripe_tier: "pro",
    ideal: "Ideal for first-time entrepreneurs, veterans, creators, and side hustlers ready to build.",
  },
  elite: {
    name: "PEN2PRO Elite",
    price: "$499/mo",
    color: "#00C9B1",
    badge: "Best Value",
    description: "Advanced strategy, financial projections, and done-with-you execution support.",
    features: [
      "Everything in Pro",
      "Advanced strategist guidance",
      "Financial projections",
      "Funding partner resource center",
      "Company formation checklist",
      "Vendor & tradeline readiness",
      "Trademark & social media guidance",
      "Done-with-you guidance",
      "Priority support",
      "P2P AI Voice Agent (Advanced)",
    ],
    stripe_tier: "elite",
    ideal: "Ideal for established entrepreneurs, returning citizens, and builders ready to scale.",
  },
  founders: {
    name: "Founders Lifetime",
    price: "$1,899 for life",
    color: "#D4A017",
    badge: "Only 200 Spots",
    description: "Lifetime platform access. Built for early believers who want to lock in forever.",
    features: [
      "Lifetime PEN2PRO access",
      "Everything in Elite",
      "RMIE launch & scaling roadmap",
      "P2P Command Center",
      "P2P AI Voice Agent",
      "Website Builder",
      "CRM & automation tools",
      "Funding readiness tools",
      "Branding & launch execution",
      "12-month 10M strategist framework",
      "Founders recognition",
      "Early access to all new features",
    ],
    stripe_tier: "founders",
    ideal: "For legacy builders who want lifetime access and early-adopter status. 200 spots only.",
  },
};

export default function CheckoutPage() {
  const { tier } = useParams();
  const navigate = useNavigate();
  const plan = PLANS[tier];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("pen2pro_user");
    if (user) {
      try {
        const parsed = JSON.parse(user);
        if (parsed.email) setEmail(parsed.email);
      } catch (_) {}
    }
    if (!plan) navigate("/pricing", { replace: true });
  }, [plan, navigate]);

  if (!plan) return null;

  const handleCheckout = async () => {
    setError("");
    setLoading(true);
    try {
      const result = await createCheckoutSession({ tier: plan.stripe_tier, customerEmail: email });
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
        return;
      }
      // Stripe not yet configured — route to waitlist as fallback
      navigate(`/waitlist?tier=${tier}&ref=checkout`);
    } catch (_) {
      setError("Checkout is not available yet. Joining the waitlist instead.");
      setTimeout(() => navigate(`/waitlist?tier=${tier}&ref=checkout`), 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-20">
        {/* Back link */}
        <Link to="/pricing" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Pricing
        </Link>

        <div className="mt-4 grid gap-10 lg:grid-cols-2">
          {/* Left — Plan summary */}
          <div>
            <div
              className="mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-black tracking-widest uppercase"
              style={{ background: `${plan.color}20`, color: plan.color, border: `1px solid ${plan.color}40` }}
            >
              {plan.badge}
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-2">{plan.name}</h1>
            <div className="font-display text-3xl font-black mb-4" style={{ color: plan.color }}>
              {plan.price}
            </div>
            <p className="text-slate-300 text-base mb-6">{plan.description}</p>

            <div
              className="rounded-xl border p-4 mb-6 text-sm text-slate-300"
              style={{ borderColor: `${plan.color}30`, background: `${plan.color}08` }}
            >
              {plan.ideal}
            </div>

            <ul className="space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 text-base" style={{ color: plan.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-xs text-slate-500 space-y-1">
              <p>🔒 Secured by Stripe. Cancel anytime for monthly plans.</p>
              <p>PEN2PRO does not guarantee business results, funding approval, or income. The platform provides education, strategy, and tools.</p>
            </div>
          </div>

          {/* Right — Checkout card */}
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-8 self-start">
            <h2 className="font-display text-xl font-bold text-white mb-1">Complete Your Order</h2>
            <p className="text-sm text-slate-400 mb-6">
              You are upgrading to <span className="font-semibold text-white">{plan.name}</span>
            </p>

            <div className="mb-6 rounded-xl border border-[#1A2235] bg-[#080C14] p-4 flex items-center justify-between">
              <span className="text-sm text-slate-300">{plan.name}</span>
              <span className="font-bold text-white">{plan.price}</span>
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
              />
            </div>

            {error && (
              <div className="mb-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-300">
                {error}
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full rounded-xl py-4 text-sm font-black text-[#080C14] transition-all hover:opacity-90 disabled:opacity-50"
              style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)` }}
            >
              {loading ? "Processing..." : `Continue to Payment — ${plan.price}`}
            </button>

            <p className="mt-4 text-center text-xs text-slate-500">
              Not ready to pay?{" "}
              <Link to={`/waitlist?tier=${tier}`} className="underline hover:text-slate-300 transition-colors">
                Join the waitlist instead
              </Link>
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex items-center justify-center gap-4 text-slate-600">
              <span className="text-xs">🔒 SSL Encrypted</span>
              <span className="text-xs">💳 Stripe Secured</span>
              <span className="text-xs">✓ Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

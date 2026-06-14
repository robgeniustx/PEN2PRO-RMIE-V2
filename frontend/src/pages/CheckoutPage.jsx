import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";

const PLANS = {
  pro: {
    name: "Pro",
    tagline: "Full Strategy. Full Roadmap. Full Execution.",
    price: "$249",
    billing: "per month",
    color: "from-blue-500 to-teal-400",
    borderColor: "border-blue-500/40",
    badgeColor: "bg-blue-500/20 text-blue-300",
    features: [
      "Full RMIE roadmap — no preview limits",
      "Advanced AI refinement & strategy",
      "Progress tracking & milestone board",
      "Business branding direction",
      "Email & PDF export of blueprints",
      "Outreach strategy builder",
      "Credit & funding readiness checklist",
      "7 / 30 / 90-day action plan",
      "Sales script generator",
      "Recommended vendor integrations",
    ],
  },
  elite: {
    name: "Elite",
    tagline: "Advanced Execution. Real Financial Strategy.",
    price: "$499",
    billing: "per month",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/40",
    badgeColor: "bg-purple-500/20 text-purple-300",
    features: [
      "Everything in Pro",
      "Advanced strategist-level AI guidance",
      "Financial projections & revenue modeling",
      "Vendor, funding & credit resource center",
      "Company formation checklist (LLC / EIN / bank)",
      "Trademark, social media & marketing guidance",
      "Done-with-you style execution support",
      "Priority guidance & advanced support queue",
      "Landing page & funnel direction",
      "Full affiliate & partner resource access",
    ],
  },
  founders: {
    name: "Legacy Founder",
    tagline: "Lifetime Access. Limited Spots. First-in Forever.",
    price: "$1,899",
    billing: "one-time payment",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/40",
    badgeColor: "bg-yellow-500/20 text-yellow-300",
    badge: "LIMITED — FOUNDER PRICING",
    features: [
      "Lifetime full platform access",
      "All current + future features included",
      "Founder recognition & early adopter status",
      "First access to every new tool launched",
      "Elite-tier AI roadmap & strategy engine",
      "Financial projections & funding readiness",
      "Company formation & legal foundation checklist",
      "Priority support — always",
      "Locked-in pricing forever — never pay more",
      "Directly support PEN2PRO's mission",
    ],
  },
};

export default function CheckoutPage() {
  const { tier } = useParams();
  const navigate = useNavigate();
  const plan = PLANS[tier?.toLowerCase()];

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!plan) {
    return (
      <div className="min-h-screen bg-[#080C14] flex flex-col items-center justify-center text-white gap-4">
        <h1 className="text-3xl font-bold">Plan not found</h1>
        <Link to="/pricing" className="text-blue-400 underline">
          View Pricing
        </Link>
      </div>
    );
  }

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    const result = await createCheckoutSession({
      tier: tier.toLowerCase(),
      customerEmail: email || undefined,
    });
    setLoading(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    if (result.checkout_url) {
      window.location.href = result.checkout_url;
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      {/* Top nav strip */}
      <div className="border-b border-[#1A2D50] px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-widest gradient-text">
          PEN2PRO
        </Link>
        <Link to="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Pricing
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left — Plan summary */}
        <div>
          {plan.badge && (
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${plan.badgeColor}`}>
              {plan.badge}
            </span>
          )}
          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${plan.badgeColor} ${plan.badge ? "ml-2" : ""}`}>
            {plan.name.toUpperCase()}
          </div>
          <h1 className={`text-4xl font-black mb-3 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
            {plan.tagline}
          </h1>
          <div className="flex items-end gap-2 mb-8">
            <span className="text-5xl font-black text-white">{plan.price}</span>
            <span className="text-gray-400 mb-2">{plan.billing}</span>
          </div>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
            What you get
          </h3>
          <ul className="space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-200">
                <span className={`mt-0.5 text-lg leading-none bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 p-4 rounded-xl bg-[#0F1520] border border-[#1A2D50] text-xs text-gray-500 leading-relaxed">
            PEN2PRO does not guarantee business success, credit repair results, or funding approval.
            The platform provides strategy, education, organization, and readiness tools.
          </div>
        </div>

        {/* Right — Checkout form */}
        <div className={`rounded-2xl bg-[#0F1520] border ${plan.borderColor} p-8`}>
          <h2 className="text-2xl font-bold mb-2">Complete Your Order</h2>
          <p className="text-gray-400 text-sm mb-8">
            You'll be redirected to Stripe's secure checkout page.
          </p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email address <span className="text-gray-500">(optional — for your receipt)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#1A2235] border border-[#1A2D50] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white text-lg bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? "Redirecting to Stripe..." : `Proceed to Secure Payment → ${plan.price}`}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secured by Stripe · SSL encrypted · Cancel anytime
            {tier === "founders" && " · One-time payment"}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1A2D50] space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Plan</span>
              <span className="font-semibold">{plan.name}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Billing</span>
              <span className="font-semibold capitalize">{plan.billing}</span>
            </div>
            <div className="flex justify-between text-sm font-bold border-t border-[#1A2D50] pt-3">
              <span>Total</span>
              <span className={`bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                {plan.price}
              </span>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-gray-500">
            Questions?{" "}
            <Link to="/waitlist" className="text-blue-400 hover:underline">
              Join the waitlist instead
            </Link>{" "}
            or{" "}
            <Link to="/pricing" className="text-blue-400 hover:underline">
              compare all plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { createCheckoutSession } from "../api/stripeApi";

const plans = [
  { name: "Free Forever", price: "$0", tier: "free", features: ["1 basic blueprint", "Basic offer", "Limited checklist"] },
  { name: "Pro", price: "$89/mo", tier: "pro", features: ["Full roadmap", "Content generator", "Export placeholder", "Full checklist", "Basic social calendar later"] },
  { name: "Elite", price: "$149/mo", tier: "elite", features: ["$100M Strategist Mode", "Outreach strategy", "Ads strategy", "CRM follow-up plan", "Landing page strategy", "Advanced guidance"] },
  { name: "Founders Lifetime", price: "$899 one-time", tier: "founders", features: ["All Elite features", "Future agent modules", "Lifetime access", "Priority access"] },
];

export default function PricingPage() {
  const [error, setError] = useState("");
  const location = useLocation();
  const paymentCancelled = useMemo(() => new URLSearchParams(location.search).get("payment") === "cancelled", [location.search]);

  const startCheckout = async (tier) => {
    setError("");
    const result = await createCheckoutSession({ tier });
    if (result?.checkout_url) {
      window.location.href = result.checkout_url;
      return;
    }
    setError("Checkout is not configured yet. Please add Stripe environment variables.");
  };

  return (
    <div>
      <h1>Choose Your PEN2PRO Plan</h1>
      {paymentCancelled ? <p>Payment was cancelled. You can choose a plan when ready.</p> : null}
      {error ? <p>{error}</p> : null}
      <div>
        {plans.map((plan) => (
          <div key={plan.name}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {plan.tier !== "free" ? (
              <button onClick={() => startCheckout(plan.tier)}>
                {plan.tier === "founders" ? "Get Founders Lifetime" : `Upgrade to ${plan.name}`}
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function PricingPage(){return <div>PricingPage stub</div>;}

import { useState } from "react";
import { createCheckoutPlaceholder } from "../../api/stripeApi";

const plans = [
  { tier: "pro", price: "$89/mo", points: ["Full roadmap", "Social content", "Export", "Complete checklist"] },
  { tier: "elite", price: "$149/mo", points: ["$100M Strategist Mode", "Outreach strategy", "Ads strategy", "CRM follow-up plan", "Landing page strategy", "Advanced guidance"] },
  { tier: "founders", price: "$899 lifetime", points: ["All Elite features", "Lifetime access", "Future agent modules", "Priority access"] },
];

const UpgradePrompt = ({ compact = false }) => {
  const [message, setMessage] = useState("");

  const onUpgrade = async (tier) => {
    const result = await createCheckoutPlaceholder(tier);
    setMessage(result.message);
    window.alert("Stripe checkout will be connected in the next phase.");
  };

  return (
    <section className="rounded-2xl border border-amber-400/60 bg-slate-900/90 p-5">
      <h3 className="text-xl font-bold text-amber-300">Upgrade to Unlock Full Execution</h3>
      {!compact ? <p className="mt-2 text-slate-200">Get the strategy depth and execution tools to turn your blueprint into revenue.</p> : null}
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.tier} className="rounded-xl border border-cyan-500/40 p-3">
            <p className="text-lg font-semibold capitalize text-cyan-300">{plan.tier}</p>
            <p className="text-sm text-amber-200">{plan.price}</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-200">
              {plan.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <button onClick={() => onUpgrade(plan.tier)} className="mt-3 w-full rounded-lg bg-amber-500 px-3 py-2 text-sm font-semibold text-slate-950">Choose {plan.tier}</button>
          </div>
        ))}
      </div>
      {message ? <p className="mt-3 text-sm text-cyan-200">{message}</p> : null}
    </section>
  );
};

export default UpgradePrompt;
// TODO UpgradePrompt

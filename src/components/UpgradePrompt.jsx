import { motion } from 'framer-motion';
import {
  startEliteCheckout,
  startFoundersCheckout,
  startProCheckout
} from '../api/stripeApi';

const tiers = [
  { label: 'Pro', price: '$89/mo', cta: 'Upgrade to Pro', action: startProCheckout },
  { label: 'Elite', price: '$149/mo', cta: 'Upgrade to Elite', action: startEliteCheckout },
  {
    label: 'Founders Lifetime',
    price: '$899',
    cta: 'Get Founders',
    action: startFoundersCheckout
  }
];

export default function UpgradePrompt() {
  return (
    <section className="rounded-2xl border border-blue-400/40 bg-slate-900/80 p-4 sm:p-6">
      <h3 className="text-xl font-bold text-white">Unlock More Blueprint Power</h3>
      <p className="mt-1 text-sm text-slate-300">
        Upgrade for deeper execution plans, advanced strategy, and future agent access.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier.label}
            whileHover={{ y: -2 }}
            className="rounded-xl border border-blue-500/30 bg-slate-950/60 p-4"
          >
            <p className="font-semibold text-blue-300">{tier.label}</p>
            <p className="mt-1 text-2xl font-extrabold text-white">{tier.price}</p>
            <button
              type="button"
              onClick={tier.action}
              className="mt-4 w-full rounded-lg bg-blue-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              {tier.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

/**
 * UpgradeModal — shown when a user tries to access a locked feature.
 * Usage: <UpgradeModal open={showModal} onClose={() => setShowModal(false)} requiredPlan="Pro" feature="Full Roadmap Access" />
 */
export default function UpgradeModal({ open, onClose, requiredPlan = "Pro", feature = "this feature" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-md rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-white transition-colors text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Lock icon */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
          <span className="text-2xl">🔒</span>
        </div>

        <h2 className="mb-2 font-display text-2xl font-black text-white">
          Unlock {feature}
        </h2>
        <p className="mb-6 text-sm text-slate-400 leading-relaxed">
          This feature requires the <span className="font-bold text-[#FF8A00]">{requiredPlan}</span> plan or higher.
          Upgrade to get full access to advanced strategy tools, roadmaps, CRM, automations, and more.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/pricing"
            onClick={onClose}
            className="block w-full rounded-xl py-3 text-center text-sm font-black text-[#0A0F1E] btn-gold"
          >
            View Plans & Upgrade
          </Link>
          <Link
            to="/waitlist"
            onClick={onClose}
            className="block w-full rounded-xl border border-[#1A2D50] py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Join the Waitlist
          </Link>
          <button
            onClick={onClose}
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors mt-1"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * LockedFeatureCard — inline locked card shown in dashboard/feature areas.
 * Usage: <LockedFeatureCard title="Advanced Analytics" plan="Elite" />
 */
export function LockedFeatureCard({ title, description, plan = "Pro", icon = "🔒" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      {/* Blur overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-[#0A0F1E]/80 backdrop-blur-[2px] z-10 px-6 text-center">
        <span className="mb-2 text-3xl">🔒</span>
        <p className="font-bold text-white text-sm mb-1">{title}</p>
        <p className="text-xs text-slate-400 mb-4">
          Available on <span className="text-[#FF8A00] font-bold">{plan}</span> plan
        </p>
        <Link
          to="/pricing"
          className="rounded-lg px-4 py-2 text-xs font-black text-[#0A0F1E] btn-gold"
        >
          Upgrade to {plan}
        </Link>
      </div>
      {/* Blurred background content */}
      <div className="blur-sm select-none pointer-events-none opacity-30">
        <div className="mb-2 text-2xl">{icon}</div>
        <h3 className="font-bold text-white">{title}</h3>
        {description && <p className="mt-1 text-sm text-slate-400">{description}</p>}
        <div className="mt-4 h-2 rounded bg-slate-700 w-3/4" />
        <div className="mt-2 h-2 rounded bg-slate-700 w-1/2" />
        <div className="mt-2 h-2 rounded bg-slate-700 w-2/3" />
      </div>
    </div>
  );
}

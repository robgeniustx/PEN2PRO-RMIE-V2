import { Link } from "react-router-dom";

const MOCK_EARNINGS = [
  { label: "This Month", value: "$0", sub: "No revenue tracked yet" },
  { label: "Last Month", value: "$0", sub: "Start tracking to see data" },
  { label: "Total Lifetime", value: "$0", sub: "Your cumulative business revenue" },
  { label: "Avg Per Month", value: "$—", sub: "Calculated after 2+ months" },
];

const INCOME_STREAMS = [
  { name: "Services / Freelance", icon: "🔧" },
  { name: "Product Sales", icon: "📦" },
  { name: "Coaching / Consulting", icon: "🎯" },
  { name: "Affiliate Commissions", icon: "🤝" },
  { name: "Digital Products", icon: "💡" },
  { name: "Subscriptions / Retainers", icon: "🔄" },
];

export default function EarningsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Earnings Tracker</h1>
        <p className="mt-1 text-sm text-slate-400">
          Track your business revenue, income streams, and financial momentum.
        </p>
      </div>

      {/* Metrics */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {MOCK_EARNINGS.map((m) => (
          <div key={m.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{m.label}</p>
            <p className="mt-2 text-2xl font-black text-[#FF8A00]">{m.value}</p>
            <p className="mt-1 text-xs text-slate-500">{m.sub}</p>
          </div>
        ))}
      </div>

      {/* Income Streams */}
      <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <h2 className="mb-4 text-lg font-bold text-white">Income Streams</h2>
        <p className="mb-5 text-sm text-slate-400">
          PEN2PRO helps you identify and build multiple income streams from your skills, ideas, and experience.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {INCOME_STREAMS.map((s) => (
            <div key={s.name} className="flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-3">
              <span className="text-xl">{s.icon}</span>
              <span className="text-sm font-semibold text-slate-300">{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      <div className="rounded-2xl border border-[#D4A017]/20 bg-gradient-to-br from-[#0F1520] to-[#1A2235] p-6">
        <h2 className="mb-2 text-lg font-bold text-white">Unlock Revenue Tracking</h2>
        <p className="mb-5 text-sm text-slate-400">
          Pro and Elite members get full earnings dashboards, revenue projections, income stream analysis,
          and financial goal tracking inside PEN2PRO BusinessOS.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/pro" className="rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
            View Pro Plan
          </Link>
          <Link to="/elite" className="rounded-xl border border-[#1A2D50] px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF8A00] transition">
            View Elite Plan
          </Link>
        </div>
      </div>
    </div>
  );
}

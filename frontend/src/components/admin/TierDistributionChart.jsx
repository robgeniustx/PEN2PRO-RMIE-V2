const TIER_CONFIG = [
  { key: "free",    label: "Free",    color: "#475569" },
  { key: "pro",     label: "Pro",     color: "#D4A017" },
  { key: "elite",   label: "Elite",   color: "#00C9B1" },
  { key: "founders",label: "Founders",color: "#7C3AED" },
];

export default function TierDistributionChart({ data = {} }) {
  const total = Object.values(data).reduce((s, v) => s + (v || 0), 0) || 1;

  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
      <h3 className="font-display text-base font-bold text-white mb-4">Tier Distribution</h3>
      <div className="space-y-3">
        {TIER_CONFIG.map(({ key, label, color }) => {
          const count = data[key] ?? 0;
          const pct = Math.round((count / total) * 100);
          return (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-semibold" style={{ color }}>{label}</span>
                <span className="text-slate-400">{count} users · {pct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#1A2235]">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-slate-600">Total active users: {total}</p>
    </div>
  );
}

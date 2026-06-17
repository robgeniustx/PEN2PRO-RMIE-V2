const TIER_META = {
  free:     { label: "Free",            color: "#1E88E5" },
  pro:      { label: "Pro",             color: "#D4A017" },
  elite:    { label: "Elite",           color: "#00C9B1" },
  founders: { label: "Founders",        color: "#7C3AED" },
};

export default function TierDistributionChart({ data = {} }) {
  const entries = Object.entries(data);
  const total = entries.reduce((s, [, v]) => s + (v || 0), 0);

  if (entries.length === 0) {
    return (
      <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-center text-slate-500 text-sm">
        No tier data available yet.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-400">Tier Distribution</h3>
      <div className="space-y-4">
        {entries.map(([key, count]) => {
          const meta = TIER_META[key] || { label: key, color: "#64748b" };
          const pct = total > 0 ? Math.round((count / total) * 100) : 0;
          return (
            <div key={key}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{meta.label}</span>
                <span className="text-sm text-slate-400">
                  {count} <span className="text-slate-600">({pct}%)</span>
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-[#1A2235]">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: meta.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-slate-600">Total active: {total}</p>
    </div>
  );
}

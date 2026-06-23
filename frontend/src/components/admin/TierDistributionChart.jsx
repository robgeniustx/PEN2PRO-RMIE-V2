const TIERS = [
  { key: "free",     label: "Free",     color: "#64748b" },
  { key: "pro",      label: "Pro",      color: "#D4A017" },
  { key: "elite",    label: "Elite",    color: "#1E88E5" },
  { key: "founders", label: "Founders", color: "#00C9B1" },
];

export default function TierDistributionChart({ data = {} }) {
  const total = Object.values(data).reduce((sum, v) => sum + (Number(v) || 0), 0);

  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-white">Tier Distribution</h3>
        <span className="rounded-full border border-[#1A2235] px-3 py-1 text-xs font-semibold text-slate-400">
          {total.toLocaleString()} total
        </span>
      </div>

      <div className="space-y-4">
        {TIERS.map(({ key, label, color }) => {
          const count = Number(data[key] || 0);
          const pct = total > 0 ? Math.round((count / total) * 100) : 0;
          return (
            <div key={key}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color }}>{label}</span>
                <span className="text-sm text-white">
                  {count.toLocaleString()}
                  <span className="ml-1.5 text-xs text-slate-500">({pct}%)</span>
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#1A2235]">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(pct, count > 0 ? 2 : 0)}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary row */}
      <div className="mt-5 grid grid-cols-4 gap-2 border-t border-[#1A2235] pt-4">
        {TIERS.map(({ key, label, color }) => (
          <div key={key} className="text-center">
            <p className="text-lg font-black" style={{ color }}>{Number(data[key] || 0)}</p>
            <p className="text-xs text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

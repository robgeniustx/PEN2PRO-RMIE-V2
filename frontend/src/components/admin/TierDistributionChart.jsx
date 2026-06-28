const TIER_CONFIG = {
  free:     { label: "Free",     color: "#64748b" },
  pro:      { label: "Pro",      color: "#2d9cff" },
  elite:    { label: "Elite",    color: "#D4A017" },
  founders: { label: "Founders", color: "#00C9B1" },
};

export default function TierDistributionChart({ data = {} }) {
  const total = Object.values(data).reduce((sum, n) => sum + (n || 0), 0);

  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <h3 className="mb-5 font-bold text-white">Tier Distribution</h3>

      {total === 0 ? (
        <p className="text-sm text-slate-500">No tier data available yet.</p>
      ) : (
        <>
          {/* Bar */}
          <div className="mb-5 flex h-4 w-full overflow-hidden rounded-full bg-[#1A2D50]">
            {Object.entries(TIER_CONFIG).map(([key, cfg]) => {
              const count = data[key] || 0;
              const pct = total > 0 ? (count / total) * 100 : 0;
              if (pct === 0) return null;
              return (
                <div
                  key={key}
                  style={{ width: `${pct}%`, background: cfg.color }}
                  title={`${cfg.label}: ${count} (${pct.toFixed(1)}%)`}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Object.entries(TIER_CONFIG).map(([key, cfg]) => {
              const count = data[key] || 0;
              const pct = total > 0 ? ((count / total) * 100).toFixed(1) : "0.0";
              return (
                <div key={key} className="flex items-center gap-2">
                  <span className="h-3 w-3 shrink-0 rounded-full" style={{ background: cfg.color }} />
                  <div>
                    <p className="text-xs font-bold text-slate-300">{cfg.label}</p>
                    <p className="text-[10px] text-slate-500">{count} · {pct}%</p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

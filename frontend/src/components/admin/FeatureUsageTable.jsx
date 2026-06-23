const TIER_STYLE = {
  free:     { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.3)" },
  pro:      { color: "#D4A017", bg: "rgba(212,160,23,0.1)",  border: "rgba(212,160,23,0.3)"  },
  elite:    { color: "#1E88E5", bg: "rgba(30,136,229,0.1)",  border: "rgba(30,136,229,0.3)"  },
  founders: { color: "#00C9B1", bg: "rgba(0,201,177,0.1)",   border: "rgba(0,201,177,0.3)"   },
};

export default function FeatureUsageTable({ data = [] }) {
  const maxUsage = Math.max(...data.map(r => r.usage_count || 0), 1);

  return (
    <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
      <div className="px-6 py-4 border-b border-[#1A2235]">
        <h3 className="font-display text-lg font-bold text-white">Top Features</h3>
        <p className="text-xs text-slate-500 mt-0.5">Most-used platform features across all users</p>
      </div>

      {data.length === 0 ? (
        <div className="px-6 py-12 text-center text-slate-500 text-sm">No feature usage data yet.</div>
      ) : (
        <div className="divide-y divide-[#1A2235]">
          {data.map((row, i) => {
            const style = TIER_STYLE[row.tier] || TIER_STYLE.free;
            const barPct = Math.round((row.usage_count / maxUsage) * 100);
            return (
              <div key={i} className="px-6 py-4 hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-white">{row.feature_name}</span>
                    <span className="text-xs text-slate-500">{row.module_name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize"
                      style={{ color: style.color, background: style.bg, border: `1px solid ${style.border}` }}
                    >
                      {row.tier}
                    </span>
                    <span className="text-sm font-black" style={{ color: "#D4A017" }}>
                      {(row.usage_count || 0).toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-[#1A2235]">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${barPct}%`, background: style.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

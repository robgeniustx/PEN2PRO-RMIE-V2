const TIER_COLORS = { free: "#475569", pro: "#D4A017", elite: "#00C9B1", founders: "#7C3AED" };

export default function FeatureUsageTable({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] px-6 py-10 text-center text-sm text-slate-500">
        No feature usage data yet.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1A2235]">
            {["Feature", "Module", "Tier", "Uses"].map((h) => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            const color = TIER_COLORS[row.tier] || "#475569";
            return (
              <tr key={i} className="border-b border-[#1A2235] last:border-0 hover:bg-white/[0.02] transition-all">
                <td className="px-5 py-3 font-semibold text-white">{row.feature_name}</td>
                <td className="px-5 py-3 capitalize text-slate-400">{row.module_name || "—"}</td>
                <td className="px-5 py-3">
                  <span
                    className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: color + "22", color }}
                  >
                    {row.tier || "—"}
                  </span>
                </td>
                <td className="px-5 py-3 font-bold tabular-nums" style={{ color: "#D4A017" }}>
                  {(row.usage_count || 0).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

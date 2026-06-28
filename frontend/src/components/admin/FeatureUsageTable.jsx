export default function FeatureUsageTable({ data = [] }) {
  const rows = Array.isArray(data) ? data : Object.entries(data).map(([feature, count]) => ({ feature, count }));

  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
      <div className="border-b border-[#1A2D50] px-6 py-4">
        <h3 className="font-bold text-white">Feature Usage</h3>
        <p className="text-xs text-slate-500 mt-0.5">Most-used platform features across all users</p>
      </div>

      {rows.length === 0 ? (
        <div className="px-6 py-10 text-center text-sm text-slate-500">
          No feature usage data yet.
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1A2D50] bg-[#0A0F1E]">
              <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-500">#</th>
              <th className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-slate-500">Feature</th>
              <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-widest text-slate-500">Uses</th>
              <th className="px-6 py-3 text-right text-[10px] font-bold uppercase tracking-widest text-slate-500">Share</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const maxCount = Math.max(...rows.map((r) => Number(r.count || r.uses || 0)));
              const count = Number(row.count || row.uses || 0);
              const pct = maxCount > 0 ? ((count / maxCount) * 100).toFixed(0) : 0;
              const feature = row.feature || row.name || `Feature ${i + 1}`;
              return (
                <tr key={i} className="border-b border-[#1A2D50]/40 hover:bg-[#1A2235]">
                  <td className="px-6 py-3 text-slate-600 text-xs">{i + 1}</td>
                  <td className="px-6 py-3 font-medium text-slate-200 capitalize">
                    {feature.replace(/_/g, " ")}
                  </td>
                  <td className="px-6 py-3 text-right font-bold text-white">{count.toLocaleString()}</td>
                  <td className="px-6 py-3 text-right">
                    <div className="inline-flex items-center gap-2">
                      <div className="h-1.5 w-16 rounded-full bg-[#1A2D50] overflow-hidden">
                        <div className="h-full rounded-full bg-[#2d9cff]" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs text-slate-500 w-8 text-right">{pct}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

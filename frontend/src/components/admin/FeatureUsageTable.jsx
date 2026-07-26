export default function FeatureUsageTable({ data = [] }) {
  if (!data.length) {
    return <p className="text-sm text-slate-500">No feature usage tracked yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1A2235]">
            <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Feature</th>
            <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Uses</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.feature_name || i} className="border-b border-[#1A2235] hover:bg-white/[0.02]">
              <td className="px-4 py-3 font-medium text-white">{row.feature_name || row.name || "Unknown"}</td>
              <td className="px-4 py-3 text-right font-bold" style={{ color: "#D4A017" }}>
                {row.usage_count ?? row.count ?? 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

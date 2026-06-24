const TIER_COLORS = {
  free:     '#64748b',
  pro:      '#1E88E5',
  elite:    '#D4A017',
  founders: '#A855F7',
}

export default function FeatureUsageTable({ data = [] }) {
  const sorted = [...data].sort((a, b) => b.usage_count - a.usage_count)
  const maxCount = sorted[0]?.usage_count || 1

  return (
    <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: '#0F1520' }}>
      <div className="px-6 py-4 border-b border-[#1A2235]">
        <h3 className="font-display text-base font-bold text-white">Feature Usage</h3>
      </div>
      {sorted.length === 0 ? (
        <div className="px-6 py-10 text-center text-sm text-slate-500">No feature data available.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1A2235]">
                {['Feature', 'Module', 'Tier', 'Uses', 'Adoption'].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((row, i) => {
                const color = TIER_COLORS[row.tier] || '#64748b'
                return (
                  <tr key={i} className="border-b border-[#1A2235] hover:bg-white/[0.02] transition">
                    <td className="px-4 py-3 text-white font-medium">{row.feature_name}</td>
                    <td className="px-4 py-3 text-slate-400 capitalize">{row.module_name}</td>
                    <td className="px-4 py-3">
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-semibold capitalize"
                        style={{ background: `${color}20`, color, border: `1px solid ${color}40` }}
                      >
                        {row.tier}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-bold text-white">{row.usage_count.toLocaleString()}</td>
                    <td className="px-4 py-3 w-36">
                      <div className="h-1.5 rounded-full bg-[#1A2235]">
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: `${(row.usage_count / maxCount) * 100}%`, background: '#D4A017' }}
                        />
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

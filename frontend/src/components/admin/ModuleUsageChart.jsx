const MODULE_COLORS = {
  blueprint: '#1E88E5',
  social:    '#D4A017',
  crm:       '#00C9B1',
  voice:     '#A855F7',
  website:   '#F97316',
  affiliate: '#10B981',
  funding:   '#06B6D4',
  credit:    '#F43F5E',
}

const DEFAULT_COLOR = '#64748b'

export default function ModuleUsageChart({ data = [] }) {
  const sorted = [...data].sort((a, b) => b.usage_count - a.usage_count)
  const maxVal = sorted[0]?.usage_count || 1

  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
      <h3 className="font-display text-base font-bold text-white mb-5">Module Adoption</h3>
      {sorted.length === 0 ? (
        <p className="text-sm text-slate-500 text-center py-6">No module data available.</p>
      ) : (
        <div className="space-y-4">
          {sorted.map((m, i) => {
            const color = MODULE_COLORS[m.module_name] || DEFAULT_COLOR
            const pct = Math.round((m.usage_count / maxVal) * 100)
            return (
              <div key={i} className="flex items-center gap-3">
                <span className="w-20 text-xs font-semibold text-slate-400 capitalize shrink-0">
                  {m.module_name}
                </span>
                <div className="flex-1 h-2 rounded-full bg-[#1A2235]">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(pct, 1)}%`, background: color }}
                  />
                </div>
                <span className="text-xs font-bold text-white w-12 text-right">
                  {m.usage_count.toLocaleString()}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

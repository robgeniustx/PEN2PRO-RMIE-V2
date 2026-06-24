const TIERS = [
  { key: 'free',     label: 'Free',     color: '#64748b' },
  { key: 'pro',      label: 'Pro',      color: '#1E88E5' },
  { key: 'elite',    label: 'Elite',    color: '#D4A017' },
  { key: 'founders', label: 'Founders', color: '#A855F7' },
]

export default function TierDistributionChart({ data = {} }) {
  const total = Object.values(data).reduce((a, b) => a + b, 0) || 1
  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
      <h3 className="font-display text-base font-bold text-white mb-5">Tier Distribution</h3>
      <div className="space-y-4">
        {TIERS.map(t => {
          const count = data[t.key] ?? 0
          const pct = Math.round((count / total) * 100)
          return (
            <div key={t.key}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-300">{t.label}</span>
                <span className="text-slate-500">{count.toLocaleString()} users &mdash; {pct}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#1A2235]">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.max(pct, 1)}%`, background: t.color }}
                />
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-xs text-slate-600 mt-5 pt-4 border-t border-[#1A2235]">
        {total.toLocaleString()} total users across all tiers
      </p>
    </div>
  )
}

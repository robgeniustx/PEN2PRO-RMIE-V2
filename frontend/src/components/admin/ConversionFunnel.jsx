const FUNNEL_STAGES = [
  { key: 'starter_visits',      label: 'Starter Visits',      icon: '👁️' },
  { key: 'blueprint_generated', label: 'Blueprint Generated',  icon: '📋' },
  { key: 'pricing_viewed',      label: 'Pricing Viewed',       icon: '💰' },
  { key: 'upgrade_clicked',     label: 'Upgrade Clicked',      icon: '🎯' },
  { key: 'checkout_started',    label: 'Checkout Started',     icon: '🛒' },
  { key: 'checkout_completed',  label: 'Checkout Completed',   icon: '✅' },
]

export default function ConversionFunnel({ data = {} }) {
  const maxVal = Math.max(...FUNNEL_STAGES.map(s => data[s.key] || 0), 1)

  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: '#0F1520' }}>
      <h3 className="font-display text-base font-bold text-white mb-5">Conversion Funnel</h3>
      <div className="space-y-3">
        {FUNNEL_STAGES.map((s, i) => {
          const val = data[s.key] || 0
          const barPct = Math.round((val / maxVal) * 100)
          const prevVal = i > 0 ? (data[FUNNEL_STAGES[i - 1].key] || 0) : val
          const dropPct = prevVal > 0 ? Math.round((val / prevVal) * 100) : 100
          const isLast = i === FUNNEL_STAGES.length - 1

          return (
            <div key={s.key} className="flex items-center gap-3">
              <div className="w-6 text-base shrink-0 text-center">{s.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300 font-medium">{s.label}</span>
                  <span className="text-slate-500">
                    {val.toLocaleString()}
                    {i > 0 && (
                      <span className="ml-1.5" style={{ color: dropPct >= 50 ? '#00C9B1' : '#F97316' }}>
                        ({dropPct}%)
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[#1A2235]">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.max(barPct, 1)}%`,
                      background: isLast
                        ? 'linear-gradient(90deg,#00C9B1,#00A99D)'
                        : 'linear-gradient(90deg,#D4A017,#B8860B)',
                    }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-xs text-slate-600 mt-4 pt-4 border-t border-[#1A2235]">
        % shown = step-over-step retention rate
      </p>
    </div>
  )
}

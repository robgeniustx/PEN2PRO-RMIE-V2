const CAT_ICONS = {
  blueprint: '📋',
  social:    '📢',
  crm:       '👥',
  voice:     '🎙️',
  analytics: '📊',
  website:   '🌐',
  affiliate: '🤝',
  funding:   '💰',
  credit:    '🏦',
}

const TIER_COLORS = {
  free:     '#64748b',
  pro:      '#1E88E5',
  elite:    '#D4A017',
  founders: '#A855F7',
}

export default function RecentActivityTable({ data = [] }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: '#0F1520' }}>
      <div className="px-6 py-4 border-b border-[#1A2235]">
        <h3 className="font-display text-base font-bold text-white">Recent Activity</h3>
      </div>
      {data.length === 0 ? (
        <div className="px-6 py-10 text-center text-sm text-slate-500">No recent activity.</div>
      ) : (
        <div className="divide-y divide-[#1A2235]">
          {data.map((item, i) => {
            const tierColor = TIER_COLORS[item.tier] || '#64748b'
            const icon = CAT_ICONS[item.event_category] || '⚡'
            return (
              <div key={i} className="flex items-center gap-4 px-6 py-3 hover:bg-white/[0.02] transition">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-base shrink-0"
                  style={{ background: '#1A2235' }}
                >
                  {icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white capitalize truncate">
                    {item.event_name.replace(/_/g, ' ')}
                  </p>
                  <p className="text-xs text-slate-500 truncate">{item.page_path}</p>
                </div>
                <span
                  className="rounded-full px-2 py-0.5 text-xs font-semibold capitalize shrink-0"
                  style={{ background: `${tierColor}20`, color: tierColor, border: `1px solid ${tierColor}40` }}
                >
                  {item.tier}
                </span>
                <span className="text-xs text-slate-600 shrink-0">
                  {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

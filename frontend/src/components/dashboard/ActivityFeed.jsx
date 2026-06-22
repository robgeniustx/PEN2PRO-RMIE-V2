export default function ActivityFeed({ items = [] }) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-[#1A2235] p-6 text-center" style={{ background: '#0F1520' }}>
        <p className="text-sm text-slate-500">No recent activity yet.</p>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: '#0F1520' }}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 px-5 py-4 ${i < items.length - 1 ? 'border-b border-[#1A2235]' : ''}`}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A2235] text-sm">
            {item.icon || '●'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-300">{item.text || item.message}</p>
            {item.time && <p className="mt-0.5 text-xs text-slate-600">{item.time}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function AdminMetricCard({ label, value, description, color = '#D4A017', icon }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] p-5" style={{ background: '#0F1520' }}>
      {icon && <div className="text-xl mb-2">{icon}</div>}
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>
        {typeof value === 'number' ? value.toLocaleString() : (value ?? '—')}
      </p>
      {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
    </div>
  )
}

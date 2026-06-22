export default function MetricCard({ label, value, sub, accent = false }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${accent ? 'border-[#D4A017]/40' : 'border-[#1A2235]'}`}
      style={{ background: '#0F1520' }}
    >
      <p className="text-xs font-medium text-slate-500 mb-2">{label}</p>
      <p
        className="font-display text-2xl font-black"
        style={{ color: accent ? '#D4A017' : '#FFFFFF' }}
      >
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-slate-600">{sub}</p>}
    </div>
  )
}

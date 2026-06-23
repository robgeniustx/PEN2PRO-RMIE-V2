export default function AdminMetricCard({ label, value, description, accent = "#D4A017", icon }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
      {icon && <div className="mb-2 text-2xl">{icon}</div>}
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color: accent }}>{value ?? "—"}</p>
      {description && <p className="mt-1 text-xs text-slate-500">{description}</p>}
    </div>
  );
}

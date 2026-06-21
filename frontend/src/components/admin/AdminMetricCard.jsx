export default function AdminMetricCard({ label, value, description, accent, icon }) {
  return (
    <div
      className="rounded-xl border p-5 flex flex-col gap-2"
      style={{ borderColor: "#1A2D50", background: "#0D1528" }}
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: accent || "#1E88E5" }}>
          {label}
        </p>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <p className="text-3xl font-black text-white leading-none">{value ?? "—"}</p>
      {description && <p className="text-xs text-slate-500 leading-relaxed">{description}</p>}
    </div>
  );
}

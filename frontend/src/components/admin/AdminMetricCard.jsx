export default function AdminMetricCard({ label, value, description, color = "#D4A017" }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] p-5 transition hover:border-[#D4A017]/30" style={{ background: "#0F1520" }}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>
        {typeof value === "number" ? value.toLocaleString() : (value ?? "—")}
      </p>
      {description && <p className="mt-1.5 text-xs text-slate-500">{description}</p>}
    </div>
  );
}

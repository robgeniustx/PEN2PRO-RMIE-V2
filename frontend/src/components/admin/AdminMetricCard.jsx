export default function AdminMetricCard({ label, value, description, accent }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">{label}</p>
      <p className={`mb-1 text-3xl font-black ${accent || "text-white"}`}>{value ?? "—"}</p>
      {description && <p className="text-xs text-slate-500">{description}</p>}
    </div>
  );
}

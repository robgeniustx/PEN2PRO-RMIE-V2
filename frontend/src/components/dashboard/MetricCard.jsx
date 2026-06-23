export default function MetricCard({ label, value, change, icon, color = "#D4A017" }) {
  const isPositive = typeof change === "number" ? change >= 0 : change?.startsWith("+");

  return (
    <div
      className="rounded-xl border p-5"
      style={{ borderColor: color + "30", background: color + "08" }}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{label}</p>
        {icon && (
          <span className="text-xl">{icon}</span>
        )}
      </div>
      <p className="font-display text-2xl font-black text-white mb-1">{value ?? "—"}</p>
      {change !== undefined && (
        <p className={`text-xs font-semibold ${isPositive ? "text-green-400" : "text-red-400"}`}>
          {typeof change === "number" ? (isPositive ? "+" : "") + change + "%" : change}
          <span className="text-slate-600 font-normal ml-1">vs last period</span>
        </p>
      )}
    </div>
  );
}

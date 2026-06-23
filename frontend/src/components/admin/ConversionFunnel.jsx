const STAGES = [
  { key: "starter_visits",      label: "Starter Visits",      color: "#475569" },
  { key: "blueprint_generated", label: "Blueprint Generated",  color: "#1E88E5" },
  { key: "pricing_viewed",      label: "Pricing Viewed",       color: "#D4A017" },
  { key: "upgrade_clicked",     label: "Upgrade Clicked",      color: "#FF8A00" },
  { key: "checkout_started",    label: "Checkout Started",     color: "#00C9B1" },
  { key: "checkout_completed",  label: "Checkout Completed",   color: "#059669" },
];

export default function ConversionFunnel({ data = {} }) {
  const top = Math.max(...STAGES.map(s => data[s.key] ?? 0), 1);

  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
      <h3 className="font-display text-base font-bold text-white mb-5">Conversion Funnel</h3>
      <div className="space-y-3">
        {STAGES.map(({ key, label, color }, i) => {
          const val = data[key] ?? 0;
          const pct = Math.round((val / top) * 100);
          const prev = i > 0 ? (data[STAGES[i - 1].key] ?? 0) : val;
          const dropPct = prev > 0 ? Math.round(((prev - val) / prev) * 100) : 0;
          return (
            <div key={key}>
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">{label}</span>
                <span className="tabular-nums" style={{ color }}>
                  {val.toLocaleString()}
                  {i > 0 && dropPct > 0 && (
                    <span className="ml-2 text-slate-600">−{dropPct}% drop</span>
                  )}
                </span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-[#1A2235]">
                <div
                  className="h-2.5 rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

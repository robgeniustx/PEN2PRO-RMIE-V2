const STEPS = [
  { key: "visitors", label: "Visitors", accent: "#1E88E5" },
  { key: "starter_sessions", label: "Roadmap Started", accent: "#00C9B1" },
  { key: "blueprints_generated", label: "Blueprint Generated", accent: "#7C3AED" },
  { key: "waitlist_signups", label: "Waitlist Joined", accent: "#D4A017" },
  { key: "paid_conversions", label: "Paid Upgrade", accent: "#059669" },
];

export default function ConversionFunnel({ data = {} }) {
  const top = data.visitors || data.total_visitors || 1;

  return (
    <div className="rounded-2xl border p-5 space-y-4" style={{ borderColor: "#1A2D50", background: "#0D1528" }}>
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Conversion Funnel</p>
      {STEPS.map((step) => {
        const count = data[step.key] ?? 0;
        const pct = Math.min(100, Math.round((count / top) * 100));
        return (
          <div key={step.key} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300 font-medium">{step.label}</span>
              <span className="text-white font-bold tabular-nums">{count.toLocaleString()}</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: "#1A2D50" }}>
              <div
                className="h-2 rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, background: step.accent }}
              />
            </div>
            <p className="text-xs text-slate-600">{pct}% of visitors</p>
          </div>
        );
      })}
    </div>
  );
}

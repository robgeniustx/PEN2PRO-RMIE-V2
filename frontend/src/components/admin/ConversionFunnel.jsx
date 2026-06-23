const STEPS = [
  { key: "starter_visits",      label: "Starter Visits" },
  { key: "blueprint_generated", label: "Blueprints Generated" },
  { key: "pricing_viewed",      label: "Pricing Views" },
  { key: "upgrade_clicked",     label: "Upgrade Clicks" },
  { key: "checkout_started",    label: "Checkouts Started" },
  { key: "checkout_completed",  label: "Checkouts Completed" },
];

export default function ConversionFunnel({ data = {} }) {
  const topVal = Math.max(...STEPS.map(s => Number(data[s.key] || 0)), 1);

  return (
    <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
      <h3 className="font-display text-lg font-bold text-white mb-5">Conversion Funnel</h3>
      <div className="space-y-3">
        {STEPS.map(({ key, label }, i) => {
          const val = Number(data[key] || 0);
          const barPct = Math.max(Math.round((val / topVal) * 100), val > 0 ? 2 : 0);
          return (
            <div key={key}>
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-sm font-semibold text-white">{label}</span>
                <span className="text-sm font-black" style={{ color: "#D4A017" }}>{val.toLocaleString()}</span>
              </div>
              <div className="h-2 rounded-full bg-[#1A2235]">
                <div
                  className="h-2 rounded-full transition-all duration-500"
                  style={{
                    width: `${barPct}%`,
                    background: i === STEPS.length - 1
                      ? "linear-gradient(90deg,#22c55e,#16a34a)"
                      : "linear-gradient(90deg,#D4A017,#F59E0B)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

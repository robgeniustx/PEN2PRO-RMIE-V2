const TIER_COLORS = {
  free: "#5B6B8C",
  pro: "#00C9B1",
  elite: "#D4A017",
  founders: "#FF8A00",
};

export default function TierDistributionChart({ data = {} }) {
  const entries = Object.entries(data);
  const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;

  if (entries.length === 0) {
    return <p className="text-sm text-slate-500">No tier data yet.</p>;
  }

  return (
    <div className="space-y-3">
      {entries.map(([tier, count]) => (
        <div key={tier} className="flex items-center gap-4">
          <p className="w-20 text-sm capitalize text-slate-400">{tier}</p>
          <div className="h-2 flex-1 rounded-full bg-[#1A2235]">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${Math.max(4, (count / total) * 100)}%`,
                background: TIER_COLORS[tier] || "#1E88E5",
              }}
            />
          </div>
          <p className="w-8 text-right text-sm font-bold text-white">{count}</p>
        </div>
      ))}
    </div>
  );
}

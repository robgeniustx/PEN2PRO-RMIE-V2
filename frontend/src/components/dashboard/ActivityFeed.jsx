const ICONS = {
  roadmap: "🗺️",
  lead: "👤",
  payment: "💰",
  signup: "✅",
  upgrade: "⬆️",
  default: "📋",
};

export default function ActivityFeed({ activities = [] }) {
  if (activities.length === 0) {
    return (
      <div className="rounded-2xl border border-[#1A2D50] p-8 text-center" style={{ background: "#0F1520" }}>
        <p className="text-sm text-slate-500">No recent activity. Activity will appear here as users interact with the platform.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
      <div className="px-5 py-4 border-b border-[#1A2D50]">
        <h3 className="font-display text-sm font-bold text-white">Recent Activity</h3>
      </div>
      <div className="divide-y divide-[#1A2D50]">
        {activities.map((item, i) => (
          <div key={item.id || i} className="flex items-center gap-3 px-5 py-4">
            <span className="text-lg shrink-0">{ICONS[item.type] || ICONS.default}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{item.message || item.description || "Activity"}</p>
              {item.user && <p className="text-xs text-slate-500 mt-0.5">{item.user}</p>}
            </div>
            {item.timestamp && (
              <span className="text-xs text-slate-600 shrink-0">
                {new Date(item.timestamp).toLocaleDateString()}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

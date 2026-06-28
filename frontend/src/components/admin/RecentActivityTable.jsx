function timeAgo(ts) {
  if (!ts) return "—";
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

const EVENT_ICON = {
  signup:    { icon: "👤", color: "text-[#2d9cff]" },
  upgrade:   { icon: "⬆️", color: "text-[#D4A017]" },
  blueprint: { icon: "📋", color: "text-[#00C9B1]" },
  login:     { icon: "🔑", color: "text-slate-400" },
  waitlist:  { icon: "📋", color: "text-[#00C9B1]" },
  default:   { icon: "⚡", color: "text-slate-400" },
};

export default function RecentActivityTable({ data = [] }) {
  const rows = Array.isArray(data) ? data : [];

  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] overflow-hidden">
      <div className="border-b border-[#1A2D50] px-6 py-4">
        <h3 className="font-bold text-white">Recent Activity</h3>
        <p className="text-xs text-slate-500 mt-0.5">Latest platform events</p>
      </div>

      {rows.length === 0 ? (
        <div className="px-6 py-10 text-center text-sm text-slate-500">
          No recent activity to display.
        </div>
      ) : (
        <ul className="divide-y divide-[#1A2D50]/40">
          {rows.map((row, i) => {
            const eventType = (row.event_type || row.type || "default").toLowerCase();
            const cfg = EVENT_ICON[eventType] || EVENT_ICON.default;
            return (
              <li key={i} className="flex items-start gap-4 px-6 py-4 hover:bg-[#1A2235]">
                <span className={`mt-0.5 shrink-0 text-xl ${cfg.color}`}>{cfg.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-200 truncate">
                    {row.description || row.message || eventType.replace(/_/g, " ")}
                  </p>
                  {row.user_email && (
                    <p className="text-xs text-slate-500 truncate">{row.user_email}</p>
                  )}
                </div>
                <time className="shrink-0 text-xs text-slate-600">{timeAgo(row.created_at || row.timestamp)}</time>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

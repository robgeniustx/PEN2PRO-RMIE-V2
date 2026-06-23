const TIER_COLORS = { free: "#475569", pro: "#D4A017", elite: "#00C9B1", founders: "#7C3AED" };

const CATEGORY_ICONS = {
  blueprint: "🗺️",
  social: "📣",
  crm: "🤝",
  payment: "💳",
  voice: "🎙️",
  website: "🌐",
  domain: "🔗",
  auth: "🔐",
  default: "⚡",
};

function timeAgo(iso) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default function RecentActivityTable({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] px-6 py-10 text-center text-sm text-slate-500">
        No recent activity yet.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1A2235]">
            {["Event", "Category", "Page", "Tier", "Time"].map((h) => (
              <th key={h} className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            const color = TIER_COLORS[row.tier] || "#475569";
            const icon = CATEGORY_ICONS[row.event_category] || CATEGORY_ICONS.default;
            return (
              <tr key={i} className="border-b border-[#1A2235] last:border-0 hover:bg-white/[0.02] transition-all">
                <td className="px-5 py-3">
                  <span className="mr-2">{icon}</span>
                  <span className="font-medium text-white capitalize">{(row.event_name || "").replace(/_/g, " ")}</span>
                </td>
                <td className="px-5 py-3 capitalize text-slate-400">{row.event_category || "—"}</td>
                <td className="px-5 py-3 text-slate-500 text-xs">{row.page_path || "—"}</td>
                <td className="px-5 py-3">
                  {row.tier && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: color + "22", color }}
                    >
                      {row.tier}
                    </span>
                  )}
                </td>
                <td className="px-5 py-3 text-slate-500 text-xs whitespace-nowrap">
                  {row.created_at ? timeAgo(row.created_at) : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

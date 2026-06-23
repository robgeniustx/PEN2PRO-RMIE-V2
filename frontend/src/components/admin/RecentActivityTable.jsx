function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const CATEGORY_COLOR = {
  blueprint: "#D4A017",
  social:    "#1E88E5",
  crm:       "#00C9B1",
  payment:   "#22c55e",
  auth:      "#a78bfa",
  upgrade:   "#f97316",
};

export default function RecentActivityTable({ data = [] }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
      <div className="px-6 py-4 border-b border-[#1A2235]">
        <h3 className="font-display text-lg font-bold text-white">Recent Activity</h3>
        <p className="text-xs text-slate-500 mt-0.5">Latest tracked platform events</p>
      </div>

      {data.length === 0 ? (
        <div className="px-6 py-12 text-center text-slate-500 text-sm">No activity recorded yet.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#1A2235]">
                {["Event", "Category", "Tier", "Page", "Time"].map(h => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1A2235]">
              {data.map((row, i) => {
                const catColor = CATEGORY_COLOR[row.event_category] || "#94a3b8";
                return (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{row.event_name}</td>
                    <td className="px-4 py-3">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        style={{ color: catColor, background: `${catColor}20`, border: `1px solid ${catColor}40` }}
                      >
                        {row.event_category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-400 text-xs capitalize">{row.tier}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs font-mono">{row.page_path}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{timeAgo(row.created_at)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

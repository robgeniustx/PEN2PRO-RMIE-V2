export default function RecentActivityTable({ data = [] }) {
  if (!data.length) {
    return <p className="text-sm text-slate-500">No recent activity yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1A2235]">
            <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">Event</th>
            <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">When</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-[#1A2235] hover:bg-white/[0.02]">
              <td className="px-4 py-3 font-medium text-white">{row.event_name || "Unknown event"}</td>
              <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                {row.created_at ? new Date(row.created_at).toLocaleString() : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

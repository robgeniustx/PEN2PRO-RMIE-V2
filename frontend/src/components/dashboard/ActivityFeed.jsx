const FALLBACK = [
  { id: 1, icon: "🗺️", text: "Business roadmap generated", time: "Just now" },
  { id: 2, icon: "✅", text: "7-day action plan completed", time: "2h ago" },
  { id: 3, icon: "📊", text: "Credit readiness check started", time: "Yesterday" },
  { id: 4, icon: "💳", text: "Funding checklist updated", time: "2d ago" },
];

export default function ActivityFeed({ items, title = "Recent Activity" }) {
  const feed = (items?.length ? items : FALLBACK).slice(0, 8);

  return (
    <div className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-5">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{title}</p>
      <div className="space-y-3">
        {feed.map((item) => (
          <div key={item.id ?? item.text} className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1A2235] text-sm">
              {item.icon || "📌"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-300 truncate">{item.text}</p>
            </div>
            <p className="shrink-0 text-xs text-slate-600">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

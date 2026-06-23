import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { icon: "🗺️", label: "New Roadmap", path: "/starter", color: "#FF8A00" },
  { icon: "💳", label: "Credit Check", path: "/credit-repair", color: "#2d9cff" },
  { icon: "💰", label: "Funding Help", path: "/funding", color: "#00C9B1" },
  { icon: "🤝", label: "Affiliate Tools", path: "/affiliate", color: "#D4A017" },
  { icon: "💎", label: "Upgrade Plan", path: "/pricing", color: "#d4af37" },
  { icon: "📣", label: "Waitlist", path: "/waitlist", color: "#7C3AED" },
];

export default function LiveCommandPanel({ title = "Quick Actions" }) {
  return (
    <div className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-5">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{title}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {QUICK_LINKS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-2.5 rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-sm font-semibold text-slate-300 transition hover:border-opacity-60 hover:text-white"
            style={{ "--hover-color": item.color }}
          >
            <span className="text-base">{item.icon}</span>
            <span className="truncate text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

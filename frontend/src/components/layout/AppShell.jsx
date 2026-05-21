import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/leads", label: "Leads" },
  { path: "/dashboard/pipeline", label: "Pipeline" },
  { path: "/dashboard/crm", label: "CRM" },
  { path: "/dashboard/automation", label: "Automation" },
];

export default function AppShell({ children, sidebar }) {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen" style={{ background: "#080C14" }}>
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-[#1A2D50] lg:flex lg:flex-col" style={{ background: "#0A0F1E" }}>
        <div className="flex items-center gap-2 px-5 py-5 border-b border-[#1A2D50]">
          <Link to="/" className="font-display text-lg font-black tracking-tight">
            <span className="text-white">PEN</span>
            <span className="text-[#FF8A00]">2</span>
            <span className="text-[#1E88E5]">PRO</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {(sidebar || NAV_ITEMS).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                pathname === item.path
                  ? "bg-[#1A2D50] text-white"
                  : "text-slate-500 hover:bg-[#1A2D50]/50 hover:text-white"
              }`}
            >
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-[#1A2D50] p-4">
          <Link to="/waitlist?tier=pro" className="btn-gold block w-full py-2 text-center text-xs font-bold">
            Upgrade to Pro
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

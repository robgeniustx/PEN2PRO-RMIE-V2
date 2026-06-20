import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Topbar from "./Topbar";

const SIDE_LINKS = [
  { label: "Dashboard", path: "/dashboard", icon: "🏠" },
  { label: "Roadmap Builder", path: "/starter", icon: "🗺️" },
  { label: "Funding Readiness", path: "/funding", icon: "💰" },
  { label: "Credit Repair", path: "/credit-repair", icon: "💳" },
  { label: "Affiliate Resources", path: "/affiliate", icon: "🤝" },
  { label: "Pricing & Plans", path: "/pricing", icon: "⭐" },
];

export default function AppShell({ children, module }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const loc = useLocation();

  const isActive = (path) =>
    path === "/dashboard" ? loc.pathname === path : loc.pathname.startsWith(path);

  return (
    <div className="min-h-screen bg-[#080C14] flex flex-col">
      <Topbar module={module} onMenuToggle={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-1">
        {/* Sidebar overlay (mobile) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[#1A2235] pt-14 transition-transform duration-200 md:static md:translate-x-0 md:z-auto ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ background: "#0A0F1E" }}
        >
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">Navigation</p>
            <nav className="space-y-1">
              {SIDE_LINKS.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${
                    isActive(l.path)
                      ? "bg-[#1A2D50] text-white"
                      : "text-slate-400 hover:bg-[#1A2235] hover:text-white"
                  }`}
                >
                  <span className="text-base leading-none">{l.icon}</span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-[#1A2235] p-4">
            <Link
              to="/pricing"
              className="block rounded-xl px-4 py-3 text-center text-xs font-black text-[#080C14] btn-gold"
            >
              ⚡ Upgrade Plan
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

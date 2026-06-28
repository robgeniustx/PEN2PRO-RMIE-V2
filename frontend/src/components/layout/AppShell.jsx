import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/**
 * AppShell wraps authenticated/dashboard pages with a persistent sidebar and topbar.
 * Usage:
 *   <AppShell>
 *     <YourPageContent />
 *   </AppShell>
 */
export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#080C14] text-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — fixed on mobile, static on lg+ */}
      <div
        className={`fixed inset-y-0 left-0 z-40 transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar collapsed={sidebarCollapsed} />

        {/* Collapse toggle (desktop only) */}
        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full border border-[#1A2D50] bg-[#0F1520] text-slate-400 hover:text-white shadow-lg lg:flex"
        >
          {sidebarCollapsed ? "›" : "‹"}
        </button>
      </div>

      {/* Main panel */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

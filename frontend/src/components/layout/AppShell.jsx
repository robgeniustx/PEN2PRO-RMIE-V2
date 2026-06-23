import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

/**
 * AppShell wraps authenticated dashboard pages with a sidebar + topbar layout.
 *
 * Usage:
 *   <AppShell user={user} title="Dashboard">
 *     <YourPageContent />
 *   </AppShell>
 */
export default function AppShell({ children, user, title }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ background: "#080C14" }}>
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar user={user} collapsed={sidebarCollapsed} />
      </div>

      {/* Mobile Sidebar overlay */}
      {mobileSidebarOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 md:hidden">
            <Sidebar user={user} collapsed={false} />
          </div>
        </>
      )}

      {/* Main content area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Topbar */}
        <div className="flex items-center">
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="flex md:hidden items-center justify-center px-4 py-3 border-b border-r"
            style={{ borderColor: "#1A2D50", background: "#0A0F1E" }}
            aria-label="Open sidebar"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round">
              <line x1="2" y1="5" x2="16" y2="5" />
              <line x1="2" y1="9" x2="16" y2="9" />
              <line x1="2" y1="13" x2="16" y2="13" />
            </svg>
          </button>

          {/* Desktop collapse toggle */}
          <button
            onClick={() => setSidebarCollapsed((c) => !c)}
            className="hidden md:flex items-center justify-center px-3 py-3 border-b border-r"
            style={{ borderColor: "#1A2D50", background: "#0A0F1E" }}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ transform: sidebarCollapsed ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            >
              <polyline points="10 4 6 8 10 12" />
            </svg>
          </button>

          <div className="flex-1">
            <Topbar title={title} user={user} />
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

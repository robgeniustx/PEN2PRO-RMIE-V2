import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export default function AppShell({ children, title, subtitle }) {
  const [user, setUser] = useState(getStoredUser);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <div className="flex min-h-screen" style={{ background: "#080C14" }}>
      {/* Sidebar — always visible on lg+, drawer on mobile */}
      <div className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar user={user} />
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col min-w-0">
        <Topbar user={user} title={title} subtitle={subtitle} />

        {/* Mobile hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="absolute left-4 top-3 z-30 flex flex-col gap-1 rounded-lg p-2 lg:hidden"
          aria-label="Open sidebar"
        >
          <span className="block h-0.5 w-5 bg-slate-400" />
          <span className="block h-0.5 w-5 bg-slate-400" />
          <span className="block h-0.5 w-5 bg-slate-400" />
        </button>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

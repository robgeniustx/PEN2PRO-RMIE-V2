import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppShell({ children }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="p2p-dashboard">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPath={location.pathname} />
      <div className="p2p-main" style={{ minWidth: 0 }}>
        <Topbar onMenuOpen={() => setSidebarOpen(true)} />
        {children ?? <Outlet />}
      </div>
    </div>
  );
}

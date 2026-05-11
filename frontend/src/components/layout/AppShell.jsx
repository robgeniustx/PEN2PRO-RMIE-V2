import { useLocation } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const DASHBOARD_PATHS = ["/dashboard", "/admin"];

function inDashboard(pathname) {
  return DASHBOARD_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

export default function AppShell({ children }) {
  const { pathname } = useLocation();
  const isDashboard = inDashboard(pathname);

  if (isDashboard) {
    return (
      <div className="flex min-h-screen bg-slate-950">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      <Topbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}

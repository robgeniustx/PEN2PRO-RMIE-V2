import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export default function AppShell({ title, subtitle, children }) {
  const user = getStoredUser() || { name: "Robert Green", tier: "free", role: "member" };

  return (
    <div className="p2p-dashboard">
      <Sidebar user={user} />
      <main className="p2p-main">
        <Topbar title={title} subtitle={subtitle} user={user} />
        {children}
      </main>
    </div>
  );
}

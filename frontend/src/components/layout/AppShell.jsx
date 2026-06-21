import Sidebar from "./Sidebar";

function getStoredUser() {
  try {
    const stored = JSON.parse(localStorage.getItem("pen2pro_user") || "null");
    if (stored) return stored;
  } catch {
    // ignore
  }
  return { name: "Robert Green", email: "", tier: "free", role: "member" };
}

export default function AppShell({ children }) {
  const user = getStoredUser();

  return (
    <div className="p2p-dashboard">
      <Sidebar user={user} />
      <main className="p2p-main">
        {children}
      </main>
    </div>
  );
}

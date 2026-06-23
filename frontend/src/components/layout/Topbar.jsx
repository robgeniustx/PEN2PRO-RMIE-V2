import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ title = "Dashboard", user }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("pen2pro_token");
    localStorage.removeItem("pen2pro_user");
    navigate("/login");
  }

  const initials = (user?.name || "U").slice(0, 1).toUpperCase();
  const planLabel = user?.tier ? String(user.tier).toUpperCase() : "FREE";

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between px-6 py-3 border-b"
      style={{ background: "#0A0F1E", borderColor: "#1A2D50" }}
    >
      {/* Left: page title */}
      <h1 className="text-base font-bold text-white tracking-tight">{title}</h1>

      {/* Right: plan badge + avatar */}
      <div className="flex items-center gap-4">
        <span
          className="hidden sm:block rounded-full px-3 py-1 text-xs font-black tracking-wider"
          style={{
            background: planLabel === "ELITE" ? "rgba(124,58,237,0.15)" : planLabel === "PRO" ? "rgba(30,136,229,0.15)" : planLabel === "FOUNDERS" ? "rgba(212,160,23,0.15)" : "rgba(30,41,59,0.8)",
            color: planLabel === "ELITE" ? "#7C3AED" : planLabel === "PRO" ? "#1E88E5" : planLabel === "FOUNDERS" ? "#D4A017" : "#64748b",
            border: `1px solid ${planLabel === "ELITE" ? "rgba(124,58,237,0.35)" : planLabel === "PRO" ? "rgba(30,136,229,0.35)" : planLabel === "FOUNDERS" ? "rgba(212,160,23,0.35)" : "#1A2D50"}`,
          }}
        >
          {planLabel}
        </span>

        {user?.tier === "free" || !user?.tier ? (
          <Link
            to="/pricing"
            className="hidden sm:block rounded-lg px-3 py-1.5 text-xs font-black text-[#0A0F1E] btn-gold"
          >
            Upgrade
          </Link>
        ) : null}

        <div className="relative group">
          <button
            className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
            title={user?.name || "Account"}
          >
            {initials}
          </button>
          {/* Dropdown */}
          <div
            className="absolute right-0 top-full mt-2 w-48 rounded-xl border py-2 shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity"
            style={{ background: "#0F1520", borderColor: "#1A2D50" }}
          >
            <div className="px-4 py-2 border-b" style={{ borderColor: "#1A2D50" }}>
              <p className="text-xs font-bold text-white truncate">{user?.name || "User"}</p>
              <p className="text-xs text-slate-500 truncate">{user?.email || ""}</p>
            </div>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-[#1A2235] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/pricing"
              className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-[#1A2235] transition-colors"
            >
              Upgrade Plan
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-[#1A2235] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

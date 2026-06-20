import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ user, title, subtitle }) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("pen2pro_token");
    localStorage.removeItem("pen2pro_user");
    navigate("/login");
  }

  const initial = (user?.name || "R").slice(0, 1).toUpperCase();
  const tier = String(user?.tier || "free").toUpperCase();

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-[#1A2235] px-6 py-3"
      style={{ background: "#0B101A" }}
    >
      <div className="min-w-0">
        {title && (
          <h1 className="truncate text-lg font-black text-white leading-tight">{title}</h1>
        )}
        {subtitle && (
          <p className="truncate text-xs text-slate-500 mt-0.5">{subtitle}</p>
        )}
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <Link
          to="/starter"
          className="hidden rounded-lg border border-[#D4A017]/40 bg-[#D4A017]/10 px-3 py-1.5 text-xs font-bold text-[#D4A017] transition hover:bg-[#D4A017]/20 sm:inline-flex"
        >
          + New Blueprint
        </Link>

        <Link
          to="/pricing"
          className="hidden rounded-lg border border-[#1A2235] px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:text-white sm:inline-flex"
        >
          {tier} Plan
        </Link>

        <button
          onClick={handleLogout}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1A2235] text-xs font-black text-[#0B101A] transition hover:opacity-80"
          style={{ background: "#D4A017" }}
          title={`${user?.name || "User"} — Sign out`}
        >
          {initial}
        </button>
      </div>
    </header>
  );
}

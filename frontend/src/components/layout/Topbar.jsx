import { Link, useNavigate } from "react-router-dom";

export default function Topbar({ title, subtitle, user }) {
  const navigate = useNavigate();
  const initials = (user?.name || "R").slice(0, 1).toUpperCase();

  return (
    <header className="p2p-topbar">
      <div>
        <p className="p2p-eyebrow">PEN2PRO BusinessOS</p>
        {title && <h1 className="text-xl font-bold text-white">{title}</h1>}
        {subtitle && <span className="text-sm text-slate-400">{subtitle}</span>}
      </div>
      <div className="p2p-top-actions">
        <Link to="/starter" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-slate-300 hover:text-white transition">
          + New Blueprint
        </Link>
        <Link
          to="/pricing"
          className="rounded-lg px-3 py-1.5 text-xs font-bold text-[#080C14] btn-gold"
        >
          Upgrade
        </Link>
        <button
          onClick={() => navigate("/dashboard/settings")}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A2D50] text-xs font-bold text-[#FF8A00] hover:bg-[#1E3A6A] transition"
          title={user?.name || "Account"}
        >
          {initials}
        </button>
      </div>
    </header>
  );
}

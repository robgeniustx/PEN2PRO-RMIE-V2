import { Link } from "react-router-dom";

export default function Topbar({ title = "Dashboard", user = {} }) {
  return (
    <header className="flex items-center justify-between border-b border-[#1A2235] bg-[#0F1520] px-6 py-4">
      <h1 className="text-base font-bold text-white">{title}</h1>
      <div className="flex items-center gap-4">
        <Link
          to="/pricing"
          className="rounded-lg border border-[#D4A017]/40 px-3 py-1.5 text-xs font-bold text-[#D4A017] transition hover:bg-[#D4A017]/10"
        >
          Upgrade
        </Link>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1A2235] text-xs font-bold text-white">
          {(user?.name || "U").slice(0, 1).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

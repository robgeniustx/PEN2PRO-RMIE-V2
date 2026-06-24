import { Link } from "react-router-dom";

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "{}");
  } catch {
    return {};
  }
}

export default function Topbar({ title, breadcrumb, actions }) {
  const user = getUser();

  return (
    <div className="flex items-center justify-between border-b border-[#1A2235] bg-[#0A0F1E]/95 backdrop-blur px-6 py-4">
      <div>
        {breadcrumb && (
          <p className="mb-0.5 text-xs text-slate-500">{breadcrumb}</p>
        )}
        {title && (
          <h1 className="font-display text-lg font-black text-white">{title}</h1>
        )}
      </div>

      <div className="flex items-center gap-4">
        {actions}

        <Link
          to="/dashboard"
          className="text-right hidden sm:block"
        >
          <p className="text-sm font-semibold text-white leading-none">
            {user?.name || "Account"}
          </p>
          <p className="mt-0.5 text-xs capitalize text-[#FF8A00]">
            {user?.tier || "free"} plan
          </p>
        </Link>

        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-black text-sm text-white"
          style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
        >
          {(user?.name || "U").slice(0, 1).toUpperCase()}
        </div>
      </div>
    </div>
  );
}

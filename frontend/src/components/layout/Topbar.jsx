import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PAGE_TITLES = {
  "/dashboard": "Dashboard",
  "/dashboard/blueprints": "My Blueprints",
  "/dashboard/contacts": "Contacts",
  "/dashboard/lead-inbox": "Lead Inbox",
  "/dashboard/pipeline": "Pipeline",
  "/dashboard/invoices": "Invoices",
  "/dashboard/estimates": "Estimates",
  "/dashboard/calendar": "Calendar",
  "/dashboard/outreach": "Outreach",
  "/dashboard/social": "Social Media",
  "/dashboard/settings": "Settings",
  "/dashboard/reports": "Reports",
  "/dashboard/automations": "Automations",
  "/dashboard/websites": "Website Builder",
  "/dashboard/domains": "Domains",
  "/website-builder": "Website Builder",
  "/website-builder/editor": "Page Editor",
  "/website-builder/templates": "Templates",
  "/website-builder/domains": "Domain Manager",
  "/domain-search": "Domain Finder",
  "/voice-agent": "Voice Agent",
};

function getPageTitle(pathname) {
  return PAGE_TITLES[pathname] || "PEN2PRO";
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export default function Topbar({ onMenuToggle }) {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const user = getUser();
  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()
    : "RG";
  const pageTitle = getPageTitle(location.pathname);
  const tierLabel = user?.tier ? user.tier.charAt(0).toUpperCase() + user.tier.slice(1) : "Free";

  function handleSignOut() {
    localStorage.removeItem("pen2pro_user");
    localStorage.removeItem("pen2pro_token");
    window.location.href = "/login";
  }

  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-[#1A2D50] bg-[#080C14]/95 px-4 backdrop-blur">
      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={onMenuToggle}
        aria-label="Toggle sidebar"
        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-[#1A2235] hover:text-white transition-colors lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-5 w-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Page title */}
      <h1 className="flex-1 text-sm font-semibold text-slate-200">{pageTitle}</h1>

      {/* Quick nav (desktop) */}
      <nav className="hidden items-center gap-1 md:flex">
        <Link
          to="/dashboard"
          className="rounded-lg px-3 py-1.5 text-xs text-slate-400 hover:bg-[#1A2235] hover:text-white transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/starter"
          className="rounded-lg px-3 py-1.5 text-xs text-slate-400 hover:bg-[#1A2235] hover:text-white transition-colors"
        >
          New Blueprint
        </Link>
        <Link
          to="/pricing"
          className="ml-1 rounded-lg border border-[#D4A017]/40 px-3 py-1.5 text-xs font-bold text-[#D4A017] hover:bg-[#D4A017]/10 transition-colors"
        >
          {tierLabel} Plan
        </Link>
      </nav>

      {/* User avatar + dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="User menu"
          className="flex h-8 w-8 items-center justify-center rounded-full font-black text-xs text-white"
          style={{ background: "linear-gradient(135deg, #1E88E5, #00C9B1)" }}
        >
          {initials}
        </button>

        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 top-10 z-50 min-w-[180px] rounded-xl border border-[#1A2D50] bg-[#0F1520] py-2 shadow-2xl">
              <div className="border-b border-[#1A2D50] px-4 py-2">
                <p className="text-xs font-bold text-white truncate">{user?.name || "Robert Green"}</p>
                <p className="text-[10px] text-slate-500 truncate">{user?.email || ""}</p>
              </div>
              <Link
                to="/dashboard"
                className="block px-4 py-2 text-sm text-slate-300 hover:bg-[#1A2235] hover:text-white"
                onClick={() => setShowMenu(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/dashboard/settings"
                className="block px-4 py-2 text-sm text-slate-300 hover:bg-[#1A2235] hover:text-white"
                onClick={() => setShowMenu(false)}
              >
                Settings
              </Link>
              <Link
                to="/pricing"
                className="block px-4 py-2 text-sm text-[#D4A017] hover:bg-[#1A2235]"
                onClick={() => setShowMenu(false)}
              >
                Upgrade Plan
              </Link>
              <div className="mt-1 border-t border-[#1A2D50]" />
              <button
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-[#1A2235]"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

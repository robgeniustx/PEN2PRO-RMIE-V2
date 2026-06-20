import { Link, useNavigate } from "react-router-dom";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export default function Topbar({ module, onMenuToggle }) {
  const navigate = useNavigate();
  const user = getStoredUser();

  const handleLogout = () => {
    localStorage.removeItem("pen2pro_token");
    localStorage.removeItem("pen2pro_user");
    navigate("/login");
  };

  const tierColors = {
    founders: "#D4A017",
    elite: "#00C9B1",
    pro: "#2d9cff",
    free: "#64748b",
  };
  const tierColor = tierColors[user?.tier?.toLowerCase()] || tierColors.free;
  const initial = (user?.name || "U").slice(0, 1).toUpperCase();

  return (
    <header
      className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-[#1A2235] px-5 backdrop-blur-xl"
      style={{ background: "rgba(8,12,20,0.96)" }}
    >
      {/* Left: brand + breadcrumb */}
      <div className="flex items-center gap-3">
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="flex flex-col gap-1 p-1.5 text-slate-400 hover:text-white transition-colors md:hidden"
            aria-label="Toggle sidebar"
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        )}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg shrink-0"
            style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
          >
            <span className="text-xs select-none">⚡</span>
          </div>
          <span className="font-display text-sm font-black tracking-tight leading-none">
            <span className="text-white">PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        </Link>
        {module && (
          <>
            <span className="text-[#1A2235] text-lg select-none">/</span>
            <span className="text-sm font-semibold text-slate-400 truncate max-w-[200px]">{module}</span>
          </>
        )}
      </div>

      {/* Right: upgrade + user */}
      <div className="flex items-center gap-4">
        {user?.tier !== "founders" && (
          <Link
            to="/pricing"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-black transition-all hover:scale-[1.02]"
            style={{ background: "rgba(212,160,23,0.15)", color: "#D4A017", border: "1px solid rgba(212,160,23,0.3)" }}
          >
            ⚡ Upgrade
          </Link>
        )}

        {user ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-xs font-semibold text-white leading-none">{user.name}</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ color: tierColor }}>
                {user.tier || "Free"} plan
              </p>
            </div>
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black text-[#080C14] cursor-pointer"
              style={{ background: `linear-gradient(135deg, ${tierColor}, ${tierColor}cc)` }}
              title={user.name}
            >
              {initial}
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}

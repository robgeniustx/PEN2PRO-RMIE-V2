import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",        path: "/" },
  { label: "About",       path: "/about" },
  { label: "Starter",     path: "/starter" },
  { label: "Builder",     path: "/builder" },
  { label: "Accelerator", path: "/accelerator" },
  { label: "Pricing",     path: "/pricing" },
  { label: "Waitlist",    path: "/waitlist" },
];

const PLANS_LINKS = [
  { label: "Free Roadmap",    path: "/starter",        badge: "Free" },
  { label: "Pro",             path: "/pro",            badge: "$249/mo" },
  { label: "Elite",           path: "/elite",          badge: "$499/mo" },
  { label: "Legacy Founder",  path: "/founders",       badge: "$1,899" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const loc = useLocation();
  const plansRef = useRef(null);

  const isActive = (path) =>
    path === "/"
      ? loc.pathname === "/"
      : loc.pathname === path || loc.pathname.startsWith(path + "/");

  // Close plans dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (plansRef.current && !plansRef.current.contains(e.target)) {
        setPlansOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setPlansOpen(false);
  }, [loc.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A2D50] bg-[#0A0F1E]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-transform group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
          >
            <span className="text-[17px] leading-none select-none">⚡</span>
          </div>
          <span className="font-display text-xl font-black tracking-tight leading-none">
            <span style={{ color: "#FFFFFF" }}>PEN</span>
            <span style={{ color: "#FF8A00" }}>2</span>
            <span style={{ color: "#1E88E5" }}>PRO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive(l.path)
                  ? "text-[#FF8A00] bg-[#FF8A00]/10"
                  : "text-slate-400 hover:text-white hover:bg-[#1A2235]"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Plans Dropdown */}
          <div className="relative" ref={plansRef}>
            <button
              onClick={() => setPlansOpen(!plansOpen)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                plansOpen ? "text-[#D4A017] bg-[#D4A017]/10" : "text-slate-400 hover:text-white hover:bg-[#1A2235]"
              }`}
            >
              Plans
              <svg className={`h-3.5 w-3.5 transition-transform ${plansOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {plansOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-2 shadow-2xl">
                {PLANS_LINKS.map((pl) => (
                  <Link
                    key={pl.path}
                    to={pl.path}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-[#1A2235]"
                  >
                    <span className={isActive(pl.path) ? "font-bold text-[#FF8A00]" : "font-semibold text-slate-300 hover:text-white"}>
                      {pl.label}
                    </span>
                    <span className="rounded-full bg-[#1A2235] px-2 py-0.5 text-[10px] font-bold text-slate-500">
                      {pl.badge}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Condensed nav for medium screens */}
        <div className="hidden items-center gap-1 md:flex xl:hidden">
          {[NAV_LINKS[0], NAV_LINKS[2], NAV_LINKS[5], NAV_LINKS[6]].map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive(l.path) ? "text-[#FF8A00] bg-[#FF8A00]/10" : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex shrink-0">
          <Link
            to="/login"
            className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 transition hover:text-white hover:border-slate-500"
          >
            Sign In
          </Link>
          <Link
            to="/starter"
            className="rounded-xl px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold"
          >
            Start Free
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-5 md:hidden">
          <div className="mb-4 grid grid-cols-2 gap-2">
            {[...NAV_LINKS, ...PLANS_LINKS].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive(l.path)
                    ? "bg-[#1A2D50] text-[#FF8A00]"
                    : "text-slate-300 hover:bg-[#1A2235] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 border-t border-[#1A2235] pt-4">
            <Link
              to="/login"
              className="rounded-lg border border-[#1A2235] px-4 py-3 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/starter"
              className="rounded-xl px-4 py-3 text-center text-sm font-black text-[#080C14] btn-gold"
            >
              Start Free Roadmap
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

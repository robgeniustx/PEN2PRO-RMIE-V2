import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "About",       path: "/about" },
  { label: "Starter",     path: "/starter" },
  { label: "Builder",     path: "/builder" },
  { label: "Accelerator", path: "/accelerator" },
  { label: "Pricing",     path: "/pricing" },
  { label: "Waitlist",    path: "/waitlist" },
];

const PLANS_LINKS = [
  { label: "Free Roadmap",    path: "/starter" },
  { label: "Pro",             path: "/pro" },
  { label: "Elite",           path: "/elite" },
  { label: "Legacy Founder",  path: "/founders" },
];

const MOBILE_EXTRA = [
  { label: "Pro",           path: "/pro" },
  { label: "Elite",         path: "/elite" },
  { label: "Founders",      path: "/founders" },
  { label: "RMIE",          path: "/rmie" },
  { label: "Dashboard",     path: "/dashboard" },
  { label: "Funding",       path: "/funding" },
  { label: "Credit Repair", path: "/credit-repair" },
  { label: "Affiliate",     path: "/affiliate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const plansRef = useRef(null);
  const loc = useLocation();
  const isActive = (path) => loc.pathname === path || loc.pathname.startsWith(path + "/");

  useEffect(() => {
    function handleClickOutside(e) {
      if (plansRef.current && !plansRef.current.contains(e.target)) {
        setPlansOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive(l.path)
                  ? "text-[#FF8A00]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          {/* Plans Dropdown */}
          <div className="relative" ref={plansRef}>
            <button
              onClick={() => setPlansOpen(!plansOpen)}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors whitespace-nowrap ${
                plansOpen ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"
              }`}
            >
              Plans
              <span className={`text-xs transition-transform duration-200 ${plansOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {plansOpen && (
              <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-[#1A2D50] bg-[#0F1520] py-2 shadow-2xl z-50">
                {PLANS_LINKS.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    onClick={() => setPlansOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isActive(l.path) ? "text-[#FF8A00]" : "text-slate-400 hover:text-white hover:bg-[#1A2235]"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Condensed nav for medium screens */}
        <div className="hidden items-center gap-4 md:flex xl:hidden">
          {[NAV_LINKS[0], NAV_LINKS[1], NAV_LINKS[4], NAV_LINKS[5]].map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive(l.path) ? "text-[#FF8A00]" : "text-slate-400 hover:text-white"
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
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 transition hover:text-white btn-outline"
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
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-5 md:hidden">
          <div className="mb-4 grid grid-cols-2 gap-2">
            {[...NAV_LINKS, ...MOBILE_EXTRA].map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
              className="rounded-lg border border-[#1A2235] px-4 py-3 text-center text-sm font-semibold text-slate-300"
            >
              Sign In
            </Link>
            <Link
              to="/starter"
              onClick={() => setOpen(false)}
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

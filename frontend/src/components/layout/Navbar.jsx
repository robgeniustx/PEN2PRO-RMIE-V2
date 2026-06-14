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

const PLAN_LINKS = [
  { label: "Free Roadmap",    path: "/starter",       badge: "Free" },
  { label: "Pro",             path: "/pro",            badge: "$249/mo" },
  { label: "Elite",           path: "/elite",          badge: "$499/mo" },
  { label: "Legacy Founder",  path: "/legacy-founder", badge: "Lifetime" },
];

const MOBILE_LINKS = [
  ...NAV_LINKS,
  { label: "Pro",             path: "/pro" },
  { label: "Elite",           path: "/elite" },
  { label: "Founders",        path: "/founders" },
  { label: "Funding",         path: "/funding" },
  { label: "Credit Repair",   path: "/credit-repair" },
  { label: "Affiliate",       path: "/affiliate" },
  { label: "Dashboard",       path: "/dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const loc = useLocation();
  const plansRef = useRef(null);

  const isActive = (path) =>
    path === "/"
      ? loc.pathname === "/"
      : loc.pathname === path || loc.pathname.startsWith(path + "/");

  // Close plans dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (plansRef.current && !plansRef.current.contains(e.target)) {
        setPlansOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
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
                  ? "text-[#FF8A00] bg-[#FF8A00]/08"
                  : "text-slate-400 hover:text-white hover:bg-white/05"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Plans Dropdown */}
          <div className="relative" ref={plansRef}>
            <button
              onClick={() => setPlansOpen(!plansOpen)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                plansOpen ? "text-white bg-white/05" : "text-slate-400 hover:text-white hover:bg-white/05"
              }`}
            >
              Plans
              <svg
                className={`h-3.5 w-3.5 transition-transform ${plansOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {plansOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-[#1A2D50] bg-[#0F1520] shadow-xl shadow-black/50">
                {PLAN_LINKS.map((p) => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-[#1A2D50] hover:text-white transition-colors"
                  >
                    <span>{p.label}</span>
                    <span className="text-xs text-slate-500">{p.badge}</span>
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
            {MOBILE_LINKS.map((l) => (
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

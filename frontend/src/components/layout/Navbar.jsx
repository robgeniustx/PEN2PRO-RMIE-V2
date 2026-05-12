import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const isActive = (path) => loc.pathname === path;

  const navLinks = [
    { label: "Roadmap", path: "/starter" },
    { label: "Voice Agent", path: "/voice-agent" },
    { label: "Pricing", path: "/pricing" },
    { label: "Funding", path: "/funding" },
    { label: "Credit", path: "/credit-repair" },
    { label: "Affiliate", path: "/affiliate" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1A2D50] bg-[#0A0F1E]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo — matches official wordmark: white PEN, orange 2, blue PRO */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-transform group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}>
            <span className="text-[17px] leading-none select-none">⚡</span>
          </div>
          <span className="font-display text-xl font-black tracking-tight leading-none">
            <span style={{ color: '#FFFFFF' }}>PEN</span>
            <span style={{ color: '#FF8A00' }}>2</span>
            <span style={{ color: '#1E88E5' }}>PRO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-semibold transition-colors ${
                isActive(l.path)
                  ? "text-[#FF8A00]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-400 transition hover:text-white btn-outline"
          >
            Sign In
          </Link>
          <Link
            to="/waitlist"
            className="rounded-xl px-5 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-400 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#1A2235] bg-[#0F1520] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-slate-300 hover:text-[#D4A017]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-[#1A2235] pt-4">
              <Link to="/login" onClick={() => setOpen(false)} className="rounded-lg border border-[#1A2235] px-4 py-2.5 text-center text-sm font-semibold text-slate-300">
                Sign In
              </Link>
              <Link to="/waitlist" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-center text-sm font-black text-[#080C14] btn-gold">
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

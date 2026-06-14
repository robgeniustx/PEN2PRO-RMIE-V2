import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2D50] bg-[#0A0F1E]">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-base leading-none">⚡</span>
              </div>
              <span className="font-display text-xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>
            <p className="text-sm leading-7 text-slate-500">
              AI-powered RMIE platform. Turn ideas, skills, and lived experience into real business roadmaps.
            </p>
            <p className="mt-4 text-xs text-slate-600">© {new Date().getFullYear()} PEN2PRO. All rights reserved.</p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Platform</h4>
            <ul className="space-y-3">
              {[
                ["Home",              "/"],
                ["About",            "/about"],
                ["Starter",          "/starter"],
                ["Pricing",          "/pricing"],
                ["Waitlist",         "/waitlist"],
                ["Sign In",          "/login"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Tools</h4>
            <ul className="space-y-3">
              {[
                ["Builder",          "/builder"],
                ["Accelerator",      "/accelerator"],
                ["Dashboard",        "/dashboard"],
                ["Affiliate",        "/affiliate"],
                ["Funding",          "/funding"],
                ["Credit Repair",    "/credit-repair"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plans */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Plans</h4>
            <ul className="space-y-3">
              {[
                ["Free Roadmap",     "/starter"],
                ["Pro — $249/mo",    "/pro"],
                ["Elite — $499/mo",  "/elite"],
                ["Founders Lifetime","/founders"],
                ["Legacy Founder",   "/legacy-founder"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-slate-500 hover:text-[#FF8A00] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Launch CTA */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Launch</h4>
            <div className="rounded-xl border p-4" style={{ borderColor: "rgba(255,138,0,0.3)", background: "#0D1528" }}>
              <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#FF8A00" }}>Official Launch</p>
              <p className="mt-1 text-lg font-black text-white">June 15, 2026</p>
              <p className="mt-2 text-xs text-slate-500">Founding members get locked-in pricing for life.</p>
              <Link to="/waitlist" className="mt-3 block rounded-lg px-4 py-2 text-center text-xs font-black text-[#0A0F1E] btn-gold">
                Secure My Spot
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1A2D50] pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
            PEN2PRO does not guarantee income, funding approval, credit repair results, or business success. Results depend on individual effort and market conditions.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Terms</Link>
            <Link to="/disclaimer" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

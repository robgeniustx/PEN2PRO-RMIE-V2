/**
 * WebsiteBuilderSubPage — generic stub for /website-builder/* sub-routes.
 */
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { hasTierAccess, getEffectiveTier } from "../utils/tierAccess";

const PAGE_MAP = {
  "/website-builder/templates": { icon: "🎨", title: "Templates",     desc: "Browse niche-specific website and funnel templates for your industry." },
  "/website-builder/editor":    { icon: "✏️", title: "Page Editor",   desc: "AI-powered drag-and-drop editor for your websites and landing pages." },
  "/website-builder/domains":   { icon: "🔍", title: "Domain Manager", desc: "Connect, manage, and monitor your business domains." },
};

export default function WebsiteBuilderSubPage() {
  const loc = useLocation();
  const page = PAGE_MAP[loc.pathname] || { icon: "🌐", title: "Website Builder", desc: "This section is coming soon." };
  const userTier = localStorage.getItem("pen2pro_user") ? JSON.parse(localStorage.getItem("pen2pro_user") || "{}").tier : "starter";
  const hasAccess = hasTierAccess(userTier, "pro");
  const effectiveTier = getEffectiveTier(userTier);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-emerald-400">PEN2PRO Website Builder</div>
        <div className="mb-4 text-6xl">{page.icon}</div>
        <h1 className="mb-4 font-display text-4xl font-black">{page.title}</h1>
        <p className="mb-10 text-lg text-slate-400">{page.desc}</p>

        {hasAccess ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-4xl">✅</div>
          <p className="mb-2 font-bold text-white">Access enabled for Website Builder.</p>
          <p className="mb-8 text-sm text-slate-300">Tier check passed with <span className="font-semibold text-emerald-300">{effectiveTier}</span>. You can test this module locally.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/website-builder" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">Website Builder Overview</Link>
          </div>
        </div>
        ) : (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-10">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A2D50] text-4xl">🔒</div>
          <p className="mb-2 font-bold text-white">Available on Pro and Elite plans.</p>
          <p className="mb-8 text-sm text-slate-400">Upgrade to Pro or Elite to unlock the full Website Builder, templates, and page editor.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">Upgrade Now</Link>
            <Link to="/website-builder" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">Website Builder Overview</Link>
          </div>
        </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <Link to="/domain-search" className="hover:text-emerald-400 transition-colors">Domain Finder</Link>
          <Link to="/command-center" className="hover:text-emerald-400 transition-colors">Command Center</Link>
          <Link to="/pricing" className="hover:text-emerald-400 transition-colors">Pricing</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/**
 * CommandCenterSubPage — generic stub for all /command-center/* sub-routes.
 * Accepts props so we can reuse one component across many routes.
 */
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import { hasTierAccess, getEffectiveTier } from "../utils/tierAccess";

const PAGE_MAP = {
  "/command-center/customers":   { icon: "👥", title: "Customers",      desc: "Manage your full customer list, contact history, notes, and tags." },
  "/command-center/leads":       { icon: "🔥", title: "Leads",          desc: "Track incoming leads from all sources in one place." },
  "/command-center/opportunities": { icon: "💡", title: "Opportunities", desc: "Open deals, proposal stages, and close probabilities." },
  "/command-center/pipeline":    { icon: "📊", title: "Pipeline",       desc: "Drag-and-drop deal board with stage tracking and value totals." },
  "/command-center/quotes":      { icon: "📋", title: "Quotes",         desc: "Create and send professional proposals and estimates." },
  "/command-center/invoices":    { icon: "💵", title: "Invoices",       desc: "Issue, track, and collect invoice payments." },
  "/command-center/calendar":    { icon: "📅", title: "Calendar",       desc: "Manage appointments, bookings, and scheduling." },
  "/command-center/reputation":  { icon: "⭐", title: "Reputation",     desc: "Review requests, response templates, and rating tracking." },
  "/command-center/reports":     { icon: "📈", title: "Reports",        desc: "Revenue, pipeline, conversion, and YTD performance data." },
  "/command-center/automations": { icon: "⚙️", title: "Automations",    desc: "Build follow-up sequences, nurture campaigns, and trigger workflows." },
  "/command-center/funnels":     { icon: "🌀", title: "Funnels",        desc: "Build and manage sales and marketing funnels." },
  "/command-center/forms":       { icon: "📝", title: "Forms",          desc: "Create lead capture forms, intake forms, and surveys." },
  "/command-center/websites":    { icon: "🌐", title: "Websites",       desc: "Manage your connected websites and landing pages." },
  "/command-center/domains":     { icon: "🔍", title: "Domains",        desc: "Connect and manage your business domains." },
  "/command-center/settings":    { icon: "🛠️", title: "Settings",       desc: "Configure your Command Center, integrations, and business details." },
  "/command-center/upgrade":     { icon: "🚀", title: "Upgrade",        desc: "Unlock advanced features with Pro, Elite, or Founder plans." },
};

export default function CommandCenterSubPage() {
  const loc = useLocation();
  const page = PAGE_MAP[loc.pathname] || { icon: "🖥️", title: "Command Center", desc: "This section is coming soon." };
  const userTier = localStorage.getItem("pen2pro_user") ? JSON.parse(localStorage.getItem("pen2pro_user") || "{}").tier : "starter";
  const hasAccess = hasTierAccess(userTier, "pro");
  const effectiveTier = getEffectiveTier(userTier);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">P2P Command Center</div>
        <div className="mb-4 text-6xl">{page.icon}</div>
        <h1 className="mb-4 font-display text-4xl font-black">{page.title}</h1>
        <p className="mb-10 text-lg text-slate-400">{page.desc}</p>

        {loc.pathname === "/command-center/upgrade" ? (
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-8 py-4 text-base font-black text-[#0A0F1E] btn-gold">
              View Plans & Pricing
            </Link>
            <Link to="/waitlist" className="rounded-xl border border-[#1A2D50] px-8 py-4 text-base font-semibold text-slate-300 hover:text-white transition-colors">
              Join the Waitlist
            </Link>
          </div>
        ) : hasAccess ? (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-10">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-4xl">✅</div>
            <p className="mb-2 font-bold text-white">Access enabled for Command Center.</p>
            <p className="mb-8 text-sm text-slate-300">Tier check passed with <span className="font-semibold text-emerald-300">{effectiveTier}</span>. You can test this module locally.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/command-center/dashboard" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
                Open Command Center
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-10">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A2D50] text-4xl">
              🔒
            </div>
            <p className="mb-2 font-bold text-white">This feature is available on Pro, Elite, and Founder plans.</p>
            <p className="mb-8 text-sm text-slate-400">Upgrade to unlock full access to {page.title} and all Command Center features.</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/pricing" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
                Upgrade Now
              </Link>
              <Link to="/command-center/dashboard" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Back to Dashboard
              </Link>
            </div>
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <Link to="/command-center" className="hover:text-[#FF8A00] transition-colors">Command Center Home</Link>
          <Link to="/command-center/dashboard" className="hover:text-[#FF8A00] transition-colors">Dashboard</Link>
          <Link to="/rmie" className="hover:text-[#FF8A00] transition-colors">RMIE</Link>
          <Link to="/pricing" className="hover:text-[#FF8A00] transition-colors">Pricing</Link>
        </div>
      </div>
    </div>
  );
}

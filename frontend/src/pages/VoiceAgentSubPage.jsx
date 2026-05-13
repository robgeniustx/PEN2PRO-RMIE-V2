/**
 * VoiceAgentSubPage — generic stub for all /voice-agent/* sub-routes.
 */
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const PAGE_MAP = {
  "/voice-agent/calls":    { icon: "📞", title: "Call Log",         desc: "Review all incoming and missed calls with AI summaries and outcomes." },
  "/voice-agent/scripts":  { icon: "📜", title: "Script Manager",   desc: "Build and manage your AI voice scripts by industry and call type." },
  "/voice-agent/calendar": { icon: "📅", title: "Calendar Sync",    desc: "View appointments booked by your AI agent and sync with your calendar." },
  "/voice-agent/settings": { icon: "🛠️", title: "Agent Settings",   desc: "Configure call routing, business hours, after-hours mode, and voice options." },
  "/voice-agent/pricing":  { icon: "💰", title: "Voice Agent Pricing", desc: "Review AI Voice Agent usage plans and usage-based pricing." },
};

export default function VoiceAgentSubPage() {
  const loc = useLocation();
  const page = PAGE_MAP[loc.pathname] || { icon: "🎙️", title: "AI Voice Agent", desc: "This section is coming soon." };

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#7C3AED]">P2P AI Voice Agent</div>
        <div className="mb-4 text-6xl">{page.icon}</div>
        <h1 className="mb-4 font-display text-4xl font-black">{page.title}</h1>
        <p className="mb-10 text-lg text-slate-400">{page.desc}</p>

        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-10">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1A2D50] text-4xl">
            🔒
          </div>
          <p className="mb-2 font-bold text-white">Available on Pro and Elite plans.</p>
          <p className="mb-8 text-sm text-slate-400">
            The P2P AI Voice Agent and all sub-features require a Pro or Elite subscription.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/pricing" className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Upgrade Now
            </Link>
            <Link to="/voice-agent" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Voice Agent Overview
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-500">
          <Link to="/voice-agent/dashboard" className="hover:text-[#7C3AED] transition-colors">Dashboard</Link>
          <Link to="/command-center" className="hover:text-[#7C3AED] transition-colors">Command Center</Link>
          <Link to="/rmie" className="hover:text-[#7C3AED] transition-colors">RMIE</Link>
          <Link to="/pricing" className="hover:text-[#7C3AED] transition-colors">Pricing</Link>
        </div>
      </div>
    </div>
  );
}

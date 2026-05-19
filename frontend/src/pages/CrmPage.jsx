import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getPipelineSummary, getDueFollowUps, listLeads } from "../api/crmApi";

const STAGE_COLORS = {
  "New Lead":    { border: "#1E88E5", bg: "#1E88E5" },
  "Contacted":   { border: "#FF8A00", bg: "#FF8A00" },
  "Quote Sent":  { border: "#7C3AED", bg: "#7C3AED" },
  "Follow-Up":   { border: "#D4A017", bg: "#D4A017" },
  "Won":         { border: "#059669", bg: "#059669" },
  "Closed":      { border: "#64748b", bg: "#64748b" },
};

function stageColor(stage) {
  return STAGE_COLORS[stage] || { border: "#1A2D50", bg: "#FF8A00" };
}

const MOCK_LEADS = [
  { id: 1, name: "Marcus Johnson",  source: "Google",    stage: "New Lead",    time: "12 min ago",  value: "$1,200" },
  { id: 2, name: "Tanya Williams",  source: "Text-Back", stage: "Contacted",   time: "1 hr ago",    value: "$850" },
  { id: 3, name: "Derek Simmons",   source: "Website",   stage: "Quote Sent",  time: "3 hrs ago",   value: "$2,400" },
  { id: 4, name: "Lena Torres",     source: "Referral",  stage: "Follow-Up",   time: "Yesterday",   value: "$650" },
  { id: 5, name: "James Carter",    source: "Facebook",  stage: "New Lead",    time: "Yesterday",   value: "$1,800" },
  { id: 6, name: "Sheila Davis",    source: "Cold Call", stage: "Won",         time: "2 days ago",  value: "$3,100" },
];

const MOCK_FOLLOWUPS = [
  { id: 1, name: "Marcus Johnson",  message: "Send follow-up text — no response in 3 days",   urgency: "high" },
  { id: 2, name: "Derek Simmons",   message: "Quote expires tomorrow — check if they signed",  urgency: "high" },
  { id: 3, name: "Lena Torres",     message: "Call scheduled for today at 2:00 PM",            urgency: "medium" },
  { id: 4, name: "James Carter",    message: "Send intro email with service menu",              urgency: "low" },
];

const URGENCY_STYLES = {
  high:   "border-red-500/30 bg-red-500/08 text-red-300",
  medium: "border-[#D4A017]/30 bg-[#D4A017]/08 text-[#D4A017]",
  low:    "border-[#1A2D50] bg-[#0F1520] text-slate-400",
};

export default function CrmPage() {
  const [summary, setSummary] = useState(null);
  const [followUps, setFollowUps] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getPipelineSummary(),
      getDueFollowUps(),
      listLeads(),
    ]).then(([s, f, l]) => {
      if (s.status === "fulfilled") setSummary(s.value);
      if (f.status === "fulfilled" && f.value?.length) setFollowUps(f.value);
      else setFollowUps(MOCK_FOLLOWUPS);
      if (l.status === "fulfilled" && l.value?.length) setLeads(l.value);
      else setLeads(MOCK_LEADS);
      setLoading(false);
    });
  }, []);

  const displayLeads = leads.length ? leads : MOCK_LEADS;
  const displayFollowUps = followUps.length ? followUps : MOCK_FOLLOWUPS;

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Header */}
      <div className="border-b border-[#1A2D50] px-5 py-8">
        <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">P2P Command Center</div>
            <h1 className="font-display text-3xl font-black text-white">CRM Dashboard</h1>
            <p className="mt-1 text-sm text-slate-400">Manage leads, follow-ups, and your sales pipeline.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/dashboard/lead-inbox" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              + Add Lead
            </Link>
            <Link to="/dashboard/pipeline" className="rounded-xl px-4 py-2 text-sm font-black text-[#080C14] btn-gold">
              View Pipeline
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-10 space-y-8">

        {/* Pipeline Summary */}
        {summary && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Total Leads",    value: summary.total_leads    ?? displayLeads.length, color: "#1E88E5", icon: "🔥" },
              { label: "Active Deals",   value: summary.active_deals   ?? 4,                   color: "#FF8A00", icon: "📊" },
              { label: "Pipeline Value", value: summary.pipeline_value ?? "$8,000",             color: "#D4A017", icon: "💵" },
              { label: "Won This Month", value: summary.won_this_month ?? "$3,100",             color: "#059669", icon: "✅" },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-2xl">{m.icon}</span>
                </div>
                <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-400">{m.label}</p>
              </div>
            ))}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Lead List */}
          <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Recent Leads</h2>
              <Link to="/dashboard/lead-inbox" className="text-xs text-[#1E88E5] hover:underline">View All</Link>
            </div>
            {loading ? (
              <p className="text-sm text-slate-500">Loading leads...</p>
            ) : (
              <div className="space-y-3">
                {displayLeads.slice(0, 6).map((lead) => {
                  const sc = stageColor(lead.stage);
                  return (
                    <div key={lead.id} className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#0A0F1E] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A2D50] text-sm font-black text-[#D4A017]">
                          {(lead.name || "?").charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{lead.name}</p>
                          <p className="text-xs text-slate-500">via {lead.source} · {lead.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {lead.value && <span className="text-sm font-bold text-[#059669]">{lead.value}</span>}
                        <span
                          className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                          style={{ border: `1px solid ${sc.border}30`, background: `${sc.bg}15`, color: sc.border }}
                        >
                          {lead.stage}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Follow-Ups */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Due Follow-Ups</h2>
              <Link to="/dashboard/follow-ups" className="text-xs text-[#FF8A00] hover:underline">See All</Link>
            </div>
            {loading ? (
              <p className="text-sm text-slate-500">Loading...</p>
            ) : (
              <div className="space-y-3">
                {displayFollowUps.slice(0, 5).map((item) => (
                  <div key={item.id} className={`rounded-xl border p-3 text-xs leading-relaxed ${URGENCY_STYLES[item.urgency] || URGENCY_STYLES.low}`}>
                    <p className="mb-1 font-bold text-white">{item.name}</p>
                    <p>{item.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Quick Actions</div>
          <div className="flex flex-wrap gap-3">
            <Link to="/dashboard/lead-inbox"   className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">+ Add Lead</Link>
            <Link to="/dashboard/pipeline"     className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">📊 Pipeline</Link>
            <Link to="/dashboard/follow-ups"   className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">📋 Follow-Ups</Link>
            <Link to="/dashboard/customers"    className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">👥 Customers</Link>
            <Link to="/website-builder"        className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">🌐 Landing Page</Link>
            <Link to="/pricing"                className="rounded-xl px-4 py-2 text-sm font-black text-[#080C14] btn-gold">Upgrade Plan</Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const METRIC_CARDS = [
  { label: "Total Contacts",        value: "1,248",  delta: "+34 this week",  color: "#1E88E5", icon: "👥" },
  { label: "New Leads",             value: "47",     delta: "+12 today",      color: "#FF8A00", icon: "🔥" },
  { label: "Pipeline Value",        value: "$18,400",delta: "Active deals",   color: "#7C3AED", icon: "📊" },
  { label: "Open Invoices",         value: "9",      delta: "$3,250 pending", color: "#D4A017", icon: "💵" },
  { label: "Monthly Revenue",       value: "$6,780", delta: "+22% vs last mo",color: "#059669", icon: "📈" },
  { label: "YTD Revenue",           value: "$31,200",delta: "Jan–May 2026",   color: "#1E88E5", icon: "💰" },
  { label: "Appointments Booked",   value: "23",     delta: "This month",     color: "#FF8A00", icon: "📅" },
  { label: "Missed Calls Recovered",value: "16",     delta: "Via text-back",  color: "#059669", icon: "📵" },
  { label: "Review Requests Sent",  value: "38",     delta: "4.8★ avg rating",color: "#D4A017", icon: "⭐" },
  { label: "Active Automations",    value: "7",      delta: "Running now",    color: "#7C3AED", icon: "⚙️" },
];

const RECENT_LEADS = [
  { name: "Marcus Johnson",  source: "Google",    stage: "New Lead",     time: "12 min ago" },
  { name: "Tanya Williams",  source: "Text-Back", stage: "Contacted",    time: "1 hr ago" },
  { name: "Derek Simmons",   source: "Website",   stage: "Quote Sent",   time: "3 hrs ago" },
  { name: "Lena Torres",     source: "Referral",  stage: "Follow-Up",    time: "Yesterday" },
  { name: "James Carter",    source: "Facebook",  stage: "New Lead",     time: "Yesterday" },
];

const PIPELINE = [
  { stage: "New Leads",    count: 12, value: "$4,800",  color: "#1E88E5" },
  { stage: "Contacted",    count: 8,  value: "$6,200",  color: "#FF8A00" },
  { stage: "Quote Sent",   count: 5,  value: "$4,100",  color: "#7C3AED" },
  { stage: "Won",          count: 3,  value: "$3,300",  color: "#059669" },
];

const AI_RECS = [
  "📞 5 leads haven't been contacted in 3+ days — send a follow-up text now.",
  "⭐ 12 recent customers haven't left a review. Send automated review requests.",
  "💵 3 invoices are 7+ days overdue. Set up a payment reminder automation.",
  "🔥 Your pipeline dropped 18% this week. Consider a $10/day local ad boost.",
];

const UPCOMING = [
  { time: "9:00 AM",  name: "Marcus Johnson",  service: "Pressure Wash — Residential", date: "Today" },
  { time: "1:30 PM",  name: "Tanya Williams",  service: "Soft Wash — Commercial",      date: "Today" },
  { time: "10:00 AM", name: "Derek Simmons",   service: "Deck Cleaning",               date: "Tomorrow" },
];

export default function CommandCenterDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">P2P Command Center</div>
            <h1 className="font-display text-3xl font-black text-white">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-400">Last updated: May 12, 2026 · 8:47 AM</p>
          </div>
          <div className="flex gap-3">
            <Link to="/command-center/leads" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              + Add Lead
            </Link>
            <Link to="/command-center/invoices" className="rounded-xl px-4 py-2 text-sm font-black text-[#0A0F1E] btn-gold">
              + Create Invoice
            </Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {METRIC_CARDS.map((m) => (
            <div key={m.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-2xl">{m.icon}</span>
                <span className="text-xs text-slate-500">{m.delta}</span>
              </div>
              <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-400">{m.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Leads */}
          <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Recent Leads</h2>
              <Link to="/command-center/leads" className="text-xs text-[#1E88E5] hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {RECENT_LEADS.map((l) => (
                <div key={l.name} className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#0A0F1E] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A2D50] text-sm font-bold text-[#1E88E5]">
                      {l.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{l.name}</p>
                      <p className="text-xs text-slate-500">via {l.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1E88E5]">
                      {l.stage}
                    </span>
                    <p className="mt-1 text-xs text-slate-600">{l.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-5 font-bold text-white">🤖 AI Recommendations</h2>
            <div className="space-y-3">
              {AI_RECS.map((r, i) => (
                <div key={i} className="rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-xs text-slate-300 leading-relaxed">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Sales Pipeline */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Sales Pipeline</h2>
              <Link to="/command-center/pipeline" className="text-xs text-[#1E88E5] hover:underline">Full Pipeline</Link>
            </div>
            <div className="space-y-3">
              {PIPELINE.map((p) => (
                <div key={p.stage} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="h-2 w-2 rounded-full shrink-0" style={{ background: p.color }} />
                    <span className="text-sm text-slate-300">{p.stage}</span>
                    <div className="flex-1 mx-3 h-1.5 rounded-full bg-[#1A2235] overflow-hidden">
                      <div className="h-full rounded-full" style={{ background: p.color, width: `${(p.count / 12) * 100}%` }} />
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <span className="font-bold text-white">{p.count}</span>
                    <span className="ml-2 text-xs text-slate-500">{p.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Upcoming Appointments</h2>
              <Link to="/command-center/calendar" className="text-xs text-[#1E88E5] hover:underline">Calendar</Link>
            </div>
            <div className="space-y-3">
              {UPCOMING.map((a) => (
                <div key={a.name} className="rounded-xl border border-[#1A2235] bg-[#0A0F1E] px-4 py-3">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-white">{a.name}</p>
                    <span className="text-xs text-[#FF8A00] font-bold">{a.date} · {a.time}</span>
                  </div>
                  <p className="text-xs text-slate-500">{a.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <Link to="/rmie" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">⚡ RMIE</Link>
          <Link to="/voice-agent" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">🎙️ Voice Agent</Link>
          <Link to="/website-builder" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">🌐 Website Builder</Link>
          <Link to="/pricing" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">💰 Pricing</Link>
        </div>
      </div>
    </div>
  );
}

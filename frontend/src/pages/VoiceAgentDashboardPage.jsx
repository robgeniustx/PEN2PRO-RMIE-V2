import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const CARDS = [
  { label: "Total Calls",              value: "214",    delta: "This month",          color: "#1E88E5", icon: "📞" },
  { label: "Missed Calls",             value: "38",     delta: "Auto text-back sent",  color: "#FF8A00", icon: "📵" },
  { label: "Leads Captured",           value: "29",     delta: "From AI conversations",color: "#7C3AED", icon: "🔥" },
  { label: "Appointments Booked",      value: "17",     delta: "Synced to calendar",   color: "#059669", icon: "📅" },
  { label: "Follow-Ups Sent",          value: "51",     delta: "Automated",            color: "#D4A017", icon: "✉️" },
  { label: "Est. Recovered Revenue",   value: "$4,250", delta: "From missed calls",    color: "#1E88E5", icon: "💰" },
];

const RECENT_CALLS = [
  { caller: "+1 (713) 555-0192", reason: "Price quote – Pressure Wash",  result: "Lead Captured",     time: "9:14 AM",  status: "qualified" },
  { caller: "+1 (832) 555-0341", reason: "Reschedule appointment",       result: "Rebooked",          time: "9:02 AM",  status: "booked" },
  { caller: "+1 (281) 555-0187", reason: "General inquiry",              result: "Info + Follow-Up",  time: "8:45 AM",  status: "follow-up" },
  { caller: "+1 (713) 555-0228", reason: "Missed call",                  result: "Text-Back Sent",    time: "8:31 AM",  status: "text-back" },
  { caller: "+1 (346) 555-0095", reason: "Commercial bid request",       result: "Appt. Booked",      time: "Yesterday",status: "booked" },
];

const CALL_REASONS = [
  { reason: "Price Quotes",      count: 74, pct: 34 },
  { reason: "Appointment Booking", count: 51, pct: 24 },
  { reason: "General Inquiry",   count: 43, pct: 20 },
  { reason: "Reschedule",        count: 28, pct: 13 },
  { reason: "Emergency Service", count: 18, pct: 9 },
];

const STATUS_COLORS = {
  qualified: { bg: "#1E88E5", label: "Qualified" },
  booked:    { bg: "#059669", label: "Booked" },
  "follow-up":{ bg: "#D4A017", label: "Follow-Up" },
  "text-back":{ bg: "#FF8A00", label: "Text-Back" },
};

export default function VoiceAgentDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <div className="mx-auto max-w-7xl px-5 py-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-[#7C3AED]">P2P AI Voice Agent</div>
            <h1 className="font-display text-3xl font-black text-white">Call Dashboard</h1>
            <p className="mt-1 text-sm text-slate-400">Live call data · May 2026</p>
          </div>
          <div className="flex gap-3">
            <Link to="/voice-agent/scripts" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Manage Scripts
            </Link>
            <Link to="/voice-agent/settings" className="rounded-xl px-4 py-2 text-sm font-black text-[#0A0F1E] btn-gold">
              Configure Agent
            </Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {CARDS.map((c) => (
            <div key={c.label} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
              <div className="mb-2 text-2xl">{c.icon}</div>
              <p className="font-display text-2xl font-black" style={{ color: c.color }}>{c.value}</p>
              <p className="mt-0.5 text-xs font-semibold text-slate-400">{c.label}</p>
              <p className="mt-0.5 text-xs text-slate-600">{c.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Calls */}
          <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold text-white">Recent Call Summaries</h2>
              <Link to="/voice-agent/calls" className="text-xs text-[#1E88E5] hover:underline">All Calls</Link>
            </div>
            <div className="space-y-3">
              {RECENT_CALLS.map((c, i) => {
                const s = STATUS_COLORS[c.status];
                return (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-[#1A2235] bg-[#0A0F1E] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A2D50] text-base">📞</div>
                      <div>
                        <p className="text-sm font-semibold text-white">{c.caller}</p>
                        <p className="text-xs text-slate-500">{c.reason}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                        style={{ background: `${s.bg}33`, color: s.bg, border: `1px solid ${s.bg}44` }}>
                        {s.label}
                      </span>
                      <p className="mt-1 text-xs text-slate-600">{c.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Top Call Reasons */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
            <h2 className="mb-5 font-bold text-white">Top Call Reasons</h2>
            <div className="space-y-4">
              {CALL_REASONS.map((r) => (
                <div key={r.reason}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-slate-300">{r.reason}</span>
                    <span className="font-bold text-white">{r.count}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#1A2235] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#1E88E5] to-[#7C3AED]" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7C3AED] mb-2">Script Mode</p>
              <p className="text-sm font-bold text-white mb-1">Pressure Washing — Residential</p>
              <p className="text-xs text-slate-500">Quote intake · Appointment booking · Review request</p>
              <Link to="/voice-agent/scripts" className="mt-3 block text-xs text-[#1E88E5] hover:underline">
                Change Script Mode →
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Disclaimer:</strong> The P2P AI Voice Agent is designed to capture information, schedule consultations, and route inquiries to the business owner or licensed professional. It does not provide legal, financial, insurance, medical, or dental advice.
        </div>

        {/* Nav */}
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link to="/rmie" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">⚡ RMIE</Link>
          <Link to="/command-center" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">🖥️ Command Center</Link>
          <Link to="/pricing" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">💰 Pricing</Link>
        </div>
      </div>
    </div>
  );
}

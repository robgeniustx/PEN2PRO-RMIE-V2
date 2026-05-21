import React from "react";
import { Link } from "react-router-dom";
import SafetyBoundaryNotice from "../components/automation/SafetyBoundaryNotice";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TODAY = new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

const SAMPLE_REPORT = {
  date: TODAY,
  revenue_today: "$0",
  leads_today: 0,
  follow_ups_due: 3,
  tasks_completed: 2,
  tasks_pending: 4,
  top_action: "Send follow-up messages to 3 warm leads from last week.",
  highlights: [
    "No new revenue today — outreach is the priority.",
    "2 tasks completed from yesterday's list.",
    "3 follow-ups are due today — don't let them go cold.",
  ],
  warnings: [
    "No new leads added in 48 hours — run 20 outreach messages today.",
  ],
};

export default function DailyReportPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-3 py-1 text-xs font-semibold text-[#1E88E5] mb-3">
            DAILY INTELLIGENCE
          </div>
          <h1 className="font-display text-3xl font-black text-white">Daily Report</h1>
          <p className="mt-1 text-slate-500 text-sm">{SAMPLE_REPORT.date}</p>
        </div>

        <SafetyBoundaryNotice />

        {/* Metrics */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 mb-6">
          {[
            { label: "Revenue Today", value: SAMPLE_REPORT.revenue_today, color: "#00C9B1" },
            { label: "New Leads", value: SAMPLE_REPORT.leads_today, color: "#D4A017" },
            { label: "Follow-Ups Due", value: SAMPLE_REPORT.follow_ups_due, color: "#FF8A00" },
            { label: "Tasks Pending", value: SAMPLE_REPORT.tasks_pending, color: "#7C3AED" },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-[#1A2D50] p-4 text-center" style={{ background: "#0F1520" }}>
              <p className="text-xs text-slate-500 mb-1">{m.label}</p>
              <p className="font-display text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Top Action */}
        <div className="mb-6 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D4A017] mb-1">Today's #1 Priority</p>
          <p className="text-sm text-white">{SAMPLE_REPORT.top_action}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6 rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
          <h3 className="font-display text-sm font-bold text-white mb-3">Today's Highlights</h3>
          <ul className="space-y-2">
            {SAMPLE_REPORT.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="text-[#00C9B1] mt-0.5 shrink-0">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Warnings */}
        {SAMPLE_REPORT.warnings.map((w, i) => (
          <div key={i} className="mb-4 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
            <span className="text-red-400 mt-0.5 shrink-0">⚠</span>
            <p className="text-sm text-slate-300">{w}</p>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Link to="/dashboard" className="btn-gold px-8 py-3 text-sm font-bold">
            Go to Dashboard
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

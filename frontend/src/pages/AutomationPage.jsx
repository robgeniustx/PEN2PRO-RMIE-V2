import React from "react";
import { Link } from "react-router-dom";
import SafetyBoundaryNotice from "../components/automation/SafetyBoundaryNotice";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AUTOMATIONS = [
  { name: "New Lead Follow-Up", trigger: "New lead added to CRM", action: "Send follow-up message within 2 hours", status: "ready", tier: "Pro" },
  { name: "Review Request", trigger: "Job marked as complete", action: "Send Google review request via SMS", status: "ready", tier: "Pro" },
  { name: "Missed Call Response", trigger: "Missed call detected", action: "Send text-back within 60 seconds", status: "ready", tier: "Pro" },
  { name: "Weekly Report", trigger: "Every Sunday 9pm", action: "Generate and email weekly revenue report", status: "ready", tier: "Elite" },
  { name: "Stale Lead Alert", trigger: "Lead inactive 7+ days", action: "Notify owner + add to re-engagement list", status: "ready", tier: "Elite" },
];

export default function AutomationPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF8A00]/30 bg-[#FF8A00]/10 px-3 py-1 text-xs font-semibold text-[#FF8A00] mb-3">
            AUTOMATION ENGINE
          </div>
          <h1 className="font-display text-3xl font-black text-white">Automation Workflows</h1>
          <p className="mt-2 text-slate-400 text-sm">Set-it-and-forget-it automation that runs your business while you focus on delivery.</p>
        </div>

        <SafetyBoundaryNotice />

        <div className="mt-6 space-y-3">
          {AUTOMATIONS.map((auto, i) => (
            <div key={i} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-sm font-bold text-white">{auto.name}</h3>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      auto.tier === "Elite" ? "border border-[#D4A017]/30 bg-[#D4A017]/10 text-[#D4A017]" : "border border-[#00C9B1]/30 bg-[#00C9B1]/10 text-[#00C9B1]"
                    }`}>
                      {auto.tier}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-1"><span className="text-slate-400 font-medium">Trigger:</span> {auto.trigger}</p>
                  <p className="text-xs text-slate-500"><span className="text-slate-400 font-medium">Action:</span> {auto.action}</p>
                </div>
                <button className="rounded-lg border border-[#1A2D50] px-3 py-1.5 text-xs font-semibold text-slate-400 hover:border-[#FF8A00]/40 hover:text-[#FF8A00] transition-all shrink-0">
                  Configure
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-8 text-center">
          <h2 className="font-display text-xl font-bold text-white mb-2">Activate Full Automation Suite</h2>
          <p className="text-slate-400 text-sm mb-6">Pro and Elite members unlock all automation workflows. Runs 24/7 without manual effort.</p>
          <Link to="/waitlist?tier=pro" className="btn-gold px-8 py-3 text-sm font-bold">
            Upgrade to Pro
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

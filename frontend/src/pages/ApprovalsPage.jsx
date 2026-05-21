import React from "react";
import { Link } from "react-router-dom";
import SafetyBoundaryNotice from "../components/automation/SafetyBoundaryNotice";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SAMPLE_APPROVALS = [
  { id: 1, action: "Send outreach email to 50 leads", module: "Outreach", status: "pending", risk: "low" },
  { id: 2, action: "Post 3 social media posts", module: "Social Engine", status: "pending", risk: "low" },
  { id: 3, action: "Update CRM pipeline status for 8 leads", module: "CRM", status: "approved", risk: "low" },
  { id: 4, action: "Generate follow-up sequence for cold leads", module: "Automation", status: "pending", risk: "medium" },
];

export default function ApprovalsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-black text-white">Approvals Queue</h1>
          <p className="mt-2 text-slate-400 text-sm">Review and approve AI-suggested actions before they execute.</p>
        </div>

        <SafetyBoundaryNotice />

        <div className="mt-6 space-y-3">
          {SAMPLE_APPROVALS.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#1A2D50] p-5 flex items-center justify-between gap-4" style={{ background: "#0F1520" }}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF8A00]">{item.module}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    item.risk === "medium" ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-400" : "border border-[#00C9B1]/30 bg-[#00C9B1]/10 text-[#00C9B1]"
                  }`}>
                    {item.risk} risk
                  </span>
                </div>
                <p className="text-sm text-slate-300">{item.action}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {item.status === "pending" ? (
                  <>
                    <button className="rounded-lg border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-3 py-1.5 text-xs font-bold text-[#00C9B1] hover:bg-[#00C9B1]/20 transition-all">
                      Approve
                    </button>
                    <button className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-400 hover:bg-red-500/20 transition-all">
                      Deny
                    </button>
                  </>
                ) : (
                  <span className="text-xs font-semibold text-[#00C9B1]">Approved</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/waitlist?tier=pro" className="btn-gold px-8 py-3 text-sm font-bold">
            Upgrade to Pro to Activate Automation
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

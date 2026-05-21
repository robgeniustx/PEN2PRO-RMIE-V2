import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getVoiceDashboard, simulateVoiceCall } from "../api/voiceAgentApi";

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value || 0);
}

export default function VoiceAgentDashboardPage() {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");

  async function loadDashboard() {
    setLoading(true);
    const data = await getVoiceDashboard();
    setDashboard(data);
    setLoading(false);
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  async function runDemoCall() {
    const result = await simulateVoiceCall({
      business_name: dashboard?.settings?.business_name || "PEN2PRO",
      industry: dashboard?.settings?.industry || "pressure-washing",
      caller_name: "Demo Property Manager",
      caller_number: "+17135550123",
      call_reason: "commercial pressure washing quote",
      appointment_booked: true,
    });
    setNotice(result?.summary?.summary || "Demo call completed.");
    await loadDashboard();
  }

  const cards = [
    ["Total Calls", dashboard?.total_calls || 0],
    ["Missed Calls", dashboard?.missed_calls || 0],
    ["Leads Captured", dashboard?.leads_captured || 0],
    ["Appointments", dashboard?.appointments_booked || 0],
    ["Follow-Ups", dashboard?.follow_ups_sent || 0],
    ["Recovered Revenue", money(dashboard?.estimated_recovered_revenue || 0)],
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-3 py-1 text-xs font-semibold text-[#1E88E5] mb-2">
              P2P AI VOICE AGENT
            </div>
            <h1 className="font-display text-3xl font-black text-white">Call Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">Live-ready call intake, summaries, missed-call text-back, and CRM sync.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={runDemoCall} className="btn-gold px-5 py-2.5 text-sm font-bold">Run Demo Call</button>
            <Link to="/voice-agent/settings" className="btn-outline px-5 py-2.5 text-sm font-bold">Configure Agent</Link>
          </div>
        </div>

        {notice && (
          <div className="mb-6 rounded-xl border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-3 text-sm text-[#1E88E5]">{notice}</div>
        )}
        {loading && <div className="py-20 text-center text-slate-500">Loading voice agent data...</div>}

        {!loading && (
          <>
            {/* Metric Cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {cards.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-[#1A2D50] p-4 text-center" style={{ background: "#0F1520" }}>
                  <p className="text-xs text-slate-500 mb-1">{label}</p>
                  <p className="font-display text-2xl font-black text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Recent Calls */}
              <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2D50]">
                  <h2 className="font-display text-base font-bold text-white">Recent Calls</h2>
                  <Link to="/voice-agent/calls" className="text-xs font-semibold text-[#D4A017]">Open call log →</Link>
                </div>
                {(dashboard?.recent_calls || []).length === 0 ? (
                  <div className="py-10 text-center text-slate-500 text-sm">No calls yet. Run a demo call to test.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-[#1A2D50]">
                          {["Caller", "Reason", "Status", "Lead", "Appt"].map((h) => (
                            <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {(dashboard.recent_calls || []).map((call) => (
                          <tr key={call.id} className="border-b border-[#1A2D50] hover:bg-white/[0.02]">
                            <td className="px-4 py-3 text-white">{call.caller_name || call.caller_number || "Unknown"}</td>
                            <td className="px-4 py-3 text-slate-400">{call.call_reason || "General"}</td>
                            <td className="px-4 py-3"><span className="rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-2 py-0.5 text-xs text-[#1E88E5]">{call.status}</span></td>
                            <td className="px-4 py-3 text-slate-400">{call.lead_captured ? "Yes" : "No"}</td>
                            <td className="px-4 py-3 text-slate-400">{call.appointment_booked ? "Yes" : "No"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Top Call Reasons */}
                <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                  <h2 className="font-display text-base font-bold text-white mb-3">Top Call Reasons</h2>
                  {(dashboard?.top_call_reasons || []).length === 0 ? (
                    <p className="text-xs text-slate-500">No call reasons yet. Run a demo call.</p>
                  ) : (
                    <div className="space-y-2">
                      {(dashboard.top_call_reasons || []).map((item) => (
                        <div key={item.reason} className="flex items-center justify-between text-sm">
                          <span className="text-slate-400">{item.reason}</span>
                          <strong className="text-white">{item.count}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Agent Status */}
                <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                  <h2 className="font-display text-base font-bold text-white mb-3">Agent Status</h2>
                  <div className="space-y-2">
                    {[
                      ["Agent", dashboard?.settings?.agent_name || "PEN2PRO Intake Agent"],
                      ["Industry", dashboard?.settings?.industry || "pressure-washing"],
                      ["Active Scripts", dashboard?.active_scripts || 0],
                      ["Answer Rate", `${dashboard?.call_answer_rate || 0}%`],
                      ["Lead Capture", `${dashboard?.lead_capture_rate || 0}%`],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{label}</span>
                        <span className="font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

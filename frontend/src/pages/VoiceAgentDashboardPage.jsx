import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
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
    <div className="voice-app">
      <Navbar />
      <main className="voice-shell">
        <header className="voice-header">
          <div>
            <p>P2P AI Voice Agent</p>
            <h1>Call Dashboard</h1>
            <span>Live-ready call intake, summaries, missed-call text-back, scripts, and CRM sync.</span>
          </div>
          <div className="voice-actions">
            <button onClick={runDemoCall}>Run Demo Call</button>
            <Link to="/voice-agent/settings">Configure Agent</Link>
          </div>
        </header>

        {notice && <div className="voice-notice">{notice}</div>}
        {loading && <div className="voice-panel">Loading voice agent data...</div>}

        {!loading && (
          <>
            <section className="voice-metrics">
              {cards.map(([label, value]) => (
                <div className="voice-metric" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </section>

            <section className="voice-grid">
              <div className="voice-panel wide">
                <div className="voice-panel-head">
                  <h2>Recent Calls</h2>
                  <Link to="/voice-agent/calls">Open call log</Link>
                </div>
                <table className="voice-table">
                  <thead>
                    <tr>
                      <th>Caller</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Lead</th>
                      <th>Appointment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(dashboard?.recent_calls || []).map((call) => (
                      <tr key={call.id}>
                        <td>{call.caller_name || call.caller_number || "Unknown"}</td>
                        <td>{call.call_reason || "General"}</td>
                        <td><span className="voice-status">{call.status}</span></td>
                        <td>{call.lead_captured ? "Yes" : "No"}</td>
                        <td>{call.appointment_booked ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="voice-panel">
                <h2>Top Call Reasons</h2>
                <div className="voice-list">
                  {(dashboard?.top_call_reasons || []).map((item) => (
                    <div key={item.reason}>
                      <span>{item.reason}</span>
                      <strong>{item.count}</strong>
                    </div>
                  ))}
                  {!dashboard?.top_call_reasons?.length && <p>No call reasons yet. Run a demo call.</p>}
                </div>
              </div>

              <div className="voice-panel">
                <h2>Agent Status</h2>
                <div className="voice-list">
                  <div><span>Agent</span><strong>{dashboard?.settings?.agent_name || "PEN2PRO Intake Agent"}</strong></div>
                  <div><span>Industry</span><strong>{dashboard?.settings?.industry || "pressure-washing"}</strong></div>
                  <div><span>Active Scripts</span><strong>{dashboard?.active_scripts || 0}</strong></div>
                  <div><span>Answer Rate</span><strong>{dashboard?.call_answer_rate || 0}%</strong></div>
                  <div><span>Lead Capture</span><strong>{dashboard?.lead_capture_rate || 0}%</strong></div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

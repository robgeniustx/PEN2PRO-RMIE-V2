import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import {
  createVoiceScript,
  generateFollowUp,
  getVoiceSettings,
  listVoiceCalls,
  listVoiceScripts,
  simulateVoiceCall,
  summarizeCall,
  syncCallToCrm,
  updateVoiceSettings,
} from "../api/voiceAgentApi";

function currentSection(pathname) {
  return pathname.split("/").pop() || "calls";
}

function Field({ label, children }) {
  return <label className="voice-field"><span>{label}</span>{children}</label>;
}

export default function VoiceAgentSubPage() {
  const { pathname } = useLocation();
  const section = currentSection(pathname);
  const [calls, setCalls] = useState([]);
  const [scripts, setScripts] = useState([]);
  const [settings, setSettings] = useState({});
  const [notice, setNotice] = useState("");

  async function load() {
    const [callData, scriptData, settingsData] = await Promise.all([
      listVoiceCalls(),
      listVoiceScripts(),
      getVoiceSettings(),
    ]);
    setCalls(callData.calls || []);
    setScripts(scriptData.scripts || []);
    setSettings(settingsData || {});
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCallAction(action, callId) {
    const result = action === "summary"
      ? await summarizeCall(callId)
      : action === "follow_up"
        ? await generateFollowUp(callId)
        : await syncCallToCrm(callId);
    setNotice(JSON.stringify(result, null, 2));
    await load();
  }

  async function handleScriptSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const script = await createVoiceScript({
      name: form.get("name"),
      industry: form.get("industry"),
      script_mode: form.get("script_mode"),
      greeting: form.get("greeting"),
      is_active: true,
      steps: [
        { order: 1, type: "greeting", text: form.get("greeting") },
        { order: 2, type: "qualify", text: "Capture caller name, reason, urgency, location, and follow-up details." },
      ],
    });
    setNotice(`Script created: ${script.name}`);
    event.currentTarget.reset();
    await load();
  }

  async function handleSettingsSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const updated = await updateVoiceSettings({
      business_name: form.get("business_name"),
      agent_name: form.get("agent_name"),
      industry: form.get("industry"),
      voice_provider: form.get("voice_provider"),
      phone_number: form.get("phone_number"),
      transfer_number: form.get("transfer_number"),
      business_hours_start: form.get("business_hours_start"),
      business_hours_end: form.get("business_hours_end"),
      after_hours_enabled: form.get("after_hours_enabled") === "on",
      missed_call_text_back: form.get("missed_call_text_back") === "on",
      crm_sync_enabled: form.get("crm_sync_enabled") === "on",
      booking_enabled: form.get("booking_enabled") === "on",
    });
    setSettings(updated);
    setNotice("Voice agent settings saved.");
  }

  async function handleDemoSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = await simulateVoiceCall({
      business_name: settings.business_name || "PEN2PRO",
      industry: settings.industry || "pressure-washing",
      caller_name: form.get("caller_name"),
      caller_number: form.get("caller_number"),
      call_reason: form.get("call_reason"),
      transcript: form.get("transcript"),
      appointment_booked: form.get("appointment_booked") === "on",
    });
    setNotice(result.summary?.summary || "Demo call simulated.");
    event.currentTarget.reset();
    await load();
  }

  return (
    <div className="voice-app">
      <Navbar />
      <main className="voice-shell">
        <header className="voice-header">
          <div>
            <p>P2P AI Voice Agent</p>
            <h1>{section === "calls" ? "Call Log" : section === "scripts" ? "Script Manager" : section === "settings" ? "Agent Settings" : section === "calendar" ? "Calendar Sync" : "Voice Agent Pricing"}</h1>
            <span>Operational pages for live call capture, script control, settings, and test calls.</span>
          </div>
          <div className="voice-actions">
            <Link to="/voice-agent/dashboard">Dashboard</Link>
            <Link to="/dashboard/ai-voice-agent">BusinessOS Module</Link>
          </div>
        </header>

        {notice && <pre className="voice-notice">{notice}</pre>}

        {section === "calls" && (
          <section className="voice-grid">
            <div className="voice-panel wide">
              <div className="voice-panel-head"><h2>Calls</h2><span>{calls.length} records</span></div>
              <table className="voice-table">
                <thead><tr><th>Caller</th><th>Reason</th><th>Status</th><th>Summary</th><th>Actions</th></tr></thead>
                <tbody>
                  {calls.map((call) => (
                    <tr key={call.id}>
                      <td>{call.caller_name || call.caller_number}</td>
                      <td>{call.call_reason || "General"}</td>
                      <td><span className="voice-status">{call.status}</span></td>
                      <td>{call.summary || "No summary yet"}</td>
                      <td className="voice-row-actions">
                        <button onClick={() => handleCallAction("summary", call.id)}>Summarize</button>
                        <button onClick={() => handleCallAction("follow_up", call.id)}>Follow-Up</button>
                        <button onClick={() => handleCallAction("crm", call.id)}>Sync CRM</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <form className="voice-panel" onSubmit={handleDemoSubmit}>
              <h2>Test Call Simulator</h2>
              <Field label="Caller Name"><input name="caller_name" required placeholder="Demo Caller" /></Field>
              <Field label="Caller Number"><input name="caller_number" placeholder="+17135550100" /></Field>
              <Field label="Call Reason"><input name="call_reason" required placeholder="quote request" /></Field>
              <Field label="Transcript"><textarea name="transcript" placeholder="Caller needs a quote, asks for price and availability." /></Field>
              <label className="voice-check"><input type="checkbox" name="appointment_booked" /> Appointment booked</label>
              <button className="voice-primary">Run Simulated Call</button>
            </form>
          </section>
        )}

        {section === "scripts" && (
          <section className="voice-grid">
            <div className="voice-panel wide">
              <div className="voice-panel-head"><h2>Scripts</h2><span>{scripts.length} active/draft scripts</span></div>
              <table className="voice-table">
                <thead><tr><th>Name</th><th>Industry</th><th>Mode</th><th>Greeting</th><th>Active</th></tr></thead>
                <tbody>
                  {scripts.map((script) => (
                    <tr key={script.id}>
                      <td>{script.name}</td>
                      <td>{script.industry}</td>
                      <td>{script.script_mode}</td>
                      <td>{script.greeting}</td>
                      <td>{script.is_active ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <form className="voice-panel" onSubmit={handleScriptSubmit}>
              <h2>Create Script</h2>
              <Field label="Script Name"><input name="name" required placeholder="After-hours quote intake" /></Field>
              <Field label="Industry"><input name="industry" required placeholder="pressure-washing" /></Field>
              <Field label="Mode"><select name="script_mode" defaultValue="quote-intake"><option>quote-intake</option><option>appointment</option><option>after-hours</option><option>emergency</option></select></Field>
              <Field label="Greeting"><textarea name="greeting" required placeholder="Thanks for calling..." /></Field>
              <button className="voice-primary">Save Script</button>
            </form>
          </section>
        )}

        {section === "settings" && (
          <form className="voice-panel voice-settings" onSubmit={handleSettingsSubmit}>
            <h2>Agent Settings</h2>
            <div className="voice-form-grid">
              <Field label="Business Name"><input name="business_name" defaultValue={settings.business_name || ""} /></Field>
              <Field label="Agent Name"><input name="agent_name" defaultValue={settings.agent_name || ""} /></Field>
              <Field label="Industry"><input name="industry" defaultValue={settings.industry || "pressure-washing"} /></Field>
              <Field label="Voice Provider"><select name="voice_provider" defaultValue={settings.voice_provider || "demo"}><option>demo</option><option>twilio</option><option>vapi</option><option>retell</option><option>bland</option></select></Field>
              <Field label="Agent Phone"><input name="phone_number" defaultValue={settings.phone_number || ""} /></Field>
              <Field label="Transfer Number"><input name="transfer_number" defaultValue={settings.transfer_number || ""} /></Field>
              <Field label="Hours Start"><input name="business_hours_start" defaultValue={settings.business_hours_start || "08:00"} /></Field>
              <Field label="Hours End"><input name="business_hours_end" defaultValue={settings.business_hours_end || "18:00"} /></Field>
            </div>
            <div className="voice-check-row">
              <label className="voice-check"><input type="checkbox" name="after_hours_enabled" defaultChecked={settings.after_hours_enabled} /> After-hours answering</label>
              <label className="voice-check"><input type="checkbox" name="missed_call_text_back" defaultChecked={settings.missed_call_text_back} /> Missed-call text-back</label>
              <label className="voice-check"><input type="checkbox" name="crm_sync_enabled" defaultChecked={settings.crm_sync_enabled} /> CRM sync</label>
              <label className="voice-check"><input type="checkbox" name="booking_enabled" defaultChecked={settings.booking_enabled} /> Booking intake</label>
            </div>
            <button className="voice-primary">Save Settings</button>
          </form>
        )}

        {section === "calendar" && (
          <section className="voice-panel">
            <h2>Calendar Sync</h2>
            <p className="voice-muted">Appointments booked by the AI Voice Agent are API-ready for Google Calendar, Outlook, or CRM calendar sync.</p>
            <table className="voice-table">
              <thead><tr><th>Caller</th><th>Reason</th><th>Booked</th><th>CRM Synced</th></tr></thead>
              <tbody>
                {calls.filter((call) => call.appointment_booked).map((call) => (
                  <tr key={call.id}><td>{call.caller_name}</td><td>{call.call_reason}</td><td>Yes</td><td>{call.synced_to_crm ? "Yes" : "No"}</td></tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {section === "pricing" && (
          <section className="voice-grid">
            {["Starter Voice Agent - $49/mo", "Pro Voice Agent - $149/mo", "Elite Voice Agent - $299/mo"].map((plan) => (
              <div className="voice-panel" key={plan}>
                <h2>{plan}</h2>
                <p className="voice-muted">Call answering, lead capture, summaries, and CRM-ready workflows. Live carrier/voice provider setup requires Twilio, Vapi, Retell, or equivalent.</p>
                <Link className="voice-link-button" to="/waitlist?interest=AI%20Voice%20Agent">Join Waitlist</Link>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}

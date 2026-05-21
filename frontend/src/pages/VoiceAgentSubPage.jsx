import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
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

  const sectionTitle = section === "calls" ? "Call Log" : section === "scripts" ? "Script Manager" : section === "settings" ? "Agent Settings" : section === "calendar" ? "Calendar Sync" : "Voice Agent Pricing";

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
            <h1 className="font-display text-3xl font-black text-white">{sectionTitle}</h1>
          </div>
          <div className="flex gap-3">
            <Link to="/voice-agent/dashboard" className="btn-outline px-5 py-2.5 text-sm font-bold">Dashboard</Link>
          </div>
        </div>

        {notice && <pre className="mb-6 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-xs text-slate-300 overflow-x-auto">{notice}</pre>}

        {section === "calls" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2D50]">
                <h2 className="font-display text-base font-bold text-white">Calls</h2>
                <span className="text-xs text-slate-500">{calls.length} records</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[#1A2D50]">{["Caller","Reason","Status","Summary","Actions"].map(h=><th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">{h}</th>)}</tr></thead>
                  <tbody>
                    {calls.map((call) => (
                      <tr key={call.id} className="border-b border-[#1A2D50] hover:bg-white/[0.02]">
                        <td className="px-4 py-3 text-white">{call.caller_name || call.caller_number}</td>
                        <td className="px-4 py-3 text-slate-400">{call.call_reason || "General"}</td>
                        <td className="px-4 py-3"><span className="rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-2 py-0.5 text-xs text-[#1E88E5]">{call.status}</span></td>
                        <td className="px-4 py-3 text-slate-400 text-xs max-w-xs truncate">{call.summary || "No summary"}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-1">
                            {[["summary","Sum"],["follow_up","FU"],["crm","CRM"]].map(([action,label])=>(
                              <button key={action} onClick={() => handleCallAction(action, call.id)} className="rounded px-2 py-1 text-xs border border-[#1A2D50] text-slate-400 hover:border-[#D4A017]/40 hover:text-[#D4A017] transition-all">{label}</button>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <form onSubmit={handleDemoSubmit} className="rounded-2xl border border-[#1A2D50] p-5 space-y-3" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-base font-bold text-white">Test Call Simulator</h2>
              {[["caller_name","Caller Name","Demo Caller",true],["caller_number","Caller Number","+17135550100",false],["call_reason","Call Reason","quote request",true]].map(([name,label,placeholder,required])=>(
                <div key={name}>
                  <label className="mb-1 block text-xs font-medium text-slate-400">{label}</label>
                  <input name={name} required={required} placeholder={placeholder} className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none" />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Transcript</label>
                <textarea name="transcript" placeholder="Caller needs a quote..." rows={3} className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none resize-none" />
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-400">
                <input type="checkbox" name="appointment_booked" className="rounded" />
                Appointment booked
              </label>
              <button type="submit" className="btn-gold w-full py-2.5 text-sm font-bold">Run Simulated Call</button>
            </form>
          </div>
        )}

        {section === "scripts" && (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A2D50]">
                <h2 className="font-display text-base font-bold text-white">Scripts</h2>
                <span className="text-xs text-slate-500">{scripts.length} scripts</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-[#1A2D50]">{["Name","Industry","Mode","Greeting","Active"].map(h=><th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">{h}</th>)}</tr></thead>
                  <tbody>
                    {scripts.map((s) => (
                      <tr key={s.id} className="border-b border-[#1A2D50] hover:bg-white/[0.02]">
                        <td className="px-4 py-3 text-white font-medium">{s.name}</td>
                        <td className="px-4 py-3 text-slate-400">{s.industry}</td>
                        <td className="px-4 py-3 text-slate-400">{s.script_mode}</td>
                        <td className="px-4 py-3 text-slate-400 text-xs max-w-xs truncate">{s.greeting}</td>
                        <td className="px-4 py-3"><span className={`text-xs font-semibold ${s.is_active ? "text-[#00C9B1]" : "text-slate-500"}`}>{s.is_active ? "Active" : "Draft"}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <form onSubmit={handleScriptSubmit} className="rounded-2xl border border-[#1A2D50] p-5 space-y-3" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-base font-bold text-white">Create Script</h2>
              {[["name","Script Name","After-hours quote intake",true],["industry","Industry","pressure-washing",true]].map(([name,label,placeholder,required])=>(
                <div key={name}>
                  <label className="mb-1 block text-xs font-medium text-slate-400">{label}</label>
                  <input name={name} required={required} placeholder={placeholder} className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none" />
                </div>
              ))}
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-400">Greeting</label>
                <textarea name="greeting" required placeholder="Thanks for calling..." rows={3} className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-3 py-2 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none resize-none" />
              </div>
              <button type="submit" className="btn-gold w-full py-2.5 text-sm font-bold">Save Script</button>
            </form>
          </div>
        )}

        {section === "settings" && (
          <form onSubmit={handleSettingsSubmit} className="rounded-2xl border border-[#1A2D50] p-6 space-y-5" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-lg font-bold text-white">Agent Settings</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[["business_name","Business Name",settings.business_name||""],["agent_name","Agent Name",settings.agent_name||""],["industry","Industry",settings.industry||"pressure-washing"],["phone_number","Agent Phone",settings.phone_number||""],["transfer_number","Transfer Number",settings.transfer_number||""]].map(([name,label,value])=>(
                <div key={name}>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
                  <input name={name} defaultValue={value} className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[["after_hours_enabled","After-hours answering",settings.after_hours_enabled],["missed_call_text_back","Missed-call text-back",settings.missed_call_text_back],["crm_sync_enabled","CRM sync",settings.crm_sync_enabled],["booking_enabled","Booking intake",settings.booking_enabled]].map(([name,label,checked])=>(
                <label key={name} className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" name={name} defaultChecked={checked} className="rounded" />
                  {label}
                </label>
              ))}
            </div>
            <button type="submit" className="btn-gold px-6 py-2.5 text-sm font-bold">Save Settings</button>
          </form>
        )}

        {section === "calendar" && (
          <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
            <div className="px-6 py-4 border-b border-[#1A2D50]">
              <h2 className="font-display text-base font-bold text-white">Calendar Sync</h2>
              <p className="text-xs text-slate-500 mt-1">Appointments are API-ready for Google Calendar, Outlook, or CRM calendar sync.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#1A2D50]">{["Caller","Reason","Booked","CRM Synced"].map(h=><th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase">{h}</th>)}</tr></thead>
                <tbody>
                  {calls.filter((c) => c.appointment_booked).map((call) => (
                    <tr key={call.id} className="border-b border-[#1A2D50] hover:bg-white/[0.02]">
                      <td className="px-4 py-3 text-white">{call.caller_name}</td>
                      <td className="px-4 py-3 text-slate-400">{call.call_reason}</td>
                      <td className="px-4 py-3 text-[#00C9B1] text-xs font-semibold">Yes</td>
                      <td className="px-4 py-3 text-slate-400 text-xs">{call.synced_to_crm ? "Yes" : "No"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {section === "pricing" && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[["Starter Voice Agent","$49/mo","Call answering, lead capture, summaries, and missed-call text-back."],["Pro Voice Agent","$149/mo","Everything in Starter plus appointment intake, custom scripts, and follow-up workflows."],["Elite Voice Agent","$299/mo","Everything in Pro plus multi-agent routing, advanced scoring, and CRM-style lead board."]].map(([name,price,desc])=>(
              <div key={name} className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#1E88E5] mb-2">{name}</p>
                <p className="font-display text-3xl font-black text-white mb-3">{price}</p>
                <p className="text-sm text-slate-400 mb-5">{desc}</p>
                <Link to="/waitlist?interest=AI%20Voice%20Agent" className="btn-gold block w-full py-2.5 text-center text-xs font-bold">Join Waitlist</Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

async function request(path, options = {}, fallback = null) {
  try {
    const response = await fetch(`${API}${path}`, {
      headers: { "Content-Type": "application/json", ...(options.headers || {}) },
      ...options,
    });
    if (!response.ok) throw new Error(`Voice Agent API failed: ${response.status}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

export function getVoiceDashboard() {
  return request("/api/voice-agent/dashboard", {}, {
    total_calls: 0,
    missed_calls: 0,
    leads_captured: 0,
    appointments_booked: 0,
    follow_ups_sent: 0,
    estimated_recovered_revenue: 0,
    call_answer_rate: 0,
    lead_capture_rate: 0,
    recent_calls: [],
    top_call_reasons: [],
    active_scripts: 0,
    settings: {},
  });
}

export function listVoiceCalls() {
  return request("/api/voice-agent/calls", {}, { calls: [], total: 0 });
}

export function listVoiceScripts() {
  return request("/api/voice-agent/scripts", {}, { scripts: [] });
}

export function createVoiceScript(payload) {
  return request("/api/voice-agent/scripts", {
    method: "POST",
    body: JSON.stringify(payload),
  }, payload);
}

export function getVoiceSettings() {
  return request("/api/voice-agent/settings", {}, {});
}

export function updateVoiceSettings(payload) {
  return request("/api/voice-agent/settings", {
    method: "PATCH",
    body: JSON.stringify(payload),
  }, payload);
}

export function simulateVoiceCall(payload) {
  return request("/api/voice-agent/simulate-call", {
    method: "POST",
    body: JSON.stringify(payload),
  }, {
    call: payload,
    summary: { summary: "Demo call simulated locally.", recommended_next_action: "Follow up manually." },
    follow_up: { sms: "Thanks for calling. We will follow up shortly." },
  });
}

export function summarizeCall(callId) {
  return request(`/api/voice-agent/calls/${callId}/summarize`, { method: "POST" }, null);
}

export function generateFollowUp(callId) {
  return request(`/api/voice-agent/calls/${callId}/follow-up`, { method: "POST" }, null);
}

export function syncCallToCrm(callId) {
  return request(`/api/voice-agent/calls/${callId}/sync-to-crm`, { method: "POST" }, null);
}

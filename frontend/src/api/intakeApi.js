const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

function getAuthHeaders() {
  const token = localStorage.getItem('pen2pro_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function submitIntake(payload) {
  const res = await fetch(`${API}/api/intake`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Intake submission failed');
  return data;
}

export async function submitWaitlist(payload) {
  const res = await fetch(`${API}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Waitlist submission failed');
  return data;
}

export async function getWaitlistEntries(adminKey) {
  const res = await fetch(`${API}/api/admin/waitlist`, {
    headers: { 'x-admin-key': adminKey, ...getAuthHeaders() },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Failed to load waitlist');
  return data;
}

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

function getAuthHeaders() {
  const token = localStorage.getItem('pen2pro_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getActivityFeed(limit = 20) {
  const res = await fetch(`${API}/api/activity?limit=${limit}`, {
    headers: getAuthHeaders(),
  });
  if (!res.ok) return [];
  return res.json();
}

export async function logActivity(payload) {
  const res = await fetch(`${API}/api/activity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(payload),
  });
  if (!res.ok) return null;
  return res.json();
}

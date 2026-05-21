const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function getRecentActivity(limit = 20) {
  try {
    const res = await fetch(`${API}/api/activity?limit=${limit}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function logActivity(event) {
  try {
    const res = await fetch(`${API}/api/activity`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    return res.ok;
  } catch {
    return false;
  }
}

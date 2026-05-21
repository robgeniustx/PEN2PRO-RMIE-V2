const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function submitIntake(formData) {
  const res = await fetch(`${API}/api/intake`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Intake submission failed");
  return data;
}

export async function getIntakeById(id) {
  const res = await fetch(`${API}/api/intake/${id}`);
  if (!res.ok) return null;
  return await res.json();
}

export async function listIntakes(params = {}) {
  const query = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${API}/api/intake${query ? `?${query}` : ""}`);
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

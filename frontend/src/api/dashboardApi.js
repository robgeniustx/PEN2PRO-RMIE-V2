import { apiRequest, authHeaders } from "./authApi";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

// The plan and role are decided by the server from the signed-in account, so none are sent from the browser.
export const listDashboardModules = () => apiRequest("/api/dashboard/modules");
export const getDashboardModule = (key = "overview") => apiRequest(`/api/dashboard/modules/${key}`);
export const createDashboardRecord = (key, payload) =>
  apiRequest(`/api/dashboard/modules/${key}/records`, { method: "POST", body: payload });
export const updateDashboardRecord = (key, recordId, payload) =>
  apiRequest(`/api/dashboard/modules/${key}/records/${recordId}`, { method: "PATCH", body: payload });
export const deleteDashboardRecord = (key, recordId) =>
  apiRequest(`/api/dashboard/modules/${key}/records/${recordId}`, { method: "DELETE" });

// The export needs the sign-in header, so it is fetched and saved as a file instead of used as a plain link.
export async function downloadDashboardCsv(key) {
  const res = await fetch(`${API}/api/dashboard/modules/${key}/export.csv`, { headers: authHeaders() });
  if (!res.ok) throw new Error("Could not export these records.");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${key}-records.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

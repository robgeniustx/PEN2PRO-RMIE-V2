import { DASHBOARD_NAV, getFallbackModule } from "../data/dashboardModules";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

function queryFor(user = {}) {
  const plan = encodeURIComponent(user?.tier || user?.plan || "free");
  const role = encodeURIComponent(user?.role || "member");
  return `plan=${plan}&role=${role}`;
}

async function safeFetch(path, fallback) {
  try {
    const response = await fetch(`${API}${path}`);
    if (!response.ok) throw new Error(`Dashboard API failed: ${response.status}`);
    return await response.json();
  } catch {
    return fallback;
  }
}

export function listDashboardModules(user = {}) {
  return safeFetch(`/api/dashboard/modules?${queryFor(user)}`, {
    user_plan: user?.tier || "free",
    user_role: user?.role || "member",
    modules: DASHBOARD_NAV.map((item) => getFallbackModule(item.key, user)).map((item) => ({
      key: item.key,
      label: item.label,
      section: item.section,
      required_plan: item.required_plan,
      description: item.description,
      access: item.access,
    })),
  });
}

export function getDashboardModule(key = "overview", user = {}) {
  return safeFetch(`/api/dashboard/modules/${key}?${queryFor(user)}`, getFallbackModule(key, user));
}

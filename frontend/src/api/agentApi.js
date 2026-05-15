const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://127.0.0.1:8000";

export async function runAgent(agentKey, payload = {}) {
  const response = await fetch(`${API_BASE_URL}/api/agents/${agentKey}/run`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.detail || "Agent request failed");
  }

  return data;
}

export async function runMainBuilder(payload = {}) {
  return runAgent("main_builder", {
    tier: payload.tier || "founders",
    admin_test: payload.admin_test ?? true,
    execute: payload.execute ?? true,
    ...payload,
  });
}

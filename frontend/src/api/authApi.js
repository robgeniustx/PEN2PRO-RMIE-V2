const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export async function login({ email, password }) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Login failed");
  return data;
}

export async function register({ name, email, password }) {
  const res = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || "Registration failed");
  return data;
}

export async function logout() {
  try {
    await fetch(`${API}/api/auth/logout`, { method: "POST" });
  } catch {
    // silent
  }
  localStorage.removeItem("pen2pro_user");
  localStorage.removeItem("pen2pro_token");
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("pen2pro_user") || "null");
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return !!getCurrentUser();
}

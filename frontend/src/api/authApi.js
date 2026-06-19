const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

async function authRequest(path, body) {
  const res = await fetch(`${API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || `Request failed (${res.status})`);
  return data;
}

export async function loginUser({ email, password }) {
  const data = await authRequest('/api/auth/login', { email, password });
  localStorage.setItem('pen2pro_token', data.access_token);
  localStorage.setItem('pen2pro_user', JSON.stringify({
    name: data.name,
    email,
    tier: data.tier || 'free',
    role: data.role || 'member',
  }));
  return data;
}

export async function registerUser({ name, email, password }) {
  const data = await authRequest('/api/auth/register', { name, email, password });
  localStorage.setItem('pen2pro_token', data.access_token);
  localStorage.setItem('pen2pro_user', JSON.stringify({
    name: data.name,
    email,
    tier: data.tier || 'free',
    role: data.role || 'member',
  }));
  return data;
}

export function logoutUser() {
  localStorage.removeItem('pen2pro_token');
  localStorage.removeItem('pen2pro_user');
}

export function getStoredUser() {
  try {
    const raw = localStorage.getItem('pen2pro_user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getAuthToken() {
  return localStorage.getItem('pen2pro_token');
}

export function isAuthenticated() {
  return Boolean(getAuthToken());
}

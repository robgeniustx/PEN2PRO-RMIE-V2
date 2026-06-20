const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

function getToken() {
  return localStorage.getItem('pen2pro_token')
}

function authHeaders() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function login(email, password) {
  const res = await fetch(`${API}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Login failed')
  localStorage.setItem('pen2pro_token', data.access_token)
  localStorage.setItem('pen2pro_user', JSON.stringify({ name: data.name, tier: data.tier, email, role: data.role || 'member' }))
  return data
}

export async function register(name, email, password) {
  const res = await fetch(`${API}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Registration failed')
  localStorage.setItem('pen2pro_token', data.access_token)
  localStorage.setItem('pen2pro_user', JSON.stringify({ name: data.name, tier: data.tier, email, role: data.role || 'member' }))
  return data
}

export async function getMe() {
  const res = await fetch(`${API}/api/auth/me`, {
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
  })
  if (!res.ok) throw new Error('Session expired')
  return res.json()
}

export function logout() {
  localStorage.removeItem('pen2pro_token')
  localStorage.removeItem('pen2pro_user')
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('pen2pro_user') || 'null')
  } catch {
    return null
  }
}

export function isLoggedIn() {
  return Boolean(getToken())
}

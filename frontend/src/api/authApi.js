import client from './client'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export async function login(email, password) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Login failed')
  return data
}

export async function register({ name, email, password }) {
  const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Registration failed')
  return data
}

export async function getMe() {
  const { data } = await client.get('/api/auth/me')
  return data
}

export function saveSession(token, user) {
  localStorage.setItem('pen2pro_token', token)
  localStorage.setItem('pen2pro_user', JSON.stringify(user))
}

export function clearSession() {
  localStorage.removeItem('pen2pro_token')
  localStorage.removeItem('pen2pro_user')
}

export function getStoredToken() {
  return localStorage.getItem('pen2pro_token')
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem('pen2pro_user') || 'null')
  } catch {
    return null
  }
}

export function isAuthenticated() {
  return Boolean(getStoredToken())
}

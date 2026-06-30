const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

export const login = async ({ email, password }) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Login failed')
  return data
}

export const register = async ({ name, email, password }) => {
  const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.detail || 'Registration failed')
  return data
}

export const logout = () => {
  localStorage.removeItem('pen2pro_token')
  localStorage.removeItem('pen2pro_user')
}

export const getStoredUser = () => {
  try {
    const raw = localStorage.getItem('pen2pro_user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const getStoredToken = () => localStorage.getItem('pen2pro_token')

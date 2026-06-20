const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

function authHeaders() {
  const token = localStorage.getItem('pen2pro_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function getActivityFeed(limit = 20) {
  try {
    const res = await fetch(`${API}/api/activity?limit=${limit}`, {
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  } catch {
    return { items: [] }
  }
}

export async function logActivity(event) {
  try {
    const res = await fetch(`${API}/api/activity`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...authHeaders() },
      body: JSON.stringify(event),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return res.json()
  } catch {
    return null
  }
}

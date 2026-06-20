const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

function authHeaders() {
  const token = localStorage.getItem('pen2pro_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export async function submitIntake(data) {
  const res = await fetch(`${API}/api/intake`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(result.detail || 'Intake submission failed')
  return result
}

export async function getIntake(id) {
  const res = await fetch(`${API}/api/intake/${id}`, {
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json()
}

export async function submitWaitlist(data) {
  const res = await fetch(`${API}/api/waitlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  const result = await res.json()
  if (!res.ok) throw new Error(result.detail || 'Waitlist submission failed')
  return result
}

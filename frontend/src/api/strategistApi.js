import client from './client'
import { authHeaders } from './authApi'

const SESSION_KEY = 'pen2pro_strategist_session'

export const getStoredStrategistSession = () => {
  try { return localStorage.getItem(SESSION_KEY) || '' } catch { return '' }
}

export const storeStrategistSession = (sessionId) => {
  try { localStorage.setItem(SESSION_KEY, sessionId) } catch { /* storage unavailable */ }
}

export const clearStrategistSession = () => {
  try { localStorage.removeItem(SESSION_KEY) } catch { /* storage unavailable */ }
}

export const fetchStrategistOutline = async () => (await client.get('/strategist/outline')).data
export const fetchStrategistSample = async () => (await client.get('/strategist/sample')).data
export const fetchStrategistPlaybook = async (sessionId) => {
  const query = sessionId ? `?session_id=${encodeURIComponent(sessionId)}` : ''
  return (await client.get(`/strategist/playbook${query}`, { headers: authHeaders() })).data
}

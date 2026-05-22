import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/blueprints'

const client = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Intercept requests to add auth token
client.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const blueprintApi = {
  // CRUD
  create: (data) => client.post('', data),
  list: () => client.get(''),
  get: (id) => client.get(`/${id}`),
  update: (id, data) => client.put(`/${id}`, data),
  delete: (id) => client.delete(`/${id}`),

  // Agents
  runAgent: (blueprintId, agentType) =>
    client.post(`/${blueprintId}/run/${agentType}`),

  getAgentStatus: (blueprintId, agentType = 'blueprint') =>
    client.get(`/${blueprintId}/status?agent_type=${agentType}`),
}

export default blueprintApi

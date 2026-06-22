import client from './client'

export const login = (email, password) =>
  client.post('/api/auth/login', { email, password })

export const register = (name, email, password) =>
  client.post('/api/auth/register', { name, email, password })

export const getProfile = (token) =>
  client.get('/api/auth/me', { headers: { Authorization: `Bearer ${token}` } })

export const logout = () => {
  localStorage.removeItem('pen2pro_token')
  localStorage.removeItem('pen2pro_user')
}

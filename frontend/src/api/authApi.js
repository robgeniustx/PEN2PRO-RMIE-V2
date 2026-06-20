import client from './client'

export const authApi = {
  login: (email, password) =>
    client.post('/api/auth/login', { email, password }),

  register: (name, email, password) =>
    client.post('/api/auth/register', { name, email, password }),

  logout: () => {
    localStorage.removeItem('pen2pro_token')
    localStorage.removeItem('pen2pro_user')
  },

  getProfile: () => client.get('/api/auth/me'),

  isAuthenticated: () => Boolean(localStorage.getItem('pen2pro_token')),

  getUser: () => {
    try {
      return JSON.parse(localStorage.getItem('pen2pro_user') || 'null')
    } catch {
      return null
    }
  },
}

export default authApi

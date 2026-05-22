import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/auth'

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

// Intercept responses for token refresh
client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem('refresh_token')
        const { data } = await axios.post(`${API_URL}/refresh`, {
          refresh_token: refreshToken,
        })
        localStorage.setItem('access_token', data.access_token)
        originalRequest.headers.Authorization = `Bearer ${data.access_token}`
        return client(originalRequest)
      } catch (refreshError) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export const authApi = {
  register: (email, password, firstName, lastName) =>
    client.post('/register', {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
    }),

  login: (email, password) =>
    client.post('/login', { email, password }),

  refresh: (refreshToken) =>
    client.post('/refresh', { refresh_token: refreshToken }),

  getProfile: () =>
    client.get('/profile'),

  updateProfile: (updates) =>
    client.put('/profile', updates),

  changePassword: (oldPassword, newPassword) =>
    client.post('/change-password', {
      old_password: oldPassword,
      new_password: newPassword,
    }),

  logout: () =>
    client.post('/logout'),
}

export default authApi

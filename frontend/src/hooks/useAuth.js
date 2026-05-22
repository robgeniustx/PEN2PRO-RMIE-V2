import { create } from 'zustand'
import authApi from '../api/authApi'

const useAuth = create((set) => ({
  // State
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Initialize from localStorage
  init: () => {
    const token = localStorage.getItem('access_token')
    if (token) {
      authApi
        .getProfile()
        .then(({ data }) => {
          set({ user: data, isAuthenticated: true })
        })
        .catch(() => {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          set({ isAuthenticated: false })
        })
    }
  },

  // Register
  register: async (email, password, firstName, lastName) => {
    set({ loading: true, error: null })
    try {
      const { data } = await authApi.register(email, password, firstName, lastName)
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)

      const profile = await authApi.getProfile()
      set({ user: profile.data, isAuthenticated: true, loading: false })
      return profile.data
    } catch (error) {
      const message = error.response?.data?.detail || 'Registration failed'
      set({ error: message, loading: false })
      throw error
    }
  },

  // Login
  login: async (email, password) => {
    set({ loading: true, error: null })
    try {
      const { data } = await authApi.login(email, password)
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('refresh_token', data.refresh_token)

      const profile = await authApi.getProfile()
      set({ user: profile.data, isAuthenticated: true, loading: false })
      return profile.data
    } catch (error) {
      const message = error.response?.data?.detail || 'Login failed'
      set({ error: message, loading: false })
      throw error
    }
  },

  // Logout
  logout: async () => {
    set({ loading: true })
    try {
      await authApi.logout()
    } catch (error) {
      console.error('Logout error:', error)
    }
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    set({ user: null, isAuthenticated: false, loading: false })
  },

  // Clear error
  clearError: () => set({ error: null }),

  // Change password
  changePassword: async (oldPassword, newPassword) => {
    try {
      await authApi.changePassword(oldPassword, newPassword)
      set({ error: null })
      return true
    } catch (error) {
      const message = error.response?.data?.detail || 'Password change failed'
      set({ error: message })
      throw error
    }
  },
}))

// Initialize on mount
useAuth.getState().init()

export default useAuth

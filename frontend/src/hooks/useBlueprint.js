import { create } from 'zustand'
import blueprintApi from '../api/blueprintApi'

const useBlueprint = create((set, get) => ({
  // State
  blueprints: [],
  currentBlueprint: null,
  loading: false,
  error: null,

  // List blueprints
  fetchBlueprints: async () => {
    set({ loading: true, error: null })
    try {
      const { data } = await blueprintApi.list()
      set({ blueprints: data || [], loading: false })
    } catch (error) {
      const message = error.response?.data?.detail || 'Failed to fetch blueprints'
      set({ error: message, loading: false })
    }
  },

  // Get single blueprint
  getBlueprint: async (id) => {
    set({ loading: true, error: null })
    try {
      const { data } = await blueprintApi.get(id)
      set({ currentBlueprint: data, loading: false })
      return data
    } catch (error) {
      const message = error.response?.data?.detail || 'Blueprint not found'
      set({ error: message, loading: false, currentBlueprint: null })
      throw error
    }
  },

  // Create blueprint
  createBlueprint: async (blueprintData) => {
    set({ loading: true, error: null })
    try {
      const { data } = await blueprintApi.create(blueprintData)
      set((state) => ({
        blueprints: [...state.blueprints, data],
        currentBlueprint: data,
        loading: false,
      }))
      return data
    } catch (error) {
      const message = error.response?.data?.detail || 'Failed to create blueprint'
      set({ error: message, loading: false })
      throw error
    }
  },

  // Update blueprint
  updateBlueprint: async (id, updates) => {
    set({ loading: true, error: null })
    try {
      const { data } = await blueprintApi.update(id, updates)
      set((state) => ({
        blueprints: state.blueprints.map((bp) => (bp._id === id ? data : bp)),
        currentBlueprint: data,
        loading: false,
      }))
      return data
    } catch (error) {
      const message = error.response?.data?.detail || 'Failed to update blueprint'
      set({ error: message, loading: false })
      throw error
    }
  },

  // Delete blueprint
  deleteBlueprint: async (id) => {
    set({ loading: true, error: null })
    try {
      await blueprintApi.delete(id)
      set((state) => ({
        blueprints: state.blueprints.filter((bp) => bp._id !== id),
        currentBlueprint: null,
        loading: false,
      }))
    } catch (error) {
      const message = error.response?.data?.detail || 'Failed to delete blueprint'
      set({ error: message, loading: false })
      throw error
    }
  },

  // Clear error
  clearError: () => set({ error: null }),
}))

export default useBlueprint

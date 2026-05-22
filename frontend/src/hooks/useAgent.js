import { create } from 'zustand'
import blueprintApi from '../api/blueprintApi'

const AGENT_TYPES = ['blueprint', 'seo', 'email', 'gtm', 'financial', 'affiliate', 'social']
const POLL_INTERVAL = 2000 // 2 seconds

const useAgent = create((set, get) => ({
  // State: { [blueprintId:agentType]: { running, result, error } }
  agents: {},
  pollingIntervals: {}, // Track active polling timers

  // Get unique key for agent state
  getAgentKey: (blueprintId, agentType) => `${blueprintId}:${agentType}`,

  // Get or init agent state
  getAgentState: (blueprintId, agentType) => {
    const key = get().getAgentKey(blueprintId, agentType)
    return get().agents[key] || { running: false, result: null, error: null }
  },

  // Run agent
  runAgent: async (blueprintId, agentType = 'blueprint') => {
    const key = get().getAgentKey(blueprintId, agentType)
    set((state) => ({
      agents: {
        ...state.agents,
        [key]: { running: true, result: null, error: null },
      },
    }))

    try {
      await blueprintApi.runAgent(blueprintId, agentType)

      // Start polling for results
      get().pollAgentStatus(blueprintId, agentType)

      return true
    } catch (error) {
      const message = error.response?.data?.detail || 'Failed to run agent'
      set((state) => ({
        agents: {
          ...state.agents,
          [key]: { running: false, result: null, error: message },
        },
      }))
      throw error
    }
  },

  // Poll agent status
  pollAgentStatus: (blueprintId, agentType = 'blueprint') => {
    const key = get().getAgentKey(blueprintId, agentType)

    // Clear any existing polling interval
    const existingInterval = get().pollingIntervals[key]
    if (existingInterval) clearInterval(existingInterval)

    // Start new polling interval
    const interval = setInterval(async () => {
      try {
        const { data } = await blueprintApi.getAgentStatus(blueprintId, agentType)

        if (data.status === 'complete' || data.status === 'error') {
          // Results are ready
          set((state) => ({
            agents: {
              ...state.agents,
              [key]: {
                running: false,
                result: data.result,
                error: data.error || null,
              },
            },
            pollingIntervals: {
              ...state.pollingIntervals,
              [key]: null,
            },
          }))

          // Stop polling
          clearInterval(interval)
        }
      } catch (error) {
        console.error(`Error polling ${agentType} agent:`, error)
        // Continue polling on error
      }
    }, POLL_INTERVAL)

    set((state) => ({
      pollingIntervals: {
        ...state.pollingIntervals,
        [key]: interval,
      },
    }))
  },

  // Clear agent state
  clearAgent: (blueprintId, agentType) => {
    const key = get().getAgentKey(blueprintId, agentType)
    const interval = get().pollingIntervals[key]
    if (interval) clearInterval(interval)

    set((state) => {
      const newAgents = { ...state.agents }
      delete newAgents[key]
      const newIntervals = { ...state.pollingIntervals }
      delete newIntervals[key]
      return {
        agents: newAgents,
        pollingIntervals: newIntervals,
      }
    })
  },

  // Clear error for specific agent
  clearError: (blueprintId, agentType) => {
    const key = get().getAgentKey(blueprintId, agentType)
    set((state) => ({
      agents: {
        ...state.agents,
        [key]: {
          ...state.agents[key],
          error: null,
        },
      },
    }))
  },

  // Stop all polling
  stopAllPolling: () => {
    const intervals = get().pollingIntervals
    Object.values(intervals).forEach((interval) => {
      if (interval) clearInterval(interval)
    })
    set({ pollingIntervals: {} })
  },
}))

export default useAgent

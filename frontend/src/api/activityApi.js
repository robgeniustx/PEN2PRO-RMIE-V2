import client from './client'

export const activityApi = {
  getRecent: (limit = 20) =>
    client.get(`/api/activity?limit=${limit}`),

  getByModule: (module, limit = 10) =>
    client.get(`/api/activity?module=${module}&limit=${limit}`),

  log: (action, module, metadata = {}) =>
    client.post('/api/activity', { action, module, metadata }),
}

export default activityApi

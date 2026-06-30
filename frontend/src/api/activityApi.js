import client from './client'

export const logActivity = async (payload) => {
  try {
    return await client.post('/activity', payload)
  } catch {
    return null
  }
}

import client from './client'

export const submitIntake = async (payload) => {
  try {
    const { data } = await client.post('/intake', payload)
    return data
  } catch {
    return null
  }
}

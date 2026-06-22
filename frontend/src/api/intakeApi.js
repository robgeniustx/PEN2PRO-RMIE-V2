import client from './client'

export const submitIntake = (formData) =>
  client.post('/api/blueprints/generate', formData)

export const saveIntakeLead = (formData) =>
  client.post('/api/waitlist', formData)

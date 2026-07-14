import client from './client'
export const trackEvent = async (payload) => client.post('/api/analytics/event', payload)
export const trackFeatureUsage = async (payload) => client.post('/api/analytics/feature-usage', payload)
export const trackConversion = async (payload) => client.post('/api/analytics/conversion', payload)

import client from './client'
export const trackEvent = async (payload) => client.post('/analytics/event', payload)
export const trackFeatureUsage = async (payload) => client.post('/analytics/feature-usage', payload)
export const trackConversion = async (payload) => client.post('/analytics/conversion', payload)

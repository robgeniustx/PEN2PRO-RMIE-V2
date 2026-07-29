import client from './client'
import { mockAdminMetrics } from '../data/mockAdminMetrics'

const safeGet = async (path, fallback, adminKey) => {
  try {
    const { data } = await client.get(path, adminKey ? { headers: { 'x-admin-key': adminKey } } : {})
    return data
  } catch (err) {
    if (err?.status === 403) throw err
    return fallback
  }
}
export const getAdminMetrics = (adminKey) => safeGet('/admin/metrics', mockAdminMetrics, adminKey)
export const getFeatureUsageSummary = (adminKey) => safeGet('/admin/feature-usage', mockAdminMetrics.top_features, adminKey)
export const getModuleUsageSummary = (adminKey) => safeGet('/admin/module-usage', mockAdminMetrics.module_usage, adminKey)
export const getConversionSummary = (adminKey) => safeGet('/admin/conversions', mockAdminMetrics.conversion_summary, adminKey)
export const getFunnelSummary = (adminKey) => safeGet('/admin/funnel', mockAdminMetrics.funnel_summary, adminKey)
export const getRecentActivity = (adminKey) => safeGet('/admin/recent-activity', mockAdminMetrics.recent_activity, adminKey)

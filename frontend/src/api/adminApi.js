import client from './client'
import { mockAdminMetrics } from '../data/mockAdminMetrics'

const safeGet = async (path, fallback) => {
  try { const { data } = await client.get(path); return data } catch { return fallback }
}
export const getAdminMetrics = () => safeGet('/api/admin/metrics', mockAdminMetrics)
export const getFeatureUsageSummary = () => safeGet('/api/admin/feature-usage', mockAdminMetrics.top_features)
export const getModuleUsageSummary = () => safeGet('/api/admin/module-usage', mockAdminMetrics.module_usage)
export const getConversionSummary = () => safeGet('/api/admin/conversions', mockAdminMetrics.conversion_summary)
export const getFunnelSummary = () => safeGet('/api/admin/funnel', mockAdminMetrics.funnel_summary)
export const getRecentActivity = () => safeGet('/api/admin/recent-activity', mockAdminMetrics.recent_activity)

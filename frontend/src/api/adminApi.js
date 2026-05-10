import client from './client'
import { mockAdminMetrics } from '../data/mockAdminMetrics'

const safeGet = async (path, fallback) => {
  try { const { data } = await client.get(path); return data } catch { return fallback }
}
export const getAdminMetrics = () => safeGet('/admin/metrics', mockAdminMetrics)
export const getFeatureUsageSummary = () => safeGet('/admin/feature-usage', mockAdminMetrics.top_features)
export const getModuleUsageSummary = () => safeGet('/admin/module-usage', mockAdminMetrics.module_usage)
export const getConversionSummary = () => safeGet('/admin/conversions', mockAdminMetrics.conversion_summary)
export const getFunnelSummary = () => safeGet('/admin/funnel', mockAdminMetrics.funnel_summary)
export const getRecentActivity = () => safeGet('/admin/recent-activity', mockAdminMetrics.recent_activity)

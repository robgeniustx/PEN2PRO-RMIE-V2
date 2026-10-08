import client from './client'
import { mockAdminMetrics } from '../data/mockAdminMetrics'

// Demo data is for local development only. Production shows empty data rather than fake numbers.
const emptyMetrics = {
  total_users: 0, total_blueprints: 0, total_events: 0, total_upgrade_clicks: 0,
  total_checkouts_started: 0, total_checkouts_completed: 0, estimated_revenue: 0,
  active_tier_counts: {}, top_features: [], module_usage: [], recent_activity: [],
  conversion_summary: {}, funnel_summary: {},
}
const demo = import.meta.env.DEV ? mockAdminMetrics : emptyMetrics

const safeGet = async (path, fallback) => {
  try { const { data } = await client.get(path); return data } catch { return fallback }
}
export const getAdminMetrics = () => safeGet('/admin/metrics', demo)
export const getFeatureUsageSummary = () => safeGet('/admin/feature-usage', demo.top_features)
export const getModuleUsageSummary = () => safeGet('/admin/module-usage', demo.module_usage)
export const getConversionSummary = () => safeGet('/admin/conversions', demo.conversion_summary)
export const getFunnelSummary = () => safeGet('/admin/funnel', demo.funnel_summary)
export const getRecentActivity = () => safeGet('/admin/recent-activity', demo.recent_activity)

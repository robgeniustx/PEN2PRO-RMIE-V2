export const mockAdminMetrics = {
  total_users: 128,
  total_blueprints: 312,
  total_events: 1820,
  total_upgrade_clicks: 94,
  total_checkouts_started: 52,
  total_checkouts_completed: 31,
  estimated_revenue: 8947,
  active_tier_counts: { free: 76, pro: 34, elite: 15, founders: 3 },
  top_features: [
    { feature_name: 'Blueprint Generator', module_name: 'blueprint', usage_count: 212, tier: 'free' },
    { feature_name: 'Social Post Generator', module_name: 'social', usage_count: 144, tier: 'pro' }
  ],
  module_usage: [
    { module_name: 'blueprint', usage_count: 412 },
    { module_name: 'social', usage_count: 221 },
    { module_name: 'crm', usage_count: 183 }
  ],
  conversion_summary: { upgrade_click: 94, checkout_started: 52, checkout_completed: 31, checkout_cancelled: 14, plan_viewed: 210 },
  funnel_summary: { starter_visits: 430, blueprint_generated: 312, pricing_viewed: 210, upgrade_clicked: 94, checkout_started: 52, checkout_completed: 31 },
  recent_activity: [{ event_name: 'blueprint_generated', event_category: 'blueprint', tier: 'free', page_path: '/starter', created_at: new Date().toISOString() }]
}

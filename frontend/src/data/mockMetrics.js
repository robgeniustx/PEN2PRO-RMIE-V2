export const mockMetrics = {
  total_users: 0,
  total_roadmaps: 0,
  waitlist_signups: 0,
  active_tier_counts: {
    free: 0,
    pro: 0,
    elite: 0,
    founders: 0,
  },
  estimated_revenue: "$0",
  conversion_summary: {
    free_to_pro: 0,
    free_to_elite: 0,
    pro_to_elite: 0,
    free_to_founders: 0,
    waitlist_to_paid: 0,
    total: 0,
  },
  top_features: [
    { feature: "Roadmap Generator", count: 0 },
    { feature: "Waitlist", count: 0 },
    { feature: "Pricing", count: 0 },
    { feature: "About", count: 0 },
    { feature: "Starter Form", count: 0 },
  ],
  recent_activity: [],
};

export default mockMetrics;

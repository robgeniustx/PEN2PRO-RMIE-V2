import { mockAdminMetrics } from "../data/mockAdminMetrics";
const API=import.meta.env.VITE_API_BASE_URL || "";
const get=async(path,fallback)=>{try{const r=await fetch(`${API}${path}`); if(!r.ok) throw new Error(); return await r.json();}catch{return fallback;}};
export const getAdminMetrics=()=>get('/api/admin/metrics',mockAdminMetrics);
export const getFeatureUsageSummary=()=>get('/api/admin/feature-usage',mockAdminMetrics.top_features);
export const getModuleUsageSummary=()=>get('/api/admin/module-usage',mockAdminMetrics.module_usage);
export const getConversionSummary=()=>get('/api/admin/conversions',mockAdminMetrics.conversion_summary);
export const getFunnelSummary=()=>get('/api/admin/funnel',mockAdminMetrics.funnel_summary);
export const getRecentActivity=()=>get('/api/admin/recent-activity',mockAdminMetrics.recent_activity);

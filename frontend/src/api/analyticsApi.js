const API=import.meta.env.VITE_API_BASE_URL || "";
const post = (path,payload)=>fetch(`${API}${path}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).then(r=>r.json());
export const trackEvent=(payload)=>post('/api/analytics/event',payload).catch(()=>({ok:false}));
export const trackFeatureUsage=(payload)=>post('/api/analytics/feature-usage',payload).catch(()=>({ok:false}));
export const trackConversion=(payload)=>post('/api/analytics/conversion',payload).catch(()=>({ok:false}));

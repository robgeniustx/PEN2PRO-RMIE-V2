import { leads, customers, followUps, pipelineSummary, followUpMessage, leadScore } from '../data/mockLeads';
const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
async function safeFetch(path, opts={}, fallback){ try{const r=await fetch(`${API}${path}`,opts); if(!r.ok) throw new Error('bad'); return await r.json();}catch{return fallback;} }
export const createLead=(p)=>safeFetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}, {...p,id:Date.now()});
export const listLeads=(f={})=>safeFetch(`/api/leads?status=${f.status||''}&source=${f.source||''}`,{},leads);
export const getLead=(id)=>safeFetch(`/api/leads/${id}`,{},leads.find(l=>l.id===Number(id)));
export const updateLead=(id,p)=>safeFetch(`/api/leads/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}, {...p,id:Number(id)});
export const deleteLead=(id)=>safeFetch(`/api/leads/${id}`,{method:'DELETE'},{status:'deleted'});
export const createCustomer=(p)=>safeFetch('/api/customers',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}, {...p,id:Date.now()});
export const listCustomers=()=>safeFetch('/api/customers',{},customers);
export const getCustomer=(id)=>safeFetch(`/api/customers/${id}`,{},customers.find(c=>c.id===Number(id)));
export const updateCustomer=(id,p)=>safeFetch(`/api/customers/${id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}, {...p,id:Number(id)});
export const createFollowUp=(p)=>safeFetch('/api/follow-ups',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)}, {...p,id:Date.now()});
export const listFollowUps=(f={})=>safeFetch(`/api/follow-ups?status=${f.status||''}`,{},followUps);
export const getDueFollowUps=()=>safeFetch('/api/follow-ups/due',{},followUps);
export const completeFollowUp=(id)=>safeFetch(`/api/follow-ups/${id}/complete`,{method:'PATCH'},{id,status:'completed'});
export const generateFollowUpMessage=(p)=>safeFetch('/api/crm/generate-follow-up',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)},followUpMessage);
export const scoreLead=(p)=>safeFetch('/api/crm/score-lead',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p)},leadScore);
export const getPipelineSummary=()=>safeFetch('/api/crm/pipeline-summary',{},pipelineSummary);

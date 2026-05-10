import { mockFundingReadiness } from '../data/mockCreditReadiness';
const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const safe = async (fn, fallback) => { try { return await fn(); } catch { return fallback; } };
export const generateFundingReadiness=(payload)=>safe(async()=> (await fetch(`${API}/api/funding/readiness`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})).json(), mockFundingReadiness);
export const generateFundingDocumentChecklist=(payload)=>safe(async()=> (await fetch(`${API}/api/funding/document-checklist`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})).json(), {status:'mock_fallback',document_checklist:mockFundingReadiness.document_checklist});
export const generateFundingPathOptions=(payload)=>safe(async()=> (await fetch(`${API}/api/funding/path-options`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)})).json(), {status:'mock_fallback',funding_path_options:mockFundingReadiness.funding_path_options});

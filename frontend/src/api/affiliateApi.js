import { mockAffiliateEngine } from '../data/mockAffiliate'
const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

async function call(path, opts = {}) {
  try {
    const res = await fetch(`${API}${path}`, { headers: { 'Content-Type': 'application/json' }, ...opts })
    if (!res.ok) throw new Error('request failed')
    return res.json()
  } catch {
    return null
  }
}
export const generateAffiliateEngine = async (payload) => (await call('/api/affiliate/generate',{method:'POST', body:JSON.stringify(payload)})) || mockAffiliateEngine
export const generateAffiliateStrategy = async (payload) => (await call('/api/affiliate/strategy',{method:'POST', body:JSON.stringify(payload)})) || {status:'success', niche_strategy: mockAffiliateEngine.niche_strategy, product_categories: mockAffiliateEngine.product_categories}
export const generateAffiliateFunnel = async (payload) => (await call('/api/affiliate/funnel',{method:'POST', body:JSON.stringify(payload)})) || {status:'success', funnel: mockAffiliateEngine.funnel}
export const generateAffiliateContent = async (payload) => (await call('/api/affiliate/content',{method:'POST', body:JSON.stringify(payload)})) || {status:'success', review_post: mockAffiliateEngine.review_post, comparison_post: mockAffiliateEngine.comparison_post, disclosure: mockAffiliateEngine.disclosure}
export const createAffiliateLink = async (payload) => (await call('/api/affiliate/links',{method:'POST', body:JSON.stringify(payload)})) || payload
export const listAffiliateLinks = async () => (await call('/api/affiliate/links')) || mockAffiliateEngine.link_tracker
export const getAffiliateLink = async (id) => (await call(`/api/affiliate/links/${id}`))
export const updateAffiliateLink = async (id,payload) => (await call(`/api/affiliate/links/${id}`,{method:'PATCH', body:JSON.stringify(payload)}))
export const deleteAffiliateLink = async (id) => (await call(`/api/affiliate/links/${id}`,{method:'DELETE'}))

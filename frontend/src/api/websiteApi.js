import { mockWebsiteBuilder } from '../data/mockWebsiteBuilder';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

async function safePost(path, payload, fallback) {
  try {
    const r = await fetch(`${API}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!r.ok) throw new Error('request failed');
    return await r.json();
  } catch {
    return fallback;
  }
}

export const generateWebsiteBuilder = (payload) => safePost('/api/website/generate', payload, mockWebsiteBuilder);
export const generateLandingPage = (payload) => safePost('/api/website/landing-page', payload, { status: 'success', landing_page: mockWebsiteBuilder.landing_page });
export const generateSeoAssets = (payload) => safePost('/api/website/seo', payload, { status: 'success', seo: mockWebsiteBuilder.seo, service_pages: mockWebsiteBuilder.service_pages });
export const generateBrandKit = (payload) => safePost('/api/website/brand-kit', payload, { status: 'success', brand_direction: mockWebsiteBuilder.brand_direction });

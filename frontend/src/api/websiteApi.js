import { mockWebsiteBuilder } from '../data/mockWebsiteBuilder';
import { authHeaders } from './authApi';

const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

async function safePost(path, payload, fallback) {
  try {
    const r = await fetch(`${API}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', ...authHeaders() }, body: JSON.stringify(payload) });
    const body = await r.json().catch(() => ({}));
    if (!r.ok) {
      const error = new Error(typeof body.detail === 'string' ? body.detail : 'Request failed');
      error.status = r.status;
      throw error;
    }
    return body;
  } catch (error) {
    // Sample output is for local development only. Visitors always see the real error.
    if (import.meta.env.DEV && !error.status) return fallback;
    throw error;
  }
}

export const generateWebsiteBuilder = (payload) => safePost('/api/website/generate', payload, mockWebsiteBuilder);
export const generateLandingPage = (payload) => safePost('/api/website/landing-page', payload, { status: 'success', landing_page: mockWebsiteBuilder.landing_page });
export const generateSeoAssets = (payload) => safePost('/api/website/seo', payload, { status: 'success', seo: mockWebsiteBuilder.seo, service_pages: mockWebsiteBuilder.service_pages });
export const generateBrandKit = (payload) => safePost('/api/website/brand-kit', payload, { status: 'success', brand_direction: mockWebsiteBuilder.brand_direction });

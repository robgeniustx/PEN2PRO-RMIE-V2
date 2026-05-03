import { mockSocialEngine } from '../data/mockSocialCalendar';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const safeFetch = async (path, payload, fallback) => {
  try {
    const res = await fetch(`${API_BASE}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error('Request failed');
    return await res.json();
  } catch {
    return fallback;
  }
};

export const generateSocialEngine = (payload) => safeFetch('/api/social/generate', payload, mockSocialEngine);
export const generateSocialCalendar = (payload) => safeFetch('/api/social/calendar', payload, { status: 'success', calendar: mockSocialEngine.calendar7 });
export const generateSocialPosts = (payload) => safeFetch('/api/social/posts', payload, { status: 'success', posts: mockSocialEngine.posts });
export const generateSocialScripts = (payload) => safeFetch('/api/social/scripts', payload, { status: 'success', scripts: mockSocialEngine.scripts });
export const generateBrandVoice = (payload) => safeFetch('/api/social/brand-voice', payload, { status: 'success', brand_voice: mockSocialEngine.brand_voice });

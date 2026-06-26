const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || 'http://localhost:8000';

const client = {
  get: async (path) => {
    const token = localStorage.getItem('pen2pro_token');
    const res = await fetch(`${API_BASE_URL}/api${path}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json() };
  },
  post: async (path, body) => {
    const token = localStorage.getItem('pen2pro_token');
    const res = await fetch(`${API_BASE_URL}/api${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json() };
  },
  patch: async (path, body) => {
    const token = localStorage.getItem('pen2pro_token');
    const res = await fetch(`${API_BASE_URL}/api${path}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json() };
  },
  delete: async (path) => {
    const token = localStorage.getItem('pen2pro_token');
    const res = await fetch(`${API_BASE_URL}/api${path}`, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return { data: await res.json() };
  },
};

export default client;

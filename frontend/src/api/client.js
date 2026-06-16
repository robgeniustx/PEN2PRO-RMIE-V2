const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const getHeaders = () => {
  const token = localStorage.getItem('pen2pro_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

const request = async (method, path, body) => {
  const res = await fetch(`${API_BASE}/api${path}`, {
    method,
    headers: getHeaders(),
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });

  if (!res.ok) {
    const err = new Error(`HTTP ${res.status}`);
    err.status = res.status;
    try { err.data = await res.json(); } catch { err.data = null; }
    throw err;
  }

  const data = await res.json();
  return { data };
};

const client = {
  get: (path) => request('GET', path),
  post: (path, body) => request('POST', path, body),
  patch: (path, body) => request('PATCH', path, body),
  delete: (path) => request('DELETE', path),
};

export default client;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

const request = async (path, options = {}) => {
  const res = await fetch(`${API_BASE_URL}/api${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });
  const contentType = res.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await res.json()
    : await res.text();
  if (!res.ok) {
    const error = new Error(`Request failed with status ${res.status}`);
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return { data };
};

const client = {
  get: (path, options = {}) => request(path, { method: 'GET', ...options }),
  post: (path, body, options = {}) =>
    request(path, { method: 'POST', body: JSON.stringify(body), ...options }),
  patch: (path, body, options = {}) =>
    request(path, { method: 'PATCH', body: JSON.stringify(body), ...options }),
  delete: (path, options = {}) => request(path, { method: 'DELETE', ...options }),
};

export default client;

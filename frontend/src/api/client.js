const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json')
    ? await response.json()
    : await response.text()

  if (!response.ok) {
    const error = new Error(`Request failed with status ${response.status}`)
    error.status = response.status
    error.data = payload
    throw error
  }

  return { data: payload }
}

const client = {
  get: (path, options = {}) => request(path, { method: 'GET', ...options }),
  post: (path, body, options = {}) =>
    request(path, { method: 'POST', body: JSON.stringify(body), ...options }),
  patch: (path, body, options = {}) =>
    request(path, { method: 'PATCH', body: JSON.stringify(body), ...options }),
  delete: (path, options = {}) => request(path, { method: 'DELETE', ...options }),
}

export default client

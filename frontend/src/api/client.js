// frontend/src/api/client.js

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_BACKEND_URL ||
  "https://pen2pro-rmie-v2.onrender.com";

function normalizeBaseUrl(url) {
  return String(url || "")
    .trim()
    .replace(/\/+$/, "");
}

const BASE_URL = normalizeBaseUrl(API_BASE_URL);

async function parseResponse(response) {
  const contentType = response.headers.get("content-type") || "";

  let data = null;

  if (contentType.includes("application/json")) {
    data = await response.json();
  } else {
    data = await response.text();
  }

  if (!response.ok) {
    const message =
      data?.detail ||
      data?.message ||
      data?.error ||
      `API request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data;
}

function buildUrl(path) {
  if (!path) {
    throw new Error("API path is required.");
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${cleanPath}`;
}

export async function apiRequest(path, options = {}) {
  const {
    method = "GET",
    body,
    headers = {},
    token,
    ...rest
  } = options;

  const requestHeaders = {
    Accept: "application/json",
    ...headers,
  };

  const config = {
    method,
    headers: requestHeaders,
    ...rest,
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (body !== undefined && body !== null) {
    if (body instanceof FormData) {
      config.body = body;
    } else {
      config.headers["Content-Type"] = "application/json";
      config.body = JSON.stringify(body);
    }
  }

  const response = await fetch(buildUrl(path), config);
  return parseResponse(response);
}

export const apiClient = {
  get(path, options = {}) {
    return apiRequest(path, {
      ...options,
      method: "GET",
    });
  },

  post(path, body, options = {}) {
    return apiRequest(path, {
      ...options,
      method: "POST",
      body,
    });
  },

  put(path, body, options = {}) {
    return apiRequest(path, {
      ...options,
      method: "PUT",
      body,
    });
  },

  patch(path, body, options = {}) {
    return apiRequest(path, {
      ...options,
      method: "PATCH",
      body,
    });
  },

  delete(path, options = {}) {
    return apiRequest(path, {
      ...options,
      method: "DELETE",
    });
  },
};

export function getApiBaseUrl() {
  return BASE_URL;
}

export default apiClient;

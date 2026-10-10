const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TOKEN_KEY = "pen2pro_token";
const USER_KEY = "pen2pro_user";
const PENDING_CLAIM_KEY = "pen2pro_pending_claim";

const read = (key) => {
  try { return localStorage.getItem(key) || ""; } catch { return ""; }
};
const write = (key, value) => {
  try { localStorage.setItem(key, value); } catch { /* storage unavailable */ }
};
const remove = (key) => {
  try { localStorage.removeItem(key); } catch { /* storage unavailable */ }
};

export const getToken = () => read(TOKEN_KEY);
export const isSignedIn = () => !!getToken();

export const getStoredUser = () => {
  try { return JSON.parse(read(USER_KEY) || "null"); } catch { return null; }
};

export const authHeaders = () => (getToken() ? { Authorization: `Bearer ${getToken()}` } : {});

export const saveSession = (session) => {
  if (session.access_token) write(TOKEN_KEY, session.access_token);
  write(USER_KEY, JSON.stringify({ name: session.name, email: session.email, tier: session.tier, role: session.role || "member" }));
};

export const signOut = () => {
  remove(TOKEN_KEY);
  remove(USER_KEY);
  window.dispatchEvent(new Event("pen2pro-auth"));
};

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

// Authenticated JSON request. A 401 clears the stale session so the UI sends the user back to sign in.
export async function apiRequest(path, { method = "GET", body, auth = true } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { "Content-Type": "application/json", ...(auth ? authHeaders() : {}) },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 && auth) signOut();
  if (!res.ok) {
    const detail = Array.isArray(data.detail) ? data.detail.map((d) => d.msg).join(". ") : data.detail;
    throw new ApiError(detail || `Request failed (${res.status})`, res.status);
  }
  return data;
}

// Refresh the plan and role from the server (the server, not the browser, decides what is unlocked).
export async function refreshUser() {
  const me = await apiRequest("/api/auth/me");
  const current = getStoredUser() || {};
  write(USER_KEY, JSON.stringify({ ...current, ...me }));
  return me;
}

export const rememberPendingClaim = (sessionId) => write(PENDING_CLAIM_KEY, sessionId);
export const getPendingClaim = () => read(PENDING_CLAIM_KEY);
export const clearPendingClaim = () => remove(PENDING_CLAIM_KEY);

// Attach a paid checkout to the signed-in account and unlock its plan.
export async function claimPurchase(sessionId) {
  const session = await apiRequest("/api/auth/claim-purchase", { method: "POST", body: { session_id: sessionId } });
  saveSession(session);
  clearPendingClaim();
  window.dispatchEvent(new Event("pen2pro-auth"));
  return session;
}

// After signing in, finish any purchase that was made before the account existed.
export async function claimPendingPurchase() {
  const pending = getPendingClaim();
  if (!pending) return null;
  try { return await claimPurchase(pending); } catch { clearPendingClaim(); return null; }
}

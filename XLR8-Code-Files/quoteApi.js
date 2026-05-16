/**
 * XLR8 Pressure Washing Services — Quote API Client
 * quoteApi.js
 *
 * All frontend calls to the backend quote endpoints.
 * Set VITE_API_URL in your .env file.
 */

const API_BASE = import.meta.env.VITE_API_URL || '';

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function post(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Request failed' }));
    throw new Error(err.detail || `HTTP ${res.status}`);
  }
  return res.json();
}

async function get(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: 'Not found' }));
    throw new Error(err.detail || `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── Quote API ────────────────────────────────────────────────────────────────

/**
 * Calculate a quote server-side.
 * The server runs the same pricingConfig logic as a source of truth.
 *
 * @param {string} serviceKey
 * @param {object} inputs  — sqFt, stories, buildupLevel, propertyType, urgency, hasWater, isExtended, selectedAddOns
 * @returns {object}  — { lineItems, subtotal, tax, total, depositAmount, balanceDue, requiresDeposit, requiresCustomQuote }
 */
export async function calculateQuoteServer(serviceKey, inputs) {
  return post('/api/quotes/calculate', { service_key: serviceKey, inputs });
}

/**
 * Save a quote to the database.
 * Call this after the quote is shown to the customer (before payment).
 *
 * @param {object} quotePayload
 * @returns {object} — { quote_id, status, created_at }
 */
export async function createQuote(quotePayload) {
  return post('/api/quotes/create', quotePayload);
}

/**
 * Retrieve a saved quote by ID.
 *
 * @param {string} quoteId
 * @returns {object} — full quote record
 */
export async function getQuote(quoteId) {
  return get(`/api/quotes/${quoteId}`);
}

/**
 * Update quote status (e.g., customer_approved, pending_payment)
 *
 * @param {string} quoteId
 * @param {string} status
 * @returns {object}
 */
export async function updateQuoteStatus(quoteId, status) {
  return post(`/api/quotes/${quoteId}/status`, { status });
}

// ─── Invoice API ──────────────────────────────────────────────────────────────

/**
 * Create an invoice record from an accepted quote.
 *
 * @param {object} invoicePayload — { quote_id, customer, line_items, total, deposit_amount }
 * @returns {object} — { invoice_id, invoice_number, status }
 */
export async function createInvoice(invoicePayload) {
  return post('/api/invoices/create', invoicePayload);
}

/**
 * Retrieve an invoice by ID.
 *
 * @param {string} invoiceId
 * @returns {object}
 */
export async function getInvoice(invoiceId) {
  return get(`/api/invoices/${invoiceId}`);
}

// ─── Notification API ─────────────────────────────────────────────────────────

/**
 * Send an owner notification event.
 *
 * @param {string} eventType — e.g. 'quote_created', 'quote_accepted', 'payment_received'
 * @param {object} payload
 */
export async function notifyOwner(eventType, payload = {}) {
  try {
    await post('/api/notifications/owner', {
      event_type: eventType,
      timestamp: new Date().toISOString(),
      ...payload,
    });
  } catch (_) {
    // Non-blocking — swallow silently
  }
}

// ─── Admin API ────────────────────────────────────────────────────────────────

/**
 * Retrieve all quotes for the admin dashboard.
 * Protected server-side by ADMIN_ACCESS_KEY header.
 *
 * @param {string} adminKey — value of ADMIN_ACCESS_KEY env var
 * @returns {object[]}
 */
export async function adminGetQuotes(adminKey) {
  const res = await fetch(`${API_BASE}/api/admin/quotes`, {
    headers: { 'X-Admin-Key': adminKey },
  });
  if (!res.ok) throw new Error('Unauthorized or fetch failed');
  return res.json();
}

export async function adminGetMetrics(adminKey) {
  const res = await fetch(`${API_BASE}/api/admin/metrics`, {
    headers: { 'X-Admin-Key': adminKey },
  });
  if (!res.ok) throw new Error('Unauthorized or fetch failed');
  return res.json();
}

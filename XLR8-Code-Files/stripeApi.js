/**
 * XLR8 Pressure Washing Services — Stripe API Client
 * stripeApi.js
 *
 * Frontend Stripe interaction layer.
 * All Stripe secret operations happen server-side (FastAPI).
 * This file only handles the redirect flow and session status check.
 */

const API_BASE = import.meta.env.VITE_API_URL || '';

/**
 * Create a Stripe Checkout Session on the server and redirect the customer.
 *
 * CRITICAL: The amount passed here must exactly match what was displayed
 * in the ItemizedInvoice before the customer approved.
 *
 * @param {object} params
 * @param {string} params.quoteId
 * @param {string} params.invoiceId  (optional — if invoice was already created)
 * @param {object} params.customer   — { name, email, phone, serviceAddress, propertyType }
 * @param {string} params.serviceLabel
 * @param {object[]} params.lineItems  — array of { label, amount } in cents
 * @param {number} params.totalCents   — full quote total in cents
 * @param {number} params.depositCents — amount to charge now (may equal totalCents)
 * @param {boolean} params.requiresDeposit
 * @param {number} params.balanceDueCents
 * @param {string} [params.preferredDate]
 */
export async function createCheckoutSession(params) {
  const {
    quoteId,
    invoiceId,
    customer,
    serviceLabel,
    lineItems,
    totalCents,
    depositCents,
    requiresDeposit,
    balanceDueCents,
    preferredDate,
  } = params;

  const response = await fetch(`${API_BASE}/api/stripe/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      quote_id: quoteId,
      invoice_id: invoiceId || null,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_phone: customer.phone,
      service_address: customer.serviceAddress,
      property_type: customer.propertyType,
      selected_service: serviceLabel,
      line_items: lineItems,
      calculated_total: totalCents,
      deposit_amount: depositCents,
      requires_deposit: requiresDeposit,
      balance_due: balanceDueCents,
      preferred_date: preferredDate || null,
      success_url: `${window.location.origin}/booking-confirmed?session_id={CHECKOUT_SESSION_ID}&quote_id=${quoteId}`,
      cancel_url: `${window.location.origin}/instant-quote?cancelled=true&quote_id=${quoteId}`,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Could not create Stripe checkout session. Please try again or call 832-459-5981.');
  }

  const { checkout_url, session_id } = await response.json();
  return { checkoutUrl: checkout_url, sessionId: session_id };
}

/**
 * Check the status of a completed Stripe session.
 * Call this on the /booking-confirmed page to confirm payment and show receipt.
 *
 * @param {string} sessionId — from ?session_id= URL param on success redirect
 * @returns {object} — { status, customer_email, amount_total, payment_status, metadata }
 */
export async function getSessionStatus(sessionId) {
  const res = await fetch(`${API_BASE}/api/stripe/session-status/${sessionId}`);
  if (!res.ok) throw new Error('Could not retrieve session status');
  return res.json();
}

/**
 * Redirect helper — call this after createCheckoutSession succeeds.
 * Separated so it can be mocked in tests.
 */
export function redirectToStripe(checkoutUrl) {
  window.location.href = checkoutUrl;
}

/**
 * XLR8 Pressure Washing Services — Analytics & Event Tracking Utility
 * analytics.js
 *
 * Setup:
 *   npm install react-ga4
 *
 * In your main.jsx or App.jsx, initialize once:
 *   import { initAnalytics } from './utils/analytics';
 *   initAnalytics();
 *
 * Then call trackEvent helpers anywhere in the app.
 *
 * Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID from:
 *   Google Analytics → Admin → Data Streams → your stream → Measurement ID
 */

import ReactGA from 'react-ga4';

const GA4_ID = import.meta.env.VITE_GA4_ID || 'G-XXXXXXXXXX';
const OWNER_WEBHOOK_URL = import.meta.env.VITE_OWNER_WEBHOOK_URL || '';
const API_BASE = import.meta.env.VITE_API_URL || '';

let initialized = false;

// ─── Initialization ─────────────────────────────────────────────────────────

export function initAnalytics() {
  if (initialized || !GA4_ID || GA4_ID === 'G-XXXXXXXXXX') return;
  ReactGA.initialize(GA4_ID, {
    gaOptions: { send_page_view: true },
  });
  initialized = true;
}

// ─── Core Event Tracker ──────────────────────────────────────────────────────

export function trackEvent(category, action, label = '', value = 0) {
  if (!initialized) return;
  ReactGA.event({ category, action, label, value: Math.round(value) });
}

// ─── Page Tracking ───────────────────────────────────────────────────────────

export function trackPageView(path, title) {
  if (!initialized) return;
  ReactGA.send({ hitType: 'pageview', page: path, title });
}

// ─── High-Intent Event Helpers ───────────────────────────────────────────────

/** Visitor clicks any "Get a Quote" or "Instant Quote" CTA */
export function trackQuoteButtonClick(location = '') {
  trackEvent('Quote', 'quote_button_click', location);
}

/** Visitor starts filling out the quote form (first interaction) */
export function trackQuoteStart() {
  trackEvent('Quote', 'quote_start', 'Instant Quote Form');
  sendOwnerNotification('quote_start', { note: 'Visitor started the quote form' });
}

/** Quote is fully calculated and shown to customer */
export function trackQuoteGenerated(amountCents = 0, serviceLabel = '') {
  trackEvent('Quote', 'quote_generated', serviceLabel, Math.round(amountCents / 100));
  sendOwnerNotification('quote_generated', {
    service: serviceLabel,
    estimated_total: `$${(amountCents / 100).toFixed(2)}`,
  });
}

/** Customer submits the quote form (custom quote or commercial request) */
export function trackQuoteSubmit(amountCents = 0, serviceLabel = '') {
  trackEvent('Quote', 'quote_submit', serviceLabel, Math.round(amountCents / 100));
}

/** Customer accepted quote terms and is ready to pay */
export function trackQuoteAccepted(quoteId = '', amountCents = 0) {
  trackEvent('Quote', 'quote_accepted', quoteId, Math.round(amountCents / 100));
  sendOwnerNotification('quote_accepted', {
    quote_id: quoteId,
    total: `$${(amountCents / 100).toFixed(2)}`,
    note: 'Customer accepted the quote — awaiting payment',
  });
}

/** Customer was redirected to Stripe checkout */
export function trackCheckoutStarted(quoteId = '', amountCents = 0) {
  trackEvent('Payment', 'checkout_started', quoteId, Math.round(amountCents / 100));
}

/** Visitor clicks phone number link */
export function trackPhoneClick(location = '') {
  trackEvent('Contact', 'phone_click', location || '832-459-5981');
  sendOwnerNotification('phone_click', {
    note: `Visitor clicked the phone number from: ${location || 'unknown page'}`,
  });
}

/** Visitor clicks SMS/text link */
export function trackSMSClick(location = '') {
  trackEvent('Contact', 'sms_click', location);
}

/** Visitor clicks the booking / confirm appointment button */
export function trackBookingStart() {
  trackEvent('Booking', 'booking_start', 'Appointment Form');
}

export function trackBookingComplete(service = '') {
  trackEvent('Booking', 'booking_complete', service);
  sendOwnerNotification('booking_complete', {
    service,
    note: 'Customer completed a booking',
  });
}

/** Visitor requests a commercial quote */
export function trackCommercialQuote(customerName = '') {
  trackEvent('Commercial', 'commercial_quote_request', customerName || 'Unknown');
  sendOwnerNotification('commercial_quote_request', {
    customer: customerName,
    note: 'Commercial quote form submitted — high priority lead',
  });
}

/** Visitor downloads the capability statement */
export function trackCapabilityDownload() {
  trackEvent('Commercial', 'capability_download', 'Capability Statement PDF');
  sendOwnerNotification('capability_download', {
    note: 'Capability statement was downloaded — likely a commercial/vendor prospect',
  });
}

// ─── Owner Webhook Notification ──────────────────────────────────────────────

/**
 * Sends a high-intent action notification to the backend,
 * which then emails/texts the owner.
 *
 * This is fire-and-forget — never blocks UI.
 */
async function sendOwnerNotification(eventType, payload = {}) {
  if (!OWNER_WEBHOOK_URL && !API_BASE) return;
  try {
    const endpoint = OWNER_WEBHOOK_URL || `${API_BASE}/api/notifications/owner`;
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: eventType,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
        referrer: document.referrer || 'direct',
        user_agent: navigator.userAgent,
        ...payload,
      }),
    });
  } catch (_) {
    // Non-blocking: swallow silently
  }
}

// ─── Visitor Session Log (for admin dashboard) ───────────────────────────────

/**
 * Log a visitor event to the backend admin log.
 * Used to build the optional admin-only visitor activity log.
 */
export async function logVisitorEvent(eventType, metadata = {}) {
  if (!API_BASE) return;
  try {
    await fetch(`${API_BASE}/api/analytics/log`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_type: eventType,
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
        utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
        utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
        ref: new URLSearchParams(window.location.search).get('ref') || '',
        ...metadata,
      }),
    });
  } catch (_) {
    // Non-blocking
  }
}

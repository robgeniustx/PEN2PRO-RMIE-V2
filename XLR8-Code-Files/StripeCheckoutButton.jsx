/**
 * XLR8 Pressure Washing Services
 * StripeCheckoutButton.jsx
 *
 * Calls your FastAPI backend to create a Stripe Checkout Session,
 * then redirects the customer to Stripe's hosted checkout page.
 *
 * Usage:
 *   <StripeCheckoutButton quoteData={quoteData} />
 */

import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://your-api.onrender.com';

export default function StripeCheckoutButton({ quoteData, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote_id: quoteData.quoteId,
          customer_name: quoteData.customer.name,
          customer_email: quoteData.customer.email,
          customer_phone: quoteData.customer.phone,
          service_address: quoteData.customer.serviceAddress,
          selected_service: quoteData.selectedServiceLabel,
          line_items: quoteData.result.lineItems,
          calculated_total: quoteData.result.total,
          deposit_amount: quoteData.result.depositAmount,
          requires_deposit: quoteData.result.requiresDeposit,
          balance_due: quoteData.result.balanceDue,
          property_type: quoteData.customer.propertyType,
          preferred_date: quoteData.service.preferredDate,
          preferred_time: quoteData.service.preferredTime,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || 'Failed to create checkout session');
      }

      const { checkout_url, session_id } = await response.json();

      // Critical: Stripe total MUST match what we showed the customer
      onSuccess && onSuccess(session_id);

      // Redirect to Stripe
      window.location.href = checkout_url;

    } catch (err) {
      console.error('Stripe checkout error:', err);
      onError && onError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-lg transition text-lg"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Redirecting to Stripe...
        </span>
      ) : (
        'Proceed to Secure Payment →'
      )}
    </button>
  );
}

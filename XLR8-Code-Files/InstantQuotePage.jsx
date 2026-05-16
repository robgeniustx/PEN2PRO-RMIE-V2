/**
 * XLR8 Pressure Washing Services
 * InstantQuotePage.jsx — Full Quote Flow Page
 *
 * Orchestrates: QuoteCalculator → ItemizedInvoice → StripeCheckoutButton
 *
 * Route: /instant-quote  (or whatever your router uses)
 */

import { useState } from 'react';
import QuoteCalculator from './QuoteCalculator';
import ItemizedInvoice from './ItemizedInvoice';
import StripeCheckoutButton from './StripeCheckoutButton';
import { trackQuoteStart, trackQuoteSubmit, trackCommercialQuote } from './analytics';

const STEPS = { FORM: 'form', INVOICE: 'invoice', SUCCESS: 'success', ERROR: 'error' };

export default function InstantQuotePage() {
  const [step, setStep] = useState(STEPS.FORM);
  const [quoteData, setQuoteData] = useState(null);
  const [stripeLoading, setStripeLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleQuoteGenerated = async (data) => {
    setQuoteData(data);

    // Save quote to backend
    try {
      const isCommercial = ['commercial', 'hoa', 'apartment', 'government'].includes(data.customer.propertyType);
      isCommercial ? trackCommercialQuote() : trackQuoteSubmit(data.result?.total || 0);

      await fetch(`${import.meta.env.VITE_API_URL || ''}/api/quotes/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quote_id: data.quoteId,
          customer: data.customer,
          service_key: data.service.serviceKey,
          service_label: data.selectedServiceLabel,
          line_items: data.result?.lineItems || [],
          total: data.result?.total || 0,
          deposit_amount: data.result?.depositAmount || 0,
          requires_custom_quote: data.result?.requiresCustomQuote || false,
          preferred_date: data.service.preferredDate,
          preferred_time: data.service.preferredTime,
          created_at: data.createdAt,
        }),
      });
    } catch (err) {
      // Non-blocking: quote still proceeds even if backend save fails
      console.warn('Could not save quote to backend:', err);
    }

    setStep(STEPS.INVOICE);
  };

  const handlePay = () => {
    setStripeLoading(true);
  };

  const handleStripeSuccess = (sessionId) => {
    console.log('Stripe session created:', sessionId);
    // Redirect happens inside StripeCheckoutButton
  };

  const handleStripeError = (msg) => {
    setStripeLoading(false);
    setErrorMsg(msg || 'Payment could not be processed. Please try again or call 832-459-5981.');
    setStep(STEPS.ERROR);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-gray-900 text-white py-3 px-4 text-center text-sm">
        Questions? Call <a href="tel:8324595981" className="font-bold underline">832-459-5981</a>
        {' '}· XLR8 Pressure Washing Services · Houston, TX · Veteran-Owned
      </div>

      {step === STEPS.FORM && (
        <div onClick={() => { if (quoteData === null) trackQuoteStart(); }}>
          <QuoteCalculator onQuoteGenerated={handleQuoteGenerated} />
        </div>
      )}

      {step === STEPS.INVOICE && quoteData && (
        <div>
          <ItemizedInvoice
            quoteData={quoteData}
            onPay={handlePay}
            loading={stripeLoading}
          />
          {stripeLoading && quoteData.result && !quoteData.result.requiresCustomQuote && (
            <div className="max-w-2xl mx-auto px-4 pb-8">
              <StripeCheckoutButton
                quoteData={quoteData}
                onSuccess={handleStripeSuccess}
                onError={handleStripeError}
              />
            </div>
          )}
          <div className="text-center pb-8">
            <button onClick={() => { setStep(STEPS.FORM); setStripeLoading(false); }}
              className="text-gray-400 text-sm hover:text-gray-600 underline">
              ← Start over / Change service
            </button>
          </div>
        </div>
      )}

      {step === STEPS.ERROR && (
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-6">{errorMsg}</p>
          <div className="space-y-3">
            <button onClick={() => setStep(STEPS.INVOICE)}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Try Again
            </button>
            <a href="tel:8324595981"
              className="block w-full bg-gray-100 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-200 transition">
              📞 Call Us — 832-459-5981
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

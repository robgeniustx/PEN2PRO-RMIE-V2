/**
 * XLR8 Pressure Washing Services
 * ItemizedInvoice.jsx — Quote Review & Invoice Component
 *
 * Shows the customer the full itemized invoice BEFORE payment.
 * Customer must accept terms before Stripe checkout is enabled.
 *
 * Props:
 *   quoteData: { quoteId, customer, service, selectedServiceLabel, result, createdAt }
 *   onAccept: (termsAccepted: boolean) => void
 *   onPay: () => void
 *   loading: boolean
 */

import { useState } from 'react';
import { formatPrice } from './pricingConfig';

export default function ItemizedInvoice({ quoteData, onPay, loading }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [customerApproved, setCustomerApproved] = useState(false);

  const { quoteId, customer, service, selectedServiceLabel, result, createdAt } = quoteData;
  const expiresAt = new Date(new Date(createdAt).getTime() + 48 * 60 * 60 * 1000).toLocaleDateString();

  if (result?.requiresCustomQuote) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow border border-gray-100 p-8 text-center">
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Custom Quote Request Submitted</h2>
          <p className="text-gray-600 mb-4">
            Thank you, <strong>{customer.name}</strong>. Your custom quote request for <strong>{selectedServiceLabel}</strong> has been received.
          </p>
          <p className="text-gray-600">
            Our team will contact you at <strong>{customer.phone}</strong> or <strong>{customer.email}</strong> within 24–48 hours with a formal written proposal.
          </p>
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              Have questions? Call us at <strong>832-459-5981</strong> or email <strong>info@xlr8pws.com</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const canPay = termsAccepted && customerApproved;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Invoice Header */}
      <div className="bg-gray-900 text-white rounded-t-xl p-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold">XLR8 Pressure Washing Services</h1>
            <p className="text-gray-400 text-sm mt-1">Houston, Texas · Veteran-Owned</p>
            <p className="text-gray-400 text-sm">📞 832-459-5981 · info@xlr8pws.com</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs uppercase tracking-wider">Quote</p>
            <p className="text-white font-mono text-sm">{quoteId}</p>
            <p className="text-gray-400 text-xs mt-1">Created: {new Date(createdAt).toLocaleDateString()}</p>
            <p className="text-gray-400 text-xs">Expires: {expiresAt}</p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 border-t-0">
        {/* Customer Info */}
        <div className="grid grid-cols-2 gap-6 p-6 border-b border-gray-100">
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Bill To</p>
            <p className="font-semibold text-gray-900">{customer.name}</p>
            <p className="text-gray-600 text-sm">{customer.serviceAddress}</p>
            <p className="text-gray-600 text-sm">{customer.email}</p>
            <p className="text-gray-600 text-sm">{customer.phone}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Service Details</p>
            <p className="font-semibold text-gray-900">{selectedServiceLabel}</p>
            {service.preferredDate && (
              <p className="text-gray-600 text-sm">Preferred Date: {service.preferredDate}</p>
            )}
            {service.preferredTime && (
              <p className="text-gray-600 text-sm">Preferred Time: {service.preferredTime}</p>
            )}
            <p className="text-gray-600 text-sm capitalize">Property: {customer.propertyType}</p>
          </div>
        </div>

        {/* Line Items */}
        <div className="p-6 border-b border-gray-100">
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">Service Breakdown</p>
          <table className="w-full">
            <thead>
              <tr className="text-xs uppercase tracking-wider text-gray-400 border-b border-gray-100">
                <th className="text-left pb-2">Description</th>
                <th className="text-right pb-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {result.lineItems.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-50">
                  <td className="py-2 text-sm text-gray-700">{item.label}</td>
                  <td className="py-2 text-sm text-gray-900 text-right font-medium">{formatPrice(item.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="p-6 border-b border-gray-100">
          <div className="space-y-2 max-w-xs ml-auto">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">{formatPrice(result.subtotal)}</span>
            </div>
            {result.tax > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">{formatPrice(result.tax)}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
              <span className="text-gray-900">Total</span>
              <span className="text-gray-900">{formatPrice(result.total)}</span>
            </div>
            {result.requiresDeposit && (
              <>
                <div className="flex justify-between text-sm text-blue-700 font-semibold">
                  <span>Deposit Due Now (50%)</span>
                  <span>{formatPrice(result.depositAmount)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Balance Due at Service</span>
                  <span>{formatPrice(result.balanceDue)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Disclaimers */}
        <div className="p-6 border-b border-gray-100 bg-amber-50">
          <p className="text-xs text-amber-800 font-semibold mb-1">Important Notice:</p>
          <p className="text-xs text-amber-700">
            This quote is an estimate based on information provided. Final pricing may be adjusted after on-site
            assessment based on actual square footage, surface condition, access, and scope of work.
            Excessive buildup, inaccessible areas, lack of water access, or unsafe conditions may affect final price.
            Commercial jobs over $1,000 may require a formal written proposal.
          </p>
        </div>

        {/* Terms Acceptance */}
        <div className="p-6 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 h-4 w-4"
              checked={termsAccepted} onChange={e => setTermsAccepted(e.target.checked)} />
            <span className="text-sm text-gray-700">
              I understand that this quote is an estimate. Final pricing may vary based on on-site conditions.
              By proceeding, I agree to XLR8 Pressure Washing Services' terms and cancellation policy.
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 h-4 w-4"
              checked={customerApproved} onChange={e => setCustomerApproved(e.target.checked)} />
            <span className="text-sm text-gray-700 font-semibold">
              I approve this quote and authorize XLR8 Pressure Washing Services to proceed with scheduling.
            </span>
          </label>
        </div>

        {/* Payment Buttons */}
        <div className="p-6 pt-0 space-y-3">
          <button
            onClick={onPay}
            disabled={!canPay || loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed
              text-white font-bold py-4 px-6 rounded-lg transition text-lg">
            {loading
              ? 'Processing...'
              : result.requiresDeposit
                ? `Pay Deposit Now — ${formatPrice(result.depositAmount)}`
                : `Pay in Full — ${formatPrice(result.total)}`
            }
          </button>
          {!canPay && (
            <p className="text-xs text-center text-gray-400">Please accept the terms above to continue.</p>
          )}
          <p className="text-xs text-center text-gray-400">
            🔒 Secure payment powered by Stripe. XLR8 does not store your card information.
          </p>
          <div className="text-center">
            <a href="tel:8324595981" className="text-blue-600 text-sm hover:underline">
              Prefer to pay by phone? Call 832-459-5981
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

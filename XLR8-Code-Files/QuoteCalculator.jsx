/**
 * XLR8 Pressure Washing Services
 * QuoteCalculator.jsx — Instant Quote Form Component
 *
 * Usage: <QuoteCalculator onQuoteGenerated={(quoteData) => ...} />
 */

import { useState } from 'react';
import { PRICING_CONFIG, calculateQuote, formatPrice } from './pricingConfig';

const SERVICES = Object.entries(PRICING_CONFIG.services)
  .filter(([, s]) => !s.requiresCustomQuote || s.category !== undefined)
  .map(([key, s]) => ({ key, label: s.label, category: s.category, requiresCustomQuote: s.requiresCustomQuote }));

const INPUT_STYLE = 'w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
const LABEL_STYLE = 'block text-sm font-semibold text-gray-700 mb-1';
const SECTION_STYLE = 'bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6';

export default function QuoteCalculator({ onQuoteGenerated }) {
  const [step, setStep] = useState(1); // 1=customer info, 2=service details, 3=review

  // Customer info
  const [customer, setCustomer] = useState({
    name: '', email: '', phone: '', serviceAddress: '',
    propertyType: 'residential', notes: '',
  });

  // Service details
  const [service, setService] = useState({
    serviceKey: 'driveway',
    sqFt: '',
    stories: '1',
    buildupLevel: 'light',
    urgency: 'standard',
    hasWater: true,
    isExtended: false,
    selectedAddOns: [],
    preferredDate: '',
    preferredTime: '',
    photoNote: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const selectedService = PRICING_CONFIG.services[service.serviceKey];

  // Validate customer step
  const validateStep1 = () => {
    const e = {};
    if (!customer.name.trim()) e.name = 'Name is required';
    if (!customer.email.trim() || !/\S+@\S+\.\S+/.test(customer.email)) e.email = 'Valid email required';
    if (!customer.phone.trim()) e.phone = 'Phone number is required';
    if (!customer.serviceAddress.trim()) e.serviceAddress = 'Service address is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
  };

  const handleAddOnToggle = (key) => {
    setService(prev => ({
      ...prev,
      selectedAddOns: prev.selectedAddOns.includes(key)
        ? prev.selectedAddOns.filter(k => k !== key)
        : [...prev.selectedAddOns, key],
    }));
  };

  const handleGenerateQuote = () => {
    if (selectedService?.requiresCustomQuote) {
      onQuoteGenerated && onQuoteGenerated({
        customer,
        service,
        result: { requiresCustomQuote: true },
        quoteId: `QT-${Date.now()}`,
      });
      return;
    }

    setLoading(true);
    try {
      const result = calculateQuote(service.serviceKey, {
        sqFt: parseInt(service.sqFt) || 0,
        stories: parseInt(service.stories) || 1,
        buildupLevel: service.buildupLevel,
        propertyType: customer.propertyType,
        urgency: service.urgency,
        hasWater: service.hasWater,
        isExtended: service.isExtended,
        selectedAddOns: service.selectedAddOns,
      });

      const quoteData = {
        quoteId: `QT-${Date.now()}`,
        customer,
        service,
        selectedServiceLabel: selectedService?.label,
        result,
        createdAt: new Date().toISOString(),
      };

      onQuoteGenerated && onQuoteGenerated(quoteData);
      setStep(3);
    } catch (err) {
      setErrors({ general: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Get Your Free Instant Quote</h1>
        <p className="text-gray-500 mt-2">XLR8 Pressure Washing Services · Houston, TX · 832-459-5981</p>
        <div className="flex justify-center gap-2 mt-4">
          {[1, 2].map(s => (
            <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${step >= s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* STEP 1: Customer Info */}
      {step === 1 && (
        <div className={SECTION_STYLE}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Your Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LABEL_STYLE}>Full Name *</label>
              <input className={INPUT_STYLE} placeholder="John Smith"
                value={customer.name} onChange={e => setCustomer(p => ({ ...p, name: e.target.value }))} />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className={LABEL_STYLE}>Email Address *</label>
              <input className={INPUT_STYLE} type="email" placeholder="you@example.com"
                value={customer.email} onChange={e => setCustomer(p => ({ ...p, email: e.target.value }))} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className={LABEL_STYLE}>Phone Number *</label>
              <input className={INPUT_STYLE} type="tel" placeholder="(832) 555-0000"
                value={customer.phone} onChange={e => setCustomer(p => ({ ...p, phone: e.target.value }))} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className={LABEL_STYLE}>Property Type *</label>
              <select className={INPUT_STYLE}
                value={customer.propertyType} onChange={e => setCustomer(p => ({ ...p, propertyType: e.target.value }))}>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="hoa">HOA / Community</option>
                <option value="apartment">Apartment Complex</option>
                <option value="government">Government / Municipal</option>
                <option value="contractor">Contractor</option>
              </select>
            </div>
            <div className="col-span-full">
              <label className={LABEL_STYLE}>Service Address *</label>
              <input className={INPUT_STYLE} placeholder="1234 Main St, Houston, TX 77001"
                value={customer.serviceAddress} onChange={e => setCustomer(p => ({ ...p, serviceAddress: e.target.value }))} />
              {errors.serviceAddress && <p className="text-red-500 text-xs mt-1">{errors.serviceAddress}</p>}
            </div>
          </div>
          <button onClick={handleNext}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Continue to Service Details →
          </button>
        </div>
      )}

      {/* STEP 2: Service Details */}
      {step === 2 && (
        <div className={SECTION_STYLE}>
          <h2 className="text-xl font-bold text-gray-800 mb-6">Service Details</h2>

          <div className="mb-4">
            <label className={LABEL_STYLE}>Select Service *</label>
            <select className={INPUT_STYLE}
              value={service.serviceKey} onChange={e => setService(p => ({ ...p, serviceKey: e.target.value }))}>
              <optgroup label="Residential Services">
                {SERVICES.filter(s => s.category === 'residential').map(s => (
                  <option key={s.key} value={s.key}>{s.label}{s.requiresCustomQuote ? ' (Custom Quote)' : ''}</option>
                ))}
              </optgroup>
              <optgroup label="Commercial Services">
                {SERVICES.filter(s => s.category === 'commercial').map(s => (
                  <option key={s.key} value={s.key}>{s.label}{s.requiresCustomQuote ? ' (Custom Quote)' : ''}</option>
                ))}
              </optgroup>
            </select>
            {selectedService?.description && (
              <p className="text-gray-500 text-xs mt-1">{selectedService.description}</p>
            )}
          </div>

          {selectedService?.requiresCustomQuote && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-amber-800 text-sm font-semibold">
                ⚠ This service requires an on-site assessment. We'll contact you within 24 hours with a formal written quote.
              </p>
            </div>
          )}

          {!selectedService?.requiresCustomQuote && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={LABEL_STYLE}>Approximate Square Footage</label>
                  <input className={INPUT_STYLE} type="number" placeholder="e.g. 500"
                    value={service.sqFt} onChange={e => setService(p => ({ ...p, sqFt: e.target.value }))} />
                </div>
                <div>
                  <label className={LABEL_STYLE}>Number of Stories</label>
                  <select className={INPUT_STYLE}
                    value={service.stories} onChange={e => setService(p => ({ ...p, stories: e.target.value }))}>
                    <option value="1">1 Story</option>
                    <option value="2">2 Stories</option>
                    <option value="3">3 Stories</option>
                    <option value="4+">4+ Stories</option>
                  </select>
                </div>
                <div>
                  <label className={LABEL_STYLE}>Level of Dirt / Buildup</label>
                  <select className={INPUT_STYLE}
                    value={service.buildupLevel} onChange={e => setService(p => ({ ...p, buildupLevel: e.target.value }))}>
                    <option value="light">Light — general dirt/dust</option>
                    <option value="moderate">Moderate — some mold/staining</option>
                    <option value="heavy">Heavy — significant buildup</option>
                    <option value="severe">Severe — extreme buildup/oil/grease</option>
                  </select>
                </div>
                <div>
                  <label className={LABEL_STYLE}>Service Urgency</label>
                  <select className={INPUT_STYLE}
                    value={service.urgency} onChange={e => setService(p => ({ ...p, urgency: e.target.value }))}>
                    <option value="standard">Standard (schedule within 1 week)</option>
                    <option value="priority">Priority — 48-hour (+$75)</option>
                    <option value="emergency">Emergency same-day (+$150)</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={service.hasWater}
                    onChange={e => setService(p => ({ ...p, hasWater: e.target.checked }))} />
                  Water access available on-site
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={service.isExtended}
                    onChange={e => setService(p => ({ ...p, isExtended: e.target.checked }))} />
                  Outside core Houston zone (Conroe, Pearland, Katy, Sugar Land area)
                </label>
              </div>

              <div className="mb-4">
                <label className={LABEL_STYLE}>Add-On Services (optional)</label>
                <div className="space-y-2">
                  {Object.entries(PRICING_CONFIG.addOns).map(([key, addOn]) => (
                    <label key={key} className="flex items-center gap-2 text-sm text-gray-700">
                      <input type="checkbox"
                        checked={service.selectedAddOns.includes(key)}
                        onChange={() => handleAddOnToggle(key)} />
                      {addOn.label} — {addOn.pricePerSqFt ? `$${(addOn.pricePerSqFt / 100).toFixed(2)}/sqft` : formatPrice(addOn.basePrice || addOn.pricePerArea || 0)}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={LABEL_STYLE}>Preferred Service Date</label>
              <input className={INPUT_STYLE} type="date"
                value={service.preferredDate} onChange={e => setService(p => ({ ...p, preferredDate: e.target.value }))} />
            </div>
            <div>
              <label className={LABEL_STYLE}>Preferred Time</label>
              <select className={INPUT_STYLE}
                value={service.preferredTime} onChange={e => setService(p => ({ ...p, preferredTime: e.target.value }))}>
                <option value="">No preference</option>
                <option value="morning">Morning (7am–11am)</option>
                <option value="midday">Midday (11am–2pm)</option>
                <option value="afternoon">Afternoon (2pm–6pm)</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className={LABEL_STYLE}>Gate Code / Access Notes</label>
            <textarea className={INPUT_STYLE} rows={2} placeholder="Gate code, parking instructions, special access..."
              value={service.notes} onChange={e => setService(p => ({ ...p, notes: e.target.value }))} />
          </div>

          <div className="flex gap-3">
            <button onClick={() => setStep(1)}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition">
              ← Back
            </button>
            <button onClick={handleGenerateQuote} disabled={loading}
              className="flex-[2] bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition disabled:opacity-50">
              {loading ? 'Calculating...' : selectedService?.requiresCustomQuote ? 'Request Custom Quote →' : 'Generate My Quote →'}
            </button>
          </div>

          {errors.general && <p className="text-red-500 text-sm mt-2 text-center">{errors.general}</p>}
        </div>
      )}

      <p className="text-center text-xs text-gray-400 mt-4">
        Disclaimer: Quotes are estimates based on information provided. Final pricing may be adjusted after on-site assessment based on actual conditions, access, and scope.
        Excessive buildup, inaccessible areas, lack of water access, or unsafe conditions may affect final price.
      </p>
    </div>
  );
}

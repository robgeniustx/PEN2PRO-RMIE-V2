/**
 * XLR8 Pressure Washing Services — Pricing Configuration
 *
 * Edit prices here without touching component logic.
 * All prices in USD cents to avoid floating point errors.
 * Display as dollars by dividing by 100.
 */

export const PRICING_CONFIG = {
  minimumCharges: {
    residential: 12500,   // $125.00
    commercial: 30000,    // $300.00
  },

  services: {
    driveway: {
      label: 'Driveway Cleaning',
      category: 'residential',
      basePrice: 15000,           // $150 base (up to 400 sqft)
      pricePerSqFt: 35,           // $0.35/sqft above base included sqft
      includedSqFt: 400,          // First 400 sqft included in base
      description: 'Concrete driveway pressure washing. Base price includes up to 400 sqft.',
    },
    sidewalk: {
      label: 'Sidewalk / Walkway Cleaning',
      category: 'residential',
      basePrice: 10000,           // $100 base
      pricePerSqFt: 35,
      includedSqFt: 200,
      description: 'Concrete sidewalk and walkway cleaning.',
    },
    patio: {
      label: 'Patio / Deck Cleaning',
      category: 'residential',
      basePrice: 17500,           // $175 base
      pricePerSqFt: 40,
      includedSqFt: 300,
      description: 'Patio, deck, or porch surface cleaning. Wood and concrete surfaces.',
    },
    house_sm: {
      label: 'House Washing — Small (under 1,500 sqft)',
      category: 'residential',
      basePrice: 29900,           // $299
      pricePerSqFt: 0,
      includedSqFt: 1500,
      description: 'Full exterior house washing. Soft wash or pressure wash based on siding type.',
    },
    house_md: {
      label: 'House Washing — Medium (1,500–2,500 sqft)',
      category: 'residential',
      basePrice: 39900,           // $399
      pricePerSqFt: 0,
      includedSqFt: 2500,
      description: 'Full exterior house washing for medium-sized homes.',
    },
    house_lg: {
      label: 'House Washing — Large (2,500+ sqft)',
      category: 'residential',
      basePrice: 49900,           // $499
      pricePerSqFt: 8,            // $0.08/sqft above 2500
      includedSqFt: 2500,
      description: 'Full exterior house washing for large homes.',
    },
    fence: {
      label: 'Fence Cleaning',
      category: 'residential',
      basePrice: 10000,
      pricePerLinFt: 200,         // $2.00 per linear foot
      description: 'Wood or vinyl fence cleaning.',
    },
    garage_floor: {
      label: 'Garage Floor Cleaning',
      category: 'residential',
      basePrice: 12500,           // $125 flat
      pricePerSqFt: 0,
      includedSqFt: 400,
      description: 'Garage floor degreasing and pressure washing.',
    },
    roof_softwash: {
      label: 'Roof Soft Washing',
      category: 'residential',
      basePrice: null,            // null = quote only, no instant price
      requiresCustomQuote: true,
      description: 'Low-pressure soft washing to remove algae, moss, lichen, and staining from roofing. Requires on-site assessment.',
    },
    storefront: {
      label: 'Storefront / Building Exterior Cleaning',
      category: 'commercial',
      basePrice: 25000,           // $250 minimum
      pricePerSqFt: 20,           // $0.20/sqft
      includedSqFt: 0,
      description: 'Commercial storefront and building exterior pressure washing.',
    },
    parking_lot: {
      label: 'Parking Lot / Flatwork Cleaning',
      category: 'commercial',
      basePrice: 35000,           // $350 minimum
      pricePerSqFt: 12,           // $0.12/sqft
      includedSqFt: 0,
      description: 'Parking lot, loading dock, and commercial concrete flatwork cleaning.',
    },
    dumpster_pad: {
      label: 'Dumpster Pad Cleaning',
      category: 'commercial',
      basePrice: 15000,           // $150
      pricePerSqFt: 0,
      includedSqFt: 200,
      description: 'Dumpster enclosure degreasing and pressure washing.',
    },
    apartment_building: {
      label: 'Apartment Complex / HOA Cleaning',
      category: 'commercial',
      basePrice: null,
      requiresCustomQuote: true,
      description: 'Apartment complex, condo, and HOA exterior cleaning. Requires on-site assessment and contract pricing.',
    },
    fleet_vehicle: {
      label: 'Fleet / Vehicle Washing',
      category: 'commercial',
      basePrice: 7500,            // $75 per vehicle
      pricePerUnit: 7500,
      description: 'Commercial vehicle and fleet washing. Priced per vehicle.',
    },
    graffiti: {
      label: 'Graffiti Removal',
      category: 'commercial',
      basePrice: 15000,           // $150 minimum
      pricePerSqFt: 300,          // $3.00/sqft affected area
      includedSqFt: 0,
      description: 'Graffiti removal from masonry, concrete, metal, or paint surfaces.',
    },
  },

  multipliers: {
    // Buildup / condition multipliers
    buildup: {
      light: 1.0,
      moderate: 1.15,
      heavy: 1.30,
      severe: 1.50,
    },
    // Stories multiplier
    stories: {
      1: 1.0,
      2: 1.20,
      3: 1.40,
      '4+': 1.60,
    },
    // Property type multiplier
    propertyType: {
      residential: 1.0,
      commercial: 1.10,
      hoa: 1.05,
      apartment: 1.10,
      government: 1.15,
      contractor: 1.0,
    },
    // Urgency multiplier
    urgency: {
      standard: 1.0,
      priority: 1.20,   // +20% (48-hour guarantee)
      emergency: 1.50,  // +50% (same-day)
    },
    // No water access surcharge
    noWaterAccess: 1.10,
    // Outside core Houston service zone
    extendedTravel: 1.08,
  },

  addOns: {
    surface_sealing: { label: 'Surface Sealing (concrete)', pricePerSqFt: 25, description: 'Protective sealant applied after cleaning.' },
    rust_removal: { label: 'Rust Stain Removal', basePrice: 7500, description: 'Chemical treatment for rust and mineral stains.' },
    gum_removal: { label: 'Gum Removal (commercial)', pricePerArea: 5000, description: 'Steam or chemical gum removal from sidewalks and surfaces.' },
    gutter_exterior: { label: 'Gutter Exterior Cleaning', basePrice: 7500, description: 'Exterior gutter face brightening. Add-on to house wash.' },
  },

  surcharges: {
    afterHours: 10000,     // +$100
    priority48hr: 7500,    // +$75
    sameDay: 15000,        // +$150
  },

  depositRules: {
    // Below this, full payment required at booking
    fullPaymentThreshold: 30000,  // $300
    // Above this, deposit is required
    depositPercent: 0.50,         // 50% deposit
  },

  tax: {
    // Texas does not tax most cleaning services (labor)
    // Consult your accountant — adjust if materials/chemicals are itemized
    rate: 0.0,
  },
};

/**
 * Calculate a quote based on service and inputs
 * @param {string} serviceKey - Key from PRICING_CONFIG.services
 * @param {object} inputs - { sqFt, stories, buildupLevel, propertyType, urgency, hasWater, isExtended, addOns, units }
 * @returns {object} { lineItems, subtotal, surcharges, total, requiresCustomQuote }
 */
export function calculateQuote(serviceKey, inputs) {
  const service = PRICING_CONFIG.services[serviceKey];
  if (!service) throw new Error(`Unknown service: ${serviceKey}`);
  if (service.requiresCustomQuote) {
    return { requiresCustomQuote: true, lineItems: [], total: 0 };
  }

  const {
    sqFt = 0,
    stories = 1,
    buildupLevel = 'light',
    propertyType = 'residential',
    urgency = 'standard',
    hasWater = true,
    isExtended = false,
    selectedAddOns = [],
    units = 1, // for fleet
  } = inputs;

  const lineItems = [];
  let subtotal = 0;

  // Base price calculation
  let baseAmount = service.basePrice;

  // Square footage overage
  if (service.pricePerSqFt && sqFt > service.includedSqFt) {
    const overageSqFt = sqFt - service.includedSqFt;
    const sqFtCharge = overageSqFt * service.pricePerSqFt;
    baseAmount += sqFtCharge;
    lineItems.push({
      label: `${service.label} — base (${service.includedSqFt} sqft included)`,
      amount: service.basePrice,
    });
    lineItems.push({
      label: `Additional square footage (${overageSqFt} sqft × $${(service.pricePerSqFt / 100).toFixed(2)})`,
      amount: sqFtCharge,
    });
  } else if (service.pricePerSqFt && sqFt > 0 && service.includedSqFt === 0) {
    // Commercial per-sqft with no base-included sqft
    baseAmount = Math.max(service.basePrice, sqFt * service.pricePerSqFt);
    lineItems.push({
      label: `${service.label} (${sqFt} sqft × $${(service.pricePerSqFt / 100).toFixed(2)})`,
      amount: baseAmount,
    });
  } else {
    lineItems.push({ label: service.label, amount: service.basePrice });
  }

  // Per-unit pricing (fleet)
  if (service.pricePerUnit && units > 1) {
    baseAmount = service.pricePerUnit * units;
    lineItems[lineItems.length - 1] = {
      label: `${service.label} (${units} vehicles)`,
      amount: baseAmount,
    };
  }

  subtotal = baseAmount;

  // Apply buildup multiplier
  const buildupMult = PRICING_CONFIG.multipliers.buildup[buildupLevel] || 1.0;
  if (buildupMult > 1.0) {
    const buildupCharge = Math.round(subtotal * (buildupMult - 1.0));
    lineItems.push({ label: `Heavy buildup adjustment (${Math.round((buildupMult - 1) * 100)}%)`, amount: buildupCharge });
    subtotal += buildupCharge;
  }

  // Apply stories multiplier
  const storyMult = PRICING_CONFIG.multipliers.stories[stories] || 1.0;
  if (storyMult > 1.0) {
    const storyCharge = Math.round(subtotal * (storyMult - 1.0));
    lineItems.push({ label: `Multi-story adjustment (${stories} stories)`, amount: storyCharge });
    subtotal += storyCharge;
  }

  // No water access surcharge
  if (!hasWater) {
    const waterCharge = Math.round(subtotal * (PRICING_CONFIG.multipliers.noWaterAccess - 1.0));
    lineItems.push({ label: 'No on-site water access surcharge', amount: waterCharge });
    subtotal += waterCharge;
  }

  // Extended travel
  if (isExtended) {
    const travelCharge = Math.round(subtotal * (PRICING_CONFIG.multipliers.extendedTravel - 1.0));
    lineItems.push({ label: 'Extended service area travel', amount: travelCharge });
    subtotal += travelCharge;
  }

  // Add-ons
  selectedAddOns.forEach(addOnKey => {
    const addOn = PRICING_CONFIG.addOns[addOnKey];
    if (!addOn) return;
    let addOnAmount = 0;
    if (addOn.pricePerSqFt && sqFt > 0) {
      addOnAmount = sqFt * addOn.pricePerSqFt;
    } else if (addOn.basePrice) {
      addOnAmount = addOn.basePrice;
    } else if (addOn.pricePerArea) {
      addOnAmount = addOn.pricePerArea;
    }
    lineItems.push({ label: addOn.label, amount: addOnAmount });
    subtotal += addOnAmount;
  });

  // Urgency surcharges
  const urgencyMult = PRICING_CONFIG.multipliers.urgency[urgency] || 1.0;
  if (urgency === 'priority') {
    lineItems.push({ label: 'Priority service (48-hour)', amount: PRICING_CONFIG.surcharges.priority48hr });
    subtotal += PRICING_CONFIG.surcharges.priority48hr;
  } else if (urgency === 'emergency') {
    lineItems.push({ label: 'Emergency same-day service', amount: PRICING_CONFIG.surcharges.sameDay });
    subtotal += PRICING_CONFIG.surcharges.sameDay;
  }

  // Enforce minimum charge
  const minCharge = service.category === 'commercial'
    ? PRICING_CONFIG.minimumCharges.commercial
    : PRICING_CONFIG.minimumCharges.residential;

  if (subtotal < minCharge) {
    const minAdjust = minCharge - subtotal;
    lineItems.push({ label: 'Minimum service charge adjustment', amount: minAdjust });
    subtotal = minCharge;
  }

  // Tax (currently 0 for labor in TX)
  const tax = Math.round(subtotal * PRICING_CONFIG.tax.rate);
  if (tax > 0) {
    lineItems.push({ label: `Sales Tax (${PRICING_CONFIG.tax.rate * 100}%)`, amount: tax });
  }
  const total = subtotal + tax;

  // Deposit calculation
  const requiresDeposit = total > PRICING_CONFIG.depositRules.fullPaymentThreshold;
  const depositAmount = requiresDeposit
    ? Math.round(total * PRICING_CONFIG.depositRules.depositPercent)
    : total;
  const balanceDue = total - depositAmount;

  return {
    requiresCustomQuote: false,
    lineItems,
    subtotal,
    tax,
    total,
    requiresDeposit,
    depositAmount,
    balanceDue,
    currency: 'usd',
  };
}

// Format cents to display string
export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

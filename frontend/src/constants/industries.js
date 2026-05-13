// PEN2PRO BusinessOS — Supported Industries / Niches
// Used by: RMIE intake, Niche Marketing Planner, Website Builder templates,
// Funnel templates, P2P Command Center CRM setup, AI Voice Agent script modes,
// Pricing/offer recommendations, Automation templates

export const INDUSTRIES = [
  { id: "pressure-washing",    label: "Pressure Washing",        icon: "💧" },
  { id: "hvac",                label: "HVAC",                    icon: "❄️" },
  { id: "roofing",             label: "Roofing",                 icon: "🏠" },
  { id: "plumbing",            label: "Plumbing",                icon: "🔧" },
  { id: "lawn-care",           label: "Lawn Care",               icon: "🌿" },
  { id: "auto-repair",         label: "Auto Repair",             icon: "🔩" },
  { id: "barber-shop",         label: "Barber Shop",             icon: "✂️" },
  { id: "beauty-salon",        label: "Beauty Salon",            icon: "💅" },
  { id: "nail-salon",          label: "Nail Salon",              icon: "💅" },
  { id: "massage-business",    label: "Massage Business",        icon: "🧘" },
  { id: "cleaning-company",    label: "Cleaning Company",        icon: "🧹" },
  { id: "mobile-detailing",    label: "Mobile Detailing",        icon: "🚗" },
  { id: "handyman",            label: "Handyman",                icon: "🛠️" },
  { id: "real-estate",         label: "Real Estate Services",    icon: "🏡" },
  { id: "general-small-biz",   label: "General Small Business",  icon: "🏪" },
  { id: "funding-business",    label: "Funding Business",        icon: "💰" },
  { id: "attorney-law-firm",   label: "Attorney / Law Firm",     icon: "⚖️" },
  { id: "dentist-office",      label: "Dentist Office",          icon: "🦷" },
  { id: "courier-services",    label: "Courier Services",        icon: "📦" },
  { id: "content-creator",     label: "Content Creator",         icon: "🎥" },
  { id: "tree-service",        label: "Tree Service",            icon: "🌳" },
  { id: "landscaping",         label: "Landscaping",             icon: "🌱" },
  { id: "consulting",          label: "Consulting",              icon: "📊" },
  { id: "ai-developer",        label: "AI Developer",            icon: "🤖" },
  { id: "cell-phone-repair",   label: "Cell Phone & TV Repair",  icon: "📱" },
  { id: "interior-designer",   label: "Interior Designer",       icon: "🎨" },
  { id: "tshirt-company",      label: "T-Shirt Company",         icon: "👕" },
  { id: "insurance-company",   label: "Insurance Company",       icon: "🛡️" },
];

export const INDUSTRY_IDS = INDUSTRIES.map((i) => i.id);

export const getIndustryByID = (id) =>
  INDUSTRIES.find((i) => i.id === id) || null;

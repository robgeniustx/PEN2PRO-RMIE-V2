export const getAffiliateAccess = (tier = 'free') => ({
  free: { full:false, preview:false },
  pro: { full:false, preview:true },
  elite: { full:true, preview:true },
  founders: { full:true, preview:true, future:true },
}[tier] || { full:false, preview:false })

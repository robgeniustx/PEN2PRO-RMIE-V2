export const WEBSITE_ACCESS = { free:{website:false,seo:false,brand:false}, pro:{website:true,seo:false,brand:false}, elite:{website:true,seo:true,brand:true}, founders:{website:true,seo:true,brand:true} };
export const canAccessWebsite = (tier='free') => WEBSITE_ACCESS[tier]?.website;
export function getCrmAccess(tier='free'){const test=import.meta.env.VITE_ALLOW_TEST_TIER_ACCESS==='true'; if(test && tier==='free') tier='pro'; return {free:tier==='free',pro:['pro','elite','founders'].includes(tier),elite:['elite','founders'].includes(tier),founders:tier==='founders'};}
export const socialTierAccess = {
  free: { calendar: false, scripts: false, advancedBrandVoice: false },
  pro: { calendar: true, scripts: false, advancedBrandVoice: false },
  elite: { calendar: true, scripts: true, advancedBrandVoice: true },
  founders: { calendar: true, scripts: true, advancedBrandVoice: true }
};

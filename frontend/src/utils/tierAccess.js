export const canAccessAutomation=(tier)=>['pro','elite','founders'].includes((tier||'free').toLowerCase());
export const automationAccessByTier=(tier)=>({tier,canAccess:canAccessAutomation(tier)});

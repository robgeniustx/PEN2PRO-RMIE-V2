export const WEBSITE_ACCESS = { free:{website:false,seo:false,brand:false}, pro:{website:true,seo:false,brand:false}, elite:{website:true,seo:true,brand:true}, founders:{website:true,seo:true,brand:true} };
export const canAccessWebsite = (tier='free') => WEBSITE_ACCESS[tier]?.website;

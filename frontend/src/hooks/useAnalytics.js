import { trackConversion, trackEvent, trackFeatureUsage } from '../api/analyticsApi'

export const useAnalytics = () => {
  const safeTrackEvent = async (payload) => { try { await trackEvent(payload) } catch {} }
  const trackPageView = (pagePath, tier) => safeTrackEvent({ event_name: 'page_viewed', event_category: 'dashboard', page_path: pagePath, tier })
  const trackFeature = async (featureName, moduleName, tier) => { try { await trackFeatureUsage({ feature_name: featureName, module_name: moduleName, tier }) } catch {} }
  const trackUpgradeClick = async (fromTier, toTier, sourcePage, promptLocation) => { try { await trackConversion({ conversion_type: 'upgrade_click', from_tier: fromTier, to_tier: toTier, source_page: sourcePage, prompt_location: promptLocation }) } catch {} }
  const trackBlueprintGenerated = (tier) => safeTrackEvent({ event_name: 'blueprint_generated', event_category: 'blueprint', tier })
  return { safeTrackEvent, trackPageView, trackFeature, trackUpgradeClick, trackBlueprintGenerated }
}

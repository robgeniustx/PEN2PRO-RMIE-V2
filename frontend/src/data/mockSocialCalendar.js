export const mockSocialEngine = {
  status: 'success',
  strategy: {
    tiktok: 'Teach one tactical lesson daily in 30-45 seconds.',
    instagram: 'Reels + carousel mix with education-first hooks.',
    facebook: 'Community-first posts and story repurposing.',
    linkedin: 'Authority posts from blueprint lessons.',
    youtube_shorts: 'Short tactical clips with one CTA.'
  },
  calendar7: { calendar_type: '7_day', days: Array.from({ length: 7 }, (_, i) => ({ day: i + 1, platform: 'instagram', post_type: 'reel', hook: `Hook ${i+1}`, caption: `Caption ${i+1}`, cta: 'Comment PLAN', hashtags: ['#pen2pro'], script: 'Hook > Value > CTA' })) },
  calendar14: { calendar_type: '14_day', days: Array.from({ length: 14 }, (_, i) => ({ day: i + 1, platform: 'tiktok', post_type: 'short video', hook: `Hook ${i+1}`, caption: `Caption ${i+1}`, cta: 'DM START', hashtags: ['#pen2pro'], script: 'Hook > Story > CTA' })) },
  calendar30: { calendar_type: '30_day', days: Array.from({ length: 30 }, (_, i) => ({ day: i + 1, platform: 'youtube_shorts', post_type: 'short', hook: `Hook ${i+1}`, caption: `Caption ${i+1}`, cta: 'Save this post', hashtags: ['#pen2pro'], script: 'Hook > Teach > CTA' })) },
  posts: [{ platform: 'instagram', post_type: 'reel', hook: 'Stop guessing your content.', caption: 'Use this framework to plan one week in 30 minutes.', cta: 'Comment PLAN', hashtags: ['#pen2pro', '#content'], status: 'draft' }],
  scripts: [{ hook: 'Still posting randomly?', scene_direction: 'Direct to camera', script: 'Open with pain, show framework, close with CTA.', cta: 'DM START', caption: 'Simple framework for founders.', hashtags: ['#pen2pro'] }],
  checklist: ['Review goal', 'Publish content', 'Engage for 15 minutes'],
  repurposing_plan: ['Turn one reel into carousel', 'Turn carousel into LinkedIn post'],
  brand_voice: { tone: 'confident', audience: 'startup founders', style_rules: ['clear', 'actionable'], avoid_words: ['guarantee'], example_phrases: ['Start simple, scale with proof.'] }
};

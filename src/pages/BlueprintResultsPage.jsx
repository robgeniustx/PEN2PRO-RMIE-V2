import { motion } from 'framer-motion';
import UpgradePrompt from '../components/UpgradePrompt';
import { mockBlueprint } from '../data/mockBlueprint';

const TIER_ORDER = ['free', 'pro', 'elite', 'founders'];

const hasAccess = (tier, minTier) => TIER_ORDER.indexOf(tier) >= TIER_ORDER.indexOf(minTier);

const SectionCard = ({ title, children, accent = 'blue' }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className={`rounded-2xl border p-4 sm:p-5 ${
      accent === 'gold'
        ? 'border-amber-400/40 bg-amber-950/20'
        : 'border-blue-500/30 bg-slate-900/70'
    }`}
  >
    <h2 className="text-lg font-bold text-white">{title}</h2>
    <div className="mt-2 text-sm text-slate-200">{children}</div>
  </motion.article>
);

const list = (items) => (
  <ul className="list-disc space-y-1 pl-5">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export default function BlueprintResultsPage({ blueprint = mockBlueprint }) {
  const params = new URLSearchParams(window.location.search);
  const tierParam = (params.get('tier') || 'free').toLowerCase();
  const tier = TIER_ORDER.includes(tierParam) ? tierParam : 'free';

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <header className="rounded-2xl border border-blue-500/40 bg-slate-900/80 p-5">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-extrabold tracking-tight text-blue-300">PEN2PRO Blueprint Results</h1>
            {tier === 'founders' && (
              <span className="rounded-full border border-amber-300/50 bg-amber-200/10 px-3 py-1 text-xs font-bold uppercase text-amber-200">
                Lifetime Access
              </span>
            )}
          </div>
          <p className="mt-2 text-sm text-slate-300">Tier: {tier.toUpperCase()}</p>
        </header>

        <SectionCard title="Business Summary">{blueprint.businessSummary}</SectionCard>
        <SectionCard title={hasAccess(tier, 'pro') ? 'First Offer' : 'Basic Offer'}>{blueprint.firstOffer}</SectionCard>
        <SectionCard title="Ideal Customer">{blueprint.idealCustomer}</SectionCard>

        {hasAccess(tier, 'pro') ? (
          <>
            <SectionCard title="Problem Being Solved">{blueprint.problemBeingSolved}</SectionCard>
            <SectionCard title="Pricing Strategy">{blueprint.pricingStrategy}</SectionCard>
            <SectionCard title="First Sales Channel">{blueprint.firstSalesChannel}</SectionCard>
            <SectionCard title="Sales Script">{blueprint.salesScript}</SectionCard>
            <SectionCard title="7-Day Launch Plan">{list(blueprint.sevenDayLaunchPlan)}</SectionCard>
            <SectionCard title="30-Day Roadmap">{list(blueprint.thirtyDayRoadmap)}</SectionCard>
            <SectionCard title="Social Posts">{list(blueprint.socialPosts)}</SectionCard>
            <SectionCard title="Outreach Message">
              <code className="block rounded bg-slate-950/90 p-3 text-xs">{blueprint.outreachMessage}</code>
            </SectionCard>
            <SectionCard title="Beginner Mistake Warnings">{list(blueprint.beginnerMistakeWarnings)}</SectionCard>
            <SectionCard title="Checklist">{list(blueprint.checklist)}</SectionCard>
            <SectionCard title="Export" accent="blue">
              Export tools coming soon (CSV/PDF placeholder).
            </SectionCard>
          </>
        ) : (
          <>
            <SectionCard title="Basic Pricing">{blueprint.pricingStrategy}</SectionCard>
            <SectionCard title="3 Startup Steps">{list(blueprint.sevenDayLaunchPlan.slice(0, 3))}</SectionCard>
            <SectionCard title="Limited Checklist">{list(blueprint.checklist.slice(0, 4))}</SectionCard>
          </>
        )}

        {hasAccess(tier, 'elite') && (
          <>
            <SectionCard title="$100M Strategist Mode" accent="gold">{blueprint.strategistMode}</SectionCard>
            <SectionCard title="Monetization Plan">{blueprint.monetizationPlan}</SectionCard>
            <SectionCard title="Outreach Strategy">{blueprint.outreachStrategy}</SectionCard>
            <SectionCard title="Ads Strategy">{blueprint.adsStrategy}</SectionCard>
            <SectionCard title="CRM Follow-Up Plan">{blueprint.crmFollowUpPlan}</SectionCard>
            <SectionCard title="Landing Page Strategy">{blueprint.landingPageStrategy}</SectionCard>
            <SectionCard title="Advanced Beginner Mistake Warnings">
              {list(blueprint.advancedMistakeWarnings)}
            </SectionCard>
          </>
        )}

        {tier === 'founders' && (
          <SectionCard title="Future Agent Access" accent="gold">
            {list(blueprint.futureAgentAccess)}
          </SectionCard>
        )}

        {tier !== 'founders' && <UpgradePrompt />}
      </div>
    </main>
  );
}

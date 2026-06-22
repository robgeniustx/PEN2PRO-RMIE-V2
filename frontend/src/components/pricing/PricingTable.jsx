import PricingCard from './PricingCard'

const DEFAULT_PLANS = [
  {
    name: 'Free Forever',
    price: '$0',
    description: 'Start your roadmap with no credit card required.',
    features: [
      'AI business roadmap (1 free)',
      '7-day launch plan',
      'Business snapshot & name ideas',
      'Sales script templates',
      'Entity & legal checklist',
    ],
    cta: 'Start Free Roadmap',
    ctaLink: '/starter',
  },
  {
    name: 'Pro',
    price: '$47',
    period: 'mo',
    description: 'Full roadmap access plus strategy tools for serious builders.',
    highlight: true,
    features: [
      'Everything in Free',
      'Unlimited roadmap generations',
      'Full progress tracking',
      'Business branding support',
      'PDF & email export',
      'Outreach strategy module',
      'Credit & funding readiness checklist',
    ],
    cta: 'Join Waitlist — Pro',
    ctaLink: '/waitlist?tier=pro',
  },
  {
    name: 'Elite',
    price: '$97',
    period: 'mo',
    description: 'Advanced strategy, financial projections, and done-with-you guidance.',
    features: [
      'Everything in Pro',
      'Advanced strategist guidance',
      'Financial projections',
      'Vendor & funding resource center',
      'Company formation checklist',
      'Trademark & marketing guidance',
      'Priority support',
    ],
    cta: 'Join Waitlist — Elite',
    ctaLink: '/waitlist?tier=elite',
  },
  {
    name: 'Legacy Founder',
    price: '$497',
    period: 'one-time',
    description: 'Lifetime access. Early adopter pricing. Limited spots.',
    features: [
      'Lifetime platform access',
      'All current & future features',
      'Founder recognition',
      'Early access to new tools',
      'Premium roadmap AI logic',
      'Direct founder community access',
    ],
    cta: 'Become a Founder',
    ctaLink: '/waitlist?tier=founders',
  },
]

export default function PricingTable({ plans = DEFAULT_PLANS }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <PricingCard key={plan.name} plan={plan} />
      ))}
    </div>
  )
}

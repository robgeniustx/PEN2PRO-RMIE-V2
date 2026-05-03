# Stripe Tiers

- Pro monthly: set `STRIPE_PRICE_PRO_MONTHLY` to Stripe recurring monthly price ID.
- Elite monthly: set `STRIPE_PRICE_ELITE_MONTHLY` to Stripe recurring monthly price ID.
- Founders lifetime: set `STRIPE_PRICE_FOUNDERS_LIFETIME` to Stripe one-time price ID.

Checkout URLs:
- Success: `/payment-success`
- Cancel: `/pricing?payment=cancelled`

Webhook endpoint: `/api/stripe/webhook`

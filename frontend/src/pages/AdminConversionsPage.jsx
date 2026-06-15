import { useEffect, useState } from 'react';
import { getConversionSummary, getFunnelSummary } from '../api/adminApi';
import Navbar from '../components/layout/Navbar';

function ConversionMetric({ label, value, pct, color = '#D4A017' }) {
  return (
    <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-5">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{label}</p>
      <p className="font-display text-3xl font-black" style={{ color }}>{(value || 0).toLocaleString()}</p>
      {pct !== undefined && (
        <p className="mt-1 text-xs text-slate-500">
          <span style={{ color: pct > 10 ? '#00C9B1' : '#D4A017' }}>{pct}%</span> conversion rate
        </p>
      )}
    </div>
  );
}

const FUNNEL_STEPS = [
  { key: 'starter_visits',      label: 'Starter Visits',       color: '#1E88E5' },
  { key: 'blueprint_generated', label: 'Blueprint Generated',  color: '#42A5F5' },
  { key: 'pricing_viewed',      label: 'Pricing Viewed',       color: '#D4A017' },
  { key: 'upgrade_clicked',     label: 'Upgrade Clicked',      color: '#FF8A00' },
  { key: 'checkout_started',    label: 'Checkout Started',     color: '#FF6B35' },
  { key: 'checkout_completed',  label: 'Checkout Completed',   color: '#00C9B1' },
];

export default function AdminConversionsPage() {
  const [conv, setConv] = useState(null);
  const [funnel, setFunnel] = useState(null);

  useEffect(() => {
    getConversionSummary().then(setConv);
    getFunnelSummary().then(setFunnel);
  }, []);

  const checkoutRate = conv
    ? Math.round(((conv.checkout_completed || 0) / (conv.checkout_started || 1)) * 100)
    : 0;
  const upgradeRate = conv
    ? Math.round(((conv.upgrade_click || 0) / (conv.plan_viewed || 1)) * 100)
    : 0;
  const topValue = funnel ? (funnel.starter_visits || 1) : 1;

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-1">Admin</p>
          <h1 className="font-display text-3xl font-black text-white">Conversion Analytics</h1>
          <p className="mt-1 text-sm text-slate-500">Funnel performance and checkout conversion rates</p>
        </div>

        {conv && (
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <ConversionMetric label="Plans Viewed" value={conv.plan_viewed} color="#1E88E5" />
            <ConversionMetric label="Upgrade Clicks" value={conv.upgrade_click} pct={upgradeRate} color="#D4A017" />
            <ConversionMetric label="Checkouts Started" value={conv.checkout_started} color="#FF8A00" />
            <ConversionMetric label="Checkouts Completed" value={conv.checkout_completed} pct={checkoutRate} color="#00C9B1" />
          </div>
        )}

        {funnel && (
          <div className="mb-8 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-1 text-base font-bold text-white">Conversion Funnel</h2>
            <p className="mb-6 text-xs text-slate-500">User journey from starter visit to completed checkout</p>
            <div className="space-y-4">
              {FUNNEL_STEPS.map((step) => {
                const val = funnel[step.key] || 0;
                const pct = Math.round((val / topValue) * 100);
                return (
                  <div key={step.key}>
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-300">{step.label}</span>
                      <span className="text-sm font-bold" style={{ color: step.color }}>
                        {val.toLocaleString()} <span className="text-xs text-slate-500">({pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#1A2235]">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${pct}%`, background: step.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {conv?.checkout_cancelled !== undefined && (
          <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <h2 className="mb-4 text-base font-bold text-white">Checkout Abandonment</h2>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="shrink-0">
                <p className="font-display text-4xl font-black text-red-400">{conv.checkout_cancelled}</p>
                <p className="text-sm text-slate-500 mt-1">Abandoned checkouts</p>
              </div>
              <div className="text-sm text-slate-400 leading-relaxed">
                {Math.round(((conv.checkout_cancelled || 0) / (conv.checkout_started || 1)) * 100)}% of started checkouts were abandoned.
                Consider adding exit-intent messaging or urgency triggers on the checkout page to recover these leads.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

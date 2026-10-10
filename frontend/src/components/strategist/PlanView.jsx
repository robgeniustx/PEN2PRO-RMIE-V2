import { useState } from "react";

const money = (n) => `$${Math.round(Number(n) || 0).toLocaleString()}`;

const LEVEL_STYLE = {
  high: "border-red-500/40 bg-red-500/10 text-red-200",
  medium: "border-yellow-500/40 bg-yellow-500/10 text-yellow-100",
  info: "border-[#1A2235] bg-[#0A0F1E] text-slate-300",
};

function Stat({ label, value, sub }) {
  return (
    <div className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0A0F1E" }}>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-display text-2xl font-black text-[#D4A017]">{value}</p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

function targetsLine(t, model) {
  const parts = [];
  if (model === "recurring") {
    parts.push(`${t.active_clients} active clients`, `${t.new_sales} new`, `${money(t.monthly_run_rate)}/mo run-rate`);
  } else {
    parts.push(`${t.new_sales} sales`, `${money(t.week_revenue)} this week`, `${money(t.monthly_run_rate)}/mo run-rate`);
  }
  if (t.outreach_messages) parts.push(`${t.outreach_messages} outreach`, `${t.conversations} conversations`);
  return parts.join(" · ");
}

// Renders a plan returned by POST /api/strategist/plan.
export default function PlanView({ plan }) {
  const [openWeek, setOpenWeek] = useState(1);
  const m = plan.math;
  const i = plan.inputs;

  return (
    <div className="space-y-8" id="plan-result">
      <header>
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">Your path to {money(i.target)} a month</p>
        <h2 className="mt-1 font-display text-2xl font-black text-white md:text-3xl">{plan.label}</h2>
        <p className="mt-2 text-sm text-slate-400">
          First offer: <span className="text-slate-200">{plan.first_offer}</span>
        </p>
      </header>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">The math</h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat
            label={plan.model === "recurring" ? "Active clients needed" : `${plan.unit}s needed per month`}
            value={m.units_needed}
            sub={`at ${money(i.price)} each`}
          />
          <Stat label="Outreach per working day" value={m.outreach_per_day} sub={`${m.conversations_per_month} conversations a month`} />
          <Stat label="Hours needed / available" value={`${m.hours_needed} / ${m.hours_available}`} sub="per month, incl. admin" />
          <Stat label="Estimated profit" value={money(m.estimated_profit)} sub={`set aside ~${money(m.tax_set_aside)} for taxes`} />
        </div>
      </section>

      <section className="space-y-3">
        {plan.flags.map((f) => (
          <div key={f.title} className={`rounded-xl border p-4 ${LEVEL_STYLE[f.level] || LEVEL_STYLE.info}`}>
            <p className="text-sm font-bold">{f.title}</p>
            <p className="mt-1 text-sm leading-6">{f.detail}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">Price scenarios</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {plan.scenarios.map((s) => (
            <div key={s.name} className="rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
              <p className="text-xs font-semibold text-slate-500">{s.name}</p>
              <p className="mt-1 text-lg font-bold text-white">{money(s.price)} each</p>
              <p className="text-sm text-slate-400">{s.units} per month · {s.hours} hours</p>
              <p className={`mt-1 text-xs font-semibold ${s.fits_your_hours ? "text-emerald-400" : "text-red-300"}`}>
                {s.fits_your_hours ? "Fits your hours" : "More than your hours"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">Where your first customers come from</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          {plan.channels.map((c) => <li key={c}>• {c}</li>)}
        </ul>
        <p className="mt-3 text-sm text-slate-400">Proof to collect: <span className="text-slate-200">{plan.proof_to_collect}</span></p>
        <p className="mt-1 text-sm text-slate-400">Upsells to add: <span className="text-slate-200">{plan.upsell}</span></p>
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">12-week plan</h3>
        <div className="space-y-3">
          {plan.weeks.map((w) => {
            const open = openWeek === w.week;
            return (
              <article key={w.week} className="rounded-2xl border border-[#1A2235]" style={{ background: "#0F1520" }}>
                <button
                  type="button"
                  onClick={() => setOpenWeek(open ? 0 : w.week)}
                  aria-expanded={open}
                  className="flex w-full items-start gap-4 p-4 text-left"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full gradient-gold text-sm font-black text-[#080C14]">{w.week}</span>
                  <span className="flex-1">
                    <span className="block font-bold text-white">{w.focus}</span>
                    <span className="mt-1 block text-xs text-slate-500">Target: {targetsLine(w.targets, plan.model)}</span>
                  </span>
                  <span className="text-slate-500" aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
                <div className={open ? "space-y-4 border-t border-[#1A2235] p-4" : "hidden space-y-4 border-t border-[#1A2235] p-4 print:block"}>
                  <ol className="space-y-2 text-sm leading-7 text-slate-300">
                    {w.actions.map((a, idx) => <li key={idx}>{idx + 1}. {a}</li>)}
                  </ol>
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-xl border border-[#00C9B1]/30 bg-[#00C9B1]/5 p-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#00C9B1]">Proof you did it</p>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300">{w.proof.map((p) => <li key={p}>• {p}</li>)}</ul>
                    </div>
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-yellow-300">If you are behind</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{w.if_behind}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">Verification ledger</h3>
        <p className="mb-3 text-sm text-slate-400">Check these off with evidence, not estimates. Bank deposits and paid invoices are the only proof that counts.</p>
        <div className="overflow-x-auto rounded-xl border border-[#1A2235]">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wider text-slate-500">
              <tr><th className="p-3">Milestone</th><th className="p-3">Proof</th><th className="p-3">By</th></tr>
            </thead>
            <tbody>
              {plan.verification.map((v) => (
                <tr key={v.milestone} className="border-t border-[#1A2235] text-slate-300">
                  <td className="p-3 font-semibold text-white">{v.milestone}</td><td className="p-3">{v.proof}</td><td className="p-3 whitespace-nowrap">{v.by}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">If the numbers are off</h3>
        <div className="space-y-2">
          {plan.diagnostics.map((d) => (
            <div key={d.metric} className="rounded-xl border border-[#1A2235] p-4 text-sm" style={{ background: "#0F1520" }}>
              <p className="font-bold text-white">{d.metric} <span className="font-normal text-slate-500">· check: {d.check} · act if below {d.if_below}</span></p>
              <p className="mt-1 leading-6 text-slate-300">{d.then}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-3 font-display text-lg font-bold text-white">Assumptions behind these numbers</h3>
        <ul className="space-y-1 text-sm text-slate-400">{plan.assumptions.map((a) => <li key={a}>• {a}</li>)}</ul>
      </section>

      <p className="text-xs leading-6 text-slate-600">{plan.disclaimer}</p>
    </div>
  );
}

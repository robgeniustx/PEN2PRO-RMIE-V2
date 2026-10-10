import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlanView from "./PlanView";
import { apiRequest, isSignedIn } from "../../api/authApi";
import { getStoredStrategistSession } from "../../api/strategistApi";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const FIELD = "w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none";

export default function PlanBuilder({ sessionId }) {
  const [occupations, setOccupations] = useState([]);
  const [form, setForm] = useState({ occupation: "pressure-washing", custom_label: "", target: 10000, price: "", hours_per_unit: "", hours_per_week: 30, close_rate: "", margin: "", existing_clients: 0 });
  const [plan, setPlan] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState("");

  useEffect(() => {
    fetch(`${API}/api/strategist/occupations`).then((r) => r.json()).then((d) => setOccupations(d.occupations || [])).catch(() => {});
  }, []);

  const occ = occupations.find((o) => o.key === form.occupation);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const num = (v) => (v === "" || v === null ? undefined : Number(v));

  async function build(e) {
    e.preventDefault();
    setBusy(true); setError(""); setSaved("");
    try {
      const sid = sessionId || getStoredStrategistSession();
      const body = {
        occupation: form.occupation, custom_label: form.custom_label, target: num(form.target), price: num(form.price),
        hours_per_unit: num(form.hours_per_unit), hours_per_week: num(form.hours_per_week), close_rate: num(form.close_rate),
        margin: num(form.margin), existing_clients: Number(form.existing_clients) || 0,
      };
      setPlan(await apiRequest(`/api/strategist/plan${sid ? `?session_id=${encodeURIComponent(sid)}` : ""}`, { method: "POST", body }));
    } catch (err) {
      setError(err.message || "Could not build your plan.");
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    setSaved("");
    try {
      await apiRequest("/api/roadmaps", { method: "POST", body: { kind: "strategist-plan", title: `${plan.label}: $${plan.inputs.target.toLocaleString()}/month path`, data: plan } });
      setSaved("Saved to My Roadmaps.");
    } catch (err) {
      setSaved(err.message || "Could not save this plan.");
    }
  }

  return (
    <section id="plan-builder" className="scroll-mt-24 rounded-2xl border border-[#D4A017]/40 p-6" style={{ background: "#D4A01708" }}>
      <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">Strategist</p>
      <h2 className="mt-1 font-display text-2xl font-black text-white">Build your path to $10K a month</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">
        Pick your occupation and the strategist works out the customers, outreach, hours and weekly targets it takes, flags where your numbers do not fit, and gives you proof checkpoints to verify progress with real bank deposits. Defaults are starting assumptions: replace them with your own prices after the Week 1 price check.
      </p>

      <form onSubmit={build} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block text-sm text-slate-300">Occupation
          <select className={`${FIELD} mt-1`} value={form.occupation} onChange={set("occupation")}>
            {occupations.length === 0 && <option value="pressure-washing">Loading…</option>}
            {occupations.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
          </select>
        </label>
        {form.occupation === "custom" && (
          <label className="block text-sm text-slate-300">What do you do?
            <input className={`${FIELD} mt-1`} value={form.custom_label} onChange={set("custom_label")} maxLength={80} placeholder="e.g. Mobile phlebotomy" />
          </label>
        )}
        <label className="block text-sm text-slate-300">Monthly revenue goal ($)
          <input className={`${FIELD} mt-1`} type="number" min={1000} max={100000} value={form.target} onChange={set("target")} />
        </label>
        <label className="block text-sm text-slate-300">Your price per {occ?.unit || "sale"} ($)
          <input className={`${FIELD} mt-1`} type="number" min={5} value={form.price} onChange={set("price")} placeholder={occ?.price ? `Default ${occ.price}` : "Required"} />
        </label>
        <label className="block text-sm text-slate-300">Hours per {occ?.unit || "sale"}
          <input className={`${FIELD} mt-1`} type="number" min={0.25} step="0.25" value={form.hours_per_unit} onChange={set("hours_per_unit")} placeholder={occ?.hours ? `Default ${occ.hours}` : "Required"} />
        </label>
        <label className="block text-sm text-slate-300">Hours a week you can work
          <input className={`${FIELD} mt-1`} type="number" min={5} max={80} value={form.hours_per_week} onChange={set("hours_per_week")} />
        </label>
        <label className="block text-sm text-slate-300">Share of conversations that buy (%)
          <input className={`${FIELD} mt-1`} type="number" min={3} max={80} value={form.close_rate} onChange={set("close_rate")} placeholder="Default 20" />
        </label>
        <label className="block text-sm text-slate-300">Profit margin (%)
          <input className={`${FIELD} mt-1`} type="number" min={5} max={95} value={form.margin} onChange={set("margin")} placeholder={occ?.margin ? `Default ${occ.margin}` : "Default 60"} />
        </label>
        <label className="block text-sm text-slate-300">Clients you already have
          <input className={`${FIELD} mt-1`} type="number" min={0} max={500} value={form.existing_clients} onChange={set("existing_clients")} />
        </label>
        <div className="md:col-span-2">
          <button type="submit" disabled={busy} className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14] disabled:opacity-60">
            {busy ? "Building your plan…" : "Build my plan"}
          </button>
          {error && <p role="alert" className="mt-3 text-sm text-red-300">{error}</p>}
        </div>
      </form>

      {plan && (
        <div className="mt-10 border-t border-[#1A2235] pt-8">
          <div className="no-print mb-6 flex flex-wrap gap-3">
            {isSignedIn() ? (
              <button type="button" onClick={save} className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Save this plan</button>
            ) : (
              <Link to="/login" state={{ from: "/strategist/playbook" }} className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Sign in to save</Link>
            )}
            <button type="button" onClick={() => window.print()} className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Download PDF</button>
            {saved && <span role="status" className="self-center text-sm text-slate-300">{saved}</span>}
          </div>
          <PlanView plan={plan} />
        </div>
      )}
    </section>
  );
}

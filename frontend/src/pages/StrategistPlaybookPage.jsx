import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StepCard from "../components/strategist/StepCard";
import PlanBuilder from "../components/strategist/PlanBuilder";
import { claimPurchase, isSignedIn } from "../api/authApi";
import { createCheckoutSession } from "../api/stripeApi";
import {
  clearStrategistSession,
  fetchStrategistPlaybook,
  getStoredStrategistSession,
  storeStrategistSession,
} from "../api/strategistApi";

const PROGRESS_KEY = "pen2pro_strategist_progress";

const loadProgress = () => {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); } catch { return {}; }
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <button type="button" onClick={copy} className="rounded-lg border border-[#1A2235] px-3 py-1 text-xs font-semibold text-slate-300 hover:border-[#D4A017]/50 hover:text-white">
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

export default function StrategistPlaybookPage() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id") || getStoredStrategistSession();
  const [state, setState] = useState("loading"); // loading | ready | locked | error
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(loadProgress);
  const [buying, setBuying] = useState(false);
  const [buyError, setBuyError] = useState("");

  useEffect(() => {
    let active = true;
    setState("loading");
    fetchStrategistPlaybook(sessionId)
      .then((playbook) => {
        if (!active) return;
        if (sessionId) {
          storeStrategistSession(sessionId);
          // Link the purchase to the account so the plan opens on any device after signing in.
          if (isSignedIn() && sessionId.startsWith("cs_")) claimPurchase(sessionId).catch(() => {});
        }
        setData(playbook);
        setState("ready");
      })
      .catch((err) => {
        if (!active) return;
        if (err?.status === 402) {
          clearStrategistSession();
          setState("locked");
        } else {
          setState("error");
        }
      });
    return () => { active = false; };
  }, [sessionId]);

  const toggle = useCallback((key) => {
    setProgress((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(next)); } catch { /* storage unavailable */ }
      return next;
    });
  }, []);

  const { done, total } = useMemo(() => {
    const all = (data?.steps || []).flatMap((s) => s.actions.map((_, i) => `${s.id}-${i}`));
    return { total: all.length, done: all.filter((k) => progress[k]).length };
  }, [data, progress]);
  const pct = total ? Math.round((done / total) * 100) : 0;

  const buy = async () => {
    setBuyError("");
    setBuying(true);
    try {
      const result = await createCheckoutSession({ tier: "strategist" });
      if (result?.checkout_url) { window.location.href = result.checkout_url; return; }
      setBuyError(result?.error || "Checkout is not available right now.");
    } catch {
      setBuyError("Unable to start checkout. Please try again.");
    } finally {
      setBuying(false);
    }
  };

  if (state !== "ready") {
    return (
      <div className="min-h-screen bg-[#080C14] text-white">
        <Navbar />
        <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-5 py-20 text-center">
          {state === "loading" && <p className="text-slate-400">Opening your Strategist Plan…</p>}
          {state === "locked" && (
            <>
              <div className="mb-4 text-5xl">🔒</div>
              <h1 className="mb-3 font-display text-3xl font-black">Your plan is one step away</h1>
              <p className="mb-6 text-slate-400">
                We could not find a completed purchase on this device. If you just paid, wait a few seconds and refresh. Otherwise get the plan below, or read Step 1 free.
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                <button type="button" onClick={buy} disabled={buying} className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14] disabled:opacity-60">
                  {buying ? "Starting Checkout..." : "Get the Strategist Plan — $100"}
                </button>
                <Link to="/strategist" className="btn-outline rounded-xl px-6 py-3 text-sm font-bold">See what's included</Link>
              </div>
              {buyError && <p role="alert" className="mt-4 text-sm text-yellow-200">{buyError}</p>}
            </>
          )}
          {state === "error" && (
            <>
              <h1 className="mb-3 font-display text-3xl font-black">We could not load your plan</h1>
              <p className="mb-6 text-slate-400">The server did not respond. Your purchase is safe. Please try again in a moment.</p>
              <button type="button" onClick={() => window.location.reload()} className="btn-gold rounded-xl px-6 py-3 text-sm font-black text-[#080C14]">Try again</button>
            </>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <header className="border-b border-[#1A2235] px-5 py-12" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Your plan</p>
          <h1 className="font-display text-3xl font-black md:text-4xl">The $100 Strategist Plan</h1>
          <p className="mt-3 max-w-2xl text-slate-400">Work through the steps in order. Check off each action as you finish it. Your progress is saved on this device.</p>
          <div className="mt-6 max-w-xl">
            <div className="mb-2 flex justify-between text-xs font-semibold text-slate-400">
              <span>{done} of {total} actions done</span><span>{pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-[#1A2235]" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-2 rounded-full gradient-gold transition-all" style={{ width: `${pct}%` }} />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={() => window.print()} className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Print / Save as PDF</button>
            <a href="#plan-builder" className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Build my $10K plan</a>
            <a href="#scripts" className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Jump to scripts</a>
            <Link to="/starter" className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Generate a roadmap</Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-5 py-12 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Plan steps" className="hidden lg:block">
          <div className="sticky top-24 space-y-1 text-sm">
            {data.steps.map((s) => (
              <a key={s.id} href={`#step-${s.id}`} className="block rounded-lg px-3 py-2 text-slate-400 hover:bg-[#1A2235] hover:text-white">
                {s.id}. {s.title.length > 28 ? `${s.title.slice(0, 28)}…` : s.title}
              </a>
            ))}
            <a href="#budget" className="block rounded-lg px-3 py-2 text-slate-400 hover:bg-[#1A2235] hover:text-white">Lean budget</a>
            <a href="#scripts" className="block rounded-lg px-3 py-2 text-slate-400 hover:bg-[#1A2235] hover:text-white">Scripts</a>
            <a href="#tools" className="block rounded-lg px-3 py-2 text-slate-400 hover:bg-[#1A2235] hover:text-white">Tools</a>
          </div>
        </nav>

        <div className="space-y-10">
          <PlanBuilder sessionId={sessionId} />
          {data.phases.map((phase) => (
            <section key={phase.id}>
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl font-bold text-[#D4A017]">{phase.name}</h2>
                <span className="text-xs font-semibold text-slate-500">{phase.days}</span>
              </div>
              <div className="space-y-4">
                {data.steps.filter((s) => s.phase === phase.id).map((s) => (
                  <StepCard key={s.id} step={s} progress={progress} onToggle={toggle} defaultOpen={s.id === 1} />
                ))}
              </div>
            </section>
          ))}

          <section id="budget" className="scroll-mt-24 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <h2 className="mb-2 font-display text-xl font-bold">Lean launch budget</h2>
            <p className="mb-4 text-sm text-slate-500">{data.budget.note}</p>
            <ul className="divide-y divide-[#1A2235]">
              {data.budget.items.map((b) => (
                <li key={b.item} className="flex justify-between gap-4 py-2.5 text-sm">
                  <span className="text-slate-300">{b.item}</span>
                  <span className="shrink-0 font-bold text-[#D4A017]">{b.cost}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="scripts" className="scroll-mt-24">
            <h2 className="mb-4 font-display text-xl font-bold">Scripts to copy and adjust</h2>
            <div className="space-y-4">
              {data.scripts.map((sc) => (
                <div key={sc.title} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <h3 className="font-bold text-white">{sc.title}</h3>
                    <CopyButton text={sc.body} />
                  </div>
                  <p className="text-sm leading-7 text-slate-300">{sc.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="tools" className="scroll-mt-24">
            <h2 className="mb-4 font-display text-xl font-bold">Recommended tools</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.tools.map((t) => (
                <div key={t.category} className="rounded-2xl border border-[#1A2235] p-5" style={{ background: "#0F1520" }}>
                  <h3 className="mb-2 text-sm font-bold text-[#00C9B1]">{t.category}</h3>
                  <ul className="space-y-1 text-sm text-slate-300">
                    {t.tools.map((x) => <li key={x}>• {x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-500">
              More vendors for banking, LLC formation, insurance, and funding are on the <Link to="/affiliate" className="text-[#D4A017] underline">resources page</Link>. See also <Link to="/funding" className="text-[#D4A017] underline">funding readiness</Link> and <Link to="/credit-repair" className="text-[#D4A017] underline">credit readiness</Link>.
            </p>
          </section>

          <section className="rounded-2xl border border-[#D4A017]/40 p-6" style={{ background: "#D4A01708" }}>
            <h2 className="mb-2 font-display text-xl font-bold">Ready to go further?</h2>
            <p className="mb-4 text-sm text-slate-400">When you are ready for advanced strategy, automation, and done-with-you support, compare Pro and Elite.</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/pro" className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Explore Pro</Link>
              <Link to="/elite" className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Explore Elite</Link>
              <Link to="/accelerator" className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Accelerator</Link>
            </div>
          </section>

          <p className="text-xs leading-6 text-slate-600">{data.disclaimer}</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

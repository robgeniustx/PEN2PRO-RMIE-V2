import { useState } from "react";
import { Link } from "react-router-dom";
import { apiRequest, getStoredUser, isSignedIn } from "../../api/authApi";

const PAID = ["pro", "elite", "founders"];

// Pro, Elite and Founders: ask the AI to rework part of the roadmap.
export default function RefinePanel({ roadmap }) {
  const user = getStoredUser();
  const unlocked = isSignedIn() && (PAID.includes(user?.tier) || user?.role === "admin");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  async function run(e) {
    e.preventDefault();
    setBusy(true); setError(""); setResult(null);
    try {
      setResult(await apiRequest("/api/roadmaps/refine", { method: "POST", body: { roadmap, instruction: text } }));
    } catch (err) {
      setError(err.message || "Could not refine this roadmap.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="no-print rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
      <h2 className="font-display text-xl font-bold text-white">Refine with AI</h2>
      <p className="mt-1 text-sm text-slate-400">Ask for a specific change: tighten the offer, rewrite the sales script for your city, stress-test the pricing.</p>
      {unlocked ? (
        <form onSubmit={run} className="mt-4 space-y-3">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required minLength={5} maxLength={600} rows={3}
            placeholder="e.g. Rewrite the cold DM for property managers in Dallas and add a follow-up for day 3."
            className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white focus:border-[#D4A017] focus:outline-none"
          />
          <button type="submit" disabled={busy} className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold disabled:opacity-60">
            {busy ? "Working…" : "Refine"}
          </button>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
        </form>
      ) : (
        <p className="mt-4 text-sm text-slate-300">
          AI refinement is included with Pro, Elite and Founders.{" "}
          <Link to={isSignedIn() ? "/pro" : "/login"} state={{ from: "/results" }} className="font-semibold text-[#D4A017] underline">
            {isSignedIn() ? "See Pro" : "Sign in"}
          </Link>
        </p>
      )}
      {result && (
        <div className="mt-5 rounded-xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-4">
          <p className="font-bold text-white">{result.title}</p>
          <pre className="mt-2 whitespace-pre-wrap font-sans text-sm leading-7 text-slate-200">{typeof result.revised === "string" ? result.revised : JSON.stringify(result.revised, null, 2)}</pre>
          {result.why && <p className="mt-3 text-xs text-slate-400">Why: {result.why}</p>}
        </div>
      )}
    </section>
  );
}

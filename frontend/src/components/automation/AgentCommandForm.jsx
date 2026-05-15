import { useState } from "react";
import { runMainBuilder } from "../../api/agentApi";

export default function AgentCommandForm({ onResult }) {
  const [request, setRequest] = useState(
    "Build a full launch plan, website strategy, social media plan, funding readiness checklist, and outreach plan for a mobile pressure washing business in Houston."
  );
  const [industry, setIndustry] = useState("pressure washing");
  const [audience, setAudience] = useState("homeowners and small commercial property owners");
  const [tier, setTier] = useState("founders");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await runMainBuilder({
        request,
        industry,
        audience,
        tier,
        admin_test: true,
        execute: true,
      });

      onResult?.(result);
    } catch (err) {
      console.error("Main Builder request failed:", err);
      setError(err.message || "Unable to run Main Builder.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-500/40 bg-slate-900 p-5 text-white">
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
          PEN2PRO Main Builder
        </p>
        <h2 className="mt-2 text-2xl font-black">
          Build a Combined Launch Plan
        </h2>
        <p className="mt-2 text-sm text-slate-300">
          Main Builder will route your request through the agent stack and return one combined execution plan.
        </p>
      </div>

      <label className="mb-2 block text-sm font-bold text-slate-200">
        Request
      </label>
      <textarea
        value={request}
        onChange={(event) => setRequest(event.target.value)}
        rows={5}
        className="mb-4 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-blue-400"
        placeholder="Tell Main Builder what you want to create..."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">
            Industry
          </label>
          <input
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">
            Audience
          </label>
          <input
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-blue-400"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-200">
            Tier
          </label>
          <select
            value={tier}
            onChange={(event) => setTier(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-blue-400"
          >
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="elite">Elite</option>
            <option value="founders">Founders</option>
          </select>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 rounded-xl bg-blue-500 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Running Main Builder..." : "Run Main Builder"}
      </button>
    </form>
  );
}

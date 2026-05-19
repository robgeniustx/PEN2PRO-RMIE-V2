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
    <form onSubmit={handleSubmit} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6 text-white">
      <div className="mb-6">
        <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">PEN2PRO Main Builder</div>
        <h2 className="font-display text-2xl font-black text-white">Build a Combined Launch Plan</h2>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed">
          Main Builder routes your request through the full agent stack and returns one combined execution plan with roadmap, website strategy, outreach, funding readiness, and more.
        </p>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Request</label>
        <textarea
          value={request}
          onChange={(event) => setRequest(event.target.value)}
          rows={5}
          className="w-full rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#FF8A00]/50 transition-colors"
          placeholder="Tell Main Builder what you want to create..."
        />
      </div>

      <div className="mb-5 grid gap-4 md:grid-cols-3">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Industry</label>
          <input
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
            className="w-full rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#FF8A00]/50 transition-colors"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Target Audience</label>
          <input
            value={audience}
            onChange={(event) => setAudience(event.target.value)}
            className="w-full rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-sm text-white placeholder-slate-600 outline-none focus:border-[#FF8A00]/50 transition-colors"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">Plan Tier</label>
          <select
            value={tier}
            onChange={(event) => setTier(event.target.value)}
            className="w-full rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-3 text-sm text-white outline-none focus:border-[#FF8A00]/50 transition-colors"
          >
            <option value="free">Free</option>
            <option value="pro">Pro</option>
            <option value="elite">Elite</option>
            <option value="founders">Founders Lifetime</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3">
          <p className="text-sm text-red-300">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] btn-gold disabled:cursor-not-allowed disabled:opacity-60 transition-opacity"
      >
        {loading ? "⚙️ Running Main Builder..." : "⚡ Run Main Builder"}
      </button>
    </form>
  );
}

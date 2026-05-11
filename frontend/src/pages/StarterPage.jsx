import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useTier from "../hooks/useTier";

export default function StarterPage() {
  const navigate = useNavigate();
  const { tier } = useTier();
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const response = await fetch("/api/blueprints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      if (!response.ok) throw new Error("backend unavailable");
      const data = await response.json();
      const blueprintId = data?.id || "demo";
      navigate(`/blueprint/${blueprintId}?tier=${tier}`);
    } catch {
      navigate(`/blueprint/demo?tier=${tier}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-4">
            Free Blueprint
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-3">
            Turn Your Idea Into a Business Blueprint
          </h1>
          <p className="text-slate-400 text-sm">
            Describe your business idea below. PEN2PRO will generate your personalized starter blueprint in seconds.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl"
        >
          <label className="block text-sm font-semibold text-slate-300 mb-1">
            What's your business idea?
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full min-h-36 rounded-lg bg-slate-800 border border-slate-700 p-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
            placeholder="Example: I want to start a mobile car detailing business in Atlanta targeting busy professionals..."
            required
          />
          <button
            type="submit"
            disabled={loading || !idea.trim()}
            className="w-full rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold py-3 text-sm tracking-wide transition-colors"
          >
            {loading ? "Generating Blueprint..." : "Generate My Blueprint →"}
          </button>
          <p className="text-center text-xs text-slate-500">
            Free tier includes 1 starter blueprint.{" "}
            <a href="/pricing" className="text-cyan-400 hover:underline">
              Upgrade to Pro
            </a>{" "}
            for full roadmap access.
          </p>
        </form>
      </div>
    </main>
  );
}

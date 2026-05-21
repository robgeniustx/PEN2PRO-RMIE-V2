import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StarterIntakeForm({ onSubmit }) {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!idea.trim()) return;
    if (onSubmit) {
      setLoading(true);
      await onSubmit({ business_idea: idea });
      setLoading(false);
    } else {
      navigate("/starter", { state: { prefill: idea } });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">
          What business do you want to start?
        </label>
        <textarea
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="e.g. I want to start a pressure washing business targeting homeowners..."
          rows={3}
          className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading || !idea.trim()}
        className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-50"
      >
        {loading ? "Building..." : "Build My Free Roadmap"}
      </button>
    </form>
  );
}

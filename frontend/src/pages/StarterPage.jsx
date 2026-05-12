import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTier } from "../hooks/useTier";

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
    } catch (_error) {
      navigate(`/blueprint/demo?tier=${tier}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-700 text-xs font-bold">
              P2P
            </div>
            <span className="font-extrabold tracking-tight">PEN2PRO</span>
          </Link>
          <Link to="/pricing" className="text-sm font-semibold text-slate-400 hover:text-teal-400">
            View Plans
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-3 inline-flex rounded-full border border-teal-800 bg-teal-950 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-400">
          Free Blueprint Generator
        </div>

        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white">
          Describe your business idea.
          <br />
          <span className="text-teal-400">We'll build your roadmap.</span>
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-400">
          Tell us about your idea in plain English. We'll generate a starter
          business blueprint — your first step from idea to income.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-300">
              Your business idea
            </label>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              rows={6}
              required
              placeholder="Example: I want to start a mobile car detailing service in my city targeting busy professionals and car enthusiasts..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white placeholder-slate-500 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-teal-700 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-900/40 transition hover:bg-teal-600 disabled:opacity-60"
          >
            {loading ? "Generating your blueprint…" : "Generate My Blueprint →"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Want more?{" "}
          <Link to="/pricing" className="font-bold text-teal-400 hover:text-teal-300">
            Upgrade to Pro or Elite
          </Link>{" "}
          for full roadmaps, branding, and AI strategist guidance.
        </p>
      </main>
    </div>
  );
}

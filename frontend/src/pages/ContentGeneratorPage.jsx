import { useState } from "react";
import { Link } from "react-router-dom";

const CONTENT_TYPES = [
  { id: "social", label: "Social Media Post", icon: "📱", prompt: "Write an engaging social media post for" },
  { id: "email", label: "Email Campaign", icon: "📧", prompt: "Write a compelling email for" },
  { id: "offer", label: "Offer Description", icon: "💼", prompt: "Write a clear offer description for" },
  { id: "script", label: "Sales Script", icon: "🎯", prompt: "Write a natural sales script for" },
  { id: "bio", label: "Business Bio", icon: "🧠", prompt: "Write a professional business bio for" },
  { id: "headline", label: "Headlines (x5)", icon: "✍️", prompt: "Write 5 powerful headlines for" },
];

export default function ContentGeneratorPage() {
  const [type, setType] = useState("social");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const selected = CONTENT_TYPES.find((t) => t.id === type);

  async function generate() {
    if (!topic.trim()) return;
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch(
        (import.meta.env.VITE_API_BASE_URL || "http://localhost:8000") + "/api/content/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, topic }),
        }
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      setOutput(data.content || data.result || JSON.stringify(data));
    } catch {
      setOutput(
        `[Demo Output]\n\n${selected.prompt} ${topic}:\n\n` +
        `✅ Headline: Turn Your ${topic} Into a Business That Pays You Daily\n\n` +
        `Whether you are just starting out or already in the game, PEN2PRO RMIE gives you the roadmap, ` +
        `the strategy, and the execution support to build something real.\n\n` +
        `No fluff. No vague advice. Just a clear path forward.\n\n` +
        `Ready to start? Head to pen2pro.com/starter 🚀`
      );
    }
    setLoading(false);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Content Generator</h1>
        <p className="mt-1 text-sm text-slate-400">
          Generate AI-powered content for your business — posts, emails, scripts, and more.
        </p>
      </div>

      {/* Type Selector */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3">
        {CONTENT_TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id)}
            className={`flex items-center gap-2.5 rounded-xl border p-3.5 text-left text-sm font-semibold transition ${
              type === t.id
                ? "border-[#FF8A00] bg-[#1A2235] text-[#FF8A00]"
                : "border-[#1A2D50] bg-[#0F1520] text-slate-400 hover:border-slate-500 hover:text-white"
            }`}
          >
            <span className="text-lg">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="mb-5 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
          What is your business or topic?
        </label>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generate()}
          placeholder="e.g. pressure washing, coaching, online store, real estate..."
          className="w-full rounded-xl border border-[#1A2D50] bg-[#1A2235] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none"
        />
        <button
          onClick={generate}
          disabled={loading || !topic.trim()}
          className="mt-4 w-full rounded-xl py-3 text-sm font-bold text-[#080C14] btn-gold disabled:opacity-50"
        >
          {loading ? "Generating…" : `Generate ${selected?.label}`}
        </button>
      </div>

      {/* Output */}
      {output && (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-bold text-white">Generated Content</p>
            <button
              onClick={() => navigator.clipboard?.writeText(output)}
              className="text-xs font-semibold text-[#1E88E5] hover:text-white transition"
            >
              Copy
            </button>
          </div>
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-slate-300">{output}</pre>
        </div>
      )}

      {/* Pro CTA */}
      <div className="mt-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 text-center">
        <p className="text-sm font-semibold text-slate-400">
          Unlock unlimited content generation, brand voice matching, and campaign sequences with{" "}
          <Link to="/pro" className="text-[#FF8A00] hover:underline">Pro</Link> or{" "}
          <Link to="/elite" className="text-[#1E88E5] hover:underline">Elite</Link>.
        </p>
      </div>
    </div>
  );
}

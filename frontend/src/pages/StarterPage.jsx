import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTier } from "../hooks/useTier";

const StarterPage = () => {
  const navigate = useNavigate();
  const { tier } = useTier();
  const [idea, setIdea] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-3">
        <h1 className="text-2xl font-bold">Starter Intake</h1>
        <textarea value={idea} onChange={(e) => setIdea(e.target.value)} className="min-h-36 w-full rounded-lg bg-slate-900 p-3" placeholder="Describe your idea" />
        <button className="rounded bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Generate Blueprint</button>
      </form>
    </main>
  );
};

export default StarterPage;
export default function StarterPage(){return <div>StarterPage stub</div>;}

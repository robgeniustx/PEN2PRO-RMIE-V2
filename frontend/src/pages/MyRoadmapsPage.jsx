import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PlanView from "../components/strategist/PlanView";
import { apiRequest } from "../api/authApi";

const KIND_LABEL = { blueprint: "Business roadmap", "strategist-plan": "Strategist plan" };

export default function MyRoadmapsPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState(null);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(null); // an opened strategist plan

  const load = () =>
    apiRequest("/api/roadmaps")
      .then((d) => setItems(d.roadmaps))
      .catch((e) => { if (e.status === 401) navigate("/login", { replace: true, state: { from: "/my-roadmaps" } }); else setError(e.message); });

  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function openItem(item) {
    setError("");
    try {
      const row = await apiRequest(`/api/roadmaps/${item.id}`);
      if (row.kind === "blueprint") {
        navigate("/results", { state: { roadmap: row.data, savedId: row.id } });
      } else {
        setOpen({ id: row.id, title: row.title, plan: row.data });
      }
    } catch (e) {
      setError(e.message);
    }
  }

  async function remove(item) {
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return;
    try {
      await apiRequest(`/api/roadmaps/${item.id}`, { method: "DELETE" });
      if (open?.id === item.id) setOpen(null);
      load();
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="font-display text-3xl font-black">My Roadmaps</h1>
        <p className="mt-2 text-slate-400">Everything you saved to your account.</p>
        {error && <p role="alert" className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}

        {items === null && !error && <p className="mt-8 text-slate-500">Loading…</p>}

        {items && items.length === 0 && (
          <div className="mt-8 rounded-2xl border border-[#1A2235] p-8 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-300">You have not saved anything yet.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link to="/starter" className="btn-gold rounded-xl px-5 py-2.5 text-sm font-bold">Start a free roadmap</Link>
              <Link to="/strategist" className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">$100 Strategist Plan</Link>
            </div>
          </div>
        )}

        {items && items.length > 0 && (
          <ul className="mt-8 space-y-3">
            {items.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
                <div>
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="text-xs text-slate-500">{KIND_LABEL[item.kind] || item.kind} · saved {new Date(item.created_at).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => openItem(item)} className="btn-gold rounded-lg px-4 py-2 text-xs font-bold">Open</button>
                  <button type="button" onClick={() => remove(item)} className="btn-outline rounded-lg px-4 py-2 text-xs font-bold">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {open && (
          <section className="mt-10 border-t border-[#1A2235] pt-8">
            <div className="no-print mb-6 flex gap-3">
              <button type="button" onClick={() => window.print()} className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Download PDF</button>
              <button type="button" onClick={() => setOpen(null)} className="btn-outline rounded-xl px-5 py-2.5 text-sm font-bold">Close</button>
            </div>
            <PlanView plan={open.plan} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function FollowUpsPage() {
  const [due, setDue] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const { getDueFollowUps, listFollowUps } = await import("../api/crmApi");
      const [dueData, draftData] = await Promise.all([
        getDueFollowUps(),
        listFollowUps({ status: "draft" }),
      ]);
      setDue(Array.isArray(dueData) ? dueData : []);
      setDrafts(Array.isArray(draftData) ? draftData : []);
    } catch {
      setDue([]);
      setDrafts([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function complete(id) {
    try {
      const { completeFollowUp } = await import("../api/crmApi");
      await completeFollowUp(id);
      await load();
    } catch {
      // silent
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Follow-Ups</h1>
            <p className="mt-2 text-slate-400 text-sm">Never let a warm lead go cold. Follow up within 48 hours, every time.</p>
          </div>
          <Link to="/dashboard" className="btn-outline px-5 py-2.5 text-sm font-bold">Dashboard →</Link>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading follow-ups...</div>
        ) : (
          <>
            {/* Due Now */}
            {due.length > 0 && (
              <div className="mb-6">
                <h2 className="font-display text-lg font-bold text-white mb-3">Due Now ({due.length})</h2>
                <div className="space-y-3">
                  {due.map((item) => (
                    <div key={item.id} className="flex items-center justify-between rounded-2xl border border-[#FF8A00]/30 p-5" style={{ background: "#0F1520" }}>
                      <div>
                        <p className="text-sm font-medium text-white">{item.contact_name || item.name || "Contact"}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{item.message || item.notes || "Follow up needed"}</p>
                      </div>
                      <button
                        onClick={() => complete(item.id)}
                        className="rounded-lg border border-[#00C9B1]/40 bg-[#00C9B1]/10 px-3 py-1.5 text-xs font-bold text-[#00C9B1] hover:bg-[#00C9B1]/20 transition-all shrink-0"
                      >
                        Mark Done
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Draft Messages */}
            {drafts.length > 0 && (
              <div className="mb-6">
                <h2 className="font-display text-lg font-bold text-white mb-3">Draft Messages</h2>
                <div className="space-y-3">
                  {drafts.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                      <p className="text-sm text-slate-300 italic">"{item.message}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {due.length === 0 && drafts.length === 0 && (
              <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
                <p className="text-slate-500 text-sm mb-2">No follow-ups due.</p>
                <p className="text-xs text-slate-600">Add leads to your pipeline to generate follow-up reminders.</p>
              </div>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

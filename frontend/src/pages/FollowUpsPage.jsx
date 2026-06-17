import { useEffect, useState } from "react";
import { getDueFollowUps, completeFollowUp, listFollowUps } from "../api/crmApi";
import FollowUpReminder from "../components/crm/FollowUpReminder";
import FollowUpWriter from "../components/crm/FollowUpWriter";

export default function FollowUpsPage() {
  const [due, setDue] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    try {
      const [dueData, draftData] = await Promise.all([
        getDueFollowUps(),
        listFollowUps({ status: "draft" }),
      ]);
      setDue(Array.isArray(dueData) ? dueData : []);
      setDrafts(Array.isArray(draftData) ? draftData : []);
    } catch {
      setDue([]);
      setDrafts([]);
    }
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
  }, []);

  async function handleComplete(id) {
    await completeFollowUp(id);
    await refresh();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-black text-white">Follow-Ups</h1>
        <p className="mt-1 text-sm text-slate-400">
          Stay on top of follow-up reminders, draft messages, and outreach sequences.
        </p>
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm text-slate-500">Loading follow-ups…</div>
      ) : (
        <>
          {/* Due Now */}
          <div className="mb-8">
            <h2 className="mb-3 text-lg font-bold text-white">
              Due Now
              {due.length > 0 && (
                <span className="ml-2 rounded-full bg-[#FF8A00]/20 px-2 py-0.5 text-xs font-bold text-[#FF8A00]">
                  {due.length}
                </span>
              )}
            </h2>
            {due.length === 0 ? (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] py-8 text-center text-sm text-slate-500">
                No follow-ups due right now. You are caught up.
              </div>
            ) : (
              <div className="space-y-3">
                {due.map((item) => (
                  <FollowUpReminder
                    key={item.id}
                    item={item}
                    onComplete={handleComplete}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Drafts */}
          {drafts.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-3 text-lg font-bold text-white">Draft Messages</h2>
              <div className="space-y-2">
                {drafts.map((d) => (
                  <div key={d.id} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-sm text-slate-300">
                    {d.message}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Writer */}
          <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
            <h2 className="mb-4 text-lg font-bold text-white">Write a Follow-Up</h2>
            <FollowUpWriter />
          </div>
        </>
      )}
    </div>
  );
}

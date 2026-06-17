import { useEffect, useState } from "react";
import { listLeads, createLead } from "../api/crmApi";
import LeadCard from "../components/crm/LeadCard";
import LeadForm from "../components/crm/LeadForm";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  async function refresh() {
    try {
      const data = await listLeads();
      setLeads(Array.isArray(data) ? data : []);
    } catch {
      setLeads([]);
    }
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
  }, []);

  async function handleSubmit(payload) {
    await createLead(payload);
    await refresh();
    setShowForm(false);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Lead Inbox</h1>
          <p className="mt-1 text-sm text-slate-400">
            Incoming opportunities from forms, calls, referrals, and manual entry.
          </p>
        </div>
        <button
          onClick={() => setShowForm((s) => !s)}
          className="self-start rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold"
        >
          {showForm ? "Cancel" : "+ Add Lead"}
        </button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <LeadForm onSubmit={handleSubmit} />
        </div>
      )}

      {loading ? (
        <div className="py-20 text-center text-sm text-slate-500">Loading leads…</div>
      ) : leads.length === 0 ? (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] py-16 text-center">
          <p className="text-4xl mb-3">📥</p>
          <p className="font-bold text-white">No leads yet</p>
          <p className="mt-1 text-sm text-slate-400">
            Add your first lead manually or connect a form to start capturing inbound interest.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="mt-5 rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold"
          >
            Add First Lead
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {leads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      )}
    </div>
  );
}

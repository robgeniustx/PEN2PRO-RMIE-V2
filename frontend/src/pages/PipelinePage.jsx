import { useEffect, useState } from "react";
import { listLeads } from "../api/crmApi";
import PipelineBoard from "../components/crm/PipelineBoard";
import { Link } from "react-router-dom";

const STAGE_ORDER = ["new", "qualified", "proposal", "negotiation", "won", "lost"];
const STAGE_LABELS = {
  new: "New",
  qualified: "Qualified",
  proposal: "Proposal Sent",
  negotiation: "Negotiating",
  won: "Won",
  lost: "Lost",
};
const STAGE_COLORS = {
  new: "text-slate-400",
  qualified: "text-[#1E88E5]",
  proposal: "text-[#FF8A00]",
  negotiation: "text-purple-400",
  won: "text-green-400",
  lost: "text-red-400",
};

export default function PipelinePage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listLeads()
      .then((data) => setLeads(Array.isArray(data) ? data : []))
      .catch(() => setLeads([]))
      .finally(() => setLoading(false));
  }, []);

  const totalValue = leads.reduce((sum, l) => sum + (Number(l.value) || 0), 0);
  const wonValue = leads
    .filter((l) => l.stage === "won")
    .reduce((sum, l) => sum + (Number(l.value) || 0), 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Pipeline</h1>
          <p className="mt-1 text-sm text-slate-400">
            Deal stages, values, probabilities, and close tracking.
          </p>
        </div>
        <Link to="/dashboard/lead-inbox" className="self-start rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
          + Add Deal
        </Link>
      </div>

      {/* Summary Metrics */}
      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Total Deals</p>
          <p className="mt-1 text-2xl font-black text-white">{leads.length}</p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pipeline Value</p>
          <p className="mt-1 text-2xl font-black text-[#FF8A00]">
            ${totalValue.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Won Revenue</p>
          <p className="mt-1 text-2xl font-black text-green-400">
            ${wonValue.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Win Rate</p>
          <p className="mt-1 text-2xl font-black text-white">
            {leads.length > 0
              ? Math.round((leads.filter((l) => l.stage === "won").length / leads.length) * 100)
              : 0}
            %
          </p>
        </div>
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm text-slate-500">Loading pipeline…</div>
      ) : leads.length === 0 ? (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] py-16 text-center">
          <p className="text-4xl mb-3">🎯</p>
          <p className="font-bold text-white">No deals in your pipeline</p>
          <p className="mt-1 text-sm text-slate-400">
            Start adding leads to track deals from prospect to close.
          </p>
          <Link to="/dashboard/lead-inbox" className="mt-5 inline-block rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
            Go to Lead Inbox
          </Link>
        </div>
      ) : (
        <PipelineBoard leads={leads} />
      )}
    </div>
  );
}

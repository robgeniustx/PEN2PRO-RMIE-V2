import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", notes: "" });

  async function load() {
    try {
      const { listLeads } = await import("../api/crmApi");
      const data = await listLeads();
      setLeads(Array.isArray(data) ? data : []);
    } catch {
      setLeads([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function submit(e) {
    e.preventDefault();
    try {
      const { createLead } = await import("../api/crmApi");
      await createLead(form);
      setForm({ name: "", email: "", phone: "", notes: "" });
      setShowForm(false);
      await load();
    } catch {
      // silent
    }
  }

  const STATUS_COLORS = {
    new: "text-[#1E88E5] border-[#1E88E5]/30 bg-[#1E88E5]/10",
    contacted: "text-[#FF8A00] border-[#FF8A00]/30 bg-[#FF8A00]/10",
    qualified: "text-[#D4A017] border-[#D4A017]/30 bg-[#D4A017]/10",
    won: "text-[#00C9B1] border-[#00C9B1]/30 bg-[#00C9B1]/10",
    lost: "text-slate-500 border-[#1A2D50] bg-[#1A2D50]/20",
  };

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Leads</h1>
            <p className="mt-2 text-slate-400 text-sm">Track every prospect from first contact to closed deal.</p>
          </div>
          <button
            onClick={() => setShowForm((s) => !s)}
            className="btn-gold px-5 py-2.5 text-sm font-bold"
          >
            {showForm ? "Cancel" : "Add Lead"}
          </button>
        </div>

        {/* Add Lead Form */}
        {showForm && (
          <form onSubmit={submit} className="mb-6 rounded-2xl border border-[#1A2D50] p-6 space-y-4" style={{ background: "#0F1520" }}>
            <h3 className="font-display text-base font-bold text-white">New Lead</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { field: "name", label: "Name", placeholder: "Contact name", required: true },
                { field: "email", label: "Email", placeholder: "email@example.com" },
                { field: "phone", label: "Phone", placeholder: "(832) 555-0100" },
              ].map(({ field, label, placeholder, required }) => (
                <div key={field}>
                  <label className="mb-1.5 block text-xs font-medium text-slate-400">{label}</label>
                  <input
                    type="text"
                    required={required}
                    value={form[field]}
                    onChange={(e) => setForm((f) => ({ ...f, [field]: e.target.value }))}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-400">Notes</label>
                <input
                  type="text"
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  placeholder="Service needed, how they found you..."
                  className="w-full rounded-xl border border-[#1A2D50] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                />
              </div>
            </div>
            <button type="submit" className="btn-gold px-6 py-2.5 text-sm font-bold">
              Save Lead
            </button>
          </form>
        )}

        {/* Leads List */}
        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading leads...</div>
        ) : leads.length === 0 ? (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-2">No leads yet.</p>
            <p className="text-xs text-slate-600">Add your first lead or generate outreach messages to start building your pipeline.</p>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
            <div className="px-6 py-4 border-b border-[#1A2D50]">
              <span className="text-xs text-slate-500">{leads.length} leads</span>
            </div>
            <div className="divide-y divide-[#1A2D50]">
              {leads.map((l) => (
                <div key={l.id} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">{l.name}</p>
                    {l.email && <p className="text-xs text-slate-500 mt-0.5">{l.email}</p>}
                    {l.notes && <p className="text-xs text-slate-600 mt-0.5">{l.notes}</p>}
                  </div>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold capitalize ${STATUS_COLORS[l.status] || STATUS_COLORS.new}`}>
                    {l.status || "new"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listCustomers } from "../api/crmApi";

const STATUS_COLORS = {
  customer: "text-green-400 bg-green-900/20 border-green-800/30",
  prospect: "text-[#FF8A00] bg-orange-900/20 border-orange-800/30",
  lead: "text-[#1E88E5] bg-blue-900/20 border-blue-800/30",
  inactive: "text-slate-400 bg-slate-800/20 border-slate-700/30",
};

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listCustomers()
      .then((data) => setCustomers(Array.isArray(data) ? data : []))
      .catch(() => setCustomers([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = customers.filter(
    (c) =>
      !search ||
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.email?.toLowerCase().includes(search.toLowerCase()) ||
      c.company?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Contacts</h1>
          <p className="mt-1 text-sm text-slate-400">
            Customers, prospects, partners, and vendors.
          </p>
        </div>
        <Link
          to="/dashboard/lead-inbox"
          className="self-start rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold"
        >
          + Add Contact
        </Link>
      </div>

      {/* Search */}
      <div className="mb-5">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or company…"
          className="w-full rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#FF8A00] focus:outline-none"
        />
      </div>

      {loading ? (
        <div className="py-20 text-center text-sm text-slate-500">Loading contacts…</div>
      ) : filtered.length === 0 ? (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] py-16 text-center">
          <p className="text-4xl mb-3">👥</p>
          <p className="font-bold text-white">No contacts yet</p>
          <p className="mt-1 text-sm text-slate-400">
            Add your first customer or import contacts from your lead inbox.
          </p>
          <Link to="/dashboard/lead-inbox" className="mt-5 inline-block rounded-xl px-5 py-2.5 text-sm font-bold text-[#080C14] btn-gold">
            View Lead Inbox
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="flex flex-col gap-2 rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1A2235] text-sm font-bold text-[#FF8A00]">
                  {(c.name || "?").slice(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-white">{c.name || "—"}</p>
                  {c.company && <p className="text-xs text-slate-400">{c.company}</p>}
                </div>
              </div>
              <div className="ml-12 flex flex-wrap items-center gap-3 md:ml-0">
                {c.email && (
                  <a href={`mailto:${c.email}`} className="text-xs text-[#1E88E5] hover:underline">
                    {c.email}
                  </a>
                )}
                {c.status && (
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${STATUS_COLORS[c.status] || STATUS_COLORS.inactive}`}>
                    {c.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

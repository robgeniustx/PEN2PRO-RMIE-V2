import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const PAGE_SIZE = 20;

export default function AdminWaitlistPage() {
  const [key, setKey] = useState(sessionStorage.getItem("pen2pro_admin_key") || "");
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");

  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [interest, setInterest] = useState("");
  const [referral, setReferral] = useState("");
  const [page, setPage] = useState(1);
  const [exporting, setExporting] = useState(false);

  async function fetchWaitlist(adminKey, searchVal, interestVal, referralVal) {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (searchVal) params.set("search", searchVal);
      if (interestVal) params.set("interest", interestVal);
      if (referralVal) params.set("referral", referralVal);
      const res = await fetch(`${API}/api/admin/waitlist?${params}`, {
        headers: { "x-admin-key": adminKey },
      });
      const json = await res.json();
      if (res.status === 403) {
        setKeyError("Invalid admin key");
        setKey("");
        sessionStorage.removeItem("pen2pro_admin_key");
        return;
      }
      if (!res.ok) throw new Error(json.detail || "Failed to load waitlist");
      setEntries(json.entries || []);
      setTotal(json.filtered ?? json.total ?? 0);
      setPage(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (key) fetchWaitlist(key, search, interest, referral);
  }, [key]);

  function handleSearch(e) {
    e.preventDefault();
    fetchWaitlist(key, search, interest, referral);
  }

  async function handleExport() {
    setExporting(true);
    try {
      const res = await fetch(`${API}/api/admin/waitlist/export`, {
        headers: { "x-admin-key": key },
      });
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pen2pro-waitlist.csv";
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setExporting(false);
    }
  }

  function handleKeySubmit(e) {
    e.preventDefault();
    setKeyError("");
    sessionStorage.setItem("pen2pro_admin_key", keyInput);
    setKey(keyInput);
  }

  // Key Gate
  if (!key) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#080C14" }}>
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">P2P</div>
            <h1 className="font-display text-2xl font-bold text-white">Admin Access</h1>
          </div>
          <form onSubmit={handleKeySubmit} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            {keyError && <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{keyError}</div>}
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="Admin access key"
              className="mb-4 w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
            />
            <button type="submit" className="btn-gold w-full py-3 text-sm font-bold">Access Admin Panel</button>
          </form>
        </div>
      </div>
    );
  }

  const totalPages = Math.max(1, Math.ceil(entries.length / PAGE_SIZE));
  const pageEntries = entries.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-7xl px-5 py-12">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/admin" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">← Admin Dashboard</Link>
            <h1 className="font-display text-3xl font-black text-white mt-1">Waitlist</h1>
            <p className="text-sm text-slate-500">{total} results</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleExport}
              disabled={exporting}
              className="btn-outline px-5 py-2.5 text-sm font-bold"
            >
              {exporting ? "Exporting..." : "Export CSV"}
            </button>
            <button
              onClick={() => { sessionStorage.removeItem("pen2pro_admin_key"); setKey(""); }}
              className="rounded-xl border border-[#1A2235] px-4 py-2.5 text-sm font-bold text-slate-400 hover:border-red-500/40 hover:text-red-400 transition-all"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Filters */}
        <form onSubmit={handleSearch} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="flex-1 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
          />
          <select
            value={interest}
            onChange={e => setInterest(e.target.value)}
            className="rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-2.5 text-sm text-white focus:border-[#D4A017] focus:outline-none"
          >
            <option value="">All Interests</option>
            <option value="Free Roadmap">Free Roadmap</option>
            <option value="Pro Plan">Pro Plan</option>
            <option value="Elite Plan">Elite Plan</option>
            <option value="Founders Lifetime">Founders Lifetime</option>
            <option value="Affiliate Partner">Affiliate Partner</option>
            <option value="Funding Help">Funding Help</option>
            <option value="Credit Repair Help">Credit Repair Help</option>
          </select>
          <input
            type="text"
            value={referral}
            onChange={e => setReferral(e.target.value)}
            placeholder="Filter by referral..."
            className="rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
          />
          <button type="submit" className="btn-gold px-6 py-2.5 text-sm font-bold">
            Search
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Table */}
        <div className="rounded-2xl border border-[#1A2235] overflow-hidden" style={{ background: "#0F1520" }}>
          {loading ? (
            <div className="py-20 text-center text-slate-500">Loading...</div>
          ) : pageEntries.length === 0 ? (
            <div className="py-20 text-center text-slate-500">No entries found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[800px]">
                <thead>
                  <tr className="border-b border-[#1A2235]">
                    {["#", "Name", "Email", "Phone", "Referral", "Interest", "Business Idea", "Date"].map(h => (
                      <th key={h} className="px-4 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageEntries.map((entry, i) => (
                    <tr key={entry.id} className="border-b border-[#1A2235] hover:bg-white/[0.02] transition-all">
                      <td className="px-4 py-3 text-slate-600 text-xs">{entry.id}</td>
                      <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{entry.name}</td>
                      <td className="px-4 py-3 text-slate-400">{entry.email}</td>
                      <td className="px-4 py-3 text-slate-500">{entry.phone || "—"}</td>
                      <td className="px-4 py-3">
                        {entry.referral ? (
                          <span className="rounded-full border border-teal-500/30 bg-teal-900/20 px-2 py-0.5 text-xs font-semibold text-teal-400 whitespace-nowrap">
                            🤝 {entry.referral}
                          </span>
                        ) : (
                          <span className="text-slate-600 text-xs">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className="rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-2 py-0.5 text-xs font-semibold whitespace-nowrap" style={{ color: "#D4A017" }}>
                          {entry.interest}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500 max-w-xs truncate">{entry.business_idea || "—"}</td>
                      <td className="px-4 py-3 text-slate-500 text-xs whitespace-nowrap">
                        {new Date(entry.submitted_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Page {page} of {totalPages} — showing {pageEntries.length} of {entries.length} entries
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-xs text-slate-400 disabled:opacity-40 hover:border-[#D4A017]/40 transition-all"
              >
                Prev
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="rounded-lg border border-[#1A2235] px-3 py-1.5 text-xs text-slate-400 disabled:opacity-40 hover:border-[#D4A017]/40 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

const FEATURE_CATEGORIES = [
  { key: "roadmap", label: "Roadmap / Blueprint", color: "#1E88E5" },
  { key: "voice", label: "Voice Agent", color: "#FF8A00" },
  { key: "command_center", label: "Command Center", color: "#10B981" },
  { key: "website_builder", label: "Website Builder", color: "#8B5CF6" },
  { key: "credit_funding", label: "Credit & Funding", color: "#D4A017" },
];

function UsageBar({ label, count, max, color }) {
  const pct = max > 0 ? Math.round((count / max) * 100) : 0;
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-semibold text-slate-200">{label}</span>
        <span className="text-slate-400">{count?.toLocaleString() ?? "0"} uses</span>
      </div>
      <div className="h-2.5 rounded-full bg-[#1A2235] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default function AdminFeatureUsagePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Feature Usage | PEN2PRO Admin";
    getFeatureUsageSummary()
      .then((d) => setData(Array.isArray(d) ? d : []))
      .catch(() => setError("Failed to load feature usage data."))
      .finally(() => setLoading(false));
  }, []);

  const maxCount = Math.max(...data.map((d) => d.count ?? 0), 1);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080C14] flex items-center justify-center">
        <div className="text-center">
          <div className="h-10 w-10 mx-auto mb-4 rounded-full border-2 border-[#10B981] border-t-transparent animate-spin" />
          <p className="text-slate-400 text-sm">Loading feature data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link to="/admin" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Admin</Link>
            <span className="text-slate-600">›</span>
            <span className="text-xs text-[#10B981] font-semibold">Feature Usage</span>
          </div>
          <h1 className="text-2xl font-black">Feature Usage Report</h1>
          <p className="text-slate-400 text-sm mt-1">Which features users are engaging with most across all tiers.</p>
        </div>
        <Link
          to="/admin"
          className="rounded-xl border border-[#1A2D50] px-4 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Admin
        </Link>
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-800 bg-red-950/40 p-4 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Total Feature Events</p>
          <p className="text-3xl font-black text-[#10B981]">
            {data.reduce((sum, d) => sum + (d.count ?? 0), 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Features Tracked</p>
          <p className="text-3xl font-black text-white">{data.length}</p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Most Used Feature</p>
          <p className="text-lg font-black text-[#FF8A00] truncate">
            {data[0]?.feature ?? "—"}
          </p>
        </div>
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Top Count</p>
          <p className="text-3xl font-black text-white">{data[0]?.count?.toLocaleString() ?? "—"}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Bar Chart */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-black text-white">Usage by Feature</h2>
          {data.length > 0 ? (
            data.slice(0, 10).map((item, i) => (
              <UsageBar
                key={item.feature ?? i}
                label={item.feature ?? `Feature ${i + 1}`}
                count={item.count}
                max={maxCount}
                color={`hsl(${200 + i * 20}, 80%, 55%)`}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm">No feature usage data yet.</p>
              <p className="text-slate-600 text-xs mt-1">Data will appear once the backend is connected and users engage with features.</p>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <h2 className="mb-5 font-black text-white">Detailed Table</h2>
          {data.length > 0 ? (
            <FeatureUsageTable data={data} />
          ) : (
            <div className="text-center py-8">
              <p className="text-slate-500 text-sm">No data to display.</p>
            </div>
          )}
        </div>
      </div>

      {/* Category Overview */}
      <div className="mt-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
        <h2 className="mb-4 font-black text-white">Feature Categories</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {FEATURE_CATEGORIES.map((cat) => {
            const catTotal = data
              .filter((d) => (d.feature ?? "").toLowerCase().includes(cat.key))
              .reduce((sum, d) => sum + (d.count ?? 0), 0);
            return (
              <div key={cat.key} className="rounded-xl bg-[#0A0F1E] border border-[#1A2235] p-4 text-center">
                <div
                  className="h-1 w-8 rounded-full mx-auto mb-3"
                  style={{ background: cat.color }}
                />
                <p className="text-xs font-semibold text-slate-400 mb-1">{cat.label}</p>
                <p className="text-lg font-black" style={{ color: cat.color }}>
                  {catTotal > 0 ? catTotal.toLocaleString() : "—"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          ["Admin Home", "/admin"],
          ["Waitlist", "/admin/waitlist"],
          ["Analytics", "/admin/analytics"],
          ["Conversions", "/admin/conversions"],
        ].map(([label, path]) => (
          <Link key={path} to={path} className="rounded-xl border border-[#1A2D50] bg-[#0F1520] px-4 py-3 text-center text-sm font-semibold text-slate-400 hover:text-white hover:border-[#10B981] transition-all">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

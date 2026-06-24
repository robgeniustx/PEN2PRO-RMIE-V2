import { useEffect, useState } from "react";
import { getAdminMetrics } from "../api/adminApi";

const StatCard = ({ label, value, color = "#D4A017" }) => (
  <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>{label}</p>
    <p className="mt-2 text-3xl font-black text-white">{value ?? "—"}</p>
  </div>
);

const Row = ({ label, value, color }) => (
  <div className="flex items-center justify-between rounded-xl bg-[#080C14] px-4 py-3">
    <span className="text-sm text-slate-300">{label}</span>
    <span className="font-bold text-sm" style={{ color }}>{value}</span>
  </div>
);

export default function AdminConversionsPage() {
  const [metrics, setMetrics] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminMetrics()
      .then(setMetrics)
      .catch(err => setError(err.message || "Failed to load conversion data"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14] text-slate-400">
        Loading conversions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14]">
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-6 py-4 text-sm text-red-400">
          {error}
        </div>
      </div>
    );
  }

  const summary = metrics?.conversion_summary || {};
  const revenue = metrics?.estimated_revenue;

  const summaryRows = Object.entries(summary).map(([k, v]) => ({
    label: k.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
    value: typeof v === "number" && v >= 0 ? String(v) : String(v || "—"),
  }));

  return (
    <div className="min-h-screen bg-[#080C14] p-6 text-white space-y-6">
      <div>
        <h1 className="font-display text-2xl font-black text-white">Conversions</h1>
        <p className="mt-1 text-sm text-slate-400">Signup-to-paid funnel and estimated revenue.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <StatCard
          label="Estimated Revenue"
          value={revenue ? `$${Number(revenue).toLocaleString()}` : "—"}
          color="#FF8A00"
        />
        <StatCard
          label="Conversion Events"
          value={summaryRows.length > 0 ? summaryRows.length : "—"}
          color="#1E88E5"
        />
        <StatCard
          label="Top Metric"
          value={summaryRows[0]?.label || "—"}
          color="#D4A017"
        />
      </div>

      {summaryRows.length > 0 && (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <h2 className="mb-4 font-bold text-white">Conversion Summary</h2>
          <div className="space-y-2">
            {summaryRows.map(r => (
              <Row key={r.label} label={r.label} value={r.value} color="#D4A017" />
            ))}
          </div>
        </div>
      )}

      {summaryRows.length === 0 && (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center text-slate-400">
          No conversion data available yet. Data populates as users upgrade from Free to paid tiers.
        </div>
      )}
    </div>
  );
}

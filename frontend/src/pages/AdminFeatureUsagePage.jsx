import { useEffect, useState } from "react";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

export default function AdminFeatureUsagePage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeatureUsageSummary()
      .then(d => setData(Array.isArray(d) ? d : []))
      .catch(err => setError(err.message || "Failed to load feature usage"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080C14] text-slate-400">
        Loading feature usage...
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

  return (
    <div className="min-h-screen bg-[#080C14] p-6 text-white space-y-6">
      <div>
        <h1 className="font-display text-2xl font-black text-white">Feature Usage</h1>
        <p className="mt-1 text-sm text-slate-400">
          Which features users are engaging with most — {data.length} feature{data.length !== 1 ? "s" : ""} tracked.
        </p>
      </div>

      {data.length > 0 ? (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
          <FeatureUsageTable data={data} />
        </div>
      ) : (
        <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center text-slate-400">
          No feature usage data available yet. Data populates as users interact with the platform.
        </div>
      )}
    </div>
  );
}

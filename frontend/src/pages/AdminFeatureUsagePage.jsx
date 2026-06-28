import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

const ADMIN_NAV = [
  { label: "Overview", path: "/admin" },
  { label: "Waitlist", path: "/admin/waitlist" },
  { label: "Analytics", path: "/admin/analytics" },
  { label: "Feature Usage", path: "/admin/feature-usage" },
  { label: "Conversions", path: "/admin/conversions" },
];

export default function AdminFeatureUsagePage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getFeatureUsageSummary()
      .then((d) => setData(d || []))
      .catch(() => setError("Could not load feature usage. Check admin access key."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#080C14] text-white px-5 py-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6">
          <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2d9cff]">Admin Panel</div>
          <h1 className="text-3xl font-black">Feature Usage</h1>
          <p className="mt-1 text-slate-400">
            See which platform features are being used most across all user tiers.
          </p>
        </div>

        {/* Admin nav tabs */}
        <nav className="mb-8 flex flex-wrap gap-2">
          {ADMIN_NAV.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                location.pathname === path
                  ? "bg-[#1A2D50] text-white"
                  : "border border-[#1A2D50] text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {loading && (
          <div className="py-20 text-center text-slate-400">Loading feature usage data...</div>
        )}

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <FeatureUsageTable data={data} />

            <div className="mt-8 text-center">
              <Link
                to="/admin"
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                ← Back to Admin Overview
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

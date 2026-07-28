import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import AdminKeyGate from "../components/admin/AdminKeyGate";
import { getFeatureUsageSummary } from "../api/adminApi";
import FeatureUsageTable from "../components/admin/FeatureUsageTable";

export default function AdminFeatureUsagePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFeatureUsageSummary().then(setData);
  }, []);

  return (
    <AdminKeyGate>
      <div className="min-h-screen" style={{ background: "#080C14" }}>
        <Navbar />
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-black text-white">Module Adoption</h1>
              <p className="text-sm text-slate-500 mt-1">Feature usage across the platform</p>
            </div>
            <Link to="/admin" className="btn-outline px-5 py-2.5 text-sm font-bold">
              ← Back to Admin
            </Link>
          </div>
          <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
            <FeatureUsageTable data={data} />
          </div>
        </div>
      </div>
    </AdminKeyGate>
  );
}

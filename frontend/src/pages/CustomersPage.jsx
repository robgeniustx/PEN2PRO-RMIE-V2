import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const { listCustomers } = await import("../api/crmApi");
        const data = await listCustomers();
        setCustomers(Array.isArray(data) ? data : []);
      } catch {
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-black text-white">Customers</h1>
            <p className="mt-2 text-slate-400 text-sm">Won deals and active customer accounts.</p>
          </div>
          <Link to="/dashboard" className="btn-outline px-5 py-2.5 text-sm font-bold">
            Dashboard →
          </Link>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading customers...</div>
        ) : customers.length === 0 ? (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-4">No customers yet. Close your first lead to add them here.</p>
            <Link to="/dashboard" className="btn-gold px-6 py-2.5 text-sm font-bold">View Lead Pipeline</Link>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] overflow-hidden" style={{ background: "#0F1520" }}>
            <div className="px-6 py-4 border-b border-[#1A2D50] flex items-center justify-between">
              <h2 className="font-display text-base font-bold text-white">Customer List</h2>
              <span className="text-xs text-slate-500">{customers.length} customers</span>
            </div>
            <div className="divide-y divide-[#1A2D50]">
              {customers.map((c) => (
                <div key={c.id} className="flex items-center justify-between px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-white">{c.name}</p>
                    {c.notes && <p className="text-xs text-slate-500 mt-0.5">{c.notes}</p>}
                  </div>
                  <span className="rounded-full border border-[#00C9B1]/30 bg-[#00C9B1]/10 px-2 py-0.5 text-xs font-semibold text-[#00C9B1]">
                    Customer
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

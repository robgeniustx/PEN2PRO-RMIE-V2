import { Link } from "react-router-dom";

const METRICS = [
  { label: "Total Revenue", value: "$0.00", sub: "No revenue recorded yet", color: "#059669" },
  { label: "Pending Invoices", value: "$0.00", sub: "No open invoices", color: "#FF8A00" },
  { label: "This Month", value: "$0.00", sub: "June 2026", color: "#1E88E5" },
  { label: "Avg. Deal Size", value: "—", sub: "Track deals to see this", color: "#7C3AED" },
];

export default function EarningsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-black text-white">Earnings</h2>
        <p className="mt-1 text-sm text-slate-500">Track revenue, invoices, and payment history across your business.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border p-5"
            style={{ borderColor: "#1A2D50", background: "#0F1520" }}
          >
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{m.label}</p>
            <p className="mt-2 text-2xl font-black" style={{ color: m.color }}>{m.value}</p>
            <p className="mt-1 text-xs text-slate-600">{m.sub}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border p-6"
        style={{ borderColor: "#1A2D50", background: "#0F1520" }}
      >
        <h3 className="mb-3 text-sm font-bold text-white">Recent Transactions</h3>
        <div className="rounded-lg border border-dashed border-[#1A2D50] py-10 text-center">
          <p className="text-sm text-slate-500">No transactions yet.</p>
          <p className="mt-1 text-xs text-slate-600">Create your first invoice or payment link to start tracking earnings.</p>
          <Link
            to="/dashboard/invoices"
            className="mt-4 inline-block rounded-lg px-5 py-2 text-xs font-black text-[#0A0F1E] btn-gold"
          >
            Create Invoice
          </Link>
        </div>
      </div>

      <div
        className="rounded-2xl border p-6 text-center"
        style={{ borderColor: "rgba(255,138,0,0.25)", background: "#0D1528" }}
      >
        <p className="text-sm font-bold text-white mb-2">Full earnings dashboard unlocks with Pro.</p>
        <p className="text-xs text-slate-500 mb-4">Revenue tracking, payment history, invoice management, and financial reports require a Pro or higher plan.</p>
        <Link
          to="/pricing"
          className="inline-block rounded-xl px-6 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold"
        >
          Upgrade to Pro
        </Link>
      </div>
    </div>
  );
}

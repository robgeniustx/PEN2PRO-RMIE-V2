import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const REQUIRED_DOCS = [
  { name: "LLC Formation Articles", desc: "State-issued LLC certificate of formation.", status: "needed" },
  { name: "EIN Confirmation Letter", desc: "IRS-issued employer identification number letter.", status: "needed" },
  { name: "Business Bank Statement", desc: "Most recent 3 months of business banking.", status: "needed" },
  { name: "Government-Issued ID", desc: "Driver's license or passport.", status: "needed" },
  { name: "Proof of Business Address", desc: "Utility bill, lease, or UPS mailbox agreement.", status: "needed" },
  { name: "Business License (if applicable)", desc: "Required in certain cities/states for service businesses.", status: "optional" },
  { name: "General Liability Insurance", desc: "Required for most commercial contracts.", status: "optional" },
];

export default function DocumentVaultPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const { listDocumentRecords } = await import("../api/creditApi");
        const data = await listDocumentRecords();
        setDocs(Array.isArray(data) ? data : []);
      } catch {
        setDocs([]);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-4xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-3 py-1 text-xs font-semibold text-[#1E88E5] mb-3">
            DOCUMENT VAULT
          </div>
          <h1 className="font-display text-3xl font-black text-white">Document Vault</h1>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Keep all your critical business documents organized and ready for lenders, vendors, and contracts.
          </p>
        </div>

        {/* Notice */}
        <div className="mb-6 rounded-xl border border-[#1E88E5]/20 bg-[#1E88E5]/5 px-4 py-4 text-sm text-slate-400">
          <strong className="text-white">Coming Soon:</strong> Secure document upload will be enabled after launch. Use this checklist now to organize your documents before you need them.
        </div>

        {/* Required Documents Checklist */}
        <div className="rounded-2xl border border-[#1A2D50] overflow-hidden mb-6" style={{ background: "#0F1520" }}>
          <div className="px-6 py-4 border-b border-[#1A2D50]">
            <h2 className="font-display text-lg font-bold text-white">Required Documents</h2>
          </div>
          <div className="divide-y divide-[#1A2D50]">
            {REQUIRED_DOCS.map((doc, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-white">{doc.name}</p>
                    {doc.status === "optional" && (
                      <span className="rounded-full border border-[#1A2D50] px-2 py-0.5 text-xs text-slate-500">Optional</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{doc.desc}</p>
                </div>
                <div className="ml-4 shrink-0">
                  <div className="h-5 w-5 rounded border border-[#1A2D50]" style={{ background: "#080C14" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Records */}
        {docs.length > 0 && (
          <div className="rounded-2xl border border-[#1A2D50] p-5 mb-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-base font-bold text-white mb-4">Saved Records</h2>
            <div className="space-y-2">
              {docs.map((d) => (
                <div key={d.id} className="flex items-center justify-between rounded-xl border border-[#1A2D50] px-4 py-3" style={{ background: "#080C14" }}>
                  <p className="text-sm text-slate-300">{d.name || d.doc_type}</p>
                  <span className="text-xs text-slate-500">{d.uploaded_at ? new Date(d.uploaded_at).toLocaleDateString() : "—"}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-6 text-center">
          <p className="text-sm font-bold text-[#D4A017] mb-1">Full Document Vault — Elite Plan</p>
          <p className="text-xs text-slate-400 mb-4">Elite members get secure document storage, lender packet templates, and funding-ready document checklists.</p>
          <Link to="/waitlist?tier=elite" className="btn-gold px-6 py-2.5 text-sm font-bold">
            Upgrade to Elite
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

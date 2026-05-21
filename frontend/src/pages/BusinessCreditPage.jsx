import { mockCreditReadiness } from "../data/mockCreditReadiness";
import CreditReadinessChecklist from "../components/credit/CreditReadinessChecklist";
import SafetyNotice from "../components/credit/SafetyNotice";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function BusinessCreditPage() {
  const checklist = mockCreditReadiness?.checklist || [];
  const vendors = mockCreditReadiness?.vendor_credit_guidance || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-4xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#059669]/30 bg-[#059669]/10 px-3 py-1 text-xs font-semibold text-[#059669] mb-3">
            BUSINESS CREDIT
          </div>
          <h1 className="font-display text-3xl font-black text-white">Business Credit Foundations</h1>
          <p className="mt-2 text-slate-400 text-sm max-w-xl">
            Build your business credit profile the right way — vendor accounts, business bank, EIN, and tradelines.
          </p>
        </div>

        <SafetyNotice />

        <div className="mt-6 space-y-6">
          {/* Checklist */}
          <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
            <h2 className="font-display text-lg font-bold text-white mb-4">Readiness Checklist</h2>
            <CreditReadinessChecklist checklist={checklist} />
          </div>

          {/* Vendor Guidance */}
          {vendors.length > 0 && (
            <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
              <h2 className="font-display text-lg font-bold text-white mb-4">Vendor Credit Strategy</h2>
              <ul className="space-y-3">
                {vendors.map((v, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{v}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Upgrade CTA */}
          <div className="rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-6 text-center">
            <p className="text-sm font-bold text-[#D4A017] mb-1">Unlock Full Credit & Funding Strategy</p>
            <p className="text-xs text-slate-400 mb-4">Pro and Elite members get personalized credit roadmaps, vendor recommendations, and funding readiness scoring.</p>
            <div className="flex gap-3 justify-center">
              <Link to="/waitlist?tier=pro" className="btn-gold px-6 py-2.5 text-sm font-bold">Upgrade to Pro</Link>
              <Link to="/credit-repair" className="btn-outline px-6 py-2.5 text-sm font-bold">Credit Guide</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

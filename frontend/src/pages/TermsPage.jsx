import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-8 font-display text-3xl font-black md:text-4xl">Terms of Service</h1>
          <div className="space-y-6 text-[1.02rem] leading-[1.85] text-slate-300">
            <p>
              By creating an account or using PEN2PRO, you agree to these terms. PEN2PRO provides
              AI-generated business roadmaps, strategy tools, and readiness checklists ("the Service").
            </p>
            <p>
              <strong className="text-white">Use of the Service:</strong> you agree to provide accurate
              information, use the Service for lawful purposes, and not misuse, resell, or attempt to
              reverse-engineer any part of the platform.
            </p>
            <p>
              <strong className="text-white">Plans and billing:</strong> Free, Pro, Elite, and Legacy
              Founder tiers each unlock different features as described on the Pricing page. Paid tiers
              renew automatically unless canceled; you can cancel at any time.
            </p>
            <p>
              <strong className="text-white">No guarantees:</strong> PEN2PRO does not guarantee income,
              funding approval, loan approval, credit repair results, or business success. Outputs are
              strategic guidance, not professional legal, tax, or financial advice.
            </p>
            <p>
              <strong className="text-white">Termination:</strong> we may suspend accounts that violate
              these terms. You may stop using the Service at any time.
            </p>
            <p className="text-sm text-slate-500">
              This page is a summary for informational purposes and does not constitute legal advice.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

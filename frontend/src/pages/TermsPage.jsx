import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not
            agree, do not use the platform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Use of the Platform</h2>
          <p>
            PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
            resources. You agree to use the platform only for lawful purposes and not to
            misuse, reverse engineer, or resell platform content without permission.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Subscriptions & Billing</h2>
          <p>
            Pro, Elite, and Founders plans are billed according to the plan you select at
            checkout. You may cancel at any time; access continues through the end of the
            current billing period.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">No Guarantee of Results</h2>
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools. We do not
            guarantee income, funding approval, loan approval, credit repair results, or
            business success. Outcomes depend on your effort, market conditions, and factors
            outside our control.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Limitation of Liability</h2>
          <p>
            PEN2PRO is provided "as is" without warranties of any kind. To the fullest extent
            permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential
            damages arising from use of the platform.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

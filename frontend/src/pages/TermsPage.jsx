import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            By creating an account or using PEN2PRO, you agree to these terms. PEN2PRO is an
            AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that provides
            business strategy, planning, and readiness tools. It is not a law firm, accounting
            firm, credit repair organization, or lender.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Use of the Platform</h2>
          <p>
            You agree to use PEN2PRO for lawful purposes and to provide accurate information
            when creating your roadmap or account. You are responsible for decisions you make
            based on PEN2PRO's output.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Subscriptions &amp; Billing</h2>
          <p>
            Pro, Elite, and Founders plans are billed on the cadence disclosed at checkout.
            You may cancel a recurring subscription at any time; access continues through the
            end of the current billing period. Founders plan terms are disclosed at the time of
            purchase.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">No Guarantee of Results</h2>
          <p>
            PEN2PRO provides education, strategy, organization, and readiness tools. We do not
            guarantee income, business success, credit repair results, or funding or loan
            approval. Outcomes depend on your effort, market conditions, and factors outside our
            control.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Intellectual Property</h2>
          <p>
            The PEN2PRO platform, brand, and AI-generated frameworks are owned by PEN2PRO. Your
            business idea and the roadmap generated for you remain yours to use.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Changes to These Terms</h2>
          <p>
            We may update these terms as the platform evolves. Continued use after an update
            means you accept the revised terms.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

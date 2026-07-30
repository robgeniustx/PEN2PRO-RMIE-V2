import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>
          <p>
            By creating an account, joining the waitlist, or using PEN2PRO, you agree to these Terms of
            Service.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Use of the Platform</h2>
          <p>
            PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources
            (RMIE — Rapid Monetization Intelligence Engine). You agree to use the platform lawfully and not
            to misuse, resell, or attempt to disrupt the service.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Accounts &amp; Plans</h2>
          <p>
            Free, Pro, Elite, and Founders plans unlock different levels of access as described on our
            pricing page. You are responsible for keeping your login credentials secure.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">No Guarantees</h2>
          <p>
            PEN2PRO does not guarantee income, funding approval, loan approval, credit repair results, or
            business success. Roadmaps, strategy output, and readiness checklists are educational tools —
            outcomes depend on individual effort, execution, and market conditions.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Payments</h2>
          <p>
            Paid plans are billed as described at checkout. You may cancel a subscription at any time;
            access continues through the end of the current billing period.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">Changes</h2>
          <p>We may update these Terms as PEN2PRO evolves. Continued use of the platform means you accept the current Terms.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

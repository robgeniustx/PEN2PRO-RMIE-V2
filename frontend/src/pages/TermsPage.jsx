import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black mb-8">Terms of Service</h1>
        <div className="space-y-6 text-slate-400 leading-7">
          <p>
            By creating an account or using PEN2PRO, you agree to these terms. PEN2PRO is a
            business planning and strategy platform — it provides AI-generated roadmaps,
            templates, and educational content to help you plan and launch a business.
          </p>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Use of the platform</h2>
            <p>
              You agree to use PEN2PRO for lawful purposes only and to provide accurate
              information during roadmap intake, account creation, and waitlist signup. Accounts
              are for individual or single-business use unless a separate agreement states
              otherwise.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">No guarantee of outcome</h2>
            <p>
              Roadmaps, funding readiness checklists, credit-building steps, and strategy output
              are educational and strategic guidance only. PEN2PRO does not guarantee business
              success, revenue, funding approval, loan approval, or credit repair results.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Plans and billing</h2>
            <p>
              Pro, Elite, and Founders plans are subscription or one-time offers as described on
              the Pricing page. Where checkout is not yet live, joining the waitlist reserves
              your interest but does not create a billing obligation.
            </p>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg mb-2">Changes</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after
              an update means you accept the revised terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

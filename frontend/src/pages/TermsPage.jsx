import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-slate-300">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-3xl font-black text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-400">
          <p>
            By using PEN2PRO's website, roadmap tools, and RMIE platform, you agree to these
            terms. If you do not agree, do not use the platform.
          </p>

          <div>
            <h2 className="text-lg font-bold text-white">The Service</h2>
            <p className="mt-2">
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
              content across Free, Pro, Elite, and Founders tiers. Output is guidance and
              education, not legal, tax, financial, or investment advice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">Accounts &amp; Payment</h2>
            <p className="mt-2">
              Paid tiers (Pro, Elite, Founders) are billed as described on the Pricing page.
              You are responsible for maintaining accurate account information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">No Guarantee of Results</h2>
            <p className="mt-2">
              PEN2PRO does not guarantee income, funding approval, credit repair results, or
              business success. Results depend on individual effort, market conditions, and
              factors outside our control.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">Acceptable Use</h2>
            <p className="mt-2">
              You agree not to misuse the platform, attempt to access it through unauthorized
              means, or use it for unlawful purposes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

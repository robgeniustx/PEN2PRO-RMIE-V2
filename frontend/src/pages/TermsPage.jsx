import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-6 md:text-4xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-10">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps you
              turn ideas, skills, and lived experience into a business roadmap, launch plan, and
              growth strategy. By creating a roadmap, joining the waitlist, or using any Free, Pro,
              Elite, or Founders feature, you agree to these terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">No guarantee of outcomes</h2>
            <p>
              PEN2PRO provides education, strategy, planning tools, and organizational support. It
              does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Outcomes depend on your effort, market conditions, and factors outside
              our control.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Accounts and payment</h2>
            <p>
              Pro, Elite, and Founders access may require a paid subscription or one-time purchase,
              billed through our payment processor. You are responsible for keeping your account
              credentials secure and for charges made under your account. Pricing and plan features
              are described on the{" "}
              <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Acceptable use</h2>
            <p>
              You agree not to misuse the platform — including attempting to access other users'
              data, reverse-engineer the roadmap engine, or use PEN2PRO for unlawful purposes. We may
              suspend accounts that violate these terms.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after an
              update means you accept the revised terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

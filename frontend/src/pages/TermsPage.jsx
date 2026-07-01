import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="font-display mb-8 text-3xl font-black text-white md:text-4xl">Terms of Service</h1>

        <div className="space-y-8 text-sm leading-7 text-slate-400">
          <p>
            By using PEN2PRO, you agree to these terms. Please read them carefully before using the platform's
            free roadmap, Pro, Elite, or Founders tiers.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Use of the Platform</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy content, and educational resources. Output
              is generated based on the information you provide and general business knowledge — it is not
              personalized legal, tax, financial, or investment advice.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Results depend on individual effort, market conditions, and factors outside our
              control.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Subscriptions & Payments</h2>
            <p>
              Pro, Elite, and Founders access are billed through Stripe. Subscriptions renew automatically unless
              cancelled. Founders access is a one-time lifetime purchase as described on the Founders page.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Account Responsibility</h2>
            <p>
              You are responsible for the accuracy of the information you submit and for keeping your account
              credentials secure.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to These Terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you
              accept the updated terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8">Terms of Service</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>Last updated: {new Date().getFullYear()}</p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through
              our Free, Pro, Elite, and Founders tiers. By using the platform, you agree to use it for lawful
              purposes and to provide accurate information when creating a roadmap or account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
              repair results. Roadmaps, strategies, and checklists are educational tools based on the information
              you provide — outcomes depend on your effort, market conditions, and factors outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Subscriptions and Billing</h2>
            <p>
              Pro, Elite, and Founders plans are billed according to the pricing displayed at checkout. Founders
              pricing is limited-availability and may change once general availability opens. You may cancel a
              recurring subscription at any time; cancellation stops future billing but does not refund prior
              periods unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              The PEN2PRO name, brand, platform, and RMIE methodology are the property of PEN2PRO. Your business
              ideas and content you submit remain yours — we use them only to generate your roadmap and improve
              your experience on the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after changes means you
              accept the updated terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-8 md:text-4xl">Terms of Service</h1>

        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not
            agree, please do not use the platform.
          </p>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">The Service</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform
              that generates business roadmaps, strategy plans, and readiness checklists. Free,
              Pro, Elite, and Founders tiers offer different levels of depth and support.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">No Guarantees</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. We do not
              guarantee income, business success, credit repair results, or funding/loan
              approval. Outcomes depend on your effort, market conditions, and factors outside
              our control.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Accounts & Access</h2>
            <p>
              You are responsible for keeping your account credentials secure and for all
              activity under your account. Paid tiers (Pro, Elite, Founders) grant access to
              additional features as described on their respective pages, subject to payment.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Acceptable Use</h2>
            <p>
              You agree not to misuse the platform, attempt to disrupt its operation, or use it
              for unlawful purposes. We may suspend or terminate access for violations of these
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Intellectual Property</h2>
            <p>
              The PEN2PRO name, brand, and platform content are owned by PEN2PRO. Roadmaps and
              content generated for your account are yours to use for your own business.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as the platform evolves. Continued use after changes
              means you accept the updated terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

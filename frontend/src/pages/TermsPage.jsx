import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: January 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-14 space-y-10 text-slate-400 leading-7">
        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
          <p>
            PEN2PRO provides AI-generated business roadmaps, strategy guidance, and execution tools through
            our RMIE (Rapid Monetization Intelligence Engine) platform. By using the platform, you agree to
            use it lawfully and provide accurate information when creating an account or generating a
            roadmap.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Plans & Billing</h2>
          <p>
            Free, Pro, Elite, and Founders access levels are described on our{" "}
            <a href="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</a>. Paid plans are
            billed through Stripe on the cadence shown at checkout. You may cancel a recurring plan at any
            time; access continues through the end of the current billing period.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
          <p>
            PEN2PRO is an educational and strategic planning tool. We do not guarantee income, business
            success, credit repair outcomes, or funding/loan approval. Outcomes depend on individual effort,
            execution, and market conditions. See our{" "}
            <a href="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</a> for details.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Intellectual Property</h2>
          <p>
            Roadmaps, templates, and strategy content generated for your account are yours to use for your
            own business. The PEN2PRO platform, brand, and underlying technology remain the property of
            PEN2PRO.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-bold text-white mb-3">Changes to These Terms</h2>
          <p>
            We may update these terms as PEN2PRO evolves. Continued use of the platform after an update
            means you accept the revised terms.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}

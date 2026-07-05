import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-24">
        <h1 className="mb-2 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mb-10 text-sm text-slate-500">Last updated: 2026</p>

        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
            <p>
              PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational
              content through its RMIE (Rapid Monetization Intelligence Engine) platform. By using
              the platform, you agree to use it lawfully and not to misuse, resell, or attempt to
              disrupt the service.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Accounts &amp; access tiers</h2>
            <p>
              Free, Pro, Elite, and Founders access unlock different levels of the platform.
              Features, pricing, and availability may change as PEN2PRO evolves. Founders/lifetime
              offers are limited and honored as described at time of purchase.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No guarantees</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. It does not
              guarantee business success, funding approval, loan approval, or credit repair
              outcomes. Roadmaps and recommendations are informational and should be evaluated
              alongside your own judgment and, where appropriate, licensed professionals (legal,
              tax, financial, credit).
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Payments</h2>
            <p>
              Paid tiers are billed through Stripe. Refunds and cancellations are handled per the
              terms shown at checkout. Founders/lifetime pricing is limited to the availability
              stated on the offer at time of purchase.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes</h2>
            <p>
              We may update these terms as PEN2PRO grows. Continued use of the platform after an
              update means you accept the revised terms.
            </p>
          </section>
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Contact</h2>
            <p>
              Questions about these terms? Reach out through the{" "}
              <Link to="/waitlist" className="text-[#F5C453] hover:underline">waitlist form</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

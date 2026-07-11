import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</p>
        <h1 className="mt-2 font-display text-4xl font-black">Terms of Service</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: January 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-slate-400">
          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Using PEN2PRO</h2>
            <p>
              PEN2PRO (Rapid Monetization Intelligence Engine — "RMIE") provides AI-generated
              business roadmaps, strategy tools, and educational resources. By using the platform
              you agree to use it for lawful business planning purposes and to provide accurate
              information during intake.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Plans and billing</h2>
            <p>
              Starter access is free. Pro, Elite, and Founders plans unlock additional features as
              described on the{" "}
              <Link to="/pricing" className="text-[#FF8A00] hover:underline">
                pricing page
              </Link>
              . Paid plans are billed on a recurring or one-time basis as disclosed at checkout.
              You may cancel a recurring plan at any time; access continues through the current
              billing period.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">No guarantee of results</h2>
            <p>
              PEN2PRO provides education, strategy, organization, and readiness tools. It does not
              guarantee income, business success, credit repair outcomes, funding approval, or
              loan approval. Results depend on individual effort, market conditions, and factors
              outside PEN2PRO's control.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Intellectual property</h2>
            <p>
              Roadmaps, templates, and strategy content generated for your account are yours to
              use for your own business. The PEN2PRO platform, brand, and underlying software
              remain the property of PEN2PRO.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-white">Changes to these terms</h2>
            <p>
              We may update these terms as the platform evolves. Continued use of PEN2PRO after an
              update means you accept the revised terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

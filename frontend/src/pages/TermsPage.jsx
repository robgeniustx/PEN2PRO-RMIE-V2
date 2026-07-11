import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 pt-16 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: July 2026</p>

          <div className="space-y-8 text-sm leading-7 text-slate-400">
            <p>
              These Terms of Service ("Terms") govern your use of PEN2PRO, the AI-powered RMIE (Rapid
              Monetization Intelligence Engine) platform. By creating an account, generating a roadmap, or
              otherwise using the platform, you agree to these Terms.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Using PEN2PRO</h2>
              <p>
                PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources for
                entrepreneurs, veterans, returning citizens, creators, and working-class builders. You agree to
                use the platform only for lawful purposes and to provide accurate information during intake,
                account creation, and checkout.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Plans and Billing</h2>
              <p>
                Free, Pro, Elite, and Founders plans are described on our{" "}
                <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>. Paid plans
                are billed according to the terms shown at checkout. You may cancel a subscription at any time;
                access continues through the end of the paid period unless otherwise stated.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">No Guarantee of Results</h2>
              <p>
                PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee
                income, business success, credit repair results, or funding or loan approval. Outcomes depend
                on your individual effort, market conditions, and factors outside our control. See our{" "}
                <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link> for details.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Intellectual Property</h2>
              <p>
                The PEN2PRO name, brand, platform, and generated content templates are the property of
                PEN2PRO. Your business ideas and data submitted to the platform remain yours.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Changes to These Terms</h2>
              <p>
                We may update these Terms as the platform evolves. Continued use of PEN2PRO after changes are
                posted means you accept the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-white mb-3">Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
                <a href="mailto:support@pen2pro.com" className="text-[#FF8A00] hover:underline">support@pen2pro.com</a>.
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="btn-outline px-6 py-3 text-sm font-bold text-center">Privacy Policy</Link>
            <Link to="/disclaimer" className="btn-outline px-6 py-3 text-sm font-bold text-center">Disclaimer</Link>
            <Link to="/starter" className="btn-gold px-6 py-3 text-sm font-bold text-center">Start Free Roadmap →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

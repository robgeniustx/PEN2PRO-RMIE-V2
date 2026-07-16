import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Legal</div>
          <h1 className="mb-6 font-display text-4xl font-black leading-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-10 text-sm text-slate-500">Last updated: January 2026</p>

          <div className="space-y-8 text-[1.02rem] leading-[1.85] text-slate-300">
            <p>
              By creating an account or using PEN2PRO — including the Starter roadmap, Pro, Elite, Founders,
              Builder, Accelerator, and any related tools — you agree to these Terms.
            </p>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">The Service</h2>
              <p>
                PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates
                business roadmaps, strategy, and readiness guidance based on the information you provide. It is
                an educational and planning tool, not a licensed financial, legal, credit-repair, or investment
                advisory service.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Your Responsibilities</h2>
              <ul className="list-disc space-y-2 pl-6 text-slate-300">
                <li>Provide accurate information when using the roadmap, waitlist, or account tools.</li>
                <li>Use the platform for lawful purposes only.</li>
                <li>Understand that any business, financial, or credit decisions you make based on PEN2PRO output are your own responsibility.</li>
                <li>Keep your login credentials confidential.</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Plans &amp; Billing</h2>
              <p>
                Free, Pro, Elite, and Founders tiers each unlock different levels of access as described on the{" "}
                <Link to="/pricing" className="text-[#1E88E5] hover:underline">Pricing page</Link>. Paid plans
                renew automatically unless canceled. Founders access is offered on a limited-availability basis
                as described on the{" "}
                <Link to="/founders" className="text-[#1E88E5] hover:underline">Founders page</Link>.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">No Guarantee of Results</h2>
              <p>
                PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit
                repair results. Outcomes depend on individual effort, execution, and market conditions. See the{" "}
                <Link to="/disclaimer" className="text-[#1E88E5] hover:underline">Disclaimer</Link> for details.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Intellectual Property</h2>
              <p>
                The PEN2PRO name, brand, RMIE methodology, and platform content are the property of PEN2PRO.
                Roadmaps and content generated for your account are yours to use for your own business.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Changes</h2>
              <p>
                We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means
                you accept the updated Terms.
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Read Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

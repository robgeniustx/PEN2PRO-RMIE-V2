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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-8 font-display text-4xl font-black leading-tight md:text-5xl">
            Terms of Service
          </h1>

          <div className="space-y-6 text-[1.05rem] leading-[1.85] text-slate-300">
            <p>
              By using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">The Service</h2>
            <p>
              PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy tools, and readiness checklists based on information you provide. Free, Pro, Elite, and Founders tiers offer different levels of access, as described on the Pricing page.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Accounts</h2>
            <p>
              You are responsible for keeping your login credentials secure and for all activity under your account. Provide accurate information when creating a roadmap or account.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Payments & Subscriptions</h2>
            <p>
              Paid tiers (Pro, Elite, Founders) are billed through our payment processor, Stripe. Subscription terms, pricing, and cancellation policies are described on the Pricing, Pro, Elite, and Founders pages at the time of purchase. Founders/Legacy Founder offers may be limited in availability and are subject to the terms presented at checkout.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Acceptable Use</h2>
            <p>
              You agree not to use PEN2PRO for unlawful purposes, to misrepresent your identity, to attempt to disrupt or reverse-engineer the platform, or to resell PEN2PRO-generated content as your own software product without permission.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">No Guarantee of Results</h2>
            <p>
              As described in our <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>, PEN2PRO does not guarantee income, funding approval, credit repair results, or business success. Roadmaps and strategies are educational and organizational tools — outcomes depend on your own execution and external market conditions.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Intellectual Property</h2>
            <p>
              The PEN2PRO name, brand, platform, and RMIE methodology are the property of PEN2PRO. Your business idea and the specific roadmap generated for you remain yours to use.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Termination</h2>
            <p>
              We may suspend or terminate access to accounts that violate these terms. You may cancel a paid subscription at any time; access continues through the end of the current billing period.
            </p>

            <h2 className="text-xl font-bold text-white mt-10">Changes to These Terms</h2>
            <p>
              We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated terms.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-8 py-3.5 text-center text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/pricing" className="rounded-xl border border-[#1A2D50] px-8 py-3.5 text-center text-sm font-semibold text-slate-300 hover:text-white transition-colors">
              Explore Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

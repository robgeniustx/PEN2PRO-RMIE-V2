import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <div className="space-y-6 text-slate-400 leading-relaxed">
          <p>
            These Terms govern your use of PEN2PRO, an AI-powered Rapid Monetization
            Intelligence Engine (RMIE) that helps you turn ideas, skills, and lived
            experience into business roadmaps and launch strategies. By using PEN2PRO,
            you agree to these Terms.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">The service</h2>
          <p>
            PEN2PRO provides AI-generated roadmaps, strategy content, and educational
            tools across Free, Pro, Elite, and Founders tiers. Output is generated
            based on the information you provide and general business knowledge — it is
            guidance, not a guarantee of results.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Your account</h2>
          <p>
            You are responsible for the accuracy of the information you submit and for
            keeping your account credentials secure. You must be 18 or older to create
            an account.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Payments &amp; upgrades</h2>
          <p>
            Pro, Elite, and Founders tiers are billed through our payment processor.
            Pricing and plan details are shown on the Pricing page and may change with
            notice. Cancel anytime through your account settings.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Acceptable use</h2>
          <p>
            Don't use PEN2PRO for unlawful purposes, to infringe on others' rights, or
            to attempt to disrupt or reverse-engineer the platform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">Disclaimer</h2>
          <p>
            PEN2PRO does not guarantee business success, funding approval, credit
            repair results, or income outcomes. See our full disclaimer for details.
          </p>
          <p className="pt-6 text-sm text-slate-600">Last updated: 2026.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

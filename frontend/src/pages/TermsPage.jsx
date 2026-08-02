import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-8 md:text-5xl">Terms of Service</h1>

        <div className="space-y-8 text-slate-400 leading-7">
          <p>
            These Terms of Service govern your use of PEN2PRO, the AI-powered RMIE (Rapid Monetization
            Intelligence Engine) platform. By creating an account, generating a roadmap, or joining the
            waitlist, you agree to these terms.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">The Platform</h2>
            <p>
              PEN2PRO provides business roadmaps, strategy tools, and educational content generated with
              the help of AI. Free, Pro, Elite, and Founders tiers unlock different levels of depth and
              support, as described on our{" "}
              <Link to="/pricing" className="text-[#FF8A00] hover:underline">Pricing page</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">No Guarantee of Results</h2>
            <p>
              PEN2PRO does not guarantee income, business success, funding approval, loan approval, or
              credit repair outcomes. Roadmaps, strategies, and checklists are educational tools —
              execution, market conditions, and individual effort determine real-world results.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Account Responsibilities</h2>
            <p>
              You are responsible for the accuracy of the information you submit and for keeping your
              account credentials secure. You agree not to misuse the platform, attempt to disrupt its
              operation, or resell PEN2PRO output as your own software product.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Payments &amp; Upgrades</h2>
            <p>
              Pro, Elite, and Founders tiers are paid upgrades. Pricing, billing cadence, and Founders
              lifetime terms are described at the point of purchase. Founders pricing is limited to the
              availability stated on the Founders page at time of signup.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-2">Changes to These Terms</h2>
            <p>
              We may update these terms as PEN2PRO evolves. Continued use of the platform after an update
              means you accept the revised terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

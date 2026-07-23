import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO provides AI-generated business roadmaps, strategy tools, and educational resources through our Rapid Monetization Intelligence Engine (RMIE). By creating an account or using the Starter roadmap, you agree to these Terms.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, credit repair results, funding approval, or loan approval. Roadmaps, checklists, and strategy output are educational and organizational tools — outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro and Elite are recurring monthly subscriptions billed through Stripe. Founders Lifetime is a one-time payment for lifetime access under the terms presented at purchase. You can cancel a recurring subscription at any time; access continues through the paid period.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to use PEN2PRO to generate content for unlawful purposes, to resell or redistribute the platform's proprietary roadmap logic, or to attempt to disrupt or reverse-engineer the service.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO name, RMIE methodology, and platform content are owned by PEN2PRO. Your business idea and roadmap output belong to you — use them freely to build your business.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes are posted means you accept the updated Terms.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO, its founder, and its team are not liable for business losses, missed opportunities, or financial decisions made based on roadmap output. Use the platform as one input among several in your decision-making.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />

      <section className="px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#1E88E5] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black leading-tight md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-12 text-slate-400">
            Last updated July 2026. These Terms govern your use of PEN2PRO's website, roadmap tools, and
            subscription plans.
          </p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <h2 className="mb-2 text-lg font-bold text-white">{s.title}</h2>
                <p className="text-sm leading-relaxed text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            See also our{" "}
            <Link to="/privacy" className="font-semibold text-[#FF8A00]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/disclaimer" className="font-semibold text-[#FF8A00]">
              Disclaimer
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

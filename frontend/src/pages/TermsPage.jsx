import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO gives you access to an AI-powered roadmap engine, strategy tools, and (on paid tiers) execution support. You agree to use the platform for lawful purposes and to provide accurate information when creating your roadmap or account.",
  },
  {
    title: "Plans & Billing",
    body: "Free, Pro, Elite, and Founders access come with different features described on the Pricing page. Paid subscriptions renew automatically until canceled. You can cancel at any time, and access continues through the end of the current billing period.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, structure, and readiness tools. We do not guarantee income, business success, credit repair results, funding approval, or loan approval. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO platform, brand, and roadmap engine are owned by PEN2PRO. Your business ideas and the roadmap generated for you remain yours to use.",
  },
  {
    title: "Account Responsibility",
    body: "You're responsible for keeping your login credentials secure and for activity that happens under your account.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is provided on an \"as-is\" basis. To the extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these terms as the platform evolves. Continued use after changes are posted means you accept the updated terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-3">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-slate-400 mb-12">Last updated: 2026. These terms govern your use of PEN2PRO.</p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-6">
          <p className="text-sm text-slate-400">
            See also our <Link to="/privacy" className="text-[#FF8A00] hover:underline">Privacy Policy</Link> and{" "}
            <Link to="/disclaimer" className="text-[#FF8A00] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Using PEN2PRO",
    body: "PEN2PRO gives you access to AI-generated business roadmaps, strategy tools, and educational content through our RMIE (Rapid Monetization Intelligence Engine). By creating an account or using the platform, you agree to these terms.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, structure, and planning tools. We do not guarantee income, business success, funding approval, credit repair outcomes, or loan approval. Your results depend on your own effort, market conditions, and factors outside our control.",
  },
  {
    title: "Your Account",
    body: "You're responsible for keeping your login credentials secure and for all activity under your account. Tell us right away if you believe your account has been accessed without authorization.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro, Elite, and Founders plans are billed on the schedule shown at checkout and processed securely through Stripe. You can cancel a recurring subscription at any time; access continues through the end of the current billing period.",
  },
  {
    title: "Acceptable Use",
    body: "Don't use PEN2PRO to break the law, infringe on others' rights, or attempt to disrupt or reverse-engineer the platform. We may suspend or terminate accounts that violate these terms.",
  },
  {
    title: "Changes to the Platform",
    body: "PEN2PRO is actively evolving. We may add, change, or remove features, pricing, or plan benefits as the platform grows, and we'll do our best to communicate meaningful changes to active users.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
          Legal
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-white">Terms of Service</h1>
        <p className="mt-4 text-sm text-slate-400">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}. These terms govern your use of PEN2PRO.
        </p>

        <div className="mt-10 space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-500">
          By continuing to use PEN2PRO, you agree to these terms. Questions? Contact us through the platform.
        </p>
      </div>
      <Footer />
    </div>
  );
}

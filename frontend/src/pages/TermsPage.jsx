import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "The Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, and readiness checklists based on the information you provide. Free, Pro, Elite, and Founders tiers offer different levels of access and support.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Your Responsibilities",
    body: "You agree to provide accurate information, use the platform lawfully, and not misuse, resell, or attempt to reverse-engineer PEN2PRO's tools or AI outputs without permission.",
  },
  {
    title: "Payments & Subscriptions",
    body: "Pro, Elite, and Founders access may involve recurring or one-time payments. Pricing, billing terms, and cancellation policies will be presented at checkout when payments are live.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO, its founder, and affiliates are not liable for indirect, incidental, or consequential damages arising from your use of the platform, including business, financial, or credit decisions made using PEN2PRO's tools.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-3">Terms of Service</h1>
        <p className="text-slate-400 mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

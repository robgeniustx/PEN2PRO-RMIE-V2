import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By accessing or using PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "The Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, and educational resources. Free, Pro, Elite, and Founders tiers offer different levels of access, described on our Pricing page.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Account Responsibilities",
    body: "You are responsible for keeping your account credentials secure and for all activity under your account. You agree to provide accurate information when creating an account or submitting roadmap intake forms.",
  },
  {
    title: "Payments & Subscriptions",
    body: "Pro, Elite, and Founders plans are billed according to the terms shown at checkout. Founders pricing, where offered, is limited and subject to availability. You may cancel a recurring subscription at any time; access continues through the end of the current billing period.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse the platform, attempt to disrupt its operation, or use it for unlawful purposes.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms from time to time. Continued use of PEN2PRO after changes are posted means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-2 md:text-4xl">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: 2026</p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-7 text-sm">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

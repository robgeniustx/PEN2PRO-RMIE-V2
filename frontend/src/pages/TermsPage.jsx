import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, please do not use the platform.",
  },
  {
    title: "What PEN2PRO Provides",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy guidance, branding direction, and readiness checklists. Free, Pro, Elite, and Founders tiers unlock different levels of access, as described on the Pricing page.",
  },
  {
    title: "No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, organization, and readiness tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "Account Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Provide accurate information during roadmap intake and account creation.",
  },
  {
    title: "Subscriptions & Billing",
    body: "Pro, Elite, and Founders tiers are billed according to the plan you select at checkout. You may cancel a recurring subscription at any time; access continues through the end of the current billing period. Founders pricing, where offered, is subject to the availability terms shown on the Founders page.",
  },
  {
    title: "Acceptable Use",
    body: "You agree not to misuse the platform — including attempting to breach security, reverse-engineer the AI systems, resell access without authorization, or submit unlawful content through the roadmap intake or dashboard tools.",
  },
  {
    title: "Intellectual Property",
    body: "The PEN2PRO name, branding, RMIE methodology, and platform content are the property of PEN2PRO. Your business ideas and roadmap content remain yours.",
  },
  {
    title: "Limitation of Liability",
    body: "PEN2PRO is provided on an 'as is' basis. To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-20">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-10">
          Effective date: January 1, 2026. Please read these terms carefully before using PEN2PRO.
        </p>
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
              <h2 className="text-lg font-bold text-white mb-2">{s.title}</h2>
              <p className="text-sm leading-7 text-slate-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

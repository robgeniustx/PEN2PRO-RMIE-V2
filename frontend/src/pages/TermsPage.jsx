import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account or using PEN2PRO (the \"Platform\"), you agree to these Terms of Service. If you do not agree, do not use the Platform.",
  },
  {
    title: "2. Description of Service",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) that generates business roadmaps, strategy guidance, branding direction, funding and credit readiness checklists, and related planning tools. Free, Pro, Elite, and Founders tiers unlock different levels of access as described on our Pricing page.",
  },
  {
    title: "3. Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Provide accurate information when you sign up or complete your roadmap intake.",
  },
  {
    title: "4. Subscriptions & Billing",
    body: "Paid plans (Pro, Elite, Founders) are billed on the cycle shown at checkout. You may cancel at any time; cancellation takes effect at the end of the current billing period. Founders/lifetime pricing is limited to the availability described on the Founders page.",
  },
  {
    title: "5. AI-Generated Content",
    body: "Roadmaps, strategies, and other outputs are generated with the assistance of AI and are provided for informational and planning purposes only. You are responsible for verifying any legal, financial, tax, or regulatory information before acting on it.",
  },
  {
    title: "6. No Guarantee of Results",
    body: "PEN2PRO does not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control. See our full Disclaimer for details.",
  },
  {
    title: "7. Acceptable Use",
    body: "You agree not to misuse the Platform, including attempting to reverse-engineer the AI systems, resell access without authorization, or use the Platform for unlawful purposes.",
  },
  {
    title: "8. Affiliate & Third-Party Links",
    body: "PEN2PRO may link to third-party services (LLC formation, banking, credit, funding, marketing tools, etc.). We are not responsible for the products, services, or terms of these third parties.",
  },
  {
    title: "9. Termination",
    body: "We may suspend or terminate access to the Platform for violations of these Terms. You may stop using the Platform and cancel your subscription at any time.",
  },
  {
    title: "10. Limitation of Liability",
    body: "To the fullest extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from your use of the Platform.",
  },
  {
    title: "11. Changes to These Terms",
    body: "We may update these Terms from time to time. Continued use of the Platform after changes take effect constitutes acceptance of the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="border-b border-[#1A2235]" style={{ background: "#0F1520" }}>
        <div className="mx-auto max-w-4xl px-5 py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1E88E5]/30 bg-[#1E88E5]/10 px-4 py-1.5 text-xs font-semibold text-[#1E88E5] mb-6">
            LEGAL
          </div>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl mb-4">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="text-slate-400 text-lg">Effective date: January 1, 2026</p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-16">
        <p className="text-slate-400 leading-8 mb-10">
          These Terms of Service ("Terms") govern your access to and use of PEN2PRO. Please read them
          carefully before using the Platform.
        </p>

        <div className="space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl font-black text-white mb-3">{s.title}</h2>
              <p className="text-slate-400 leading-8">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
          <p className="text-sm text-slate-400">
            Questions about these Terms? Contact us through the support link in your dashboard
            or at the contact address listed on our <a href="/about" className="text-[#FF8A00] hover:underline">About page</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

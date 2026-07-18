import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By creating an account, joining the waitlist, or using any part of PEN2PRO, you agree to these Terms of Service. If you do not agree, do not use the platform.",
  },
  {
    title: "2. What PEN2PRO Is",
    body: "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that generates business roadmaps, strategy plans, branding direction, and execution guidance based on the information you provide. Free, Pro, Elite, and Founders tiers offer different levels of access and output depth.",
  },
  {
    title: "3. No Guarantee of Results",
    body: "PEN2PRO provides education, strategy, and planning tools. We do not guarantee income, business success, funding approval, loan approval, or credit repair results. Outcomes depend on your effort, market conditions, and factors outside our control.",
  },
  {
    title: "4. Subscriptions & Billing",
    body: "Pro and Elite plans are billed on a recurring monthly basis. Founders Lifetime is a one-time payment for lifetime access as described on the Founders page. All payments are processed securely through Stripe. You may cancel a recurring subscription at any time; cancellation stops future billing but does not refund past charges except as required by law.",
  },
  {
    title: "5. Acceptable Use",
    body: "You agree not to use PEN2PRO to submit unlawful, fraudulent, or abusive content, to attempt to reverse-engineer or resell the platform's AI outputs as your own software product, or to interfere with the platform's operation.",
  },
  {
    title: "6. Intellectual Property",
    body: "The PEN2PRO name, brand, platform design, and underlying technology are the property of PEN2PRO. Roadmaps and strategy documents generated for your account are yours to use for your own business purposes.",
  },
  {
    title: "7. Third-Party & Affiliate Links",
    body: "PEN2PRO may recommend or link to third-party services (LLC formation, banking, funding, credit tools, and similar partners). We may earn a referral commission from these links. We are not responsible for the products, services, or outcomes of third parties.",
  },
  {
    title: "8. Limitation of Liability",
    body: "PEN2PRO is provided \"as is.\" To the maximum extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform, including business losses or missed opportunities.",
  },
  {
    title: "9. Changes to These Terms",
    body: "We may update these Terms as PEN2PRO evolves. Continued use of the platform after changes means you accept the updated Terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <section className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">Terms of Service</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: January 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
                <h2 className="font-display text-lg font-black text-white mb-2">{s.title}</h2>
                <p className="text-sm leading-7 text-slate-400">{s.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-slate-500">
            Questions about these Terms? Email{" "}
            <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
              support@pen2pro.com
            </a>
            . See also our{" "}
            <Link to="/privacy" className="text-[#D4A017] hover:underline">Privacy Policy</Link>
            {" "}and{" "}
            <Link to="/disclaimer" className="text-[#D4A017] hover:underline">Disclaimer</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

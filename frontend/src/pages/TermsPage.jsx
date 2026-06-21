import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: `By accessing or using PEN2PRO — including the website, roadmap generator, dashboard, and any associated services — you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.`,
  },
  {
    title: "Description of Services",
    body: `PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps users generate business roadmaps, monetization strategies, branding direction, funding readiness plans, and launch frameworks. Services are available across Free, Pro, Elite, and Founders tiers.`,
  },
  {
    title: "User Accounts",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You must provide accurate information when creating an account. PEN2PRO reserves the right to suspend or terminate accounts that violate these terms or engage in fraudulent activity.`,
  },
  {
    title: "Subscription Plans and Billing",
    body: `PEN2PRO offers both free and paid subscription tiers. Paid plans are billed monthly or as a one-time Founders purchase. All payments are processed securely through Stripe. Subscriptions auto-renew unless cancelled before the renewal date. Refunds are handled on a case-by-case basis — contact support within 7 days of purchase if you have a billing concern.`,
  },
  {
    title: "Free Tier Usage",
    body: `The Free tier provides access to starter business roadmap generation with limited depth. Free users may use PEN2PRO for personal business planning purposes only. Free access may be modified, rate-limited, or discontinued at any time.`,
  },
  {
    title: "Intellectual Property",
    body: `PEN2PRO and its content, branding, platform architecture, AI prompts, and roadmap frameworks are the intellectual property of PEN2PRO and its founder. The roadmap outputs generated for your specific business idea are yours to use. You may not resell, white-label, or redistribute PEN2PRO's platform, methodology, or AI systems without written permission.`,
  },
  {
    title: "Prohibited Uses",
    body: `You may not use PEN2PRO to generate roadmaps for illegal businesses, copy or scrape platform content for competitive use, attempt to reverse-engineer or exploit the AI system, create multiple free accounts to bypass tier limits, or impersonate another user or business.`,
  },
  {
    title: "AI Output Disclaimer",
    body: `PEN2PRO's AI-generated roadmaps, strategies, and recommendations are for informational and educational purposes only. They do not constitute legal, financial, accounting, or investment advice. Always consult qualified professionals before making significant business, credit, or financial decisions.`,
  },
  {
    title: "Affiliate Links and Third Parties",
    body: `PEN2PRO may include affiliate links to third-party products and services. We are not responsible for the actions, privacy practices, or content of third-party providers. Clicking affiliate links and making purchases is at your own discretion.`,
  },
  {
    title: "Limitation of Liability",
    body: `PEN2PRO is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability for any claim shall not exceed the amount you paid to PEN2PRO in the preceding 12 months.`,
  },
  {
    title: "Termination",
    body: `PEN2PRO may suspend or terminate your access at any time for violation of these terms, fraudulent activity, or at its discretion with reasonable notice. You may cancel your subscription at any time through your account settings.`,
  },
  {
    title: "Changes to These Terms",
    body: `We may update these Terms of Service periodically. Material changes will be communicated via email to registered users. Continued use of the platform after changes constitutes your acceptance.`,
  },
  {
    title: "Governing Law",
    body: `These Terms are governed by the laws of the State of Texas, United States. Any disputes arising from these terms or your use of PEN2PRO shall be resolved in the courts of Texas.`,
  },
  {
    title: "Contact",
    body: `For questions about these Terms, contact us at legal@pen2pro.com or through the waitlist page.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#080C14", color: "#E2E8F0" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#1A2D50] py-16 text-center px-5">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6"
              style={{ background: "rgba(30,136,229,0.12)", color: "#1E88E5", border: "1px solid rgba(30,136,229,0.25)" }}>
              Legal
            </span>
            <h1 className="text-4xl font-black text-white mb-4">Terms of Service</h1>
            <p className="text-slate-400 text-base leading-relaxed">
              Please read these terms carefully before using PEN2PRO. By using the platform you agree to be bound by them.
            </p>
            <p className="mt-4 text-xs text-slate-600">Effective Date: June 15, 2026 · Last Updated: June 2026</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-5 py-16 space-y-12">
          {SECTIONS.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-lg font-bold text-white mb-3">
                <span className="text-slate-600 mr-2 text-sm">{String(i + 1).padStart(2, "0")}.</span>
                {s.title}
              </h2>
              <p className="text-slate-400 leading-8 text-sm">{s.body}</p>
            </div>
          ))}
        </section>

        {/* Footer CTA */}
        <section className="border-t border-[#1A2D50] py-12 text-center px-5">
          <p className="text-slate-500 text-sm mb-6">Questions about these terms?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/waitlist"
              className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14]"
              style={{ background: "linear-gradient(135deg, #D4A017, #FF8A00)" }}>
              Join Waitlist
            </Link>
            <Link to="/privacy"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-slate-300 border border-[#1A2D50] hover:border-[#2A3F6A]">
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

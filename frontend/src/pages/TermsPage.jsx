import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the platform.",
      "We may update these terms at any time. Your continued use of PEN2PRO after changes are posted constitutes your acceptance.",
    ],
  },
  {
    title: "Description of Service",
    body: [
      "PEN2PRO is an AI-powered business development platform — the Rapid Monetization Intelligence Engine (RMIE) — that helps users build business roadmaps, access strategic resources, and prepare for growth.",
      "Features include AI business blueprint generation, credit and funding readiness tools, affiliate resource directories, business foundation checklists, CRM tools, and more.",
      "Some features are gated by subscription tier (Free, Pro, Elite, Founders Lifetime).",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate information when creating an account. You are responsible for maintaining the security of your login credentials.",
      "You are responsible for all activity that occurs under your account. Notify us immediately at support@pen2pro.com if you suspect unauthorized access.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms.",
    ],
  },
  {
    title: "Subscriptions and Billing",
    body: [
      "Pro and Elite plans are billed monthly. Founders Lifetime is a one-time payment. Prices are shown at checkout and on the Pricing page.",
      "Payments are processed by Stripe. PEN2PRO does not store your payment card information.",
      "Subscriptions auto-renew unless cancelled before the billing date. You may cancel at any time from your account settings.",
      "Refunds are handled on a case-by-case basis. Contact support@pen2pro.com within 7 days of a charge if you believe a refund is warranted.",
    ],
  },
  {
    title: "Prohibited Use",
    body: [
      "You may not use PEN2PRO for any illegal purpose or in violation of any applicable laws.",
      "You may not attempt to reverse engineer, scrape, or exploit the platform's AI systems or data.",
      "You may not impersonate PEN2PRO, Robert Green, or any other user on the platform.",
      "You may not use the platform to distribute spam, malware, or harmful content.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategies, and recommendations. This content is educational and informational in nature.",
      "AI-generated output is not a substitute for professional legal, financial, or business advice. Always consult qualified professionals before making significant business decisions.",
      "PEN2PRO does not guarantee that AI-generated roadmaps or strategies will result in business success, funding approval, or any specific outcome.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO name, logo, platform design, and RMIE methodology are proprietary. You may not reproduce or redistribute them without written permission.",
      "Content you create using PEN2PRO tools (roadmaps, business plans, etc.) belongs to you. PEN2PRO retains a license to use anonymized, aggregated data to improve the platform.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "PEN2PRO provides the platform \"as is\" without warranties of any kind. We do not guarantee uninterrupted, error-free service.",
      "To the fullest extent permitted by law, PEN2PRO is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
      "Our total liability to you for any claim arising from use of PEN2PRO shall not exceed the amount you paid to us in the 12 months preceding the claim.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas, without regard to conflict of law principles.",
      "Any disputes arising from these terms shall be resolved in the courts of Harris County, Texas.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms of Service? Contact us at support@pen2pro.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      <section className="px-5 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="font-display text-4xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-slate-400 leading-relaxed">
            These Terms of Service ("Terms") govern your use of PEN2PRO, the Rapid Monetization Intelligence Engine, operated by PEN2PRO ("we," "us," or "our"). Please read these terms carefully before using the platform.
          </p>

          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 className="mb-4 font-display text-xl font-black text-white border-l-4 border-[#1E88E5] pl-4">{s.title}</h2>
              <div className="space-y-3">
                {s.body.map((p) => (
                  <p key={p} className="text-slate-400 text-sm leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#1A2D50] px-5 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-6 text-slate-500 text-sm">Have questions about our terms?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="mailto:support@pen2pro.com" className="rounded-xl px-6 py-3 text-sm font-black text-[#080C14] btn-gold">
              Contact Support
            </a>
            <Link to="/privacy" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="rounded-xl border border-[#1A2235] px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition">
              Disclaimer
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "1. Using PEN2PRO",
    body: [
      "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) platform that helps users turn ideas, skills, and experience into business roadmaps, strategy, and execution plans.",
      "You must be at least 18 years old, or the age of majority in your jurisdiction, to create an account.",
      "You are responsible for the accuracy of the information you submit and for keeping your account credentials secure.",
    ],
  },
  {
    title: "2. Plans & Billing",
    body: [
      "Free Forever gives access to a starter business roadmap at no cost.",
      "Pro and Elite are recurring monthly subscriptions billed through Stripe. You may cancel at any time; access continues through the end of the current billing period.",
      "Founders Lifetime is a one-time payment for lifetime access to the platform tier described at the time of purchase.",
      "Prices are shown on the Pricing page and may change for new subscribers; existing subscribers keep the price they signed up at unless otherwise stated.",
    ],
  },
  {
    title: "3. Acceptable Use",
    body: [
      "Do not use PEN2PRO to generate content for illegal activity, fraud, or to harm others.",
      "Do not attempt to reverse engineer, resell, or scrape the platform without written permission.",
      "Do not misrepresent your identity or submit false information to access features, refunds, or affiliate payouts.",
    ],
  },
  {
    title: "4. AI-Generated Content",
    body: [
      "Roadmaps, blueprints, scripts, and strategy output are generated using AI and reflect general business guidance, not professional legal, tax, or financial advice.",
      "You are responsible for verifying and adapting any AI-generated plan to your specific situation, market, and applicable laws before acting on it.",
    ],
  },
  {
    title: "5. Affiliate Program",
    body: [
      "Affiliate commissions, referral windows, and payout terms are described on the Affiliate page and may be updated from time to time.",
      "PEN2PRO reserves the right to suspend affiliate accounts for fraudulent or abusive referral activity.",
    ],
  },
  {
    title: "6. Termination",
    body: [
      "You may cancel your account at any time. We may suspend or terminate accounts that violate these Terms.",
    ],
  },
  {
    title: "7. Disclaimer of Warranties & Limitation of Liability",
    body: [
      "PEN2PRO is provided \"as is\" without warranties of any kind. We do not guarantee income, funding approval, loan approval, credit repair results, or business success.",
      "To the maximum extent permitted by law, PEN2PRO is not liable for indirect, incidental, or consequential damages arising from use of the platform.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "Questions about these Terms can be sent to support@pen2pro.com.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <section className="px-5 pb-16 pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">Legal</p>
          <h1 className="font-display text-4xl font-black text-white md:text-5xl">Terms of Service</h1>
          <p className="mt-4 text-sm text-slate-500">Last updated: June 2026</p>

          <p className="mt-8 text-base leading-7 text-slate-400">
            These Terms of Service ("Terms") govern your access to and use of PEN2PRO, including our
            website, roadmap tools, dashboard, and related services. By creating an account or using
            PEN2PRO, you agree to these Terms.
          </p>

          <div className="mt-10 space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-white mb-3">{section.title}</h2>
                <ul className="space-y-2">
                  {section.body.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span className="mt-1 shrink-0 text-[#D4A017]">•</span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-6">
            <p className="text-sm text-slate-400">
              See also our{" "}
              <Link to="/privacy" className="font-semibold text-[#D4A017] hover:underline">Privacy Policy</Link>{" "}
              and{" "}
              <Link to="/disclaimer" className="font-semibold text-[#D4A017] hover:underline">Disclaimer</Link>,
              or contact{" "}
              <a href="mailto:support@pen2pro.com" className="font-semibold text-[#D4A017] hover:underline">support@pen2pro.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

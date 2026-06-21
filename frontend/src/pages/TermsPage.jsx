import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you may not use the platform.",
      "These terms apply to all visitors, registered users, and anyone who accesses the PEN2PRO platform.",
    ],
  },
  {
    title: "Platform Description",
    body: [
      "PEN2PRO is an AI-powered RMIE (Rapid Monetization Intelligence Engine) platform that helps users develop business roadmaps, monetization strategies, and execution plans.",
      "The platform is provided for informational and organizational purposes only. PEN2PRO is not a licensed financial advisor, attorney, lender, credit counselor, or business consultant.",
      "Features include AI-generated roadmaps, business strategy tools, credit and funding readiness guides, affiliate resources, and subscription-based premium tools.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "You must provide accurate information when creating an account. You are responsible for maintaining the security of your login credentials.",
      "You may not share your account with others or allow others to access your account.",
      "You are responsible for all activity that occurs under your account.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these terms or engage in abusive behavior.",
    ],
  },
  {
    title: "Subscriptions & Payments",
    body: [
      "Pro and Elite plans are billed monthly. The Founders Lifetime plan is a one-time payment.",
      "All payments are processed securely through Stripe. PEN2PRO does not store payment card data.",
      "Subscriptions renew automatically. You may cancel at any time through your account settings.",
      "Refunds are not guaranteed but may be issued at PEN2PRO's discretion for billing errors or platform failures.",
      "Prices are subject to change. Existing subscribers will receive notice before any pricing changes take effect.",
    ],
  },
  {
    title: "Acceptable Use",
    body: [
      "You agree to use PEN2PRO only for lawful purposes and in compliance with these terms.",
      "You may not use the platform to generate harmful, fraudulent, misleading, or illegal content.",
      "You may not attempt to reverse-engineer, scrape, or misuse the platform's AI systems or APIs.",
      "You may not resell, redistribute, or create competing products using PEN2PRO's content or systems without written permission.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "PEN2PRO and its content, features, and technology are owned by Robert Earl Green Jr. and are protected by copyright and intellectual property laws.",
      "You retain ownership of the business information and ideas you input into the platform. PEN2PRO does not claim ownership of your business concepts.",
      "AI-generated roadmap outputs are provided for your personal business use. They may not be resold or distributed without permission.",
    ],
  },
  {
    title: "Disclaimers",
    body: [
      "PEN2PRO provides business planning tools and educational content — not professional legal, financial, credit, or investment advice.",
      "AI-generated outputs are starting points and should be reviewed by qualified professionals before making major business decisions.",
      "PEN2PRO does not guarantee business success, revenue generation, funding approval, loan approval, or credit score improvement.",
      "Results depend entirely on individual effort, market conditions, and factors outside PEN2PRO's control.",
      "The platform is provided 'as is' without warranties of any kind, express or implied.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, PEN2PRO and its founder shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the platform.",
      "PEN2PRO's total liability to you for any claims arising from these terms shall not exceed the amount you paid in the 30 days prior to the claim.",
    ],
  },
  {
    title: "Termination",
    body: [
      "PEN2PRO may terminate or suspend your account at any time for violation of these terms or any reason at our sole discretion.",
      "You may terminate your account at any time. Upon termination, your right to use the platform ceases immediately.",
      "Provisions that by their nature should survive termination (including disclaimers and limitations of liability) will remain in effect.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms of Service are governed by the laws of the State of Texas, without regard to its conflict of law provisions.",
      "Any disputes arising from these terms shall be resolved in the appropriate courts of Houston, Texas.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "PEN2PRO reserves the right to update these terms at any time. We will notify users of material changes via email or platform notification.",
      "Continued use of the platform after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms of Service, contact us at: support@pen2pro.com",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div
          className="absolute top-[20%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-20">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
            Legal
          </div>
          <h1 className="mb-4 font-display text-4xl font-black md:text-5xl">Terms of Service</h1>
          <p className="text-sm text-slate-500">Effective date: June 15, 2026 · Last updated: June 21, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            These Terms of Service govern your use of the PEN2PRO platform. Please read them carefully. Using PEN2PRO means you accept these terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((s, i) => (
            <section key={s.title} className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-7">
              <h2 className="mb-5 font-bold text-white text-xl">
                <span className="mr-3 text-[#FF8A00] font-black">{i + 1}.</span>
                {s.title}
              </h2>
              <ul className="space-y-3">
                {s.body.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
                    {line}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
          <p className="mb-2 text-lg font-bold text-white">Ready to build?</p>
          <p className="mb-6 text-sm text-slate-400">Start with a free roadmap. No credit card required.</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/starter" className="rounded-xl px-7 py-3 text-sm font-black text-[#0A0F1E] btn-gold">
              Start Free Roadmap
            </Link>
            <Link to="/privacy" className="rounded-xl border border-[#1A2D50] px-7 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
              Read Privacy Policy
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    body: [
      "By accessing or using PEN2PRO (the \"Platform\"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use the Platform.",
      "PEN2PRO is owned and operated by Robert Green. These terms govern your access to and use of the Platform, including all AI-generated content, business roadmaps, RMIE outputs, tools, resources, and communications.",
    ],
  },
  {
    title: "Description of Service",
    body: [
      "PEN2PRO is an AI-powered Rapid Monetization Intelligence Engine (RMIE) that helps users generate business roadmaps, strategy plans, branding direction, credit readiness guidance, funding readiness planning, and launch strategies based on information you provide.",
      "PEN2PRO offers multiple service tiers: Free (Starter Roadmap), Pro, Elite, and Founders (Lifetime). Features available to you depend on your subscription tier.",
      "The Platform is not a licensed financial advisor, attorney, accountant, credit repair agency, lender, or business broker. All content generated is for informational and strategic planning purposes only.",
    ],
  },
  {
    title: "User Accounts",
    body: [
      "To access certain features of the Platform, you must create an account. You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
      "You agree to provide accurate, current, and complete information when creating your account. You agree not to impersonate any person or entity or misrepresent your affiliation with any person or entity.",
      "PEN2PRO reserves the right to suspend or terminate accounts that violate these Terms, engage in fraudulent activity, or abuse the Platform.",
    ],
  },
  {
    title: "Subscriptions and Payments",
    body: [
      "Paid plans (Pro, Elite, Founders) are billed as described on the Pricing page. Subscription fees are non-refundable except where required by applicable law or as expressly stated in a written agreement.",
      "Payments are processed through Stripe. By purchasing a subscription, you authorize PEN2PRO to charge your payment method on the billing schedule associated with your plan.",
      "PEN2PRO reserves the right to change pricing at any time. Existing subscribers will be notified of price changes with at least 30 days' advance notice.",
      "Founders Lifetime access is a one-time purchase that grants access to the Platform for as long as PEN2PRO operates commercially.",
    ],
  },
  {
    title: "AI-Generated Content",
    body: [
      "PEN2PRO uses artificial intelligence to generate business roadmaps, strategy recommendations, and RMIE outputs based on information you provide. This content is generated algorithmically and may not account for your specific legal, financial, regulatory, or market situation.",
      "AI-generated content is provided for informational and planning purposes only. It does not constitute professional business, legal, financial, tax, investment, or credit advice.",
      "You are solely responsible for evaluating the accuracy, completeness, and suitability of any AI-generated content before acting on it. PEN2PRO does not guarantee that any business roadmap, strategy, or recommendation will result in income, funding approval, business success, or any specific outcome.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The PEN2PRO name, logo, design, platform architecture, and proprietary content are owned by Robert Green and protected by copyright, trademark, and other intellectual property laws.",
      "AI-generated roadmaps and outputs created by you through the Platform are yours to use for your own business planning purposes. You may not resell, redistribute, or claim authorship of AI-generated content as if it were independently created by you.",
      "You retain ownership of the business ideas and information you provide to the Platform. By submitting information, you grant PEN2PRO a limited license to process and use that information to generate your requested outputs.",
    ],
  },
  {
    title: "Prohibited Uses",
    body: [
      "You agree not to use PEN2PRO to: (a) violate any applicable law or regulation; (b) infringe on the intellectual property rights of others; (c) submit false or misleading information; (d) attempt to gain unauthorized access to the Platform or other users' accounts; (e) use automated tools to scrape, crawl, or extract data from the Platform; (f) resell or redistribute access to the Platform without authorization; or (g) use the Platform for any purpose that is harmful, fraudulent, or deceptive.",
    ],
  },
  {
    title: "Affiliate Links and Third-Party Resources",
    body: [
      "The Platform contains links to third-party websites and services, including affiliate partners for LLC formation, business banking, domain registration, and other business tools. PEN2PRO may earn a commission when you purchase through these links.",
      "PEN2PRO is not responsible for the content, accuracy, or practices of any third-party website or service. Your use of third-party services is governed by their respective terms and policies.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "THE PLATFORM IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. PEN2PRO DOES NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.",
      "PEN2PRO MAKES NO WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY AI-GENERATED CONTENT, AND EXPRESSLY DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, PEN2PRO AND ITS OWNER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, BUSINESS INTERRUPTION, OR LOSS OF DATA, ARISING FROM YOUR USE OF THE PLATFORM.",
      "IN NO EVENT SHALL PEN2PRO'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO PEN2PRO IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These Terms are governed by the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the courts located in Harris County, Texas.",
    ],
  },
  {
    title: "Changes to Terms",
    body: [
      "PEN2PRO reserves the right to modify these Terms at any time. When we make material changes, we will provide notice by updating the \"Effective Date\" and, where appropriate, notifying users via email.",
      "Your continued use of the Platform after changes take effect constitutes your acceptance of the revised Terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about these Terms? Contact us at: legal@pen2pro.com",
    ],
  },
];

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service | PEN2PRO";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <main className="mx-auto max-w-3xl px-5 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
            Legal
          </p>
          <h1 className="mb-4 text-4xl font-black text-white">Terms of Service</h1>
          <p className="text-slate-400">Effective Date: June 23, 2026</p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Please read these Terms of Service carefully before using the PEN2PRO platform.
            These terms govern your use of all PEN2PRO products, AI tools, roadmap outputs,
            subscription services, and resources.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {SECTIONS.map((section, i) => (
            <section
              key={section.title}
              className="rounded-2xl border p-7"
              style={{ borderColor: "#1A2D50", background: "#0F1520" }}
            >
              <h2 className="mb-4 text-lg font-bold text-white">
                {i + 1}. {section.title}
              </h2>
              <div className="space-y-3">
                {section.body.map((para) => (
                  <p key={para.slice(0, 30)} className="text-sm leading-7 text-slate-400">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Back nav */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t pt-8" style={{ borderColor: "#1A2D50" }}>
          <Link to="/" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            ← Back to Home
          </Link>
          <Link to="/privacy" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00] transition-colors">
            Privacy Policy →
          </Link>
          <Link to="/disclaimer" className="text-sm font-semibold text-slate-400 hover:text-[#FF8A00] transition-colors">
            Disclaimer →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Legal</p>
        <h1 className="font-display text-3xl font-black text-white mb-6 md:text-4xl">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-7 text-slate-400">
          <p>
            By using PEN2PRO, you agree to these terms. PEN2PRO provides an AI-powered Rapid Monetization
            Intelligence Engine (RMIE) that generates business roadmaps, strategy content, and educational
            resources. Output is generated based on the information you provide and general business knowledge —
            it is not personalized legal, tax, financial, or investment advice.
          </p>
          <p>
            You are responsible for the accuracy of the information you submit and for evaluating whether any
            roadmap, plan, or recommendation is appropriate for your specific situation before acting on it.
          </p>
          <p>
            Free, Pro, Elite, and Founders tiers each unlock different levels of access as described on their
            respective pages. Features tied to a future launch date are subject to change as the platform
            continues development. We will communicate material changes to active waitlist members and
            subscribers.
          </p>
          <p>
            You may not use PEN2PRO to generate content for illegal purposes, to impersonate others, or to
            resell platform output as a competing service without written permission.
          </p>
          <p>
            We may suspend or terminate access for misuse of the platform. These terms may be updated as
            PEN2PRO evolves; continued use after an update constitutes acceptance of the revised terms.
          </p>
        </div>
        <div className="mt-10">
          <Link to="/" className="btn-gold inline-block px-6 py-3 text-sm font-bold">Back to Home</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const TIER_INFO = {
  founders: {
    name: "Founders Lifetime",
    price: "$497 one-time",
    color: "#D4A017",
    next: [
      "Check your email for your PEN2PRO confirmation and receipt.",
      "You'll receive early access to all platform features starting June 15, 2026.",
      "Join the Founders-only community for insider updates and direct access to the PEN2PRO team.",
    ],
  },
  pro: {
    name: "Pro",
    price: "$47/mo",
    color: "#00C9B1",
    next: [
      "Check your email for your confirmation and account activation details.",
      "Pro access unlocks fully on June 15, 2026 — unlimited roadmaps, outreach automation, and more.",
      "In the meantime, generate a free roadmap and start planning your launch.",
    ],
  },
  elite: {
    name: "Elite",
    price: "$97/mo",
    color: "#D4A017",
    next: [
      "Check your email for your confirmation and Elite member details.",
      "Elite access — including done-with-you strategy sessions — activates June 15, 2026.",
      "Reach out to our team at support@pen2pro.com with any questions.",
    ],
  },
  default: {
    name: "PEN2PRO",
    price: "",
    color: "#D4A017",
    next: [
      "Check your email for your confirmation and receipt.",
      "Your access activates on June 15, 2026 at launch.",
      "Generate a free business roadmap while you wait.",
    ],
  },
};

export default function PaymentSuccessPage() {
  const [params] = useSearchParams();
  const tier = params.get("tier") || "default";
  const info = TIER_INFO[tier] || TIER_INFO.default;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20">
        <div className={`w-full max-w-lg transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {/* Gold Checkmark */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 glow-gold" style={{ borderColor: "#D4A017" }}>
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="#D4A017" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-4xl font-black text-white mb-2">Payment Confirmed</h1>
            <p className="text-slate-400">Welcome to PEN2PRO — you made the right call.</p>
          </div>

          <div className="rounded-2xl border p-8 text-center" style={{ background: "#0F1520", borderColor: info.color + "60" }}>
            {/* Tier Badge */}
            <div className="mb-6">
              <span
                className="inline-block rounded-full px-5 py-2 text-sm font-black"
                style={{ background: info.color + "20", color: info.color }}
              >
                {info.name} Member
              </span>
              {info.price && (
                <p className="text-xs text-slate-500 mt-2">{info.price}</p>
              )}
            </div>

            {/* What's Next */}
            <div className="text-left mb-8">
              <p className="text-sm font-bold text-white mb-4">What happens next:</p>
              <ul className="space-y-4">
                {info.next.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full gradient-gold text-xs font-black text-[#080C14]">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Link to="/dashboard" className="btn-gold block w-full py-3 text-sm font-bold text-center">
                Go to Dashboard
              </Link>
              <Link to="/starter" className="btn-outline block w-full py-3 text-sm font-bold text-center">
                Start Your Free Roadmap
              </Link>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Questions? Email us at{" "}
              <a href="mailto:support@pen2pro.com" className="text-[#D4A017] hover:underline">
                support@pen2pro.com
              </a>
            </p>
          </div>

          <p className="text-center text-xs text-slate-600 mt-6">
            Powered by Stripe — your payment is secure and encrypted.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

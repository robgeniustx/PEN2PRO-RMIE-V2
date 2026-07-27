import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createCheckoutSession } from "../api/stripeApi";

const TIER_INFO = {
  pro: { label: "Pro", path: "/pro" },
  elite: { label: "Elite", path: "/elite" },
  founders: { label: "Founders", path: "/founders" },
};

export default function CheckoutRedirectPage({ tier }) {
  const [status, setStatus] = useState("loading");
  const info = TIER_INFO[tier] || { label: "Plan", path: "/pricing" };

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const result = await createCheckoutSession({ tier });
      if (cancelled) return;
      if (result?.checkout_url) {
        window.location.href = result.checkout_url;
      } else {
        setStatus("unavailable");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [tier]);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <Navbar />
      <div className="flex min-h-[60vh] items-center justify-center px-5 py-24 text-center">
        <div className="max-w-md">
          {status === "loading" ? (
            <>
              <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-[#1A2D50] border-t-[#FF8A00]" />
              <h1 className="mb-2 font-display text-2xl font-black">Redirecting to secure checkout…</h1>
              <p className="text-slate-400">
                Setting up your {info.label} plan checkout. This will only take a moment.
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-4 font-display text-2xl font-black">Checkout Isn't Live Yet</h1>
              <p className="mb-8 text-slate-400">
                {info.label} checkout isn't available yet. Join the waitlist and we'll notify you the moment it
                opens — with locked-in founder pricing.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  to="/waitlist"
                  className="rounded-xl px-6 py-3 text-sm font-black text-[#0A0F1E] btn-gold"
                >
                  Join the Waitlist
                </Link>
                <Link
                  to={info.path}
                  className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  View {info.label} Plan
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

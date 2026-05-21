import { mockWebsiteBuilder } from "../data/mockWebsiteBuilder";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function BrandKitPage() {
  const brand = mockWebsiteBuilder?.brand_direction || {};

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED]/30 bg-[#7C3AED]/10 px-3 py-1 text-xs font-semibold text-[#7C3AED] mb-3">
            BRAND KIT
          </div>
          <h1 className="font-display text-3xl font-black text-white">Brand Direction</h1>
          <p className="mt-2 text-slate-400 text-sm">Your AI-generated brand identity — name, colors, voice, and positioning.</p>
        </div>

        {brand && Object.keys(brand).length > 0 ? (
          <div className="space-y-6">
            {/* Brand Name */}
            {brand.business_name && (
              <div className="rounded-2xl border border-[#1A2D50] p-6" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Business Name</p>
                <p className="font-display text-3xl font-black text-white">{brand.business_name}</p>
              </div>
            )}

            {/* Tagline */}
            {brand.tagline && (
              <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Tagline</p>
                <p className="text-lg font-semibold text-[#D4A017] italic">"{brand.tagline}"</p>
              </div>
            )}

            {/* Brand Voice */}
            {brand.voice && (
              <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Brand Voice</p>
                <p className="text-sm text-slate-300">{brand.voice}</p>
              </div>
            )}

            {/* Colors */}
            {brand.colors && (
              <div className="rounded-2xl border border-[#1A2D50] p-5" style={{ background: "#0F1520" }}>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Brand Colors</p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(brand.colors).map(([name, hex]) => (
                    <div key={name} className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg border border-[#1A2D50]" style={{ background: hex }} />
                      <div>
                        <p className="text-xs font-medium text-white capitalize">{name}</p>
                        <p className="text-xs text-slate-500">{hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-4">Generate your business roadmap first to unlock brand direction.</p>
            <Link to="/starter" className="btn-gold px-6 py-2.5 text-sm font-bold">
              Build Free Roadmap
            </Link>
          </div>
        )}

        <div className="mt-10 rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/5 p-6 text-center">
          <p className="text-sm font-bold text-[#D4A017] mb-1">Full Brand Kit — Pro & Elite</p>
          <p className="text-xs text-slate-400 mb-4">Unlock complete brand identity: logo brief, typography, messaging guide, and social profile kit.</p>
          <Link to="/waitlist?tier=pro" className="btn-gold px-6 py-2.5 text-sm font-bold">
            Upgrade to Pro
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

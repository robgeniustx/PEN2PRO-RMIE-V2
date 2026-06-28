import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { generateWebsiteBuilder } from "../api/websiteApi";
import WebsiteBuilderForm from "../components/website/WebsiteBuilderForm";
import LandingPagePreview from "../components/website/LandingPagePreview";
import WebsiteCopyCard from "../components/website/WebsiteCopyCard";
import SeoPreviewCard from "../components/website/SeoPreviewCard";
import BrandKitCard from "../components/website/BrandKitCard";

export default function WebsiteBuilderPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(payload) {
    try {
      setLoading(true);
      setError("");
      const result = await generateWebsiteBuilder(payload);
      setData(result);
    } catch (err) {
      console.error("Website builder error:", err);
      setError("Something went wrong while generating your website plan. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen bg-[#080C14] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[500px] w-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,201,177,0.15) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(45,156,255,0.12) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />
      </div>

      <Navbar />

      <div className="mx-auto max-w-5xl px-5 py-12">
        {/* Page header */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00C9B1]">
            🌐 PEN2PRO Website Builder
          </div>
          <h1 className="mb-3 font-display text-4xl font-black leading-tight md:text-5xl">
            Launch Your Business Website
          </h1>
          <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
            Generate a professional landing page, website copy, SEO strategy, and brand direction
            — all built around your specific business idea in minutes.
          </p>
        </div>

        {/* Builder form */}
        <div className="mb-8 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
          <WebsiteBuilderForm onSubmit={handleSubmit} />
        </div>

        {/* Loading state */}
        {loading && (
          <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#00C9B1]/10 p-6 text-center">
            <div className="mb-3 text-3xl">⚙️</div>
            <p className="font-bold text-[#00C9B1]">Building your website plan...</p>
            <p className="mt-1 text-sm text-slate-400">
              Our AI is generating landing page copy, SEO strategy, and brand direction.
            </p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-200">
            <p className="font-bold">Something went wrong</p>
            <p className="mt-1 text-sm">{error}</p>
            <button
              type="button"
              onClick={() => setError("")}
              className="mt-4 rounded-lg border border-red-500/30 px-4 py-2 text-xs text-red-300 hover:bg-red-500/20 transition-colors"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Results */}
        {data && !loading && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-[#00C9B1]/30 bg-[#00C9B1]/10 p-4 text-sm text-[#00C9B1] font-semibold">
              ✅ Your website plan is ready. Review each section below and save or export your blueprint.
            </div>
            <LandingPagePreview data={data.landing_page} />
            <WebsiteCopyCard copy={data.website_copy} />
            <SeoPreviewCard seo={data.seo} />
            <BrandKitCard brand={data.brand_direction} />

            {/* CTA after results */}
            <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-8 text-center">
              <h2 className="mb-2 text-xl font-black">Ready to Build the Full Experience?</h2>
              <p className="mb-6 text-slate-400">
                Upgrade to Pro or Elite to unlock full website templates, a page editor, domain
                connection, and complete brand kit generation.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  to="/pro"
                  className="rounded-xl bg-[#2d9cff] px-6 py-3 text-sm font-black text-[#080C14] transition hover:scale-[1.02]"
                >
                  Upgrade to Pro
                </Link>
                <Link
                  to="/website-builder"
                  className="rounded-xl border border-[#1A2D50] px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  Website Builder Overview
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Bottom links when no results yet */}
        {!data && !loading && (
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <Link to="/website-builder" className="hover:text-[#00C9B1] transition-colors">
              Website Builder Overview
            </Link>
            <Link to="/domain-search" className="hover:text-[#00C9B1] transition-colors">
              Domain Finder
            </Link>
            <Link to="/starter" className="hover:text-[#00C9B1] transition-colors">
              Business Blueprint
            </Link>
            <Link to="/pricing" className="hover:text-[#00C9B1] transition-colors">
              View Plans
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

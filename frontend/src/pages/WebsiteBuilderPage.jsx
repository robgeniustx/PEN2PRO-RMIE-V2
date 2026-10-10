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
      setError(err.status === 401 ? "signin" : err.message || "Something went wrong while generating your website plan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl space-y-6 p-4 py-10">
      <div>
        <h1 className="text-2xl font-bold text-blue-400">
          Website / Landing Page Builder
        </h1>
        <p className="text-slate-300 mt-2">
          Generate landing page copy, SEO direction, and brand guidance for your business.
        </p>
      </div>

      <WebsiteBuilderForm onSubmit={handleSubmit} />

      {loading && (
        <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4 text-blue-200">
          Generating your website plan...
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          {error === "signin" ? (
            <>Sign in to generate your website plan. <Link to="/login" state={{ from: "/website-builder/editor" }} className="underline">Sign in or create a free account</Link>.</>
          ) : error}
        </div>
      )}

      {data && !loading && (
        <div className="space-y-4">
          <LandingPagePreview data={data.landing_page} />
          <WebsiteCopyCard copy={data.website_copy} />
          <SeoPreviewCard seo={data.seo} />
          <BrandKitCard brand={data.brand_direction} />
        </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

import { useState } from "react";
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
      setError("Something went wrong while generating your website plan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 space-y-6">
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
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          {error}
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
  );
}

import SocialPostCard from "../components/social/SocialPostCard";
import { mockSocialEngine } from "../data/mockSocialCalendar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

export default function SocialPostsPage() {
  const posts = mockSocialEngine?.posts || [];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-black text-white">Social Posts</h1>
          <p className="mt-2 text-slate-400 text-sm">Ready-to-publish posts for all your social channels.</p>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((p, i) => <SocialPostCard post={p} key={i} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-[#1A2D50] p-12 text-center" style={{ background: "#0F1520" }}>
            <p className="text-slate-500 text-sm mb-4">Generate your Social Engine to create posts.</p>
            <Link to="/social" className="btn-gold px-6 py-2.5 text-sm font-bold">Open Social Engine</Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

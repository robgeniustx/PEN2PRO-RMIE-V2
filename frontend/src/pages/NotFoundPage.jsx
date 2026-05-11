import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 text-center">
        <div className="animate-fade-up">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl gradient-gold text-3xl font-black text-[#080C14]">
            P2P
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">404 — Page Not Found</p>
          <h1 className="font-display text-4xl font-black text-white mb-4 md:text-5xl">
            Wrong turn, <span className="gradient-text">founder.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist. But your business roadmap does — and it's free.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/" className="btn-gold px-8 py-3 text-sm font-bold">
              Go Home
            </Link>
            <Link to="/starter" className="btn-outline px-8 py-3 text-sm font-bold">
              Start Free Roadmap
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

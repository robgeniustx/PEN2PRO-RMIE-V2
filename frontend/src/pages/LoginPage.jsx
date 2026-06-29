import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#FF8A00",
    icon: "🗺️",
    desc: "Start with a full AI-generated business roadmap — no credit card, no commitment. Get your 7-day action plan and foundation checklist in 60 seconds.",
  },
  {
    tier: "Pro Strategy Tools",
    color: "#2d9cff",
    icon: "⚡",
    desc: "Unlock the full RMIE blueprint: 30 & 90-day plans, branding support, outreach scripts, credit readiness, and PDF export. $249/mo.",
  },
  {
    tier: "Elite Execution Support",
    color: "#d4af37",
    icon: "🧠",
    desc: "Advanced strategist guidance, financial projections, legal foundation tools, vendor & funding resource center, and priority support. $499/mo.",
  },
  {
    tier: "Legacy Founder Access",
    color: "#d4af37",
    icon: "🏆",
    desc: "Lifetime access. Every feature we ever ship. Only 200 spots. One payment — $1,899 — and you're in forever.",
  },
];

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [tab, setTab] = useState(isSignup ? "register" : "login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });

  useEffect(() => {
    const token = localStorage.getItem("pen2pro_token");
    if (token) navigate("/dashboard");
  }, [navigate]);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: loginForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    if (registerForm.password !== registerForm.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (registerForm.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: registerForm.name, email: registerForm.email, password: registerForm.password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Registration failed");
      localStorage.setItem("pen2pro_token", data.access_token);
      localStorage.setItem("pen2pro_user", JSON.stringify({ name: data.name, tier: data.tier, email: registerForm.email }));
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.1) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── LEFT PANEL — Tier Benefits ── */}
        <div
          className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between px-10 py-12 border-r border-[#1A2D50]"
          style={{ background: "linear-gradient(160deg, #0D1826 0%, #080C14 100%)" }}
        >
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.4)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="text-2xl font-black text-white leading-snug mb-3">
              Build your business roadmap.{" "}
              <span style={{ color: "#FF8A00" }}>Save your blueprint.</span>{" "}
              Upgrade when ready.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              PEN2PRO RMIE turns your idea into a realistic action plan — with business structure, launch steps, monetization strategy, and credit readiness tools built around your specific idea.
            </p>

            {/* Tier cards */}
            <div className="space-y-4">
              {TIER_BENEFITS.map((t) => (
                <div
                  key={t.tier}
                  className="rounded-xl border bg-[#0F1520] p-4 flex gap-3 items-start"
                  style={{ borderColor: t.color + "30" }}
                >
                  <span className="text-xl shrink-0 mt-0.5">{t.icon}</span>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: t.color }}>{t.tier}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="mt-10 border-l-4 border-[#FF8A00] pl-4">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              "This is not just software. This is a second-chance engine, a business builder, and a roadmap for people ready to stop waiting for permission."
            </p>
            <p className="text-xs text-[#FF8A00] font-bold mt-2">— Robert Earl Green Jr., Founder</p>
          </div>
        </div>

        {/* ── RIGHT PANEL — Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile brand header */}
            <div className="lg:hidden text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
                >
                  <span className="text-lg">⚡</span>
                </div>
                <span className="font-display text-2xl font-black">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <h1 className="text-xl font-bold text-white">
                Build your business roadmap. Save your blueprint. Upgrade when ready.
              </h1>
            </div>

            {/* Desktop form header */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap — free, no credit card"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>

              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "gradient-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Login Form */}
              {tab === "login" && (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      Don't have an account?{" "}
                      <span style={{ color: "#D4A017" }} className="font-semibold">Create one free</span>
                    </button>
                  </div>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Robert Green"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={registerForm.email}
                      onChange={e => setRegisterForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.password}
                      onChange={e => setRegisterForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="Min 8 characters"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      type="password"
                      required
                      value={registerForm.confirm}
                      onChange={e => setRegisterForm(f => ({ ...f, confirm: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold hover:underline" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Tier quick links — mobile only */}
            <div className="lg:hidden mt-8 grid grid-cols-2 gap-3">
              {[
                { label: "Free Roadmap", href: "/starter", color: "#FF8A00" },
                { label: "Pro — $249/mo", href: "/pro", color: "#2d9cff" },
                { label: "Elite — $499/mo", href: "/elite", color: "#d4af37" },
                { label: "Founders Lifetime", href: "/founders", color: "#d4af37" },
              ].map((t) => (
                <Link
                  key={t.href}
                  to={t.href}
                  className="rounded-xl border border-[#1A2235] bg-[#0F1520] px-3 py-2.5 text-center text-xs font-semibold transition hover:border-current"
                  style={{ color: t.color }}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

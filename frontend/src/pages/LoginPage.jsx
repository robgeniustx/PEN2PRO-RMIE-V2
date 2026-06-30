import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    badge: "Free",
    color: "#FF8A00",
    borderColor: "rgba(255,138,0,0.3)",
    bg: "#15120a",
    icon: "🗺️",
    title: "Free Roadmap",
    subtitle: "Start here — no card required",
    points: [
      "RMIE starter business blueprint",
      "7-day action plan preview",
      "Business idea analysis",
      "Launch checklist basics",
    ],
  },
  {
    badge: "Pro",
    color: "#2d9cff",
    borderColor: "rgba(45,156,255,0.3)",
    bg: "#0a1525",
    icon: "⚡",
    title: "Pro — $249/mo",
    subtitle: "Full roadmap + execution tools",
    points: [
      "Full 7/30/90-day RMIE blueprint",
      "Branding + outreach strategy",
      "Credit & funding readiness checklist",
      "PDF & email export",
    ],
  },
  {
    badge: "Elite",
    color: "#d4af37",
    borderColor: "rgba(212,175,55,0.3)",
    bg: "#15120a",
    icon: "🧠",
    title: "Elite — $499/mo",
    subtitle: "Advanced strategy + execution",
    points: [
      "Everything in Pro",
      "Financial projections + legal foundation",
      "Vendor & funding resource center",
      "Priority support + automation workflows",
    ],
  },
  {
    badge: "Founders",
    color: "#d4af37",
    borderColor: "rgba(212,175,55,0.5)",
    bg: "#100e05",
    icon: "🏆",
    title: "Legacy Founders",
    subtitle: "Lifetime access — 200 spots only",
    points: [
      "Lifetime platform access — one payment",
      "Every feature we will ever ship",
      "P2P Command Center + AI Voice Agent",
      "Founder recognition + early access",
    ],
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
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-[40%] -right-48 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] lg:gap-16 items-start">

          {/* ── LEFT: Tier Value Panel ── */}
          <div className="hidden lg:block">
            {/* Headline */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
              ⚡ PEN2PRO RMIE Platform
            </div>
            <h2 className="mb-3 font-display text-3xl font-black leading-snug text-white xl:text-4xl">
              Build your business roadmap.{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #1E88E5, #FF8A00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Save your blueprint.
              </span>{" "}
              Upgrade when ready.
            </h2>
            <p className="mb-8 max-w-lg text-slate-400 leading-relaxed">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — gives you a real business roadmap in minutes. Start free. Upgrade to get the full strategy, execution tools, and funding readiness support.
            </p>

            {/* Tier cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {TIER_BENEFITS.map((tier) => (
                <div
                  key={tier.badge}
                  className="rounded-2xl border p-4 transition hover:brightness-110"
                  style={{ borderColor: tier.borderColor, background: tier.bg }}
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-xl">{tier.icon}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
                      style={{ color: tier.color, background: `${tier.color}18` }}
                    >
                      {tier.badge}
                    </span>
                  </div>
                  <p className="mb-0.5 font-bold text-white text-sm">{tier.title}</p>
                  <p className="mb-2.5 text-xs text-slate-500">{tier.subtitle}</p>
                  <ul className="space-y-1">
                    {tier.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-1.5 text-xs text-slate-400">
                        <span style={{ color: tier.color }} className="shrink-0 mt-0.5">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social proof strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00C9B1]" />
                Free roadmap — no credit card
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2d9cff]" />
                Built for second-chance builders
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A00]" />
                Veteran & entrepreneur founded
              </span>
            </div>
          </div>

          {/* ── RIGHT: Auth Form ── */}
          <div className="w-full">
            {/* Mobile headline — shown below lg */}
            <div className="lg:hidden mb-6 text-center">
              <h2 className="font-display text-2xl font-black text-white mb-2">
                Build your business roadmap.
              </h2>
              <p className="text-sm text-slate-400">
                Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Brand logo mark */}
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}
              >
                <span className="text-xl leading-none">⚡</span>
              </div>
              <div>
                <p className="font-display text-xl font-black leading-none">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-0.5">
                  Rapid Monetization Intelligence Engine
                </p>
              </div>
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
                <form onSubmit={handleLogin} className="space-y-4">
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
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <span className="text-xs text-slate-500">
                        Forgot?{" "}
                        <Link to="/waitlist" className="text-[#D4A017] hover:underline">
                          Contact support
                        </Link>
                      </span>
                    </div>
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
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Signing in..." : "Sign In to PEN2PRO"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:underline"
                    >
                      Create one free
                    </button>
                  </p>
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
                    className="btn-gold w-full rounded-xl py-3 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Creating account..." : "Create Free Account"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="flex-1 border-t border-[#1A2235]" />
                <span className="text-xs text-slate-600">or</span>
                <div className="flex-1 border-t border-[#1A2235]" />
              </div>

              {/* Quick actions */}
              <div className="space-y-2">
                <Link
                  to="/starter"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF8A00]/30 bg-[#FF8A00]/5 py-2.5 text-sm font-semibold text-[#FF8A00] hover:bg-[#FF8A00]/10 transition-colors"
                >
                  🗺️ Start Free Roadmap — No Account Needed
                </Link>
                <Link
                  to="/waitlist"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#1A2235] py-2.5 text-sm font-semibold text-slate-400 hover:text-white hover:border-[#1A2D50] transition-colors"
                >
                  Join the Waitlist Instead
                </Link>
              </div>
            </div>

            {/* Mobile tier preview */}
            <div className="lg:hidden mt-6">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-500">What You Get</p>
              <div className="grid grid-cols-2 gap-2">
                {TIER_BENEFITS.map((tier) => (
                  <div
                    key={tier.badge}
                    className="rounded-xl border p-3"
                    style={{ borderColor: tier.borderColor, background: tier.bg }}
                  >
                    <p className="mb-0.5 flex items-center gap-1.5 text-xs font-black" style={{ color: tier.color }}>
                      <span>{tier.icon}</span> {tier.badge}
                    </p>
                    <p className="text-[11px] text-slate-400">{tier.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

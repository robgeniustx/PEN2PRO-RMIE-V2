import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_HIGHLIGHTS = [
  {
    color: "#1E88E5",
    badge: "Free",
    title: "Starter Roadmap",
    desc: "Get a real business blueprint for your idea — no credit card required.",
    href: "/starter",
  },
  {
    color: "#2d9cff",
    badge: "Pro — $249/mo",
    title: "Full Strategy Toolkit",
    desc: "7/30/90-day plan, branding, outreach scripts, credit readiness, and PDF export.",
    href: "/pro",
  },
  {
    color: "#d4af37",
    badge: "Elite — $499/mo",
    title: "Advanced Execution",
    desc: "Financial projections, legal foundation, vendor resource center, and priority support.",
    href: "/elite",
  },
  {
    color: "#d4af37",
    badge: "Founders — $1,899",
    title: "Lifetime Access",
    desc: "One payment. Every feature we ever ship. Only 200 spots available.",
    href: "/founders",
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

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-stretch gap-0 px-4 py-10 lg:py-20">

        {/* ── Left side panel ── */}
        <div className="hidden lg:flex lg:w-[420px] xl:w-[480px] shrink-0 flex-col justify-between rounded-l-3xl border border-r-0 border-[#1A2235] bg-[#0B1122] p-10">
          {/* Brand */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.4)" }}
              >
                <span className="text-lg leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="mb-3 font-display text-2xl font-black leading-tight text-white">
              Build your business roadmap.
              <br />
              <span style={{ color: "#FF8A00" }}>Save your blueprint.</span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="mb-10 text-sm leading-relaxed text-slate-400">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea into a real action plan. Sign in or create your free account to get started.
            </p>

            {/* Tier highlights */}
            <div className="space-y-3">
              {TIER_HIGHLIGHTS.map((t) => (
                <Link
                  key={t.badge}
                  to={t.href}
                  className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 transition hover:border-[#1A2D50] hover:bg-[#111827]"
                >
                  <div
                    className="mt-0.5 shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-black uppercase tracking-widest"
                    style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
                  >
                    {t.badge}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="mt-10 border-t border-[#1A2235] pt-6">
            <p className="text-xs text-slate-500 leading-relaxed italic">
              "PEN2PRO was built for people who have been overlooked, underestimated, or counted out — and are ready to build anyway."
            </p>
            <p className="mt-2 text-xs font-bold text-slate-400">— Robert Green, Founder</p>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="flex flex-1 items-center justify-center rounded-2xl lg:rounded-l-none lg:rounded-r-3xl border border-[#1A2235] bg-[#0F1520] p-6 sm:p-10">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 text-center">
              {/* Mobile-only brand */}
              <div className="lg:hidden mb-4 flex justify-center">
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </div>
              <h1 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your business dashboard"
                  : "Start building your business roadmap — free"}
              </p>
            </div>

            {/* Tabs */}
            <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
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
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <span className="text-xs text-slate-500">Forgot password? Contact support</span>
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
                  className="btn-gold w-full py-3 text-sm font-bold"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-center text-sm text-slate-500">
                  No account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("register"); setError(""); }}
                    className="font-semibold text-[#FF8A00] hover:underline"
                  >
                    Create one free
                  </button>
                </p>
              </form>
            )}

            {/* Register Form */}
            {tab === "register" && (
              <form onSubmit={handleRegister} className="space-y-5">
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
                  className="btn-gold w-full py-3 text-sm font-bold"
                >
                  {loading ? "Creating account..." : "Create Free Account"}
                </button>
                <p className="text-center text-xs text-slate-500">
                  By creating an account you agree to our{" "}
                  <Link to="/terms" className="text-slate-400 hover:text-white underline">Terms</Link>
                  {" "}and{" "}
                  <Link to="/privacy" className="text-slate-400 hover:text-white underline">Privacy Policy</Link>.
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>

            {/* Free roadmap CTA */}
            <div className="mt-5 rounded-xl border border-[#1A2235] bg-[#080C14] p-4 text-center">
              <p className="text-xs text-slate-500 mb-2">Want to try before signing up?</p>
              <Link to="/starter" className="text-sm font-bold text-[#FF8A00] hover:underline">
                Start your free roadmap — no account needed →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

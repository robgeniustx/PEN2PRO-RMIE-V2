import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_PANELS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    badge: "Free Forever",
    badgeColor: "#4CAF50",
    desc: "Start with a full AI-generated business blueprint — no credit card required.",
  },
  {
    icon: "⚡",
    name: "Pro — $249/mo",
    badge: "Most Popular",
    badgeColor: "#D4A017",
    desc: "Full 90-day execution plan, sales scripts, credit readiness, PDF export, and AI refinement.",
  },
  {
    icon: "🏆",
    name: "Elite — $499/mo",
    badge: "Best Value",
    badgeColor: "#00C9B1",
    desc: "Financial projections, done-with-you strategy, funding resources, and white-glove execution support.",
  },
  {
    icon: "👑",
    name: "Founders Lifetime",
    badge: "200 Spots",
    badgeColor: "#FF8A00",
    desc: "One payment, lifetime access. Full platform + Command Center, Voice Agent, and Website Builder.",
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

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">

          {/* ── LEFT PANEL — Value Props ── */}
          <div className="hidden lg:block">
            {/* Brand & Headline */}
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}
                >
                  <span className="text-xl leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </div>
              <h2 className="text-3xl font-black leading-tight text-white md:text-4xl">
                Build your business roadmap.
                <br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Save your blueprint. Upgrade when ready.
                </span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                PEN2PRO RMIE turns your idea into a realistic business roadmap — free to start, powerful when you upgrade.
              </p>
            </div>

            {/* Tier Cards */}
            <div className="space-y-3">
              {TIER_PANELS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-start gap-4 rounded-2xl border p-4 transition-all hover:border-opacity-60"
                  style={{ borderColor: "#1A2235", background: "#0F1520" }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: "#0A0F1E" }}
                  >
                    {tier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-white text-sm">{tier.name}</span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider"
                        style={{ color: tier.badgeColor, background: `${tier.badgeColor}20` }}
                      >
                        {tier.badge}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom trust line */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-3">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-xs text-slate-400">
                <span className="font-semibold text-slate-200">No credit card required</span> to start your free roadmap. Upgrade any time.
              </p>
            </div>
          </div>

          {/* ── RIGHT PANEL — Auth Form ── */}
          <div className="w-full">
            {/* Mobile brand header */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-13 w-13 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", width: 52, height: 52 }}>
                <span className="text-xl leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your business roadmap"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Desktop header */}
            <div className="hidden lg:block mb-6">
              <h3 className="text-xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-6 md:p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
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
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-yellow-400 transition-colors">
                        Forgot password?
                      </Link>
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl"
                  >
                    {loading ? "Signing in…" : "Sign In →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:text-yellow-400 transition-colors"
                      style={{ color: "#D4A017" }}
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
                    className="btn-gold w-full py-3.5 text-sm font-black rounded-xl"
                  >
                    {loading ? "Creating account…" : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-slate-300">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="underline hover:text-slate-300">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Divider */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex-1 border-t border-[#1A2235]" />
                <span className="text-xs text-slate-600">or</span>
                <div className="flex-1 border-t border-[#1A2235]" />
              </div>

              {/* Waitlist / Starter links */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  to="/starter"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#1A2235] px-3 py-2.5 text-xs font-semibold text-slate-300 hover:border-yellow-500/50 hover:text-yellow-400 transition-colors"
                >
                  🗺️ Free Roadmap
                </Link>
                <Link
                  to="/waitlist"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-[#1A2235] px-3 py-2.5 text-xs font-semibold text-slate-300 hover:border-yellow-500/50 hover:text-yellow-400 transition-colors"
                >
                  ⚡ Join Waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier info */}
            <div className="mt-6 lg:hidden space-y-3">
              <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">What you get with PEN2PRO</p>
              {TIER_PANELS.map((tier) => (
                <div
                  key={tier.name}
                  className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-3"
                >
                  <span className="text-lg">{tier.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-white">{tier.name}</p>
                    <p className="text-[10px] text-slate-500 leading-tight mt-0.5">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

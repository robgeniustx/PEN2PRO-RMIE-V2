import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#00C9B1",
    desc: "1 AI business roadmap — no credit card required",
    href: "/starter",
  },
  {
    tier: "Pro — $249/mo",
    color: "#2d9cff",
    desc: "Full blueprint · progress tracking · PDF export · outreach strategy",
    href: "/pro",
  },
  {
    tier: "Elite — $499/mo",
    color: "#D4A017",
    desc: "Financial projections · funding resources · done-with-you guidance",
    href: "/elite",
  },
  {
    tier: "Legacy Founder",
    color: "#FF8A00",
    desc: "Lifetime access · all features · founding member pricing locked forever",
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

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* ── Left panel — desktop only ── */}
        <div
          className="hidden lg:flex lg:w-[46%] flex-col justify-center px-14 py-16 border-r border-[#1A2235]"
          style={{ background: "#0A0E1A" }}
        >
          {/* Background orb */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
          />

          {/* Logo */}
          <div className="relative mb-8 flex items-center gap-3">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.4)" }}
            >
              <span className="text-xl leading-none select-none">⚡</span>
            </div>
            <span className="font-display text-2xl font-black tracking-tight leading-none">
              <span style={{ color: "#FFFFFF" }}>PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          {/* Headline */}
          <h2 className="relative mb-3 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.<br />
            Save your blueprint.<br />
            <span style={{ color: "#D4A017" }}>Upgrade when ready.</span>
          </h2>
          <p className="relative mb-10 text-slate-400 leading-relaxed text-sm">
            PEN2PRO RMIE turns your idea into a realistic business plan with funding readiness, credit strategy, and launch execution — built for entrepreneurs, veterans, returning citizens, and working-class builders.
          </p>

          {/* Tier benefits */}
          <div className="relative space-y-3">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-600">Choose your level</p>
            {TIER_BENEFITS.map((t) => (
              <Link
                key={t.tier}
                to={t.href}
                className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 transition-colors hover:border-[#1A2D50] hover:bg-[#111827]"
              >
                <span
                  className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ background: t.color, boxShadow: `0 0 8px ${t.color}80` }}
                />
                <div>
                  <p className="text-sm font-bold text-white">{t.tier}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer note */}
          <p className="relative mt-8 text-xs text-slate-600">
            No credit card required to start · Cancel Pro/Elite anytime · Founders pricing locked for life
          </p>
        </div>

        {/* ── Right panel — form ── */}
        <div className="flex flex-1 items-center justify-center px-4 py-16">
          <div className="w-full max-w-md">
            {/* Mobile header (shown when left panel is hidden) */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                ⚡
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Desktop header */}
            <div className="mb-8 hidden lg:block">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Sign in to PEN2PRO" : "Create your free account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your roadmap, blueprint, and dashboard"
                  : "Start with a free roadmap — no credit card needed"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-[#D4A017] transition-colors">
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
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
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/starter" className="font-semibold" style={{ color: "#D4A017" }}>
                  Try the free roadmap first
                </Link>
              </div>
            </div>

            {/* Mobile tier links */}
            <div className="mt-8 lg:hidden">
              <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-slate-600">Available Plans</p>
              <div className="grid grid-cols-2 gap-2">
                {TIER_BENEFITS.map((t) => (
                  <Link
                    key={t.tier}
                    to={t.href}
                    className="flex items-center gap-2 rounded-lg border border-[#1A2235] bg-[#0F1520] p-3 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ background: t.color }} />
                    {t.tier}
                  </Link>
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

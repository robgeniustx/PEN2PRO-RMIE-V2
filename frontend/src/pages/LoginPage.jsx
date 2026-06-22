import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

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

  const TIER_BENEFITS = [
    {
      badge: "Free",
      color: "#94a3b8",
      borderColor: "#1A2235",
      bg: "rgba(26,34,53,0.5)",
      title: "Free Roadmap",
      desc: "AI-generated business roadmap for your idea — LLC checklist, starter plan, and brand name ideas. No credit card.",
    },
    {
      badge: "Pro — $249/mo",
      color: "#2d9cff",
      borderColor: "rgba(45,156,255,0.35)",
      bg: "rgba(16,26,48,0.6)",
      title: "Full RMIE Blueprint",
      desc: "7/30/90-day execution plan, branding support, outreach scripts, credit & funding checklist, PDF export.",
    },
    {
      badge: "Elite — $499/mo",
      color: "#d4af37",
      borderColor: "rgba(212,175,55,0.35)",
      bg: "rgba(21,18,10,0.6)",
      title: "Advanced Execution",
      desc: "Financial projections, legal foundation guide, vendor & funding resource center, automation, priority support.",
    },
    {
      badge: "Founders — $1,899 for life",
      color: "#d4af37",
      borderColor: "rgba(212,175,55,0.5)",
      bg: "rgba(21,18,10,0.7)",
      title: "Legacy Founder Lifetime",
      desc: "Full platform access forever — Command Center, AI Voice Agent, Website Builder, and every future feature.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col items-stretch gap-0 px-4 py-12 lg:flex-row lg:items-center lg:gap-12">

        {/* ── Left: Tier Benefits Panel ── */}
        <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:gap-6">
          <div className="mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017]">PEN2PRO RMIE</p>
            <h2 className="mt-2 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.<br />
              Save your blueprint.<br />
              <span style={{ color: "#D4A017" }}>Upgrade when ready.</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Start free. Build a real roadmap. Every tier gives you more tools, more strategy, and more execution support.
            </p>
          </div>

          <div className="space-y-3">
            {TIER_BENEFITS.map((t) => (
              <div
                key={t.badge}
                className="rounded-xl border p-4"
                style={{ borderColor: t.borderColor, background: t.bg }}
              >
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest"
                    style={{ color: t.color, background: `${t.color}18`, border: `1px solid ${t.color}40` }}
                  >
                    {t.badge}
                  </span>
                </div>
                <p className="text-sm font-bold text-white">{t.title}</p>
                <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            PEN2PRO does not guarantee income, funding approval, or credit results. Results depend on individual effort and market conditions.
          </p>
        </div>

        {/* ── Right: Auth Form ── */}
        <div className="w-full lg:w-[420px] lg:shrink-0">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
              P2P
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    className="font-semibold hover:underline"
                    style={{ color: "#D4A017" }}
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
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
                <p className="text-center text-sm text-slate-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setTab("login"); setError(""); }}
                    className="font-semibold hover:underline"
                    style={{ color: "#D4A017" }}
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready to sign up yet?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
            </div>
          </div>

          {/* Mobile tier summary */}
          <div className="mt-6 rounded-xl border border-[#1A2235] p-4 lg:hidden" style={{ background: "#0F1520" }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">What you get with PEN2PRO</p>
            <div className="space-y-2">
              {[
                { label: "Free Roadmap", desc: "AI business plan, LLC checklist, brand ideas" },
                { label: "Pro — $249/mo", desc: "Full blueprint, branding, outreach, export" },
                { label: "Elite — $499/mo", desc: "Financial projections, legal guide, automation" },
                { label: "Founders — $1,899 for life", desc: "Lifetime access to every feature we build" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 shrink-0 text-[#D4A017]">✓</span>
                  <span>
                    <span className="font-semibold text-slate-200">{item.label}</span>
                    <span className="text-slate-500"> — {item.desc}</span>
                  </span>
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

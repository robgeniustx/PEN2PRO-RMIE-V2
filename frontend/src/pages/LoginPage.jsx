import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIERS = [
  {
    icon: "🗺️",
    name: "Free Roadmap",
    color: "#94a3b8",
    desc: "Start with a real AI business blueprint — idea intake, startup checklist, and 7-day action plan. No credit card.",
  },
  {
    icon: "⚡",
    name: "Pro — $249/mo",
    color: "#2d9cff",
    desc: "Full 90-day roadmap, branding support, sales scripts, credit & funding checklist, and PDF export.",
  },
  {
    icon: "🏆",
    name: "Elite — $499/mo",
    color: "#00C9B1",
    desc: "Done-with-you strategy, financial projections, vendor & funding resources, and priority execution support.",
  },
  {
    icon: "♾️",
    name: "Founders Lifetime",
    color: "#D4A017",
    desc: "One payment. Lifetime access. Includes every feature — Command Center, Voice Agent, Website Builder, and the 10M framework.",
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

        {/* ── LEFT PANEL — brand + tier info (desktop only) ── */}
        <div
          className="hidden lg:flex lg:w-[46%] xl:w-[42%] shrink-0 flex-col justify-center px-10 xl:px-14 py-16 border-r border-[#1A2D50]"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 60%, #0A0F1E 100%)" }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.35)" }}
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
          <h2 className="font-display text-3xl xl:text-4xl font-black leading-tight text-white mb-4">
            Build your business roadmap.{" "}
            <span style={{ color: "#D4A017" }}>Save your blueprint.</span>{" "}
            Upgrade when ready.
          </h2>
          <p className="text-sm leading-7 text-slate-400 mb-10">
            Start free with a real RMIE roadmap — no credit card, no fluff.
            Pro, Elite, and Founders give you deeper strategy, execution support, and lifetime access.
          </p>

          {/* Tier cards */}
          <div className="space-y-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#080C14]/60 p-4 transition-colors hover:border-[#1A2D50]/80"
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                  style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}40` }}
                >
                  {tier.icon}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: tier.color }}>{tier.name}</p>
                  <p className="text-xs leading-5 text-slate-500 mt-0.5">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <p className="mt-8 text-xs text-slate-600 border-t border-[#1A2D50] pt-6">
            2,847+ roadmaps generated · No credit card for free plan · Cancel anytime on paid plans
          </p>
        </div>

        {/* ── RIGHT PANEL — form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Mobile brand header (shown only on mobile/tablet) */}
            <div className="lg:hidden text-center mb-8">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">PEN<span style={{ color: "#FF8A00" }}>2</span><span style={{ color: "#1E88E5" }}>PRO</span></h1>
              <p className="mt-1 text-sm text-slate-400">Build your roadmap. Upgrade when ready.</p>
            </div>

            {/* Desktop form header */}
            <div className="hidden lg:block mb-8">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — it's free"}
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
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:opacity-80 transition"
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
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:text-slate-300 transition-colors underline">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="hover:text-slate-300 transition-colors underline">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 text-center text-sm text-slate-500 border-t border-[#1A2235] pt-5">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Join the waitlist →
                </Link>
              </div>
            </div>

            {/* Mobile tier info (shown below form on mobile/tablet) */}
            <div className="lg:hidden mt-8 space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">What you get with PEN2PRO</p>
              {TIERS.map((tier) => (
                <div key={tier.name} className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                  <span className="text-xl shrink-0">{tier.icon}</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: tier.color }}>{tier.name}</p>
                    <p className="text-xs text-slate-600 leading-4 mt-0.5 line-clamp-2">{tier.desc}</p>
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

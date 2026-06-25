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

const TIER_CARDS = [
  {
    icon: "🗺️",
    tier: "Free Forever",
    color: "#64748B",
    desc: "Start your first AI business roadmap. Get a 7-day plan, brand name ideas, and a launch checklist — no credit card.",
  },
  {
    icon: "⚡",
    tier: "Pro — $249/mo",
    color: "#D4A017",
    desc: "Full 90-day execution plan, branding support, sales scripts, credit readiness, PDF export, and AI refinement.",
  },
  {
    icon: "🏆",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    desc: "Advanced strategy, financial projections, funding partner resources, vendor center, and done-with-you guidance.",
  },
  {
    icon: "👑",
    tier: "Legacy Founder — $1,899",
    color: "#FF8A00",
    desc: "Lifetime access. Everything in Elite + Command Center, Voice Agent, Website Builder, and Founder recognition.",
  },
];

  return (
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* ── LEFT: Value-prop panel (hidden on mobile) ── */}
        <div className="hidden lg:flex lg:w-[480px] xl:w-[520px] shrink-0 flex-col justify-between px-10 py-16 border-r border-[#1A2235] relative overflow-hidden">
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #D4A017 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #1E88E5 0%, transparent 70%)", filter: "blur(60px)" }} />
          </div>

          <div className="relative">
            {/* Brand */}
            <Link to="/" className="mb-10 flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.4)" }}>
                <span className="text-lg select-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.<br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              Start free. Get a real 90-day plan for your idea. No fluff, no generic advice — actual steps built around your business.
            </p>

            {/* Tier cards */}
            <div className="space-y-4">
              {TIER_CARDS.map((t) => (
                <div key={t.tier} className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{ background: `${t.color}18`, border: `1px solid ${t.color}40` }}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white mb-0.5">{t.tier}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="relative text-xs text-slate-600 mt-8">
            PEN2PRO RMIE — Rapid Monetization Intelligence Engine
          </p>
        </div>

        {/* ── RIGHT: Auth form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">
            {/* Mobile brand header */}
            <div className="lg:hidden text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                  <span className="text-lg">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span className="text-white">PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400">Build your business roadmap. Save your blueprint. Upgrade when ready.</p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
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
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    No account?{" "}
                    <button type="button" onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold" style={{ color: "#D4A017" }}>
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
                  <button type="submit" disabled={loading} className="btn-gold w-full py-3 text-sm font-bold">
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
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

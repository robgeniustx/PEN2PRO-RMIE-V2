import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_FEATURES = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    desc: "AI business blueprint, brand name ideas, startup checklist, and launch preview.",
  },
  {
    icon: "⚡",
    tier: "Pro — $249/mo",
    desc: "Full roadmap, 7/30/90-day plan, branding support, PDF export, credit readiness.",
  },
  {
    icon: "🏆",
    tier: "Elite — $499/mo",
    desc: "Advanced strategy, financial projections, vendor resources, and priority support.",
  },
  {
    icon: "♾️",
    tier: "Legacy Founder — $1,899",
    desc: "Lifetime access, every feature we ever ship, and founder recognition for life.",
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

        {/* ── Left panel (desktop only) ── */}
        <div
          className="hidden lg:flex lg:w-[460px] xl:w-[520px] shrink-0 flex-col justify-between border-r border-[#1A2D50] px-10 py-14"
          style={{ background: "linear-gradient(160deg, #0A0F1E 0%, #0D1528 100%)" }}
        >
          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
              >
                <span className="text-lg leading-none select-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl font-black text-white leading-tight mb-4">
              Build your business roadmap.
              <br />
              Save your blueprint.
              <br />
              <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed mb-10">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine — turns your idea into a real business roadmap with monetization strategy, launch steps, and execution support.
            </p>

            {/* Tier cards */}
            <div className="space-y-3">
              {TIER_FEATURES.map((item) => (
                <div key={item.tier} className="flex gap-3 rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4">
                  <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.tier}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder quote */}
          <blockquote className="mt-10 border-l-4 border-[#FF8A00] pl-4">
            <p className="text-sm text-slate-300 italic leading-relaxed">
              "Built by someone who needed it and couldn't find it. Now here to give you the roadmap I had to build myself."
            </p>
            <footer className="mt-2 text-xs font-bold" style={{ color: "#FF8A00" }}>
              — Robert Green, Founder · PEN2PRO
            </footer>
          </blockquote>
        </div>

        {/* ── Right panel — Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile-only header */}
            <div className="text-center mb-8 lg:hidden">
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

            {/* Desktop header */}
            <div className="hidden lg:block mb-8">
              <h2 className="font-display text-2xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your free business roadmap"}
              </p>
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
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
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:opacity-80 transition-opacity"
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
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition-opacity" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Free roadmap CTA below form */}
            <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">No account? Start anyway.</p>
                <p className="text-xs text-slate-500 mt-0.5">Free roadmap — no sign-up required.</p>
              </div>
              <Link
                to="/starter"
                className="shrink-0 rounded-xl px-4 py-2.5 text-sm font-black text-[#0A0F1E] btn-gold whitespace-nowrap"
              >
                Try Free →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

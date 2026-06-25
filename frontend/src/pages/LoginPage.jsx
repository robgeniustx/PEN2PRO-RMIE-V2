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
      icon: "🚀",
      title: "Free Roadmap",
      desc: "Starter blueprint, 7-day action plan, and business foundation checklist — free, no credit card.",
      color: "#64748B",
    },
    {
      icon: "⚡",
      title: "Pro Strategy Tools",
      desc: "Full RMIE blueprint, branding support, outreach strategy, credit readiness, and PDF export.",
      color: "#2d9cff",
    },
    {
      icon: "🏆",
      title: "Elite Execution Support",
      desc: "Financial projections, legal foundation, vendor & funding resource center, automation, and priority support.",
      color: "#d4af37",
    },
    {
      icon: "♾️",
      title: "Legacy Founder Access",
      desc: "Lifetime platform access — every feature, forever, at one price. Only 200 spots.",
      color: "#FF8A00",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl lg:grid-cols-2">

        {/* ── Left Panel: Brand + Tier Benefits ── */}
        <div
          className="hidden flex-col justify-between px-12 py-16 lg:flex"
          style={{ background: "linear-gradient(160deg, #0D1526 0%, #080C14 100%)", borderRight: "1px solid #1A2235" }}
        >
          {/* Brand */}
          <div>
            <Link to="/" className="mb-12 flex items-center gap-3 group">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span className="text-white">PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.<br />
              <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
            </h2>
            <p className="mb-10 text-slate-400 leading-relaxed">
              Upgrade when ready. Start free — no credit card required.
            </p>

            {/* Tier Cards */}
            <div className="space-y-3">
              {TIER_CARDS.map((tier) => (
                <div
                  key={tier.title}
                  className="flex items-start gap-4 rounded-xl border border-[#1A2235] p-4 transition-colors hover:border-[#1A2D50]"
                  style={{ background: "#0F1520" }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-lg"
                    style={{ background: tier.color + "18", border: `1px solid ${tier.color}30` }}
                  >
                    {tier.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ color: tier.color }}>{tier.title}</p>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trust signal */}
          <div className="mt-10 rounded-xl border border-[#1A2235] p-4" style={{ background: "#0F1520" }}>
            <p className="text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-400">Built by Robert Green</span> — veteran, entrepreneur, mentor, and founder of PEN2PRO. Created for people who have been counted out but refuse to stay stuck.
            </p>
          </div>
        </div>

        {/* ── Right Panel: Form ── */}
        <div className="flex items-center justify-center px-6 py-16">
          <div className="w-full max-w-md">

            {/* Mobile-only brand */}
            <div className="mb-8 text-center lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
                >
                  <span className="text-base">⚡</span>
                </div>
                <span className="font-display text-xl font-black">
                  <span className="text-white">PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-8 text-center lg:text-left">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
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
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
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
                      <label className="text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
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
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                </form>
              )}

              {/* Register Form */}
              {tab === "register" && (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Full name</label>
                    <input
                      type="text"
                      required
                      value={registerForm.name}
                      onChange={e => setRegisterForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Email address</label>
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
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Password</label>
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
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-slate-400">Confirm password</label>
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
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-600">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Footer links */}
              <div className="mt-5 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold transition-colors hover:opacity-80" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Tier quick-links — mobile only */}
            <div className="mt-6 grid grid-cols-2 gap-2 lg:hidden">
              {[
                { label: "Free Roadmap", path: "/starter" },
                { label: "Pro Plan", path: "/pro" },
                { label: "Elite Plan", path: "/elite" },
                { label: "Legacy Founder", path: "/founders" },
              ].map((t) => (
                <Link
                  key={t.path}
                  to={t.path}
                  className="rounded-lg border border-[#1A2235] px-3 py-2 text-center text-xs font-semibold text-slate-500 hover:text-white hover:border-[#1A2D50] transition-colors"
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

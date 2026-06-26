import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_FEATURES = [
  {
    icon: "🗺️",
    tier: "Free Roadmap",
    color: "#64748B",
    desc: "1 AI business blueprint — idea to 7-day action plan, startup checklist, and branding direction. No credit card.",
  },
  {
    icon: "⚡",
    tier: "Pro — $249/mo",
    color: "#D4A017",
    desc: "Unlimited roadmaps, full 90-day execution plan, sales scripts, credit readiness checklist, PDF export, AI refinement.",
  },
  {
    icon: "🏆",
    tier: "Elite — $499/mo",
    color: "#00C9B1",
    desc: "Everything in Pro plus financial projections, funding partner resources, vendor & credit center, done-with-you strategy.",
  },
  {
    icon: "👑",
    tier: "Legacy Founder — $1,899",
    color: "#D4A017",
    desc: "Lifetime access, P2P Command Center, AI Voice Agent, Website Builder, and 12-month 10M strategist framework.",
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

      <div className="mx-auto max-w-6xl px-5 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* ── Left: Features Panel ── */}
          <div className="hidden lg:block">
            {/* Brand */}
            <div className="mb-2 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}
              >
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-black leading-tight text-white md:text-4xl">
              Build your business roadmap.<br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span><br />
              Upgrade when ready.
            </h2>

            <p className="mt-4 text-slate-400 leading-7">
              PEN2PRO gives you a real business roadmap — not motivation, not generic advice. Start free. Build your foundation. Upgrade when you're ready to go all in.
            </p>

            {/* Tier Cards */}
            <div className="mt-8 space-y-3">
              {TIER_FEATURES.map((t) => (
                <div
                  key={t.tier}
                  className="rounded-2xl border border-[#1A2D50] p-4 transition-colors hover:border-[#2A3D60]"
                  style={{ background: "#0F1520" }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">{t.icon}</span>
                    <div>
                      <p className="text-sm font-black" style={{ color: t.color }}>{t.tier}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-600">
              <span>🔐 Secure login</span>
              <span>•</span>
              <span>📧 No spam</span>
              <span>•</span>
              <span>✅ Free to start</span>
              <span>•</span>
              <span>🚀 Dashboard access instantly</span>
            </div>
          </div>

          {/* ── Right: Auth Form ── */}
          <div className="w-full">
            {/* Mobile brand header */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-2xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Build your business roadmap. Save your blueprint. Upgrade when ready.
              </p>
            </div>

            {/* Desktop form header */}
            <div className="mb-6 hidden lg:block">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Sign in to your account" : "Create your free account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Access your roadmap, dashboard, and business tools."
                  : "Start building your business roadmap in under 5 minutes."}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="mb-6 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
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

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
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
                      <Link to="/waitlist" className="text-xs font-semibold text-slate-500 hover:text-[#D4A017] transition-colors">
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
                    className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>

                  <div className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold"
                      style={{ color: "#D4A017" }}
                    >
                      Create one free
                    </button>
                  </div>
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
                    className="btn-gold w-full rounded-xl py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>.
                  </p>

                  <div className="text-center text-sm text-slate-500">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("login"); setError(""); }}
                      className="font-semibold"
                      style={{ color: "#D4A017" }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Bottom links */}
            <div className="mt-6 text-center text-sm text-slate-500">
              Not ready yet?{" "}
              <Link to="/waitlist" className="font-semibold transition-colors" style={{ color: "#D4A017" }}>
                Join the waitlist
              </Link>
              {" · "}
              <Link to="/starter" className="font-semibold transition-colors hover:text-white">
                Try free roadmap
              </Link>
            </div>

            {/* Mobile tier summary */}
            <div className="mt-8 rounded-2xl border border-[#1A2235] p-5 lg:hidden" style={{ background: "#0F1520" }}>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500">What you get</p>
              <div className="space-y-2">
                {TIER_FEATURES.map((t) => (
                  <div key={t.tier} className="flex items-center gap-2">
                    <span className="text-base">{t.icon}</span>
                    <span className="text-xs font-semibold" style={{ color: t.color }}>{t.tier}</span>
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

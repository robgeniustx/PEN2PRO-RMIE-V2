import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    tier: "Free",
    icon: "🗺️",
    color: "#1E88E5",
    desc: "Start with a real business roadmap — free forever. Describe your idea, get a blueprint.",
  },
  {
    tier: "Pro",
    icon: "📊",
    color: "#FF8A00",
    desc: "Full roadmap, branding, outreach strategy, credit readiness, export, and 90-day launch plan.",
  },
  {
    tier: "Elite",
    icon: "🔥",
    color: "#FF8A00",
    desc: "Advanced strategy, financial projections, funding resources, company formation, sales scripts.",
  },
  {
    tier: "Legacy Founder",
    icon: "👑",
    color: "#FFC107",
    desc: "Lifetime access. Everything unlocked. Founding pricing locked forever. Limited spots.",
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
    <div className="min-h-screen bg-[#080C14]">
      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        {/* ── Left panel (desktop only) ── */}
        <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0A0F1E 0%, #0D1528 60%, #0A1525 100%)" }}>

          {/* Radiant background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(30,136,229,0.2) 0%, transparent 65%)", filter: "blur(40px)" }} />
            <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,138,0,0.15) 0%, transparent 65%)", filter: "blur(40px)" }} />
          </div>

          <div className="relative z-10 p-12">
            {/* Brand */}
            <div className="mb-10 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            {/* Headline */}
            <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #1E88E5, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
            </h2>
            <p className="mb-10 text-slate-400 text-sm leading-relaxed">
              Sign in to access your PEN2PRO dashboard. Upgrade anytime — your work is always saved.
            </p>

            {/* Tier benefits */}
            <div className="space-y-4">
              {TIER_BENEFITS.map((t) => (
                <div key={t.tier} className="flex items-start gap-4 rounded-xl border border-[#1A2D50] bg-[#0A0F1E]/60 p-4 backdrop-blur">
                  <div className="shrink-0 text-2xl">{t.icon}</div>
                  <div>
                    <p className="mb-0.5 text-sm font-black" style={{ color: t.color }}>{t.tier}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer quote */}
          <div className="relative z-10 border-t border-[#1A2D50] p-8">
            <blockquote className="text-sm text-slate-400 italic leading-relaxed">
              "This is not just software. This is a second-chance engine — for people ready to stop waiting for permission."
            </blockquote>
            <p className="mt-2 text-xs text-slate-500 font-semibold">— Robert Earl Green Jr., Founder of PEN2PRO</p>
          </div>
        </div>

        {/* ── Right panel — form ── */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile brand */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </h1>
              <p className="mt-1 text-sm text-slate-400">Build your business roadmap. Save your blueprint.</p>
            </div>

            {/* Desktop heading */}
            <div className="mb-8 hidden lg:block">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today — free"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] bg-[#0F1520] p-8">
              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                    tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-bold transition-all ${
                    tab === "register" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button type="button" className="text-xs text-[#FF8A00] hover:underline">Forgot password?</button>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#1E88E5] focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Divider */}
              <div className="my-5 flex items-center gap-3">
                <div className="flex-1 border-t border-[#1A2235]" />
                <span className="text-xs text-slate-600">or</span>
                <div className="flex-1 border-t border-[#1A2235]" />
              </div>

              {/* Waitlist link */}
              <Link
                to="/waitlist"
                className="block w-full rounded-xl border border-[#1A2235] py-3 text-center text-sm font-semibold text-slate-400 hover:border-[#FF8A00]/40 hover:text-white transition-colors"
              >
                Not ready yet? Join the Waitlist
              </Link>
            </div>

            {/* Mobile tier summary */}
            <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
              {TIER_BENEFITS.map((t) => (
                <div key={t.tier} className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-3">
                  <p className="mb-0.5 text-xs font-black" style={{ color: t.color }}>
                    {t.icon} {t.tier}
                  </p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

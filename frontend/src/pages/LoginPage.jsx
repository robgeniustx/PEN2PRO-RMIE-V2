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
      label: "Free Roadmap",
      color: "#94a3b8",
      borderColor: "#1A2235",
      icon: "🗺️",
      desc: "Start with a free AI business blueprint — 7-day action plan, startup checklist, and brand direction.",
    },
    {
      label: "Pro — $249/mo",
      color: "#2d9cff",
      borderColor: "#2d9cff",
      icon: "📊",
      desc: "Full roadmap, 90-day plan, credit & funding readiness, outreach strategy, PDF export, and AI refinement.",
    },
    {
      label: "Elite — $499/mo",
      color: "#00C9B1",
      borderColor: "#00C9B1",
      icon: "🏆",
      desc: "Everything in Pro plus done-with-you guidance, financial projections, vendor & funding resources, and priority support.",
    },
    {
      label: "Legacy Founder — $1,899",
      color: "#D4A017",
      borderColor: "#D4A017",
      icon: "⚡",
      desc: "Lifetime access, all features, Founders recognition, early-adopter pricing, and full platform access for life.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-stretch px-4 py-12 lg:flex-row lg:items-start lg:gap-12">

        {/* ── LEFT PANEL — tier info ── */}
        <div className="mb-10 flex-1 lg:mb-0 lg:sticky lg:top-24">
          {/* Brand */}
          <div className="mb-8 flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl shrink-0"
              style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 16px rgba(30,136,229,0.35)" }}
            >
              ⚡
            </div>
            <span className="font-display text-2xl font-black tracking-tight">
              <span className="text-white">PEN</span>
              <span style={{ color: "#FF8A00" }}>2</span>
              <span style={{ color: "#1E88E5" }}>PRO</span>
            </span>
          </div>

          <h1 className="mb-3 font-display text-3xl font-black leading-tight text-white md:text-4xl">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
            <br />
            Upgrade when ready.
          </h1>
          <p className="mb-8 text-slate-400 leading-relaxed">
            One account. Every tool you need to go from idea to income — free to start, no credit card required.
          </p>

          <div className="space-y-3">
            {TIER_CARDS.map((t) => (
              <div
                key={t.label}
                className="flex items-start gap-4 rounded-2xl border p-4 transition-colors"
                style={{ borderColor: t.borderColor + "33", background: "#0F1520" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl"
                  style={{ background: t.borderColor + "18", border: `1px solid ${t.borderColor}33` }}
                >
                  {t.icon}
                </div>
                <div>
                  <p className="mb-1 text-sm font-black" style={{ color: t.color }}>{t.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL — auth form ── */}
        <div className="w-full lg:max-w-md lg:shrink-0">
          {/* Card */}
          <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
            <h2 className="mb-1 font-display text-2xl font-bold text-white">
              {tab === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mb-7 text-sm text-slate-500">
              {tab === "login"
                ? "Sign in to access your PEN2PRO dashboard"
                : "Start building your business roadmap today — it's free"}
            </p>

            {/* Tabs */}
            <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
              <button
                onClick={() => { setTab("login"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "login" ? "btn-gold text-[#080C14]" : "text-slate-400 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setTab("register"); setError(""); }}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
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
                    className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                  />
                </div>
                <div>
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <Link to="/waitlist" className="text-xs font-semibold" style={{ color: "#D4A017" }}>
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
                  <button type="button" onClick={() => { setTab("register"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
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
              </form>
            )}

            {/* Waitlist link */}
            <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
              Not ready to sign up?{" "}
              <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                Join the waitlist instead
              </Link>
            </div>
          </div>

          {/* Trust line */}
          <p className="mt-4 text-center text-xs text-slate-600">
            Free forever plan available · No credit card required · Cancel paid plans anytime
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

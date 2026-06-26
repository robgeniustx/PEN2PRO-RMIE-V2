import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_HIGHLIGHTS = [
  {
    tier: "Free",
    color: "#94A3B8",
    icon: "🗺️",
    headline: "Free Roadmap",
    desc: "Start your first AI business blueprint — no credit card needed.",
  },
  {
    tier: "Pro",
    color: "#FF8A00",
    icon: "📊",
    headline: "Pro Strategy Tools",
    desc: "Full 90-day plans, outreach scripts, credit readiness, and export.",
  },
  {
    tier: "Elite",
    color: "#1E88E5",
    icon: "🚀",
    headline: "Elite Execution Support",
    desc: "Financial projections, vendor integrations, and done-with-you guidance.",
  },
  {
    tier: "Founders",
    color: "#FFC107",
    icon: "👑",
    headline: "Legacy Founder Access",
    desc: "Lifetime access, Command Center, Voice Agent, and Founder recognition.",
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

      <div className="flex min-h-[calc(100vh-80px)] items-stretch">

        {/* ── Left: Auth Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-16">
          <div className="w-full max-w-md">

            {/* Brand */}
            <div className="mb-8 text-center">
              <Link to="/" className="inline-flex items-center gap-2.5 mb-5 group">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.4)" }}
                >
                  <span className="text-xl leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight leading-none">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>

              <h1 className="font-display text-2xl font-bold text-white leading-tight">
                Build your business roadmap.<br />
                <span style={{ color: "#FF8A00" }}>Save your blueprint.</span><br />
                Upgrade when ready.
              </h1>
              <p className="mt-3 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Create your free account — no credit card required"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
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
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button
                        type="button"
                        onClick={() => alert("Password reset coming soon. Contact support@pen2pro.com")}
                        className="text-xs font-medium transition-colors hover:text-white"
                        style={{ color: "#FF8A00" }}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Signing in…" : "Sign In"}
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
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
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
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
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
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
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
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full rounded-xl py-3 text-sm font-bold"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? "Creating account…" : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:underline" style={{ color: "#FF8A00" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Trust line */}
            <p className="mt-5 text-center text-xs text-slate-600">
              Free forever • No credit card required • Cancel anytime
            </p>
          </div>
        </div>

        {/* ── Right: Plan Highlights Panel (hidden on mobile) ── */}
        <div
          className="hidden lg:flex w-[420px] shrink-0 flex-col justify-center px-10 py-16 border-l border-[#1A2235]"
          style={{ background: "linear-gradient(160deg, #0D1528 0%, #080C14 100%)" }}
        >
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">What you get with PEN2PRO</p>
            <h2 className="font-display text-2xl font-black text-white leading-snug">
              One platform.<br />Every stage of your business.
            </h2>
          </div>

          <div className="space-y-4">
            {PLAN_HIGHLIGHTS.map((p) => (
              <div
                key={p.tier}
                className="flex items-start gap-4 rounded-xl border p-4"
                style={{ borderColor: p.color + "33", background: p.color + "0A" }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ background: p.color + "1A", border: `1px solid ${p.color}44` }}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: p.color }}>{p.headline}</p>
                  <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-[#FF8A00]/20 bg-[#FF8A00]/05 p-5">
            <p className="text-xs font-bold text-[#FF8A00] uppercase tracking-widest mb-2">Built by Robert Green</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              "I built PEN2PRO for people who have been counted out. If you have an idea, a skill, or a dream — this platform gives you the structure to make it real."
            </p>
            <Link
              to="/about"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#FF8A00] hover:underline"
            >
              Read the story →
            </Link>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

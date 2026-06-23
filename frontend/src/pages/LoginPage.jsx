import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    label: "Free Roadmap",
    color: "#059669",
    icon: "🗺️",
    desc: "Start today — get your first AI business blueprint with no credit card required.",
  },
  {
    label: "Pro — $249/mo",
    color: "#2d9cff",
    icon: "📊",
    desc: "Full blueprint, branding support, PDF export, credit checklist, outreach scripts.",
  },
  {
    label: "Elite — $499/mo",
    color: "#00C9B1",
    icon: "🧠",
    desc: "Advanced strategist guidance, financial projections, done-with-you execution.",
  },
  {
    label: "Legacy Founder — $1,899",
    color: "#D4A017",
    icon: "♾️",
    desc: "Lifetime access, all features, P2P Command Center, AI Voice Agent, and first access forever.",
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

      <div className="flex min-h-[calc(100vh-80px)]">

        {/* ── LEFT PANEL — Value Proposition ── */}
        <div
          className="hidden lg:flex lg:w-[44%] flex-col justify-between px-12 py-14 relative overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #0D1528 0%, #0A0F1E 50%, #080C14 100%)",
            borderRight: "1px solid #1A2D50",
          }}
        >
          {/* Background orbs */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(30,136,229,0.15) 0%, transparent 65%)", filter: "blur(60px)" }}
            />
            <div
              className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,138,0,0.10) 0%, transparent 65%)", filter: "blur(60px)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Logo + tagline */}
          <div className="relative">
            <Link to="/" className="inline-flex items-center gap-3 mb-8 group">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 22px rgba(30,136,229,0.4)" }}
              >
                <span className="text-xl leading-none">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight leading-none">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </Link>

            <h2 className="font-display text-3xl font-black text-white leading-tight mb-3">
              Build your business roadmap.
              <br />
              <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />
              Upgrade when ready.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine. Built for entrepreneurs, veterans, returning citizens, and working-class builders.
            </p>
          </div>

          {/* Tier benefit cards */}
          <div className="relative space-y-3 my-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">What you get access to</p>
            {TIER_BENEFITS.map((tier) => (
              <div
                key={tier.label}
                className="flex items-start gap-3 rounded-xl border p-4 transition-colors"
                style={{ borderColor: `${tier.color}25`, background: `${tier.color}08` }}
              >
                <span className="text-xl shrink-0 mt-0.5">{tier.icon}</span>
                <div>
                  <p className="text-sm font-black" style={{ color: tier.color }}>{tier.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust line */}
          <div className="relative">
            <div className="flex items-center gap-3 rounded-xl border border-[#1A2D50] bg-[#0D1528] p-4">
              <div className="flex -space-x-2">
                {["#FF8A00", "#2d9cff", "#00C9B1", "#D4A017"].map((c, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-[#0D1528] flex items-center justify-center text-xs font-black text-white"
                    style={{ background: c, zIndex: 4 - i }}
                  >
                    {["R", "M", "D", "J"][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-white">2,847+ entrepreneurs</p>
                <p className="text-xs text-slate-500">already building with PEN2PRO</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL — Form ── */}
        <div className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="lg:hidden text-center mb-8">
              <Link to="/" className="inline-flex items-center gap-2.5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}
                >
                  <span className="text-lg leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight leading-none">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
            </div>

            {/* Header */}
            <div className="mb-8">
              <h1 className="font-display text-3xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your free business roadmap today"}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
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
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
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
                    className="btn-gold w-full py-3.5 text-sm font-black disabled:opacity-60 transition"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-slate-400 hover:text-[#D4A017]">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-slate-400 hover:text-[#D4A017]">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Switch mode link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                {tab === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button onClick={() => { setTab("register"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
                      Create one free
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => { setTab("login"); setError(""); }} className="font-semibold" style={{ color: "#D4A017" }}>
                      Sign in
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Free roadmap CTA */}
            <div className="mt-5 text-center">
              <p className="text-xs text-slate-600">
                Not ready to create an account?{" "}
                <Link to="/starter" className="text-slate-400 hover:text-white transition-colors">
                  Try the free roadmap first →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

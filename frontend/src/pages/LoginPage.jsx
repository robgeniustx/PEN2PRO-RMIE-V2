import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_VALUE_PROPS = [
  {
    icon: "⚡",
    label: "Free Roadmap",
    color: "#D4A017",
    desc: "Start your business blueprint at no cost. Get a 7-day plan, revenue model, and startup checklist.",
  },
  {
    icon: "📈",
    label: "Pro Strategy",
    color: "#1E88E5",
    desc: "Full roadmap access, progress tracking, branding support, email/PDF export, and stronger AI refinement.",
  },
  {
    icon: "🏆",
    label: "Elite Execution",
    color: "#7C3AED",
    desc: "Advanced guidance, financial projections, funding readiness, vendor resources, and priority support.",
  },
  {
    icon: "👑",
    label: "Legacy Founder",
    color: "#FF8A00",
    desc: "Lifetime access, founder recognition, full platform when launched, and early-adopter positioning.",
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

      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
        <div className="absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.14) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-16">
        <div className="w-full max-w-5xl">

          {/* Top headline */}
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
              ⚡ PEN2PRO RMIE
            </div>
            <h1 className="font-display text-3xl font-black text-white md:text-4xl">
              Build your business roadmap.{" "}
              <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint. Upgrade when ready.
              </span>
            </h1>
            <p className="mt-3 text-slate-400">
              Start free. No credit card required.
            </p>
          </div>

          {/* 2-column layout */}
          <div className="grid gap-8 lg:grid-cols-2">

            {/* LEFT — value props */}
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#1E88E5]">What you get</p>
              {TIER_VALUE_PROPS.map((t) => (
                <div key={t.label}
                  className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5 transition-colors hover:border-[#1E88E5]/40">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                    style={{ background: `${t.color}22`, border: `1.5px solid ${t.color}44` }}>
                    {t.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white" style={{ color: t.color }}>{t.label}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-400">{t.desc}</p>
                  </div>
                </div>
              ))}
              <p className="pt-2 text-center text-sm text-slate-500">
                Already know what you want?{" "}
                <Link to="/pricing" className="font-semibold text-[#D4A017] hover:underline">View all plans →</Link>
              </p>
            </div>

            {/* RIGHT — auth form */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Logo */}
              <div className="mb-6 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl gradient-gold text-lg font-black text-[#080C14]">
                  P2
                </div>
                <h2 className="font-display text-xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login"
                    ? "Sign in to access your PEN2PRO dashboard"
                    : "Start building your business roadmap today"}
                </p>
              </div>

              {/* Tabs */}
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
                      <span className="text-xs text-slate-500 cursor-not-allowed select-none" title="Coming soon">Forgot password?</span>
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
                    {loading ? "Signing in..." : "Sign In →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold text-[#D4A017] hover:underline">
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
                      placeholder="Your full name"
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
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span className="text-slate-400">Terms of Service</span> and{" "}
                    <span className="text-slate-400">Privacy Policy</span>.
                  </p>
                </form>
              )}

              <div className="mt-5 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold text-[#D4A017] hover:underline">
                  Join the waitlist →
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

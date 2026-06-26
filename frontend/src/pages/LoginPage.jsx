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

  const TIER_BENEFITS = [
    {
      icon: "🗺️",
      tier: "Free Roadmap",
      color: "#1E88E5",
      desc: "Start instantly. Get a real AI-generated business roadmap with a 7-day action plan, LLC checklist, and brand name ideas — no credit card required.",
    },
    {
      icon: "⚡",
      tier: "Pro — $249/mo",
      color: "#D4A017",
      desc: "Full RMIE blueprint, credit & funding readiness, branding support, PDF export, sales scripts, and advanced AI refinement.",
    },
    {
      icon: "🚀",
      tier: "Elite — $499/mo",
      color: "#00C9B1",
      desc: "Everything in Pro plus financial projections, legal foundation, done-with-you strategy, vendor & funding resource center, and priority support.",
    },
    {
      icon: "♾️",
      tier: "Legacy Founders — $1,899 lifetime",
      color: "#FF8A00",
      desc: "One payment, lifetime access. Full platform, Command Center, AI Voice Agent, Website Builder, and the 12-month 10M strategist framework.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-16">
        <div className="w-full max-w-5xl">

          {/* Top headline */}
          <div className="mb-8 text-center">
            <h1 className="font-display text-2xl font-black text-white md:text-3xl">
              Build your business roadmap.{" "}
              <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>{" "}
              Upgrade when ready.
            </h1>
            <p className="mt-2 text-sm text-slate-400">No credit card required to start. Free roadmap in under 5 minutes.</p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">

            {/* LEFT — Tier benefits panel */}
            <div className="w-full lg:w-[42%] shrink-0">
              <div className="rounded-2xl border border-[#1A2235] p-6" style={{ background: "#0F1520" }}>
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-slate-400">What's inside PEN2PRO</p>
                <div className="space-y-4">
                  {TIER_BENEFITS.map((t) => (
                    <div key={t.tier} className="flex gap-3">
                      <div
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-base"
                        style={{ background: t.color + "22", border: `1px solid ${t.color}44` }}
                      >
                        {t.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold" style={{ color: t.color }}>{t.tier}</p>
                        <p className="mt-0.5 text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-xs text-slate-500">
                  <span className="font-semibold text-[#D4A017]">PEN2PRO RMIE</span> — Rapid Monetization Intelligence Engine. Built for entrepreneurs, veterans, returning citizens, and anyone serious about turning ideas into income.
                </div>
              </div>
            </div>

            {/* RIGHT — Auth card */}
            <div className="w-full lg:flex-1">
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
                      <label className="mb-1.5 block text-sm font-medium text-slate-300">Password</label>
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
                    <p className="text-center text-xs text-slate-500">
                      No account yet?{" "}
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
                  Not ready to sign up yet?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
              </div>

              {/* Free roadmap CTA below card */}
              <div className="mt-4 rounded-xl border border-[#1A2235] bg-[#0F1520] px-5 py-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold text-white">Try PEN2PRO free first</p>
                  <p className="text-xs text-slate-500">No account needed — get your business roadmap in 5 minutes</p>
                </div>
                <Link to="/starter" className="shrink-0 rounded-xl px-5 py-2.5 text-xs font-black text-[#0A0F1E] btn-gold whitespace-nowrap">
                  Start Free →
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

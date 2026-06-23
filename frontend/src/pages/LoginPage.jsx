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

  const TIERS = [
    { color: "#6B7280", label: "Free Roadmap", desc: "Start free — get your first AI business roadmap, brand name ideas, and LLC checklist.", href: "/starter" },
    { color: "#D4A017", label: "Pro — $249/mo", desc: "Full 90-day execution plan, sales scripts, credit checklist, PDF export, and AI refinement.", href: "/pro" },
    { color: "#00C9B1", label: "Elite — $499/mo", desc: "Financial projections, funding partner access, done-with-you strategy, and white-glove guidance.", href: "/elite" },
    { color: "#FF8A00", label: "Founders Lifetime", desc: "One-time access to everything. P2P Command Center, AI Voice Agent, Website Builder — for life.", href: "/founders" },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-16">
        <div className="w-full max-w-5xl">
          {/* Two-column layout */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">

            {/* LEFT PANEL — tier value prop */}
            <div className="hidden lg:block">
              <div className="mb-8">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-gold text-sm font-black text-[#080C14]">P2P</div>
                  <span className="font-display text-2xl font-black text-white">PEN2PRO</span>
                </div>
                <h2 className="font-display text-3xl font-black text-white leading-tight">
                  Build your business roadmap.<br />
                  <span className="gradient-text">Save your blueprint. Upgrade when ready.</span>
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Sign in to access your dashboard, save your AI roadmaps, and unlock Pro strategy tools — or create a free account in 60 seconds.
                </p>
              </div>

              <div className="space-y-4">
                {TIERS.map((t) => (
                  <Link key={t.label} to={t.href} className="flex items-start gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4 hover:border-opacity-60 transition-all group" style={{ borderColor: t.color + "30" }}>
                    <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg flex items-center justify-center text-xs font-black" style={{ background: t.color + "20", color: t.color }}>→</div>
                    <div>
                      <p className="text-sm font-bold text-white">{t.label}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{t.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <p className="mt-6 text-xs text-slate-600">
                PEN2PRO RMIE — Rapid Monetization Intelligence Engine. Built for entrepreneurs who are serious about execution.
              </p>
            </div>

            {/* RIGHT PANEL — auth form */}
            <div>
              {/* Mobile brand header */}
              <div className="lg:hidden text-center mb-8">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                  P2P
                </div>
                <h1 className="font-display text-2xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="mt-2 text-sm text-slate-400">
                  {tab === "login" ? "Build your business roadmap. Save your blueprint." : "Start building your business roadmap today — free."}
                </p>
              </div>

              {/* Desktop form header */}
              <div className="hidden lg:block mb-6">
                <h1 className="font-display text-2xl font-bold text-white">
                  {tab === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  {tab === "login" ? "Sign in to your PEN2PRO dashboard" : "Free to start — no credit card required"}
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
                        className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                      />
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center justify-between">
                        <label className="text-sm font-medium text-slate-300">Password</label>
                        <span className="text-xs text-slate-600">Forgot password? Contact support</span>
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
                <div className="mt-6 text-center text-sm text-slate-500">
                  Not ready to sign up yet?{" "}
                  <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                    Join the waitlist
                  </Link>
                </div>
              </div>

              {/* Mobile tier cards */}
              <div className="lg:hidden mt-8 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-4">What's included</p>
                {TIERS.map((t) => (
                  <Link key={t.label} to={t.href} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-3 hover:border-yellow-500/20 transition-all">
                    <div className="mt-0.5 h-6 w-6 shrink-0 rounded-md flex items-center justify-center text-xs font-black" style={{ background: t.color + "20", color: t.color }}>→</div>
                    <div>
                      <p className="text-xs font-bold text-white">{t.label}</p>
                      <p className="mt-0.5 text-[11px] leading-4 text-slate-600">{t.desc}</p>
                    </div>
                  </Link>
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

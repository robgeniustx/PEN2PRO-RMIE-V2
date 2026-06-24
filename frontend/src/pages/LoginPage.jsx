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
      badge: "Free",
      color: "#64748b",
      title: "Free Roadmap",
      desc: "AI business blueprint, startup checklist, brand name ideas, and LLC setup guide. No credit card.",
    },
    {
      badge: "Pro",
      color: "#2d9cff",
      title: "Pro Strategy Tools",
      desc: "Full 90-day execution plan, sales scripts, credit & funding readiness, PDF export, and AI refinement.",
    },
    {
      badge: "Elite",
      color: "#00C9B1",
      title: "Elite Execution Support",
      desc: "Financial projections, done-with-you guidance, vendor & funding resource center, priority support.",
    },
    {
      badge: "Founders",
      color: "#D4A017",
      title: "Legacy Founder Access",
      desc: "Lifetime access. Everything in Elite plus P2P Command Center, AI Voice Agent, Website Builder, and 10M framework.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-12">
        <div className="w-full max-w-5xl grid gap-10 md:grid-cols-2 md:items-start">

          {/* ── Left panel: brand + tier benefits ── */}
          <div className="hidden md:flex flex-col justify-center py-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl shrink-0"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <span className="font-display text-2xl font-black tracking-tight">
                <span style={{ color: "#FFFFFF" }}>PEN</span>
                <span style={{ color: "#FF8A00" }}>2</span>
                <span style={{ color: "#1E88E5" }}>PRO</span>
              </span>
            </div>

            <h2 className="font-display text-3xl font-black leading-tight text-white mb-3">
              Build your business roadmap.<br />
              <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Save your blueprint.
              </span>
              <br />Upgrade when ready.
            </h2>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              PEN2PRO RMIE gives every user a free business roadmap. Sign in to save yours, track progress, and unlock Pro and Elite when you're ready to go all in.
            </p>

            <div className="space-y-3">
              {TIER_BENEFITS.map((t) => (
                <div key={t.badge} className="flex items-start gap-4 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                  <span className="mt-0.5 rounded-md px-2 py-0.5 text-[10px] font-black uppercase tracking-widest shrink-0"
                    style={{ background: t.color + "22", color: t.color, border: `1px solid ${t.color}44` }}>
                    {t.badge}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{t.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right panel: auth form ── */}
          <div>
            {/* Mobile brand header */}
            <div className="mb-6 text-center md:hidden">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)" }}>
                <span className="text-lg">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login" ? "Sign in to your PEN2PRO account" : "Start building your business roadmap"}
              </p>
            </div>

            {/* Desktop header */}
            <div className="mb-6 hidden md:block">
              <h1 className="font-display text-2xl font-black text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-1 text-sm text-slate-400">
                {tab === "login" ? "Sign in to access your PEN2PRO dashboard" : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <Link to="/waitlist" className="text-xs font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
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
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setTab("register")} className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                      Create one free →
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
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl"
                  >
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier teaser */}
            <div className="mt-5 md:hidden rounded-xl border border-[#1A2235] bg-[#0F1520] p-4 text-xs text-slate-500 space-y-2">
              <p className="font-bold text-slate-300 text-sm">What you get with PEN2PRO:</p>
              {["Free roadmap — no credit card", "Pro strategy + sales scripts — $249/mo", "Elite execution support — $499/mo", "Founders Lifetime — $1,899 one-time"].map((i) => (
                <p key={i} className="flex items-center gap-2"><span className="text-teal-400 font-bold">✓</span>{i}</p>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

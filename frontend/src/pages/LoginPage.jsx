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

  const inputClass = "w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors";

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />
      <div className="flex min-h-[calc(100vh-80px)] items-start justify-center px-4 py-12 md:py-20">
        <div className="w-full max-w-5xl grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">

          {/* ── Left: value panel ── */}
          <div className="hidden md:block">
            {/* Brand */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}>
                  <span className="text-xl leading-none">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </div>
              <h2 className="font-display text-3xl font-black text-white leading-snug mb-3">
                Build your business roadmap.<br />Save your blueprint.<br />
                <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Upgrade when ready.
                </span>
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Every plan starts free. Your roadmap is always saved. Upgrade to Pro or Elite when you're ready for advanced strategy, funding readiness, and full execution support.
              </p>
            </div>

            {/* Tier cards */}
            <div className="space-y-3">
              {[
                {
                  name: "Free Roadmap",
                  price: "$0",
                  color: "#64748B",
                  icon: "🗺️",
                  features: ["1 AI business blueprint", "Basic roadmap preview", "LLC & EIN checklist", "No credit card required"],
                },
                {
                  name: "Pro",
                  price: "$249/mo",
                  color: "#2d9cff",
                  icon: "⚡",
                  features: ["Full 90-day execution plan", "Credit & funding readiness", "Sales scripts & outreach", "PDF/email export"],
                },
                {
                  name: "Elite",
                  price: "$499/mo",
                  color: "#D4A017",
                  icon: "🏆",
                  features: ["Everything in Pro", "Financial projections", "Done-with-you guidance", "Vendor & funding resources"],
                },
                {
                  name: "Founders Lifetime",
                  price: "$1,899 for life",
                  color: "#FF8A00",
                  icon: "🔥",
                  features: ["Lifetime platform access", "All future features included", "Founder recognition", "200 spots only"],
                },
              ].map((tier) => (
                <div key={tier.name} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg"
                    style={{ background: tier.color + "15", border: `1px solid ${tier.color}30` }}>
                    {tier.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className="text-sm font-bold text-white">{tier.name}</p>
                      <span className="text-xs font-black shrink-0" style={{ color: tier.color }}>{tier.price}</span>
                    </div>
                    <p className="text-xs text-slate-500">{tier.features.slice(0, 2).join(" · ")}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              PEN2PRO RMIE — Rapid Monetization Intelligence Engine. Built by a veteran founder for builders who are serious about execution.
            </p>
          </div>

          {/* ── Right: auth form ── */}
          <div>
            {/* Mobile brand header */}
            <div className="md:hidden text-center mb-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)" }}>
                <span className="text-2xl">⚡</span>
              </div>
              <h1 className="font-display text-2xl font-black text-white mb-1">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-sm text-slate-400">
                Build your business roadmap. Save your blueprint. Upgrade when ready.
              </p>
            </div>

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
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Email address</label>
                    <input
                      type="email"
                      required
                      value={loginForm.email}
                      onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <a href="mailto:support@pen2pro.com?subject=Password Reset Request"
                        className="text-xs font-semibold hover:opacity-80 transition-opacity"
                        style={{ color: "#D4A017" }}>
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type="password"
                      required
                      value={loginForm.password}
                      onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
                      placeholder="••••••••"
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:opacity-80" style={{ color: "#D4A017" }}>
                      Create one free →
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
                      placeholder="Robert Green"
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                  <p className="text-center text-xs text-slate-500">
                    Already have an account?{" "}
                    <button type="button" onClick={() => { setTab("login"); setError(""); }}
                      className="font-semibold hover:opacity-80" style={{ color: "#D4A017" }}>
                      Sign in →
                    </button>
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition-opacity" style={{ color: "#D4A017" }}>
                  Join the waitlist
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

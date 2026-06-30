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

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">

          {/* ── Left Panel: Brand pitch ── */}
          <div className="flex-1 lg:pt-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
              PEN2PRO RMIE Platform
            </p>
            <h1 className="font-display text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
              Build your business roadmap.<br />
              <span style={{ color: "#D4A017" }}>Save your blueprint.</span><br />
              Upgrade when ready.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-400">
              PEN2PRO is the AI-powered Rapid Monetization Intelligence Engine built for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about execution.
            </p>

            {/* Tier showcase */}
            <div className="mt-10 space-y-4">
              {[
                {
                  badge: "FREE",
                  badgeColor: "#64748b",
                  name: "Free Roadmap",
                  desc: "Get a full AI business roadmap — startup costs, 7-day action plan, entity checklist, and brand name ideas. No credit card required.",
                  href: "/starter",
                },
                {
                  badge: "PRO",
                  badgeColor: "#D4A017",
                  name: "Pro — $249/mo",
                  desc: "Unlimited roadmaps, full 90-day execution plan, sales scripts, credit readiness, PDF export, and advanced AI refinement.",
                  href: "/pro",
                },
                {
                  badge: "ELITE",
                  badgeColor: "#00C9B1",
                  name: "Elite — $499/mo",
                  desc: "Everything in Pro plus financial projections, funding resources, done-with-you strategy, vendor & credit center, and priority support.",
                  href: "/elite",
                },
                {
                  badge: "FOUNDERS",
                  badgeColor: "#D4A017",
                  name: "Legacy Founder — $1,899 for life",
                  desc: "One payment, lifetime access. Full platform, P2P Command Center, AI Voice Agent, Website Builder, and 12-month strategist framework.",
                  href: "/founders",
                },
              ].map((t) => (
                <Link
                  key={t.name}
                  to={t.href}
                  className="flex gap-4 rounded-2xl border border-[#1A2235] bg-[#0F1520] p-4 transition-all hover:border-yellow-500/30 hover:bg-[#141C2E]"
                >
                  <div
                    className="mt-0.5 shrink-0 rounded-lg px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#080C14] h-fit"
                    style={{ background: t.badgeColor }}
                  >
                    {t.badge}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{t.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Right Panel: Auth form ── */}
          <div className="w-full lg:w-[440px] shrink-0">
            {/* Logo mark */}
            <div className="mb-6 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-[#080C14]"
                style={{ background: "linear-gradient(135deg, #D4A017, #F5C842)" }}
              >
                ⚡
              </div>
              <div>
                <p className="text-base font-black text-white">
                  <span style={{ color: "#D4A017" }}>PEN</span>2<span style={{ color: "#1E88E5" }}>PRO</span>
                </p>
                <p className="text-xs text-slate-500">Rapid Monetization Intelligence Engine</p>
              </div>
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
                    No account?{" "}
                    <button
                      type="button"
                      onClick={() => { setTab("register"); setError(""); }}
                      className="font-semibold hover:underline"
                      style={{ color: "#D4A017" }}
                    >
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
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-5 flex items-center justify-center gap-6 text-xs text-slate-600">
              <span>✓ Free to start</span>
              <span>✓ No credit card</span>
              <span>✓ Upgrade anytime</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

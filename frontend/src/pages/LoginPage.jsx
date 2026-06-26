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
      name: "Free Roadmap",
      color: "#64748b",
      badge: "Free Forever",
      desc: "1 starter blueprint, brand name ideas, and LLC checklist.",
    },
    {
      name: "Pro — $249/mo",
      color: "#2d9cff",
      badge: "Most Popular",
      desc: "Full 90-day plan, credit readiness, outreach scripts, PDF export, AI refinement.",
    },
    {
      name: "Elite — $499/mo",
      color: "#00C9B1",
      badge: "Best Value",
      desc: "Financial projections, funding partners, done-with-you strategy, priority support.",
    },
    {
      name: "Founders Lifetime — $1,899",
      color: "#D4A017",
      badge: "200 Spots Only",
      desc: "Lifetime access to the full platform — everything included, forever.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#080C14" }}>
      <Navbar />

      <div className="mx-auto flex min-h-[calc(100vh-70px)] max-w-6xl flex-col items-stretch md:flex-row">

        {/* ── LEFT PANEL — Value proposition ── */}
        <div className="hidden md:flex md:w-[45%] flex-col justify-center px-10 py-16 border-r border-[#1A2235]">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{ color: "#D4A017" }}>
            ⚡ PEN2PRO RMIE
          </div>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
            Build your business roadmap.
            <br />
            <span style={{ background: "linear-gradient(90deg,#D4A017,#FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Save your blueprint.
            </span>
          </h2>
          <p className="mb-8 text-sm leading-7 text-slate-400">
            Sign in to access your PEN2PRO dashboard. Free to start — upgrade when you're ready to go all in.
          </p>

          <div className="space-y-3">
            {TIER_BENEFITS.map((t) => (
              <div key={t.name} className="flex items-start gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] p-4">
                <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: t.color, boxShadow: `0 0 8px ${t.color}80` }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wide" style={{ background: `${t.color}20`, color: t.color }}>
                      {t.badge}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-600 leading-relaxed">
            PEN2PRO is a Rapid Monetization Intelligence Engine built for entrepreneurs, veterans, returning citizens, and working-class builders who are serious about execution.
          </p>
        </div>

        {/* ── RIGHT PANEL — Auth form ── */}
        <div className="flex flex-1 flex-col items-center justify-center px-5 py-16 md:px-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-gold text-xl font-black text-[#080C14]">
                P2P
              </div>
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO dashboard"
                  : "Start building your business roadmap today"}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-8" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-8 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register"
                      ? "gradient-gold text-[#080C14]"
                      : "text-slate-400 hover:text-white"
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
                    className="btn-gold w-full py-3 text-sm font-bold"
                  >
                    {loading ? "Signing in..." : "Sign In →"}
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
                    {loading ? "Creating account..." : "Create Account — Free →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              )}

              {/* Waitlist / switch link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                {tab === "login" ? (
                  <>
                    No account yet?{" "}
                    <button onClick={() => { setTab("register"); setError(""); }} className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                      Create one free
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button onClick={() => { setTab("login"); setError(""); }} className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                      Sign in
                    </button>
                  </>
                )}
              </div>

              <div className="mt-3 text-center text-sm text-slate-600">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:opacity-80 transition" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile tier preview */}
            <div className="mt-8 md:hidden space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">What you get</p>
              {TIER_BENEFITS.map((t) => (
                <div key={t.name} className="flex items-center gap-3 rounded-xl border border-[#1A2235] bg-[#0F1520] px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: t.color }} />
                  <p className="text-xs font-semibold text-slate-300">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

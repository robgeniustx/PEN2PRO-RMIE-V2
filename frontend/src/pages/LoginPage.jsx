import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const TIER_BENEFITS = [
  {
    badge: "FREE",
    badgeColor: "#00C9B1",
    name: "Free Roadmap",
    desc: "Get a personalized 90-day business plan, sales scripts, entity checklist, and credit/funding roadmap — instantly.",
    features: ["1 AI business roadmap", "7-day launch plan", "Sales scripts", "LLC + EIN checklist"],
  },
  {
    badge: "PRO",
    badgeColor: "#D4A017",
    name: "Pro Strategy",
    desc: "Full roadmap access, progress tracking, branding guidance, PDF export, and deeper AI refinement.",
    features: ["Unlimited roadmaps", "Outreach strategy", "Credit readiness score", "PDF/email export"],
  },
  {
    badge: "ELITE",
    badgeColor: "#1E88E5",
    name: "Elite Execution",
    desc: "Financial projections, funding partner resources, company formation, and done-with-you guidance.",
    features: ["Financial projections", "Vendor/funding center", "Company formation", "Priority support"],
  },
  {
    badge: "FOUNDERS",
    badgeColor: "#FF8A00",
    name: "Legacy Founder",
    desc: "Lifetime access at founder pricing. Every feature, forever. Limited to 200 seats.",
    features: ["Lifetime full access", "P2P Command Center", "AI Voice Agent", "Website Builder"],
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

      <div className="mx-auto max-w-7xl px-5 py-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* ── LEFT — Form ── */}
          <div className="w-full max-w-md mx-auto lg:mx-0">

            {/* Brand header */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0"
                  style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1E88E5 100%)", boxShadow: "0 0 18px rgba(30,136,229,0.35)" }}
                >
                  <span className="text-base">⚡</span>
                </div>
                <span className="font-display text-2xl font-black tracking-tight">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </div>
              <h1 className="font-display text-2xl font-black text-white leading-snug">
                {tab === "login" ? "Welcome back." : "Start building today."}
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your roadmap and dashboard."
                  : "Create your free account — no credit card required."}
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-[#1A2235] p-7" style={{ background: "#0F1520" }}>
              {/* Tabs */}
              <div className="mb-7 flex rounded-xl border border-[#1A2235] p-1" style={{ background: "#080C14" }}>
                <button
                  onClick={() => { setTab("login"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "login" ? "btn-gold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => { setTab("register"); setError(""); }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    tab === "register" ? "btn-gold" : "text-slate-400 hover:text-white"
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
                      <span className="text-xs text-slate-500">Forgot password? Contact support.</span>
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
                    className="btn-gold w-full py-3.5 text-sm font-black"
                  >
                    {loading ? "Signing in..." : "Sign In to PEN2PRO"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    Don&apos;t have an account?{" "}
                    <button type="button" onClick={() => setTab("register")} className="font-semibold" style={{ color: "#D4A017" }}>
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
                    className="btn-gold w-full py-3.5 text-sm font-black"
                  >
                    {loading ? "Creating account..." : "Create Free Account"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <span style={{ color: "#D4A017" }}>Terms of Service</span> and{" "}
                    <span style={{ color: "#D4A017" }}>Privacy Policy</span>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-5 border-t border-[#1A2235] pt-5 text-center text-sm text-slate-500">
                Not ready to sign up?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Benefits Panel ── */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              {/* Headline */}
              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-3 py-1 text-xs font-bold uppercase tracking-widest" style={{ color: "#FF8A00" }}>
                  ⚡ RMIE Platform
                </div>
                <h2 className="font-display text-3xl font-black text-white leading-tight">
                  Build your business roadmap.{" "}
                  <span style={{ background: "linear-gradient(90deg, #D4A017, #FF8A00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Save your blueprint.
                  </span>{" "}
                  Upgrade when ready.
                </h2>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  PEN2PRO gives you a real roadmap — not generic advice. Start free. Save your progress. Go deeper when you&apos;re ready.
                </p>
              </div>

              {/* Tier benefit cards */}
              <div className="space-y-3">
                {TIER_BENEFITS.map((tier) => (
                  <div
                    key={tier.badge}
                    className="rounded-2xl border border-[#1A2235] p-5 transition-all hover:border-opacity-80"
                    style={{ background: "#0F1520" }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-9 w-16 shrink-0 items-center justify-center rounded-lg text-xs font-black"
                        style={{ background: `${tier.badgeColor}18`, border: `1px solid ${tier.badgeColor}44`, color: tier.badgeColor }}
                      >
                        {tier.badge}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-white text-sm mb-1">{tier.name}</p>
                        <p className="text-xs text-slate-400 leading-relaxed mb-3">{tier.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tier.features.map((f) => (
                            <span
                              key={f}
                              className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                              style={{ background: `${tier.badgeColor}12`, border: `1px solid ${tier.badgeColor}30`, color: tier.badgeColor }}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="mt-6 flex gap-3">
                <Link to="/starter" className="btn-gold flex-1 py-3 text-center text-sm font-black">
                  Start Free Roadmap
                </Link>
                <Link to="/pricing" className="btn-outline flex-1 py-3 text-center text-sm font-semibold">
                  View Plans
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

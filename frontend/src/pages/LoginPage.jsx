import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_CARDS = [
  {
    tier: "Free Roadmap",
    icon: "🗺️",
    color: "#64748b",
    borderColor: "#1A2D50",
    desc: "Start with a personalized business blueprint. No credit card required.",
    perks: ["Business idea analysis", "7-day action plan", "Startup checklist"],
  },
  {
    tier: "Pro",
    icon: "⚡",
    color: "#2d9cff",
    borderColor: "#2d9cff",
    desc: "Full roadmap, branding, outreach strategy, credit readiness, and PDF export.",
    perks: ["Full RMIE blueprint", "30/90-day launch plan", "Outreach + sales scripts"],
    highlight: true,
  },
  {
    tier: "Elite",
    icon: "🏆",
    color: "#d4af37",
    borderColor: "#d4af37",
    desc: "Advanced strategist guidance, financial projections, legal foundation, and priority support.",
    perks: ["Financial projections", "Company formation guide", "Priority AI support"],
  },
  {
    tier: "Legacy Founder",
    icon: "🔑",
    color: "#7C3AED",
    borderColor: "#7C3AED",
    desc: "Lifetime access at a founding rate. Limited spots. Lock in before launch.",
    perks: ["Lifetime platform access", "Founder recognition", "Early adopter pricing"],
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
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(30,136,229,0.18) 0%, transparent 65%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-0 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,138,0,0.12) 0%, transparent 65%)", filter: "blur(50px)" }} />
      </div>

      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

          {/* ─── Left: Auth Form ─── */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold text-[#FF8A00] uppercase tracking-widest">
                ⚡ PEN2PRO
              </div>
              <h1 className="font-display text-3xl font-black text-white leading-tight mb-3">
                {tab === "login"
                  ? "Welcome back. Your blueprint is waiting."
                  : "Build your business roadmap. Save your blueprint. Upgrade when ready."}
              </h1>
              <p className="text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your dashboard, roadmaps, and business tools."
                  : "Free to start. No credit card required. Upgrade to Pro or Elite when you're ready."}
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
                      className="w-full rounded-xl border border-[#1A2235] bg-[#080C14] px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-[#D4A017] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-300">Password</label>
                      <button type="button" className="text-xs text-[#2d9cff] hover:underline">
                        Forgot password?
                      </button>
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
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl disabled:opacity-60"
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
                      placeholder="Your full name"
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
                    className="btn-gold w-full py-3 text-sm font-bold rounded-xl disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Free Account →"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="text-slate-400 hover:text-white">Terms</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="text-slate-400 hover:text-white">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist nudge */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready yet?{" "}
                <Link to="/waitlist" className="font-semibold" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Free roadmap included</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> No credit card required</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Cancel anytime</span>
            </div>
          </div>

          {/* ─── Right: Plan Overview Panel ─── */}
          <div className="hidden lg:block">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">What you unlock</p>
              <h2 className="font-display text-2xl font-black text-white leading-tight">
                One account. Every tool you need to build a real business.
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Start free. Access the roadmap. Upgrade to Pro, Elite, or Founders when you're ready to go deeper.
              </p>
            </div>

            <div className="space-y-4">
              {PLAN_CARDS.map((plan) => (
                <div
                  key={plan.tier}
                  className="rounded-2xl border p-5 transition-all"
                  style={{
                    borderColor: plan.highlight ? plan.borderColor : "#1A2D50",
                    background: plan.highlight ? "rgba(45,156,255,0.06)" : "#0F1520",
                    boxShadow: plan.highlight ? "0 0 24px rgba(45,156,255,0.12)" : "none",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                      style={{ background: `${plan.color}20`, border: `1px solid ${plan.color}40` }}
                    >
                      {plan.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-white text-sm">{plan.tier}</p>
                        {plan.highlight && (
                          <span className="rounded-full px-2 py-0.5 text-[10px] font-black uppercase tracking-wider"
                            style={{ background: `${plan.color}20`, color: plan.color, border: `1px solid ${plan.color}40` }}>
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{plan.desc}</p>
                      <ul className="space-y-1.5">
                        {plan.perks.map((perk) => (
                          <li key={perk} className="flex items-center gap-2 text-xs text-slate-300">
                            <span style={{ color: plan.color }}>✓</span>
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF8A00] mb-2">Not sure where to start?</p>
              <p className="text-sm text-slate-400 mb-4">
                Take the free starter roadmap first. You'll get a personalized business blueprint in under 5 minutes — no account required.
              </p>
              <Link
                to="/starter"
                className="btn-gold block w-full rounded-xl py-3 text-center text-sm font-black text-[#0A0F1E]"
              >
                Start Free Roadmap — No Sign Up
              </Link>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

const PLAN_BENEFITS = [
  {
    tier: "Free Roadmap",
    color: "#1E88E5",
    icon: "🗺️",
    desc: "Get a 7-day action plan and starter blueprint for any business idea — no credit card required.",
    path: "/starter",
  },
  {
    tier: "Pro Strategy Tools",
    color: "#00C9B1",
    icon: "📊",
    desc: "Full 90-day roadmap, progress tracking, branding support, PDF export, and AI refinement.",
    path: "/pro",
  },
  {
    tier: "Elite Execution Support",
    color: "#D4A017",
    icon: "⚡",
    desc: "Financial projections, legal foundation, vendor resources, marketing playbooks, and priority guidance.",
    path: "/elite",
  },
  {
    tier: "Legacy Founder Access",
    color: "#FF8A00",
    icon: "♾️",
    desc: "Lifetime access to everything PEN2PRO builds. One-time founding member price — locked in forever.",
    path: "/founders",
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

      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — Benefits Panel */}
          <div className="hidden lg:block">
            <div className="mb-8">
              <Link to="/" className="flex items-center gap-2.5 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #0D47A1, #1E88E5)", boxShadow: "0 0 20px rgba(30,136,229,0.3)" }}>
                  <span className="text-lg">⚡</span>
                </div>
                <span className="font-display text-2xl font-black">
                  <span style={{ color: "#FFFFFF" }}>PEN</span>
                  <span style={{ color: "#FF8A00" }}>2</span>
                  <span style={{ color: "#1E88E5" }}>PRO</span>
                </span>
              </Link>
              <h2 className="font-display text-3xl font-black leading-snug text-white">
                Build your business roadmap.<br />
                Save your blueprint.<br />
                <span style={{ color: "#FF8A00" }}>Upgrade when ready.</span>
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                PEN2PRO RMIE turns your idea, skill, or lived experience into a realistic business plan — with step-by-step guidance from free roadmap to full execution.
              </p>
            </div>

            <div className="space-y-4">
              {PLAN_BENEFITS.map((plan) => (
                <Link key={plan.tier} to={plan.path}
                  className="flex items-start gap-4 rounded-2xl border border-[#1A2D50] p-4 transition-all hover:border-opacity-60 hover:-translate-y-0.5 group"
                  style={{ background: "#0F1520" }}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0 text-xl"
                    style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30` }}>
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm" style={{ color: plan.color }}>{plan.tier}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-slate-400">{plan.desc}</p>
                  </div>
                  <svg className="h-4 w-4 shrink-0 mt-1 text-slate-600 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-600">
              PEN2PRO does not guarantee income, credit results, or funding approval. Results depend on individual effort and market conditions.
            </p>
          </div>

          {/* Right — Auth Form */}
          <div className="w-full">
            <div className="text-center mb-8 lg:text-left">
              <h1 className="font-display text-3xl font-bold text-white">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                {tab === "login"
                  ? "Sign in to access your PEN2PRO roadmap and dashboard."
                  : "Start building your free business roadmap today."}
              </p>
            </div>

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
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                  <p className="text-center text-sm text-slate-500">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => setTab("register")}
                      className="font-semibold hover:underline" style={{ color: "#D4A017" }}>
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
                    {loading ? "Creating account..." : "Create Account — Free"}
                  </button>
                  <p className="text-center text-xs text-slate-500">
                    By creating an account you agree to our{" "}
                    <Link to="/terms" className="hover:underline text-slate-400">Terms of Service</Link>
                    {" "}and{" "}
                    <Link to="/privacy" className="hover:underline text-slate-400">Privacy Policy</Link>.
                  </p>
                </form>
              )}

              {/* Waitlist link */}
              <div className="mt-6 text-center text-sm text-slate-500">
                Not ready to sign up yet?{" "}
                <Link to="/waitlist" className="font-semibold hover:underline" style={{ color: "#D4A017" }}>
                  Join the waitlist
                </Link>
              </div>
            </div>

            {/* Mobile plan benefits (visible only on small screens) */}
            <div className="mt-8 lg:hidden space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 text-center">What you get with PEN2PRO</p>
              {PLAN_BENEFITS.map((plan) => (
                <div key={plan.tier} className="flex items-center gap-3 rounded-xl border border-[#1A2235] px-4 py-3"
                  style={{ background: "#0F1520" }}>
                  <span className="text-lg">{plan.icon}</span>
                  <div>
                    <p className="text-xs font-bold" style={{ color: plan.color }}>{plan.tier}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{plan.desc}</p>
                  </div>
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

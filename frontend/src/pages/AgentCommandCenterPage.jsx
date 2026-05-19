import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SafetyBoundaryNotice from "../components/automation/SafetyBoundaryNotice";
import AgentCommandForm from "../components/automation/AgentCommandForm";

function PlanSection({ section }) {
  return (
    <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-black text-white">{section.title}</h3>
        {section.agent && (
          <span className="rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-3 py-1 text-xs font-bold text-[#1E88E5]">
            {section.agent}
          </span>
        )}
      </div>
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-xl border border-[#1A2235] bg-[#0A0F1E] p-4 text-xs leading-relaxed text-slate-300">
        {JSON.stringify(section.data || section.items || section, null, 2)}
      </pre>
    </div>
  );
}

export default function AgentCommandCenterPage() {
  const [result, setResult] = useState(null);

  const payload = result?.result;
  const combinedPlan = payload?.combined_launch_plan;
  const executionSummary = payload?.execution_summary;
  const executionOrder = payload?.execution_order || [];

  return (
    <div className="min-h-screen bg-[#080C14] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1A2D50] px-5 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[500px] w-[500px] rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #FF8A00 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1A2D50] bg-[#0F1520] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">
            ⚡ P2P Agent Command Center
          </div>
          <h1 className="font-display text-4xl font-black leading-tight md:text-5xl">
            Main Builder
            <br />
            <span style={{ background: "linear-gradient(90deg, #FF8A00, #D4A017)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Execution Console
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400 leading-relaxed">
            Run the Main Builder agent, route your request through specialist agents, and receive a combined launch plan — roadmap, website strategy, outreach, funding readiness, and more.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-12 space-y-8">
        <SafetyBoundaryNotice />

        <AgentCommandForm onResult={setResult} />

        {payload && (
          <div className="space-y-6">
            {/* Status */}
            <div className="rounded-2xl border border-[#059669]/30 bg-[#059669]/08 p-6">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#059669]">Main Builder Status</div>
              <h2 className="font-display text-2xl font-black text-white">
                {payload.message || "Main Builder completed."}
              </h2>

              {executionSummary && (
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Completed Agents</p>
                    <p className="mt-2 font-display text-3xl font-black text-[#059669]">{executionSummary.completed_count}</p>
                  </div>
                  <div className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Skipped</p>
                    <p className="mt-2 font-display text-3xl font-black text-[#D4A017]">{executionSummary.skipped_count}</p>
                  </div>
                  <div className="rounded-xl border border-[#1A2D50] bg-[#0F1520] p-4 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Errors</p>
                    <p className="mt-2 font-display text-3xl font-black text-red-400">{executionSummary.error_count}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Execution Order */}
            {executionOrder.length > 0 && (
              <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Execution Order</div>
                <div className="flex flex-wrap gap-2">
                  {executionOrder.map((agent) => (
                    <span key={agent} className="rounded-full border border-[#1E88E5]/40 bg-[#1E88E5]/10 px-3 py-1 text-sm font-bold text-[#1E88E5]">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Combined Launch Plan */}
            {combinedPlan && (
              <div className="space-y-5">
                <div className="rounded-2xl border border-[#D4A017]/30 bg-[#D4A017]/05 p-6">
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#D4A017]">Combined Launch Plan</div>
                  <h2 className="font-display text-3xl font-black text-white">{combinedPlan.title}</h2>
                  <p className="mt-3 text-slate-300 leading-relaxed">{combinedPlan.summary}</p>
                </div>

                {(combinedPlan.sections || []).map((section, index) => (
                  <PlanSection key={`${section.agent || section.title}-${index}`} section={section} />
                ))}

                {combinedPlan.next_steps?.length > 0 && (
                  <div className="rounded-2xl border border-[#1A2D50] bg-[#0F1520] p-6">
                    <div className="mb-4 text-xs font-bold uppercase tracking-widest text-[#FF8A00]">Next Steps</div>
                    <ul className="space-y-3">
                      {combinedPlan.next_steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="mt-0.5 shrink-0 font-bold text-[#FF8A00]">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bottom nav links */}
        <div className="flex flex-wrap gap-3 pt-4 text-sm">
          <Link to="/command-center" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">🖥️ Command Center</Link>
          <Link to="/rmie" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">⚡ RMIE</Link>
          <Link to="/voice-agent" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">🎙️ Voice Agent</Link>
          <Link to="/pricing" className="rounded-lg border border-[#1A2D50] px-4 py-2 text-slate-400 hover:text-white transition-colors">💰 Pricing</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { useState } from "react";
import SafetyBoundaryNotice from "../components/automation/SafetyBoundaryNotice";
import AgentCommandForm from "../components/automation/AgentCommandForm";

function PlanSection({ section }) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-950/70 p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-black text-white">
          {section.title}
        </h3>
        {section.agent ? (
          <span className="rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-200">
            {section.agent}
          </span>
        ) : null}
      </div>

      <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-lg bg-black/30 p-3 text-xs leading-relaxed text-slate-200">
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
    <div className="min-h-screen bg-slate-950 px-5 py-8 text-white">
      <div className="mx-auto max-w-6xl">
        <SafetyBoundaryNotice />

        <div className="mt-6 mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            P2P Agent Command Center
          </p>
          <h1 className="mt-2 text-4xl font-black">
            Main Builder Execution Console
          </h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Run the Main Builder agent, route the request through specialist agents, and display the combined launch plan.
          </p>
        </div>

        <AgentCommandForm onResult={setResult} />

        {payload ? (
          <div className="mt-8 space-y-6">
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Main Builder Status
              </p>
              <h2 className="mt-2 text-2xl font-black">
                {payload.message || "Main Builder completed."}
              </h2>

              {executionSummary ? (
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl bg-slate-950/70 p-4">
                    <p className="text-xs text-slate-400">Completed Agents</p>
                    <p className="text-2xl font-black text-emerald-300">
                      {executionSummary.completed_count}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 p-4">
                    <p className="text-xs text-slate-400">Skipped</p>
                    <p className="text-2xl font-black text-yellow-300">
                      {executionSummary.skipped_count}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 p-4">
                    <p className="text-xs text-slate-400">Errors</p>
                    <p className="text-2xl font-black text-red-300">
                      {executionSummary.error_count}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="rounded-2xl border border-blue-500/30 bg-slate-900 p-5">
              <h2 className="text-2xl font-black">
                Execution Order
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {executionOrder.map((agent) => (
                  <span
                    key={agent}
                    className="rounded-full border border-blue-400/40 bg-blue-400/10 px-3 py-1 text-sm font-bold text-blue-200"
                  >
                    {agent}
                  </span>
                ))}
              </div>
            </div>

            {combinedPlan ? (
              <div className="rounded-2xl border border-yellow-500/40 bg-yellow-500/10 p-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-300">
                  Combined Launch Plan
                </p>
                <h2 className="mt-2 text-3xl font-black">
                  {combinedPlan.title}
                </h2>
                <p className="mt-2 text-slate-200">
                  {combinedPlan.summary}
                </p>

                <div className="mt-5 grid gap-4">
                  {(combinedPlan.sections || []).map((section, index) => (
                    <PlanSection key={`${section.agent || section.title}-${index}`} section={section} />
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-yellow-500/30 bg-slate-950/70 p-4">
                  <h3 className="text-lg font-black text-yellow-200">
                    Next Steps
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-200">
                    {(combinedPlan.next_steps || []).map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}

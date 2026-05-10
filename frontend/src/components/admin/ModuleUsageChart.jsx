export default function ModuleUsageChart({ data=[] }) { return <pre className="rounded bg-slate-800 p-3 text-xs text-white">{JSON.stringify(data,null,2)}</pre> }

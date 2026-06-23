const DEFAULT_DATA = [20, 35, 28, 50, 42, 65, 80];
const DEFAULT_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function GrowthChart({ data = DEFAULT_DATA, labels = DEFAULT_LABELS, title = "Growth", color = "#00C9B1" }) {
  const max = Math.max(...data, 1);
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * 280 + 10;
    const y = 80 - (v / max) * 70 + 10;
    return `${x},${y}`;
  });
  const polyline = points.join(" ");
  const areaPoints = `10,90 ${polyline} ${(data.length - 1) / (data.length - 1) * 280 + 10},90`;

  return (
    <div className="rounded-xl border border-[#1A2235] bg-[#0F1520] p-5">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{title}</p>
      <svg viewBox="0 0 300 100" className="w-full" style={{ height: 80 }}>
        <defs>
          <linearGradient id={`g-${title}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <polygon points={areaPoints} fill={`url(#g-${title})`} />
        <polyline points={polyline} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {data.map((v, i) => {
          const [x, y] = points[i].split(",").map(Number);
          return <circle key={i} cx={x} cy={y} r="3" fill={color} />;
        })}
      </svg>
      <div className="mt-2 flex justify-between">
        {labels.map((l) => (
          <span key={l} className="text-[10px] text-slate-600">{l}</span>
        ))}
      </div>
    </div>
  );
}

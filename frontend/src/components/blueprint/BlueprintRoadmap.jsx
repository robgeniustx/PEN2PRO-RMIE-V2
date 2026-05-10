const BlueprintRoadmap = ({ data }) => {
  if (!data) return <p className="text-slate-300">Not generated yet.</p>;

  if (Array.isArray(data)) {
    return (
      <ol className="list-decimal space-y-2 pl-5 text-slate-100">
        {data.map((step, idx) => (
          <li key={`${step}-${idx}`}>{step}</li>
        ))}
      </ol>
    );
  }

  if (typeof data === "object") {
    return (
      <div className="space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <p key={key} className="text-slate-100">
            <span className="font-semibold capitalize text-cyan-300">{key.replaceAll("_", " ")}: </span>
            {value}
          </p>
        ))}
      </div>
    );
  }

  return <p className="text-slate-100">{String(data)}</p>;
};

export default BlueprintRoadmap;

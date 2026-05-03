const BlueprintChecklist = ({ items = [] }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-slate-300">Not generated yet.</p>;
  }

  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={`${item}-${idx}`} className="flex gap-2 text-slate-100">
          <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BlueprintChecklist;

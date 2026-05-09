const StrategistAnalysisCard = ({ analysis = {} }) => (
  <section className="rounded-2xl border border-blue-400/50 bg-blue-950/40 p-5">
    <h3 className="text-xl font-bold text-blue-200">$100M Strategist Analysis</h3>
    <ul className="mt-3 space-y-2 text-slate-100">
      <li><span className="font-semibold text-cyan-300">Do first:</span> {analysis.do_first || "Not generated yet."}</li>
      <li><span className="font-semibold text-cyan-300">Avoid:</span> {analysis.avoid || "Not generated yet."}</li>
      <li><span className="font-semibold text-cyan-300">Fastest money action:</span> {analysis.fastest_money_action || "Not generated yet."}</li>
      <li><span className="font-semibold text-cyan-300">Wait until validated:</span> {analysis.wait_until_validated || "Not generated yet."}</li>
    </ul>
  </section>
);

export default StrategistAnalysisCard;

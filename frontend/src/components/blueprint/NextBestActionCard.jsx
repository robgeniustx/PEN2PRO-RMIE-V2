const NextBestActionCard = ({ action }) => (
  <section className="rounded-2xl border border-orange-400/60 bg-orange-950/50 p-5">
    <h3 className="text-2xl font-bold text-orange-200">Your Next Best Action</h3>
    <p className="mt-2 text-lg text-white">{action || "Not generated yet."}</p>
  </section>
);

export default NextBestActionCard;

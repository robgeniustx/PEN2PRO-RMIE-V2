import { motion } from "framer-motion";

const BlueprintSection = ({ title, description, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-5 shadow-lg shadow-cyan-900/20"
  >
    <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
    {description ? <p className="mt-1 text-sm text-slate-300">{description}</p> : null}
    <div className="mt-4 text-slate-100">{children}</div>
  </motion.section>
);

export default BlueprintSection;

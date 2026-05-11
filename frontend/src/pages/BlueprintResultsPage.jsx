import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getBlueprintById } from "../api/blueprintApi";
import BlueprintSection from "../components/blueprint/BlueprintSection";
import BlueprintChecklist from "../components/blueprint/BlueprintChecklist";
import BlueprintRoadmap from "../components/blueprint/BlueprintRoadmap";
import LockedSection from "../components/blueprint/LockedSection";
import NextBestActionCard from "../components/blueprint/NextBestActionCard";
import StrategistAnalysisCard from "../components/blueprint/StrategistAnalysisCard";
import UpgradePrompt from "../components/blueprint/UpgradePrompt";
import { useTier } from "../hooks/useTier";
import { hasTierAccess } from "../utils/tierAccess";

const BlueprintResultsPage = () => {
  const { id } = useParams();
  const { tier, tierConfig } = useTier();
  const [loading, setLoading] = useState(true);
  const [blueprint, setBlueprint] = useState({});

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const result = await getBlueprintById(id || "demo");
      setBlueprint(result.data || {});
      setLoading(false);
    };
    load();
  }, [id]);

  const warnings = blueprint.beginner_mistake_warnings || [];
  const warningCount = tier === "free" ? 2 : tier === "pro" ? 4 : warnings.length;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-cyan-300">PEN2PRO RMIE Live</p>
          <h1 className="text-3xl font-extrabold">Blueprint Results</h1>
          <p className="text-slate-300">Tier: {tierConfig.name}</p>
        </motion.header>
        <UpgradePrompt compact={tier === "founders"} />
        {loading ? <p>Loading blueprint...</p> : null}

        <NextBestActionCard action={blueprint.next_best_action} />

        <BlueprintSection title="Business Summary"><p>{blueprint.business_summary || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="First Offer"><p>{blueprint.offer || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="Ideal Customer"><p>{blueprint.ideal_customer || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="Problem Being Solved"><p>{blueprint.problem_being_solved || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="Pricing Strategy"><p>{blueprint.pricing || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="First Sales Channel"><p>{blueprint.first_sales_channel || "Not generated yet."}</p></BlueprintSection>
        <BlueprintSection title="Sales Script"><p>{blueprint.sales_script || "Not generated yet."}</p></BlueprintSection>

        {hasTierAccess(tier, "pro") ? <BlueprintSection title="7-Day Launch Plan"><BlueprintRoadmap data={blueprint.seven_day_launch_plan} /></BlueprintSection> : <LockedSection requiredTier="pro" featureName="Full 7-Day Launch Plan" />}
        {hasTierAccess(tier, "pro") ? <BlueprintSection title="30-Day Roadmap"><BlueprintRoadmap data={blueprint.thirty_day_roadmap} /></BlueprintSection> : <LockedSection requiredTier="pro" featureName="Full 30-Day Roadmap" />}
        {hasTierAccess(tier, "pro") ? <BlueprintSection title="Social Posts"><BlueprintRoadmap data={blueprint.five_social_posts} /></BlueprintSection> : <LockedSection requiredTier="pro" featureName="Social Posts" />}
        {hasTierAccess(tier, "pro") ? <BlueprintSection title="Outreach Message"><p>{blueprint.outreach_message || "Not generated yet."}</p></BlueprintSection> : <LockedSection requiredTier="pro" featureName="Outreach Message" />}

        <BlueprintSection title="Beginner Mistakes to Avoid">
          <BlueprintChecklist items={warnings.slice(0, warningCount)} />
        </BlueprintSection>

        <BlueprintSection title="Checklist">
          <BlueprintChecklist items={(blueprint.checklist || []).slice(0, tier === "free" ? 4 : blueprint.checklist?.length)} />
        </BlueprintSection>

        {hasTierAccess(tier, "elite") ? <StrategistAnalysisCard analysis={blueprint.strategist_analysis} /> : <LockedSection requiredTier="elite" featureName="$100M Strategist Mode" />}
        {hasTierAccess(tier, "elite") ? <BlueprintSection title="Monetization Plan"><p>{blueprint.monetization_plan || "Not generated yet."}</p></BlueprintSection> : <LockedSection requiredTier="elite" featureName="Monetization Plan" />}
        {hasTierAccess(tier, "elite") ? <BlueprintSection title="Ads Strategy"><p>{blueprint.ads_strategy || "Not generated yet."}</p></BlueprintSection> : <LockedSection requiredTier="elite" featureName="Ads Strategy" />}

        {hasTierAccess(tier, "founders") ? (
          <BlueprintSection title="Founders Lifetime Access" description="Priority roadmap and future modules.">
            <ul className="list-disc pl-5 text-slate-100">
              <li>Future autonomous agents</li><li>Advanced CRM automation</li><li>Advanced social content engine</li><li>Business credit/funding workspace</li><li>Website builder</li><li>Affiliate engine</li><li>Future export/report tools</li>
            </ul>
          </BlueprintSection>
        ) : null}

        {hasTierAccess(tier, "pro") ? (
          <button className="w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950" onClick={() => window.alert("PDF export will be connected in a future phase.")}>Export Blueprint</button>
        ) : (
          <LockedSection requiredTier="pro" featureName="Export" />
        )}

        <UpgradePrompt compact={tier === "founders"} />
      </div>
    </main>
  );
};

export default BlueprintResultsPage;

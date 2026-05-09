import mockBlueprint from "../data/mockBlueprint";

export const getBlueprintById = async (blueprintId) => {
  try {
    const response = await fetch(`/api/blueprints/${blueprintId}`);
    if (!response.ok) throw new Error("Blueprint route unavailable");

    const data = await response.json();
    return {
      status: "live",
      data: data || mockBlueprint,
      error: null,
    };
  } catch (error) {
    // TODO: Replace fallback with robust backend error handling once blueprint service is stable.
    return {
      status: "fallback",
      data: { ...mockBlueprint, id: blueprintId || "demo" },
      error,
    };
  }
};

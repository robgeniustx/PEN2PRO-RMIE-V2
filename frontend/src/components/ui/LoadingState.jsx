export default function LoadingState({
  message = "Loading...",
  size = "md",
  fullPage = false,
  skeleton = false,
  skeletonLines = 3,
}) {
  const spinnerSizes = {
    xs: "h-4 w-4 border-2",
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-[3px]",
    lg: "h-16 w-16 border-4",
  };

  if (skeleton) {
    return (
      <div className="space-y-3 animate-pulse">
        {Array.from({ length: skeletonLines }).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-lg bg-[#1A2D50]"
            style={{ width: i === skeletonLines - 1 ? "60%" : "100%" }}
          />
        ))}
      </div>
    );
  }

  const inner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`animate-spin rounded-full border-transparent ${spinnerSizes[size] || spinnerSizes.md}`}
        style={{ borderTopColor: "#FF8A00", borderRightColor: "#FF8A00" }}
      />
      {message && <p className="text-sm text-slate-500">{message}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080C14]/90 backdrop-blur-sm">
        {inner}
      </div>
    );
  }

  return <div className="flex justify-center py-16">{inner}</div>;
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl border border-[#1A2D50] bg-[#0D1528] p-6">
      <div className="mb-3 h-4 w-1/3 rounded-lg bg-[#1A2D50]" />
      <div className="space-y-2">
        <div className="h-3 rounded-lg bg-[#1A2D50]" />
        <div className="h-3 w-5/6 rounded-lg bg-[#1A2D50]" />
        <div className="h-3 w-3/4 rounded-lg bg-[#1A2D50]" />
      </div>
    </div>
  );
}

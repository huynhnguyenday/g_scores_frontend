import { CHART_HEIGHT_LG, CHART_HEIGHT_MD } from "@/core/constants/charts";

type ChartSkeletonProps = {
  size?: "md" | "lg";
};

const sizeClass = {
  md: CHART_HEIGHT_MD,
  lg: CHART_HEIGHT_LG,
} as const;

export function ChartSkeleton({ size = "md" }: ChartSkeletonProps) {
  return (
    <div
      className={`${sizeClass[size]} animate-pulse overflow-hidden rounded-xl border border-g-border bg-g-input`}
      aria-hidden
    >
      <div className="flex h-full flex-col justify-between p-5">
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-md bg-g-sidebar-hover" />
          <div className="h-3 w-40 rounded-md bg-g-sidebar-hover/70" />
        </div>
        <div className="flex items-end justify-center gap-2 px-2 pb-2">
          {[35, 55, 42, 68, 48, 62, 38, 58, 50].map((h, i) => (
            <div
              key={i}
              className="w-full max-w-[28px] rounded-t-md bg-g-sidebar-hover"
              style={{ height: `${h}%`, minHeight: "2rem" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

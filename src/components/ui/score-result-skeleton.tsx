export function ScoreResultSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="animate-pulse" aria-hidden aria-label="Loading scores">
      <div className="mb-4 h-4 w-48 rounded-md bg-g-sidebar-hover" />
      <div className="overflow-hidden rounded-lg border border-g-border">
        <div className="flex gap-4 border-b border-g-border bg-g-input px-3 py-2">
          <div className="h-3.5 flex-1 rounded bg-g-sidebar-hover/80" />
          <div className="h-3.5 w-12 rounded bg-g-sidebar-hover/80" />
        </div>
        <div className="divide-y divide-g-border/60">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex gap-4 px-3 py-2">
              <div className="h-3.5 flex-1 rounded bg-g-sidebar-hover/50" />
              <div className="h-3.5 w-10 rounded bg-g-sidebar-hover/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

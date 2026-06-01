export function TableSkeleton({ rows = 10 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-2" aria-hidden>
      <div className="h-10 rounded-lg bg-g-sidebar-hover" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-9 rounded-md bg-g-input" />
      ))}
    </div>
  );
}

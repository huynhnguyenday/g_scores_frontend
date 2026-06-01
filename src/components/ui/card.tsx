export function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-g-border bg-g-surface p-5 shadow-lg shadow-black/20 sm:p-6 ${className}`}
    >
      <h2 className="mb-4 text-lg font-bold text-g-text">{title}</h2>
      {children}
    </section>
  );
}

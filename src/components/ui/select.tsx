import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className = "", children, ...props }: SelectProps) {
  return (
    <select
      className={`rounded-md border-2 border-g-border bg-g-input px-3 py-2 text-sm text-g-text outline-none focus:border-g-primary focus:bg-g-input focus:ring-2 focus:ring-g-primary/40 disabled:cursor-not-allowed disabled:bg-g-input disabled:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

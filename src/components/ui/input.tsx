import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-md border-2 border-g-border bg-g-input px-3 py-2 text-g-text outline-none transition-colors placeholder:text-g-text-muted autofill:bg-g-input focus:border-g-primary focus:bg-g-input focus:ring-2 focus:ring-g-primary/40 disabled:cursor-not-allowed disabled:border-g-border disabled:bg-g-input disabled:text-g-text disabled:opacity-80 ${className}`}
      {...props}
    />
  );
}

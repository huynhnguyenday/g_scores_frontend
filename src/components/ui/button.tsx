import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className = "",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-md border-2 border-g-primary bg-g-primary px-8 py-2.5 font-medium text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:border-g-primary disabled:bg-g-primary disabled:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/core/i18n/locale-provider";

const NAV_LINKS = [
  { href: "/dashboard", key: "dashboard" as const },
  { href: "/search", key: "search" as const },
  { href: "/reports", key: "reports" as const },
  { href: "/settings", key: "settings" as const },
];

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslation();

  return (
    <aside className="sticky top-0 z-20 flex w-full shrink-0 flex-col border-r border-g-border bg-g-sidebar p-5 shadow-lg md:h-full md:w-56 md:overflow-y-auto lg:w-64">
      <Link
        href="/dashboard"
        className="mb-8 block text-left text-3xl font-bold tracking-wide text-g-text transition-opacity hover:opacity-90 sm:text-4xl"
      >
        G-Scores
      </Link>
      <nav className="flex flex-col gap-1">
        {NAV_LINKS.map((item) => {
          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-g-text transition-colors hover:bg-g-sidebar-hover ${
                active ? "bg-g-sidebar-hover font-bold" : "font-normal"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

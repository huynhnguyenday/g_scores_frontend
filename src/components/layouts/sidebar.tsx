"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "@/core/i18n/locale-provider";
import { prefetchReportsPage } from "@/components/reports/prefetch-reports-page";

const NAV_LINKS = [
  { href: "/dashboard", key: "dashboard" as const },
  { href: "/search", key: "search" as const },
  { href: "/reports", key: "reports" as const },
  { href: "/settings", key: "settings" as const },
];

type SidebarProps = {
  onNavigate?: () => void;
};

export function Sidebar({ onNavigate }: SidebarProps) {
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const t = useTranslation();

  function handleReportsPrefetch() {
    prefetchReportsPage(queryClient);
  }

  return (
    <aside className="flex h-full flex-col overflow-y-auto border-l border-g-border bg-g-sidebar p-5 shadow-2xl md:border-r md:border-l-0 md:shadow-lg">
      <Link
        href="/dashboard"
        onClick={onNavigate}
        className="mb-8 block text-left text-2xl font-bold tracking-wide text-g-text transition-opacity hover:opacity-90 min-[440px]:text-3xl md:text-4xl"
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
              onClick={onNavigate}
              onMouseEnter={
                item.href === "/reports" ? handleReportsPrefetch : undefined
              }
              onFocus={
                item.href === "/reports" ? handleReportsPrefetch : undefined
              }
              className={`rounded-md px-3 py-2.5 text-base text-g-text transition-colors hover:bg-g-sidebar-hover min-[440px]:py-2 min-[440px]:text-sm ${
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

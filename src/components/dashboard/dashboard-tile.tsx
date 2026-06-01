"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "@/core/i18n/locale-provider";
import { prefetchReportsPage } from "@/components/reports/prefetch-reports-page";

type TileConfig = {
  href: string;
  titleKey: "searchTitle" | "reportsTitle";
  descriptionKey: "searchDesc" | "reportsDesc";
  icon: IconDefinition;
};

export function DashboardTileCard({ tile }: { tile: TileConfig }) {
  const t = useTranslation();
  const queryClient = useQueryClient();

  return (
    <Link
      href={tile.href}
      onMouseEnter={
        tile.href === "/reports"
          ? () => prefetchReportsPage(queryClient)
          : undefined
      }
      onFocus={
        tile.href === "/reports"
          ? () => prefetchReportsPage(queryClient)
          : undefined
      }
      className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-g-border bg-g-surface p-5 text-center shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-g-primary/50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-g-primary min-[440px]:aspect-square min-[440px]:gap-4 min-[440px]:p-6"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-g-primary/20 text-g-primary transition group-hover:bg-g-primary group-hover:text-white min-[440px]:h-20 min-[440px]:w-20">
        <FontAwesomeIcon icon={tile.icon} className="h-8 w-8 min-[440px]:h-9 min-[440px]:w-9" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-g-text">
          {t.dashboard.tiles[tile.titleKey]}
        </h3>
        <p className="mt-1 max-w-full px-1 text-sm leading-snug text-balance text-g-text-muted">
          {t.dashboard.tiles[tile.descriptionKey]}
        </p>
      </div>
    </Link>
  );
}

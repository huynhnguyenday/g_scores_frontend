"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  faChartColumn,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/core/i18n/locale-provider";
import { DashboardTileCard } from "@/components/dashboard/dashboard-tile";
import { prefetchReportsPage } from "@/components/reports/prefetch-reports-page";

const TILES = [
  {
    href: "/search",
    titleKey: "searchTitle" as const,
    descriptionKey: "searchDesc" as const,
    icon: faMagnifyingGlass,
  },
  {
    href: "/reports",
    titleKey: "reportsTitle" as const,
    descriptionKey: "reportsDesc" as const,
    icon: faChartColumn,
  },
];

export default function DashboardPage() {
  const t = useTranslation();
  const queryClient = useQueryClient();

  useEffect(() => {
    prefetchReportsPage(queryClient);
  }, [queryClient]);

  return (
    <div className="w-full max-w-3xl md:mx-auto">
      <header className="mb-6 md:mb-8">
        <h2 className="text-xl font-bold text-g-text min-[440px]:text-2xl">{t.dashboard.title}</h2>
        <p className="mt-2 text-g-text-muted">{t.dashboard.welcome}</p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TILES.map((tile) => (
          <DashboardTileCard key={tile.href} tile={tile} />
        ))}
      </div>
    </div>
  );
}

"use client";

import {
  faChartColumn,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "@/core/i18n/locale-provider";
import { DashboardTileCard } from "@/components/dashboard/dashboard-tile";

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

  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-g-text">{t.dashboard.title}</h2>
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

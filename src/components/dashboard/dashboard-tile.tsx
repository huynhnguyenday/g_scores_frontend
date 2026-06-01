"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useTranslation } from "@/core/i18n/locale-provider";

type TileConfig = {
  href: string;
  titleKey: "searchTitle" | "reportsTitle";
  descriptionKey: "searchDesc" | "reportsDesc";
  icon: IconDefinition;
};

export function DashboardTileCard({ tile }: { tile: TileConfig }) {
  const t = useTranslation();

  return (
    <Link
      href={tile.href}
      className="group flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-g-border bg-g-surface p-6 text-center shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:border-g-primary/50 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-g-primary"
    >
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-g-primary/20 text-g-primary transition group-hover:bg-g-primary group-hover:text-white">
        <FontAwesomeIcon icon={tile.icon} className="h-9 w-9" />
      </span>
      <div>
        <h3 className="text-lg font-bold text-g-text">
          {t.dashboard.tiles[tile.titleKey]}
        </h3>
        <p className="mt-1 text-sm text-g-text-muted">
          {t.dashboard.tiles[tile.descriptionKey]}
        </p>
      </div>
    </Link>
  );
}

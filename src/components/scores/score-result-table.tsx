"use client";

import { useTranslation } from "@/core/i18n/locale-provider";
import type { StudentScore } from "@/core/api";

function formatScore(value: number | string | undefined) {
  if (value === undefined || value === null || value === "") return "—";
  if (typeof value === "number") {
    return value.toFixed(2).replace(/\.?0+$/, "");
  }
  return String(value);
}

export function ScoreResultTable({ score }: { score: StudentScore }) {
  const t = useTranslation();

  const entries = Object.entries(score).filter(
    ([key]) => key !== "sbd" && key in t.scoreFields,
  ) as [keyof typeof t.scoreFields, number | string | undefined][];

  return (
    <div>
      <p className="mb-4 text-sm text-g-text-muted">
        {t.search.registrationNo}{" "}
        <span className="font-semibold text-g-text">{score.sbd}</span>
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-g-border bg-g-input">
              <th className="px-3 py-2 font-semibold text-g-text">
                {t.search.colSubject}
              </th>
              <th className="px-3 py-2 font-semibold text-g-text">
                {t.search.colScore}
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([field, value]) => (
              <tr key={field} className="border-b border-g-border/60">
                <td className="px-3 py-2 text-g-text-muted">
                  {t.scoreFields[field]}
                </td>
                <td className="px-3 py-2 font-medium text-g-text">
                  {formatScore(value)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

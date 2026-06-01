"use client";

import { useTranslation } from "@/core/i18n/locale-provider";
import { useTopGroupA } from "@/components/reports/use-reports";
import type { TopGroupAStudent } from "@/core/api";
import type { Translations } from "@/core/i18n/translations";
import { Card } from "@/components/ui/card";
import { ErrorAlert } from "@/components/ui/error-alert";
import { TableSkeleton } from "@/components/ui/table-skeleton";

function TopGroupAMobileCards({
  rows,
  t,
}: {
  rows: TopGroupAStudent[];
  t: Translations;
}) {
  return (
    <ul className="flex flex-col gap-3 md:hidden">
      {rows.map((row, index) => (
        <li
          key={row.sbd}
          className="rounded-xl border border-g-border bg-g-input p-3"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-g-primary text-sm font-bold text-white">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1 text-center">
              <p className="text-[10px] uppercase tracking-wide text-g-text-muted">
                {t.reports.colSbd}
              </p>
              <p className="truncate text-lg font-bold tabular-nums text-g-text">
                {row.sbd}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-wide text-g-text-muted">
                {t.reports.colTotal}
              </p>
              <p className="text-lg font-bold tabular-nums text-g-primary">
                {row.totalGroupA}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-g-border/60 pt-3">
            <div className="text-center">
              <p className="text-[10px] text-g-text-muted">
                {t.reports.colMath}
              </p>
              <p className="mt-0.5 text-base font-medium tabular-nums text-g-text">
                {row.toan}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-g-text-muted">
                {t.reports.colPhysics}
              </p>
              <p className="mt-0.5 text-base font-medium tabular-nums text-g-text">
                {row.vatLi}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-g-text-muted">
                {t.reports.colChemistry}
              </p>
              <p className="mt-0.5 text-base font-medium tabular-nums text-g-text">
                {row.hoaHoc}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function TopGroupATableSection() {
  const t = useTranslation();
  const { data, isPending, isFetching, isError, error } = useTopGroupA();
  const loading = isPending || isFetching;

  return (
    <Card title={t.reports.topTitle}>
      {isError && (
        <ErrorAlert message={error?.message ?? t.reports.topLoadError} />
      )}

      {loading && !isError && <TableSkeleton rows={10} />}

      {!loading && !isError && data && (
        <>
          <TopGroupAMobileCards rows={data} t={t} />

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-g-border bg-g-input">
                  <th className="px-3 py-2 text-g-text">{t.reports.colRank}</th>
                  <th className="px-3 py-2 text-g-text">{t.reports.colSbd}</th>
                  <th className="px-3 py-2 text-g-text">{t.reports.colMath}</th>
                  <th className="px-3 py-2 text-g-text">
                    {t.reports.colPhysics}
                  </th>
                  <th className="px-3 py-2 text-g-text">
                    {t.reports.colChemistry}
                  </th>
                  <th className="px-3 py-2 text-g-text">
                    {t.reports.colTotal}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={row.sbd} className="border-b border-g-border/60">
                    <td className="px-3 py-3 text-sm text-g-text-muted">
                      {index + 1}
                    </td>
                    <td className="px-3 py-3 text-lg font-medium text-g-text">
                      {row.sbd}
                    </td>
                    <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text">
                      {row.toan}
                    </td>
                    <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text">
                      {row.vatLi}
                    </td>
                    <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text">
                      {row.hoaHoc}
                    </td>
                    <td className="px-3 py-3 text-lg font-semibold tabular-nums text-g-primary">
                      {row.totalGroupA}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </Card>
  );
}

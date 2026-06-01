"use client";

import { useTranslation } from "@/core/i18n/locale-provider";
import { useTopGroupA } from "@/components/reports/use-reports";
import { Card } from "@/components/ui/card";
import { ErrorAlert } from "@/components/ui/error-alert";
import { TableSkeleton } from "@/components/ui/table-skeleton";

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
        <div className="overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-g-border bg-g-input">
                <th className="px-3 py-2 text-g-text">{t.reports.colRank}</th>
                <th className="px-3 py-2 text-g-text">{t.reports.colSbd}</th>
                <th className="px-3 py-2 text-g-text">{t.reports.colMath}</th>
                <th className="px-3 py-2 text-g-text">{t.reports.colPhysics}</th>
                <th className="px-3 py-2 text-g-text">{t.reports.colChemistry}</th>
                <th className="px-3 py-2 text-g-text">{t.reports.colTotal}</th>
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
                  <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text sm:text-xl">
                    {row.toan}
                  </td>
                  <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text sm:text-xl">
                    {row.vatLi}
                  </td>
                  <td className="px-3 py-3 text-lg font-medium tabular-nums text-g-text sm:text-xl">
                    {row.hoaHoc}
                  </td>
                  <td className="px-3 py-3 text-lg font-semibold tabular-nums text-g-primary sm:text-xl">
                    {row.totalGroupA}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}

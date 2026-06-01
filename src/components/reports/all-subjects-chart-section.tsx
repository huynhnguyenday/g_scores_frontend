"use client";

import { useTranslation } from "@/core/i18n/locale-provider";
import { useAllSubjectsDistribution } from "@/components/reports/use-reports";
import { AllSubjectsChart } from "@/components/reports/all-subjects-chart";
import { Card } from "@/components/ui/card";
import { ChartSkeleton } from "@/components/ui/chart-skeleton";
import { ErrorAlert } from "@/components/ui/error-alert";

export function AllSubjectsChartSection() {
  const t = useTranslation();
  const { data, isPending, isFetching, isError, error } =
    useAllSubjectsDistribution();
  const loading = isPending || isFetching;

  return (
    <Card title={t.reports.allTitle}>
      {isError && (
        <ErrorAlert message={error?.message ?? t.reports.allLoadError} />
      )}

      {loading && !isError && <ChartSkeleton size="lg" />}

      {!loading && !isError && data && (
        <div className="w-full">
          <AllSubjectsChart distributions={data} />
        </div>
      )}
    </Card>
  );
}

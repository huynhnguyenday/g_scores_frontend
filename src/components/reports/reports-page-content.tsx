"use client";

import { useEffect } from "react";
import { AllSubjectsChartSection } from "@/components/reports/all-subjects-chart-section";
import { SubjectDistributionSection } from "@/components/reports/subject-distribution-section";
import { TopGroupATableSection } from "@/components/reports/top-group-a-table-section";
import { prefetchEcharts } from "@/components/reports/prefetch-echarts";

export function ReportsPageContent() {
  useEffect(() => {
    prefetchEcharts();
  }, []);

  return (
    <div className="flex w-full max-w-6xl flex-col gap-4 min-[440px]:gap-6 md:mx-auto">
      <SubjectDistributionSection />
      <AllSubjectsChartSection />
      <TopGroupATableSection />
    </div>
  );
}

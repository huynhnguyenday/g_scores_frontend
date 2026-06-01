"use client";

import type { EChartsOption } from "echarts";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useTranslation } from "@/core/i18n/locale-provider";
import { useTheme } from "@/core/theme/theme-provider";
import { CHART_HEIGHT_LG } from "@/core/constants/charts";
import { buildAllSubjectsOption } from "@/components/reports/echarts-options";
import type { SubjectDistribution } from "@/core/api";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

type AllSubjectsChartProps = {
  distributions: SubjectDistribution[];
};

export function AllSubjectsChart({ distributions }: AllSubjectsChartProps) {
  const t = useTranslation();
  const { isDark } = useTheme();

  const option = useMemo<EChartsOption>(
    () => buildAllSubjectsOption(distributions, t, isDark),
    [distributions, t, isDark],
  );

  return (
    <div className={`${CHART_HEIGHT_LG} min-w-[600px]`}>
      <ReactECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "canvas" }}
        notMerge
        lazyUpdate
      />
    </div>
  );
}

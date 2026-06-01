"use client";

import type { EChartsOption } from "echarts";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { useTranslation } from "@/core/i18n/locale-provider";
import { useTheme } from "@/core/theme/theme-provider";
import { CHART_HEIGHT_MD } from "@/core/constants/charts";
import { buildSingleSubjectOption } from "@/components/reports/echarts-options";
import type { SubjectDistribution } from "@/core/api";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

type ScoreDistributionChartProps = {
  distribution: SubjectDistribution;
};

export function ScoreDistributionChart({
  distribution,
}: ScoreDistributionChartProps) {
  const t = useTranslation();
  const { isDark } = useTheme();

  const option = useMemo<EChartsOption>(
    () => buildSingleSubjectOption(distribution, t, isDark),
    [distribution, t, isDark],
  );

  return (
    <div className={CHART_HEIGHT_MD}>
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

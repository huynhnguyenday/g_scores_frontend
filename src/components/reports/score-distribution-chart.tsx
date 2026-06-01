"use client";

import type { EChartsOption } from "echarts";
import { useMemo } from "react";
import { useTranslation } from "@/core/i18n/locale-provider";
import { useTheme } from "@/core/theme/theme-provider";
import { CHART_HEIGHT_MD } from "@/core/constants/charts";
import { EChartsChart } from "@/components/reports/echarts-chart";
import {
  buildSingleSubjectMobileOption,
  buildSingleSubjectOption,
} from "@/components/reports/echarts-options";
import { useIsMobile } from "@/components/reports/use-is-mobile";
import type { SubjectDistribution } from "@/core/api";

type ScoreDistributionChartProps = {
  distribution: SubjectDistribution;
};

export function ScoreDistributionChart({
  distribution,
}: ScoreDistributionChartProps) {
  const t = useTranslation();
  const { isDark } = useTheme();
  const isMobile = useIsMobile();

  const option = useMemo<EChartsOption>(() => {
    if (isMobile) {
      return buildSingleSubjectMobileOption(distribution, t, isDark);
    }
    return buildSingleSubjectOption(distribution, t, isDark);
  }, [distribution, t, isDark, isMobile]);

  return (
    <EChartsChart
      option={option}
      className={isMobile ? "h-80 w-full" : `${CHART_HEIGHT_MD} w-full`}
    />
  );
}

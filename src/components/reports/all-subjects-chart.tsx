"use client";

import type { EChartsOption } from "echarts";
import { useMemo } from "react";
import { useTranslation } from "@/core/i18n/locale-provider";
import { useTheme } from "@/core/theme/theme-provider";
import { CHART_HEIGHT_LG } from "@/core/constants/charts";
import { EChartsChart } from "@/components/reports/echarts-chart";
import {
  buildAllSubjectsMobileOption,
  buildAllSubjectsOption,
} from "@/components/reports/echarts-options";
import { useIsMobile } from "@/components/reports/use-is-mobile";
import type { SubjectDistribution } from "@/core/api";

type AllSubjectsChartProps = {
  distributions: SubjectDistribution[];
};

export function AllSubjectsChart({ distributions }: AllSubjectsChartProps) {
  const t = useTranslation();
  const { isDark } = useTheme();
  const isMobile = useIsMobile();

  const option = useMemo<EChartsOption>(() => {
    if (isMobile) {
      return buildAllSubjectsMobileOption(distributions, t, isDark);
    }
    return buildAllSubjectsOption(distributions, t, isDark);
  }, [distributions, t, isDark, isMobile]);

  const mobileHeight = distributions.length * 48 + 108;

  return (
    <EChartsChart
      option={option}
      className={isMobile ? "w-full" : `${CHART_HEIGHT_LG} w-full`}
      style={isMobile ? { height: mobileHeight } : undefined}
    />
  );
}

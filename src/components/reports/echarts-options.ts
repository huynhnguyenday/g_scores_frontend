import type { EChartsOption } from "echarts";
import { BAND_COLORS, SCORE_BAND_KEYS } from "@/core/constants/charts";
import type { Translations } from "@/core/i18n/translations";
import type { SubjectDistribution } from "@/core/api";

const baseGrid = {
  left: "3%",
  right: "4%",
  top: "10%",
  containLabel: true,
} as const;

function getChartPalette(isDark: boolean) {
  if (isDark) {
    return {
      tooltip: {
        backgroundColor: "#1e1f3e",
        borderColor: "#2a2a4e",
        textStyle: { color: "#e8eaf6" },
      },
      legendText: "#9ca3c9",
      axisLine: "#2a2a4e",
      axisLabel: "#9ca3c9",
      axisLabelStrong: "#e8eaf6",
      splitLine: "#2a2a4e",
    };
  }
  return {
    tooltip: {
      backgroundColor: "#ffffff",
      borderColor: "#d5daf0",
      textStyle: { color: "#12152e" },
    },
    legendText: "#5c648a",
    axisLine: "#d5daf0",
    axisLabel: "#5c648a",
    axisLabelStrong: "#12152e",
    splitLine: "#e8ecfa",
  };
}

export function buildSingleSubjectOption(
  distribution: SubjectDistribution,
  t: Translations,
  isDark: boolean,
): EChartsOption {
  const palette = getChartPalette(isDark);
  const subjectName =
    t.subjects[distribution.subject] ?? distribution.subject;

  return {
    color: SCORE_BAND_KEYS.map((key) => BAND_COLORS[key]),
    animationDuration: 600,
    animationEasing: "cubicOut",
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      ...palette.tooltip,
    },
    legend: {
      bottom: 0,
      itemGap: 16,
      textStyle: { color: palette.legendText, fontSize: 12 },
    },
    grid: { ...baseGrid, bottom: "14%" },
    xAxis: {
      type: "category",
      data: [subjectName],
      axisLine: { lineStyle: { color: palette.axisLine } },
      axisTick: { show: false },
      axisLabel: { color: palette.axisLabelStrong, fontWeight: 600 },
    },
    yAxis: {
      type: "value",
      minInterval: 1,
      splitLine: {
        lineStyle: { color: palette.splitLine, type: "dashed" },
      },
      axisLabel: { color: palette.axisLabel },
    },
    series: SCORE_BAND_KEYS.map((key) => ({
      name: t.reports.bands[key],
      type: "bar",
      barMaxWidth: 56,
      itemStyle: { borderRadius: [4, 4, 0, 0] },
      emphasis: { focus: "series" },
      data: [distribution.bands[key]],
    })),
  };
}

export function buildAllSubjectsOption(
  distributions: SubjectDistribution[],
  t: Translations,
  isDark: boolean,
): EChartsOption {
  const palette = getChartPalette(isDark);
  const categories = distributions.map(
    (d) => t.subjects[d.subject] ?? d.subject,
  );

  return {
    color: SCORE_BAND_KEYS.map((key) => BAND_COLORS[key]),
    animationDuration: 700,
    animationEasing: "cubicOut",
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      ...palette.tooltip,
    },
    legend: {
      bottom: 0,
      itemGap: 12,
      textStyle: { color: palette.legendText, fontSize: 12 },
    },
    grid: { ...baseGrid, bottom: "20%" },
    xAxis: {
      type: "category",
      data: categories,
      axisLine: { lineStyle: { color: palette.axisLine } },
      axisTick: { show: false },
      axisLabel: {
        color: palette.axisLabel,
        fontSize: 11,
        rotate: 35,
        interval: 0,
      },
    },
    yAxis: {
      type: "value",
      minInterval: 1,
      splitLine: {
        lineStyle: { color: palette.splitLine, type: "dashed" },
      },
      axisLabel: { color: palette.axisLabel },
    },
    series: SCORE_BAND_KEYS.map((key) => ({
      name: t.reports.bands[key],
      type: "bar",
      stack: "bands",
      barMaxWidth: 36,
      emphasis: { focus: "series" },
      data: distributions.map((d) => d.bands[key]),
    })),
  };
}

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

function mobileBandLegendRows(
  palette: ReturnType<typeof getChartPalette>,
  t: Translations,
) {
  const textStyle = { color: palette.legendText, fontSize: 10 };
  const base = {
    orient: "horizontal" as const,
    left: "center",
    itemGap: 8,
    itemWidth: 10,
    itemHeight: 10,
    textStyle,
  };

  return [
    {
      ...base,
      bottom: 44,
      data: [t.reports.bands.gte8, t.reports.bands.from6to8],
    },
    {
      ...base,
      bottom: 18,
      data: [t.reports.bands.from4to6, t.reports.bands.lt4],
    },
  ];
}

const MOBILE_LEGEND_BOTTOM = 88;

const TOOLTIP_MARGIN = 10;

function mobileAxisTooltip(palette: ReturnType<typeof getChartPalette>) {
  return {
    trigger: "axis" as const,
    axisPointer: { type: "shadow" as const },
    confine: true,
    ...palette.tooltip,
    extraCssText:
      "max-width: min(280px, calc(100vw - 24px)); white-space: normal; word-break: break-word;",
    position(
      point: number[],
      _params: unknown,
      _dom: unknown,
      _rect: unknown,
      size: { contentSize: number[]; viewSize: number[] },
    ) {
      const [cw, ch] = size.contentSize;
      const [vw, vh] = size.viewSize;
      let x = point[0] - cw / 2;
      let y = point[1] - ch - 16;

      if (x < TOOLTIP_MARGIN) x = TOOLTIP_MARGIN;
      if (x + cw > vw - TOOLTIP_MARGIN) x = vw - cw - TOOLTIP_MARGIN;
      if (y < TOOLTIP_MARGIN) y = point[1] + 16;
      if (y + ch > vh - TOOLTIP_MARGIN) y = vh - ch - TOOLTIP_MARGIN;

      return [x, y];
    },
  };
}

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

export function buildSingleSubjectMobileOption(
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
    tooltip: mobileAxisTooltip(palette),
    legend: mobileBandLegendRows(palette, t),
    grid: {
      left: "3%",
      right: "4%",
      top: "8%",
      bottom: MOBILE_LEGEND_BOTTOM,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [subjectName],
      axisLine: { lineStyle: { color: palette.axisLine } },
      axisTick: { show: false },
      axisLabel: { color: palette.axisLabelStrong, fontWeight: 600, fontSize: 11 },
    },
    yAxis: {
      type: "value",
      minInterval: 1,
      splitLine: {
        lineStyle: { color: palette.splitLine, type: "dashed" },
      },
      axisLabel: { color: palette.axisLabel, fontSize: 10 },
    },
    series: SCORE_BAND_KEYS.map((key) => ({
      name: t.reports.bands[key],
      type: "bar",
      barMaxWidth: 48,
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

export function buildAllSubjectsMobileOption(
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
    tooltip: mobileAxisTooltip(palette),
    legend: mobileBandLegendRows(palette, t),
    grid: {
      left: 4,
      right: 12,
      top: 8,
      bottom: MOBILE_LEGEND_BOTTOM,
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 1,
      splitLine: {
        lineStyle: { color: palette.splitLine, type: "dashed" },
      },
      axisLabel: { color: palette.axisLabel, fontSize: 10 },
    },
    yAxis: {
      type: "category",
      data: categories,
      axisLine: { lineStyle: { color: palette.axisLine } },
      axisTick: { show: false },
      axisLabel: {
        color: palette.axisLabelStrong,
        fontSize: 11,
        width: 72,
        overflow: "truncate",
      },
    },
    series: SCORE_BAND_KEYS.map((key) => ({
      name: t.reports.bands[key],
      type: "bar",
      stack: "bands",
      barMaxWidth: 18,
      emphasis: { focus: "series" },
      data: distributions.map((d) => d.bands[key]),
    })),
  };
}

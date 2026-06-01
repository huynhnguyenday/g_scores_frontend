"use client";

import type { EChartsOption } from "echarts";
import dynamic from "next/dynamic";
import { ChartSkeleton } from "@/components/ui/chart-skeleton";

const ECharts = dynamic(() => import("@/components/reports/echarts-lazy"), {
  ssr: false,
  loading: () => <ChartSkeleton size="md" />,
});

type EChartsChartProps = {
  option: EChartsOption;
  className?: string;
  style?: React.CSSProperties;
};

export function EChartsChart({ option, className, style }: EChartsChartProps) {
  return (
    <div className={className} style={style}>
      <ECharts
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "canvas" }}
        notMerge
        lazyUpdate
      />
    </div>
  );
}

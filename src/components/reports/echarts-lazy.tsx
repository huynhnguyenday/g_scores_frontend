"use client";

import type { ComponentProps } from "react";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { echarts } from "@/components/reports/echarts-core";

export default function EChartsLazy(
  props: ComponentProps<typeof ReactEChartsCore>,
) {
  return <ReactEChartsCore echarts={echarts} {...props} />;
}

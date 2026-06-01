import type { QueryClient } from "@tanstack/react-query";
import { prefetchEcharts } from "@/components/reports/prefetch-echarts";
import { prefetchReportsData } from "@/components/reports/prefetch-reports";

export function prefetchReportsPage(queryClient?: QueryClient) {
  prefetchEcharts();
  if (queryClient) {
    void prefetchReportsData(queryClient);
  }
}

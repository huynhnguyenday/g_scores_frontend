let prefetchPromise: Promise<unknown> | null = null;

export function prefetchEcharts() {
  if (typeof window === "undefined") return;
  if (!prefetchPromise) {
    prefetchPromise = import("./echarts-lazy");
  }
  return prefetchPromise;
}

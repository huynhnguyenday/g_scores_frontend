import type { QueryClient } from "@tanstack/react-query";
import {
  fetchAllSubjectsDistribution,
  fetchSubjectDistribution,
  fetchTopGroupA,
} from "@/core/api";

const DEFAULT_SUBJECT = "toan";

export function prefetchReportsData(queryClient: QueryClient) {
  return Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["reports", "distribution", DEFAULT_SUBJECT],
      queryFn: () => fetchSubjectDistribution(DEFAULT_SUBJECT),
    }),
    queryClient.prefetchQuery({
      queryKey: ["reports", "distribution-all"],
      queryFn: fetchAllSubjectsDistribution,
    }),
    queryClient.prefetchQuery({
      queryKey: ["reports", "top-group-a"],
      queryFn: fetchTopGroupA,
    }),
  ]);
}

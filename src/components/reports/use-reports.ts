import { useQuery } from "@tanstack/react-query";
import {
  fetchAllSubjectsDistribution,
  fetchSubjectDistribution,
  fetchTopGroupA,
} from "@/core/api";

const keys = {
  distribution: (subject: string) => ["reports", "distribution", subject] as const,
  distributionAll: () => ["reports", "distribution-all"] as const,
  topGroupA: () => ["reports", "top-group-a"] as const,
};

const reportQueryOptions = {
  staleTime: 5 * 60_000,
  gcTime: 10 * 60_000,
} as const;

export function useSubjectDistribution(subject: string) {
  return useQuery({
    queryKey: keys.distribution(subject),
    queryFn: () => fetchSubjectDistribution(subject),
    ...reportQueryOptions,
  });
}

export function useAllSubjectsDistribution() {
  return useQuery({
    queryKey: keys.distributionAll(),
    queryFn: fetchAllSubjectsDistribution,
    ...reportQueryOptions,
  });
}

export function useTopGroupA() {
  return useQuery({
    queryKey: keys.topGroupA(),
    queryFn: fetchTopGroupA,
    ...reportQueryOptions,
  });
}

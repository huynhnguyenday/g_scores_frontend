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

export function useSubjectDistribution(subject: string) {
  return useQuery({
    queryKey: keys.distribution(subject),
    queryFn: () => fetchSubjectDistribution(subject),
  });
}

export function useAllSubjectsDistribution() {
  return useQuery({
    queryKey: keys.distributionAll(),
    queryFn: fetchAllSubjectsDistribution,
  });
}

export function useTopGroupA() {
  return useQuery({
    queryKey: keys.topGroupA(),
    queryFn: fetchTopGroupA,
  });
}

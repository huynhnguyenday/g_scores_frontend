import { useMutation } from "@tanstack/react-query";
import { fetchScoreBySbd } from "@/core/api";

export function useScoreLookup() {
  return useMutation({
    mutationFn: fetchScoreBySbd,
  });
}

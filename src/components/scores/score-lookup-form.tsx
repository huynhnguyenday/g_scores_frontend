"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "@/core/i18n/locale-provider";
import { useScoreLookup } from "@/components/scores/use-score-lookup";
import { ScoreResultTable } from "@/components/scores/score-result-table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScoreResultSkeleton } from "@/components/ui/score-result-skeleton";

export function ScoreLookupForm() {
  const t = useTranslation();
  const [sbd, setSbd] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const { mutate, isPending, data, error, reset } = useScoreLookup();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = sbd.trim();

    if (!trimmed) {
      setValidationError(t.search.validationRequired);
      reset();
      return;
    }

    setValidationError(null);
    mutate(trimmed);
  }

  const displayError = validationError ?? error?.message ?? null;

  return (
    <>
      <Card title={t.search.lookupTitle}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-4"
        >
          <div className="flex flex-1 flex-col gap-3">
            <label
              htmlFor="sbd"
              className="block text-sm font-medium text-g-text"
            >
              {t.search.label}
            </label>
            <Input
              id="sbd"
              type="text"
              value={sbd}
              onChange={(e) => setSbd(e.target.value)}
              placeholder={t.search.placeholder}
              autoComplete="off"
            />
          </div>
          <Button type="submit" disabled={isPending} className="shrink-0 sm:mb-0.5">
            {isPending ? t.search.searching : t.search.submit}
          </Button>
        </form>
      </Card>

      <Card title={t.search.resultsTitle}>
        {displayError && (
          <p className="rounded-md bg-red-500/15 px-3 py-2 text-sm text-red-400">
            {displayError}
          </p>
        )}
        {!displayError && !data && !isPending && (
          <p className="text-g-text-muted">{t.search.resultsEmpty}</p>
        )}
        {isPending && !displayError && <ScoreResultSkeleton />}
        {data && !displayError && !isPending && (
          <ScoreResultTable score={data} />
        )}
      </Card>
    </>
  );
}

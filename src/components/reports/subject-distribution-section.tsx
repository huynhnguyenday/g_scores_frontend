"use client";

import { useState } from "react";
import { SUBJECT_KEYS } from "@/core/i18n/translations";
import { useLocale, useTranslation } from "@/core/i18n/locale-provider";
import { useSubjectDistribution } from "@/components/reports/use-reports";
import { ScoreDistributionChart } from "@/components/reports/score-distribution-chart";
import { Card } from "@/components/ui/card";
import { ChartSkeleton } from "@/components/ui/chart-skeleton";
import { ErrorAlert } from "@/components/ui/error-alert";
import { Select } from "@/components/ui/select";

const DEFAULT_SUBJECT = "toan";

export function SubjectDistributionSection() {
  const { locale } = useLocale();
  const t = useTranslation();
  const [subject, setSubject] = useState(DEFAULT_SUBJECT);
  const { data, isPending, isFetching, isError, error } =
    useSubjectDistribution(subject);
  const showSkeleton = isPending && !data;

  return (
    <Card title={t.reports.subjectTitle}>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label htmlFor="subject" className="text-sm font-medium text-g-text">
          {t.reports.selectSubject}
        </label>
        <Select
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={isFetching}
        >
          {SUBJECT_KEYS.map((key) => (
            <option key={key} value={key}>
              {t.subjects[key]}
            </option>
          ))}
        </Select>
        {data && !showSkeleton && (
          <span className="text-sm text-g-text-muted">
            {t.reports.totalStudents}{" "}
            <strong className="text-g-text">
              {data.totalWithScore.toLocaleString(
                locale === "vi" ? "vi-VN" : "en-US",
              )}
            </strong>
          </span>
        )}
      </div>

      {isError && (
        <ErrorAlert message={error?.message ?? t.reports.subjectLoadError} />
      )}

      {showSkeleton && !isError && <ChartSkeleton size="md" />}

      {!showSkeleton && !isError && data && (
        <ScoreDistributionChart distribution={data} />
      )}
    </Card>
  );
}

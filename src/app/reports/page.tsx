import { AllSubjectsChartSection } from "@/components/reports/all-subjects-chart-section";
import { SubjectDistributionSection } from "@/components/reports/subject-distribution-section";
import { TopGroupATableSection } from "@/components/reports/top-group-a-table-section";

export default function ReportsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <SubjectDistributionSection />
      <AllSubjectsChartSection />
      <TopGroupATableSection />
    </div>
  );
}

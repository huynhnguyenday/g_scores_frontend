import { ScoreLookupForm } from "@/components/scores/score-lookup-form";

export default function SearchPage() {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4 min-[440px]:gap-6 md:mx-auto">
      <ScoreLookupForm />
    </div>
  );
}

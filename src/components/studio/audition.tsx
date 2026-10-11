import { useDaw } from "@/daw/store";
import type { Audition } from "@/daw/types";

const OPTIONS: { id: Audition; label: string }[] = [
  { id: "stems", label: "Stems" },
  { id: "instruments", label: "Instruments" },
  { id: "both", label: "Both" },
];

export function AuditionBar() {
  const audition = useDaw((state) => state.project.audition);
  const split = useDaw((state) => state.project.tracks.some((track) => track.origin !== "user"));
  if (!split) return null;
  return (
    <div className="flex rounded-md border border-line p-0.5" role="group" aria-label="Audition">
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          className={`h-10 px-2 text-xs ${audition === option.id ? "rounded-sm bg-amber text-amber-ink" : "text-muted"}`}
          aria-pressed={audition === option.id}
          onClick={() => useDaw.getState().setAudition(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

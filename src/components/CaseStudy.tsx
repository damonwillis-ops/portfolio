import type { CaseStudy as CaseStudyData } from "../content/caseStudies"
import { DataFoundationDiagram, EvalLoopDiagram } from "./Diagram"

interface Props {
  study: CaseStudyData
  expanded: boolean
  onToggle: (id: string) => void
}

export function CaseStudy({ study, expanded, onToggle }: Props) {
  const detailId = `${study.id}-detail`

  return (
    <article id={study.id} className="scroll-mt-24 border-t border-border py-9 first:border-t-0">
      <button
        type="button"
        aria-expanded={expanded}
        aria-controls={detailId}
        onClick={() => onToggle(study.id)}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <div>
          <div className="mb-2 font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
            {study.tag}
          </div>
          <h3 className="font-display text-[1.6rem] leading-snug text-text sm:text-[1.85rem]">
            {study.title}
          </h3>
        </div>
        <span
          aria-hidden="true"
          className={`mt-2 shrink-0 font-mono text-lg text-text-dim transition-transform duration-300 ${
            expanded ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <div className="mb-1 font-mono text-[0.66rem] tracking-[0.1em] text-text-dim uppercase">
            Problem
          </div>
          <p className="text-[0.98rem] leading-relaxed text-text">{study.summary.problem}</p>
        </div>
        <div>
          <div className="mb-1 font-mono text-[0.66rem] tracking-[0.1em] text-text-dim uppercase">
            Outcome
          </div>
          <p className="text-[0.98rem] leading-relaxed text-text">{study.summary.outcome}</p>
        </div>
      </div>

      <div className={`accordion-rows ${expanded ? "is-open" : ""}`}>
        <div>
          <div id={detailId} className="pt-6 text-text-dim">
            <div className="max-w-[68ch] space-y-4">
              <p className="leading-relaxed">{study.detail.problem}</p>
              <p className="leading-relaxed">{study.detail.solution}</p>
            </div>
            {study.diagram === "eval-loop" && <EvalLoopDiagram />}
            {study.diagram === "data-foundation" && <DataFoundationDiagram />}
            <p className="mt-4 max-w-[68ch] leading-relaxed">{study.detail.outcome}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

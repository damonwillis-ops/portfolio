import { useEffect, useState } from "react"
import { caseStudies } from "../content/caseStudies"
import { CaseStudy } from "./CaseStudy"

export function Work() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace("#", "")
      if (caseStudies.some((s) => s.id === id)) {
        setExpandedIds((prev) => new Set(prev).add(id))
      }
    }
    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        if (window.location.hash === `#${id}`) {
          history.replaceState(null, "", window.location.pathname + window.location.search)
        }
      } else {
        next.add(id)
        history.replaceState(null, "", `#${id}`)
      }
      return next
    })
  }

  const allExpanded = expandedIds.size === caseStudies.length

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedIds(new Set())
    } else {
      setExpandedIds(new Set(caseStudies.map((s) => s.id)))
    }
  }

  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="mb-2 font-mono text-[0.72rem] tracking-[0.16em] text-accent uppercase">
            The Work
          </div>
          <h2 className="max-w-[26ch] font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-tight text-text">
            Problem, what I did, outcome. Expand for the detail.
          </h2>
        </div>
        <button
          type="button"
          onClick={toggleAll}
          className="shrink-0 border border-border px-4 py-2 font-mono text-[0.72rem] tracking-[0.08em] text-text-dim uppercase transition-colors hover:border-accent hover:text-accent print:hidden"
        >
          {allExpanded ? "Collapse all" : "Expand all"}
        </button>
      </div>

      <div>
        {caseStudies.map((study) => (
          <CaseStudy
            key={study.id}
            study={study}
            expanded={expandedIds.has(study.id)}
            onToggle={toggle}
          />
        ))}
      </div>
    </section>
  )
}

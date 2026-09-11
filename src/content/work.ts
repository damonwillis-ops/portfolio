// Selected Work. Every visual is a schematic redrawn by Damon's hand on this
// site, never a screenshot: the source systems ran on proprietary operational
// data (positioning.md hard rule 10). Sources: evidence-bank.md A2, A4, A12,
// A18; technical-evidence.md sections 1, 2, 5, 6.

export type WorkDiagram =
  | "validation-gate"
  | "lineage"
  | "eval-loop"
  | "standard-card"
  | "package-library"

export interface WorkItem {
  id: string
  kicker: string
  title: string
  body: string
  notes: string[]
  diagram: WorkDiagram
}

export const workNote =
  "Schematics are redrawn, not screenshots. The source systems ran on proprietary operational data, so nothing on this page comes from them."

export const selectedWork: WorkItem[] = [
  {
    id: "validation-gate",
    kicker: "Design validation platform",
    title: "A quality gate designers couldn't route around",
    body: "Outside designers submitted packages with no self-check and no visibility into their own error rates. I built a self-submission platform, with one teammate, that checks design metadata against **12** reference tables and returns every error to the designer.",
    notes: [
      "**80%** pass threshold, enforced as a gate. Below it, a package could not advance to vendor submission.",
      "**24** designers active. Error rates visible per designer and per firm for the first time.",
      "I wrote a rule excluding the tool's own scores from the program's performance metrics, so it could never flatter the scoreboard.",
      "Recognized with a 2026 company innovation award, given to the two of us.",
    ],
    diagram: "validation-gate",
  },
  {
    id: "lineage",
    kicker: "One idea, four tools",
    title: "Automated quality gates on design work, iterated",
    body: "Each tool took the same idea one step further: survey QA, then design validation, then a design-assurance engine, then an evaluation harness for AI output. The design-assurance engine is deterministic on purpose.",
    notes: [
      "A gate has to be checkable, not probabilistic. That is why the design-assurance tool is a rules engine and not a model.",
      "Measured against an observed human baseline, then normalized against myself: **45%** less time per project on the two QA phases the tools touched.",
    ],
    diagram: "lineage",
  },
  {
    id: "eval-loop",
    kicker: "AI evaluation harness",
    title: "Proving the AI still worked",
    body: "Once leadership started acting on AI-generated answers, nobody could tell whether those answers were improving or quietly degrading. I built the measurement layer: a gold set of known answers, fresh answers every run, a second model grading them, and per-pair regression detection.",
    notes: [
      "Retrieval tuning scored on precision, recall, and F1 against a labeled benchmark. A configuration is promoted only when it beats baseline.",
      "Honest over complete: I deleted four of my own agents that existed only to report themselves healthy. The orchestration platform went from **21** agents to **17**, and the dashboard stopped flattering itself.",
    ],
    diagram: "eval-loop",
  },
  {
    id: "standard-card",
    kicker: "Standards authorship",
    title: "A standard a human can follow, an auditor can test, and an agent can read",
    body: "Enterprise design standards existed as prose. I wrote a template where every requirement carries a unique ID, declarative shall-and-must language, its own compliance measurement, and a formal exception path, then added a summary layer written for AI retrieval.",
    notes: [
      "Compliance is measured per requirement, not per package.",
      "Exceptions need a named approval authority and a risk assessment.",
    ],
    diagram: "standard-card",
  },
  {
    id: "package-library",
    kicker: "Modular design library",
    title: "Projects assembled from priced packages",
    body: "Designing every store from scratch doesn't scale, and it makes competitive bidding impossible. We standardized by store prototype, then decomposed the work into cost-coded scope packages, each carrying its own equipment and labor.",
    notes: [
      "Every bidder priced the same defined thing.",
      "A project became an assembly of packages instead of a drawing exercise.",
    ],
    diagram: "package-library",
  },
]

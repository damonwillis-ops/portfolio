// Selected Systems. Every visual is a schematic redrawn by Damon's hand on
// this site, never a screenshot: the source systems ran on proprietary
// operational data (positioning.md hard rule 10). Sources: evidence-bank.md
// A2, A4, A12, A18; technical-evidence.md sections 1, 2, 5, 6.
//
// 2026-09-11: compressed to title / one sentence / one proof point per card,
// with supporting notes moved behind "Explore." This section is a visual
// index of additional technical work, not a second set of case studies.

export type WorkDiagram =
  | "validation-gate"
  | "eval-loop"
  | "standard-card"
  | "package-library"
  | "lineage"

export interface WorkItem {
  id: string
  kicker: string
  title: string
  sentence: string
  proof: string
  detail: string[]
  diagram: WorkDiagram
}

export const workNote =
  "Schematics are redrawn, not screenshots. The source systems ran on proprietary operational data, so nothing on this page comes from them."

export const selectedWork: WorkItem[] = [
  {
    id: "validation-gate",
    kicker: "01",
    title: "Design Validation Platform",
    sentence:
      "A self-submission platform, built with one teammate, that checks design metadata against the program's reference tables and returns every error to the designer.",
    proof: "Recognized with a 2026 company innovation award.",
    detail: [
      "**80%** pass threshold, enforced as a gate. Below it, a package could not advance to vendor submission.",
      "I wrote a rule excluding the tool's own scores from the program's performance metrics, so it could never flatter the scoreboard.",
    ],
    diagram: "validation-gate",
  },
  {
    id: "eval-loop",
    kicker: "02",
    title: "AI Evaluation Harness",
    sentence:
      "The measurement layer that decides whether AI output is improving or quietly degrading: a gold set of known answers, fresh answers every run, a second model grading them.",
    proof: "Orchestration platform cut from 21 agents to 17 after removing four that only reported themselves healthy.",
    detail: [
      "Retrieval tuning scored on precision, recall, and F1 against a labeled benchmark. A configuration is promoted only when it beats baseline.",
    ],
    diagram: "eval-loop",
  },
  {
    id: "standard-card",
    kicker: "03",
    title: "Standards / Requirements Architecture",
    sentence:
      "Enterprise design standards rebuilt so every requirement carries a unique ID, declarative shall-and-must language, and its own compliance measurement, plus a summary layer written for AI retrieval.",
    proof: "Compliance is measured per requirement, not per package.",
    detail: ["Exceptions need a named approval authority and a risk assessment."],
    diagram: "standard-card",
  },
  {
    id: "package-library",
    kicker: "04",
    title: "Modular Design Library",
    sentence:
      "Store designs standardized by prototype, then decomposed into cost-coded scope packages instead of one-off drawings.",
    proof: "Every bidder priced the same defined thing.",
    detail: ["A project became an assembly of packages instead of a drawing exercise."],
    diagram: "package-library",
  },
  {
    id: "lineage",
    kicker: "05",
    title: "Automated Quality Gates",
    sentence:
      "Four tools, one idea, each taking design QA one step further: survey QA, design validation, a design-assurance engine, then an AI evaluation harness.",
    proof: "45% less time per project on the two QA phases the tools touched, benchmarked against my own baseline.",
    detail: [
      "A gate has to be checkable, not probabilistic. That is why the design-assurance tool is a rules engine and not a model.",
    ],
    diagram: "lineage",
  },
]

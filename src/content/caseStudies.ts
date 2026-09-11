// Three case studies (cut from four 2026-09-11 — the ROI/adoption story is
// folded into case 02, where that business case actually happened, not
// removed). Sourced from ~/knowledge/career/evidence-bank.md and
// master-profile.md. **text** marks evidence and renders amber.
//
// Fixed structure per case: PROBLEM (2-4 sentences) / SYSTEM (3-5 bullets) /
// SCALE (large metrics) / RESULT (2-3 outcomes) / TAKEAWAY (one sentence).
// A reader should get the whole case in ~30-45 seconds from that alone.
// `detail` is the deeper material — the original long-form blocks — behind
// an "Explore" disclosure, collapsed by default.

import type { Metric } from "./site"

export interface Step {
  label: string
  sub?: string
}

export type Block =
  | { kind: "text"; heading?: string; paras: string[] }
  | { kind: "points"; heading: string; items: { title: string; body: string }[] }
  | { kind: "tags"; heading: string; items: string[] }
  | { kind: "quote"; text: string }
  | { kind: "flow"; heading?: string; steps: Step[]; caption?: string }
  | { kind: "beforeAfter"; heading?: string; before: string[]; after: string[]; caption?: string }
  | { kind: "diagram"; id: "system-map" | "asset-record"; caption: string }
  | { kind: "questions"; heading: string; items: string[]; caption: string }

export interface CaseStudy {
  id: string
  num: string
  label: string
  title: string
  dek: string
  role?: string
  problem: string
  system: string[]
  scale: Metric[]
  result: string[]
  takeaway: string
  detail: Block[]
}

export const workIntro = {
  label: "Case studies",
  title: "The work",
  lead: "Three problems from the physical side of enterprise technology. In each one, a system had to change, not just a tool that had to be installed.",
}

export const caseStudies: CaseStudy[] = [
  {
    id: "walmart-scale",
    num: "01",
    label: "Enterprise scale",
    title: "Transforming Security at Walmart Scale",
    dek: "The job was never just designing cameras. It was running a security design program inside a system where no single team owned the whole problem.",
    role: "Walmart · Senior Manager, Global Security Strategy & Innovation · 2024–2026",
    problem:
      "Designing a camera layout was the easy part. Getting the right system into **800+** stores a year meant holding standards, capital, equipment, labor, integrators, construction schedules, and lifecycle at once, and none of it belonged to one team. Asset Protection, Risk, Realty, Construction, GSOC, Investigations, and Claims all had a claim on the design.",
    system: [
      "Standards and a modular design library: SOPs and a Basis of Design vendors were contractually bound to, decomposed into cost-coded scope packages by store prototype.",
      "The quality gate: primary QA/QC and design authority over architects of record and outside vendors, on every package.",
      "Construction administration: RFIs, submittal review, as-builts, and closeout walks, on every project, not selectively.",
      "One standard, four countries: took the program into Canada, Mexico, and India forward-only, no remediation of divergent estates.",
      "Computer vision and LPR, pilot to pattern: a hazard-detection reference store followed by **19** more, plus an enterprise LPR program supporting Amber Alert response.",
    ],
    scale: [
      { value: "$327M", label: "Physical security capital program" },
      { value: "1,600+", label: "Engineered designs a year" },
      { value: "800+", label: "Remodel projects a year" },
      { value: "4,600+", label: "Locations" },
      { value: "3", label: "Internal team members" },
      { value: "7", label: "Embedded team members" },
      { value: "4", label: "Countries: U.S., Canada, Mexico, India" },
    ],
    result: [
      "One installation package a crew could build from, without calling the designer.",
      "A single global standard operating across four countries, not four divergent ones.",
      "A computer-vision reference pattern replicated to 19 more stores.",
    ],
    takeaway: "I do my best work inside complex systems where no single team owns the whole problem.",
    detail: [
      {
        kind: "diagram",
        id: "system-map",
        caption: "Every group on the ring had a claim on the design. None of them owned all of it. Hover a group to trace its line.",
      },
      {
        kind: "tags",
        heading: "What the program had to hold at once",
        items: [
          "Enterprise standards",
          "Design systems",
          "Capital planning",
          "Equipment decisions",
          "Labor",
          "Integrators",
          "Business functions",
          "Construction",
          "Operations",
          "Technology",
          "International teams",
          "Lifecycle management",
        ],
      },
    ],
  },
  {
    id: "cad-to-digital",
    num: "02",
    label: "Operating model",
    title: "From CAD to Digital Security Infrastructure",
    dek: "The important accomplishment wasn't implementing a platform. It was changing the operating system of the organization around security design, and proving the enterprise would pay for it.",
    role: "J.B. Hunt, then Walmart · 2023–2026",
    problem:
      "Designs arrived as AutoCAD drawings and PDFs. Everything the design knew, which devices, what make and model, where each one went, was locked inside the file, and it stayed there at handoff. **0%** of site data carried between project phases, roughly **400** active projects moved with no audit trail, and the enterprise lost **$200K–$400K** a quarter to rework and resurveys.",
    system: [
      "Proved small first: took a lifecycle and asset management platform from zero to full deployment inside a **$60M**, **150**-project portfolio at J.B. Hunt.",
      "Then enterprise-wide: proposed and drove the platform as the system of record across **4,500+** locations, aligning five business functions to one operating model.",
      "Full procurement, owned: competitive evaluation, hands-on testing of competing platforms, legal negotiation, and enterprise governance approval, every stage from market scan to signed contract.",
      "Self-funding by design: **$200** a site, embedded in remodel budgets that already existed. No new capital request, no new headcount.",
      "A standard that knows itself: rebuilt the Basis of Design from a static document into a queryable, API-readable structure, with every requirement carrying a unique ID.",
    ],
    scale: [
      { value: "0%", label: "Site data retained between phases, before" },
      { value: "~400", label: "Active projects with no audit trail, before" },
      { value: "$200K–$400K", label: "Lost each quarter to rework, before" },
      { value: "4,500+", label: "Locations on one system of record, after" },
      { value: "$800K–$1.6M", label: "Annual savings", note: "approved business case" },
      { value: "30%", label: "Faster project cycles", note: "approved business case" },
    ],
    result: [
      "4,500+ locations on one system of record, aligned across five business functions.",
      "$800K–$1.6M a year in savings and 30% faster project cycles, self-funded, no new budget or headcount.",
      "Design standards structured for API and agent retrieval, not just human reading.",
    ],
    takeaway:
      "The platform was the tool. The deliverable was a different way of working, and a business case an enterprise would actually fund.",
    detail: [
      {
        kind: "beforeAfter",
        heading: "The transformation",
        before: ["Manual CAD", "Fragmented information", "Limited lifecycle visibility"],
        after: [
          "Digital system design",
          "Integrated asset information",
          "Enterprise collaboration",
          "Structured data",
          "AI-ready infrastructure",
        ],
        caption: "One eight-step chain, split at the point where the operating model changed.",
      },
      {
        kind: "points",
        heading: "How the case was built, and held after launch",
        items: [
          {
            title: "Sponsor before build",
            body: "A director-grade decision brief, and executive sponsorship secured before rollout, not after.",
          },
          {
            title: "Governance that outlasts launch",
            body: "Defined the model separating tool deployment from program ownership, so adoption held after go-live.",
          },
          {
            title: "Done twice",
            body: "At Windstream, the same chain ran for the platform behind a 24/7 SOC. The first platform implemented didn't serve the SOC the way it needed to; re-evaluated and deployed Genetec Security Center as the operational backbone instead.",
          },
        ],
      },
      { kind: "quote", text: "A Word file can't tell you anything about itself." },
    ],
  },
  {
    id: "device-records",
    num: "03",
    label: "Asset intelligence",
    title: "Turning Invisible Assets Into Enterprise Data",
    dek: "The devices existed. The records didn't.",
    role: "Walmart · 2024–2026",
    problem:
      "Before this program, nobody had a reliable enterprise-level answer to what devices existed, where they were, what type or manufacturer, what metadata described them, or their lifecycle status.",
    system: [
      "Launched the company's first enterprise security device mapping program: every device captured as a structured record with images and metadata, **450,000+** a year.",
      "Validated before it lands: a platform checked every submitted design's metadata against **12** reference tables; below an **80%** pass, the package returned to the designer with each error listed.",
      "Visible by designer and firm: error rates tracked per designer and per firm across **24** active designers, turning vendor accountability into a number.",
      "Drove the data backbone: worked with the technology organization to deliver security device data into BigQuery, surfacing in Power BI, the company's first enterprise data backbone for physical security devices.",
    ],
    scale: [
      { value: "450,000+", label: "Device records captured a year, with images and metadata" },
      { value: "12", label: "Reference tables validated against" },
      { value: "80%", label: "Pass threshold to advance to vendor submission" },
      { value: "24", label: "Active designers tracked by error rate" },
    ],
    result: [
      "450,000+ structured device records captured a year, each with images and metadata.",
      "First enterprise data backbone for physical security devices, BigQuery to Power BI.",
      "Vendor quality became a number, not an opinion.",
    ],
    takeaway: "Visibility first. Intelligence second. There's no shortcut through the first one.",
    detail: [
      {
        kind: "flow",
        heading: "From the wall to the model",
        steps: [
          { label: "Physical asset", sub: "the device on the wall" },
          { label: "Digital record", sub: "captured, imaged, tagged" },
          { label: "Enterprise dataset", sub: "BigQuery, Power BI" },
          { label: "Operational intelligence", sub: "coverage and lifecycle visible" },
          { label: "AI-ready infrastructure", sub: "structured, trusted, queryable" },
        ],
      },
      {
        kind: "diagram",
        id: "asset-record",
        caption: "Illustrative record structure. Field values are examples; no production data is shown.",
      },
      {
        kind: "questions",
        heading: "Questions with no enterprise answer, before",
        items: [
          "What devices exist?",
          "Where are they?",
          "What type are they?",
          "What manufacturer and model?",
          "What metadata exists?",
          "What image represents the asset?",
          "What is its lifecycle status?",
        ],
        caption: "None of these had a reliable answer at enterprise level before the program.",
      },
    ],
  },
]

// Four case studies, each sourced from ~/knowledge/career/evidence-bank.md and
// master-profile.md. Entry references: A1, A2, A3b, A5, A6, A7, A10, A12-A18.
// **text** marks evidence and renders amber. See site.ts header for standing
// constraints.

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
  lead?: Metric
  stats?: Metric[]
  blocks: Block[]
  takeaway: string
}

export const workIntro = {
  label: "Case studies",
  title: "The work",
  lead: "Four problems from the physical side of enterprise technology. In each one, a system had to change, not just a tool that had to be installed.",
}

export const caseStudies: CaseStudy[] = [
  {
    id: "walmart-scale",
    num: "01",
    label: "Enterprise scale",
    title: "Transforming Security at Walmart Scale",
    dek: "The job was never just designing cameras. It was running a security design program inside a system where no single team owned the whole problem.",
    role: "Walmart · Senior Manager, Global Security Strategy & Innovation · 2024–2026",
    stats: [
      { value: "$327M", label: "Physical security capital program" },
      { value: "1,600+", label: "Engineered CCTV and life-safety designs a year" },
      { value: "800+", label: "Remodel projects a year" },
      { value: "4,600+", label: "Locations" },
      { value: "3", label: "Internal team members" },
      { value: "7", label: "Embedded team members" },
      { value: "Multiple", label: "Integrator relationships" },
      { value: "4", label: "Countries: U.S., Canada, Mexico, India" },
    ],
    blocks: [
      {
        kind: "text",
        heading: "The problem wasn't the camera.",
        paras: [
          "Designing a camera layout is the easy part. Getting the right system into **800+** stores a year means holding standards, capital, equipment, labor, integrators, construction schedules, store operations, international teams, and the lifecycle of every device at the same time.",
          "Each of those belonged to someone else. Asset Protection, Risk, Realty, Construction, GSOC, Investigations, and Claims all had a claim on the design. My job was the process that turned their competing requirements into one installation package a crew could build from without calling the designer.",
        ],
      },
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
      {
        kind: "points",
        heading: "What I ran",
        items: [
          {
            title: "Standards that bound vendors",
            body: "My team's SOPs, the Basis of Design we maintained, and our sample design packages were the directive global procurement wrote its bid requirements to. Every awarded vendor was contractually bound to them.",
          },
          {
            title: "A modular design library",
            body: "Standardized by store prototype down to specific cameras, mounts, and layouts, then broke the work into cost-coded scope packages, from a full system upgrade to single-area modules, each carrying its own equipment and labor.",
          },
          {
            title: "The quality gate",
            body: "Primary QA/QC for every design package, and the internal security authority over architects of record and outside design vendors. Owner-furnished equipment, with approved alternates decided by my team, not the installer.",
          },
          {
            title: "Construction administration",
            body: "RFIs, submittal and product data review, as-builts corrected to what was actually installed, and closeout site walks with contractors. On every project, not selectively.",
          },
          {
            title: "One standard, four countries",
            body: "Took the program into Canada, Mexico, and India with in-market security leaders who didn't report to me. Forward-only: no remediation of three divergent estates, one go-forward standard for all of them.",
          },
          {
            title: "Computer vision, pilot to pattern",
            body: "Led a two-market computer vision rollout that detects in-store hazards and alerts the store to act before anyone gets hurt. The driver was liability, not theft. My team built the reference store; the next **19** followed its pattern.",
          },
          {
            title: "License plate recognition",
            body: "An enterprise LPR program across store parking lots whose data supports Amber Alert response. My team selected the cameras, ran the deployment, and validated read accuracy against real plates, day and night.",
          },
        ],
      },
    ],
    takeaway: "I do my best work inside complex systems where no single team owns the whole problem.",
  },
  {
    id: "cad-to-digital",
    num: "02",
    label: "Operating model",
    title: "From CAD to Digital Security Infrastructure",
    dek: "The important accomplishment wasn't implementing a platform. It was changing the operating system of the organization around security design.",
    role: "J.B. Hunt, then Walmart · 2023–2026",
    stats: [
      { value: "0%", label: "Site data retained between project phases, before" },
      { value: "~400", label: "Active projects moving with no audit trail, before" },
      { value: "$200K–$400K", label: "Lost each quarter to rework and resurveys, before" },
      { value: "4,500+", label: "Locations on one system of record, after" },
    ],
    blocks: [
      {
        kind: "text",
        heading: "The package died on delivery.",
        paras: [
          "Designs arrived as AutoCAD drawings and PDFs. Everything the design knew, which devices, what make and model, where each one went, was locked inside the drawing. When the package was handed off, the knowledge stopped there.",
          "GSOC, Investigations, Claims, and the design team itself all lost the data at the moment of delivery. Design intent, as-built reality, and operational data drifted apart and were never reconciled.",
        ],
      },
      {
        kind: "points",
        heading: "What the legacy model cost",
        items: [
          { title: "Collaboration", body: "Security data fragmented across systems, vendors, and project phases." },
          { title: "Consistency", body: "Quality depended on who drew the package. No one could see error rates by designer or firm." },
          { title: "Information access", body: "Design data was invisible to leadership and unusable for enterprise decisions." },
          { title: "Lifecycle visibility", body: "**0%** of site data carried from one project phase to the next." },
          { title: "Asset data", body: "No enterprise record of what was installed, where, or in what condition." },
          { title: "Scalability", body: "Roughly **400** active projects moving with no audit trail." },
        ],
      },
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
        heading: "How the operating model changed",
        items: [
          {
            title: "Proven small first",
            body: "At J.B. Hunt, took a lifecycle and asset management platform from zero to full deployment inside a **$60M**, **150**-project portfolio.",
          },
          {
            title: "Then enterprise-wide",
            body: "Proposed and drove SiteOwl as the system of record across **4,500+** locations, aligning Security Technology, Asset Protection, GSOC, Real Estate, and Store Operations to one operating model.",
          },
          {
            title: "A standard that knows itself",
            body: "Rebuilt the program's Basis of Design from a static Word document into a queryable program site: standards, SOPs, survey data, and bid record in one structure. Later systems read it through an API, which only worked because it had been restructured first.",
          },
          {
            title: "Requirements with IDs",
            body: "Wrote the design standard so every requirement carries a unique ID and its own compliance measurement, plus a summary layer structured for AI agents to retrieve.",
          },
        ],
      },
      { kind: "quote", text: "A Word file can't tell you anything about itself." },
    ],
    takeaway: "The platform was the tool. The deliverable was a different way of working: design data that outlives the drawing.",
  },
  {
    id: "device-records",
    num: "03",
    label: "Asset intelligence",
    title: "Turning Invisible Assets Into Enterprise Data",
    dek: "The devices existed. The records didn't.",
    role: "Walmart · 2024–2026",
    lead: { value: "450,000+", label: "Device records captured a year, each with images and metadata" },
    blocks: [
      {
        kind: "questions",
        heading: "Questions with no enterprise answer",
        items: [
          "What devices exist?",
          "Where are they?",
          "What type are they?",
          "What manufacturer and model?",
          "What metadata exists?",
          "What image represents the asset?",
          "What is its lifecycle status?",
        ],
        caption: "Before the program, none of these had a reliable answer at enterprise level.",
      },
      {
        kind: "text",
        heading: "Building the record",
        paras: [
          "I launched the company's first enterprise security device mapping program. Every device captured as a structured record with supporting images and metadata, **450,000+** a year, flowing into a lifecycle platform as the system of record.",
          "Then I drove the requirement for an enterprise data backbone and worked with the technology organization to stand it up. Security device data flows into BigQuery and surfaces in Power BI: the first enterprise data backbone for physical security devices at the company.",
          "I didn't build the warehouse. I made sure there was high-integrity data worth putting in it.",
        ],
      },
      {
        kind: "diagram",
        id: "asset-record",
        caption: "Illustrative record structure. Field values are examples; no production data is shown.",
      },
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
        kind: "points",
        heading: "Integrity at the source",
        items: [
          {
            title: "Validated before it lands",
            body: "A validation platform checked every submitted design's metadata against **12** reference tables. Below an **80%** pass, the package went back to the designer with each error listed.",
          },
          {
            title: "Visible by designer and firm",
            body: "Error rates tracked per designer and per firm across **24** active designers. Vendor accountability became a number instead of an opinion.",
          },
        ],
      },
    ],
    takeaway: "Visibility first. Intelligence second. There's no shortcut through the first one.",
  },
  {
    id: "business-case",
    num: "04",
    label: "Adoption",
    title: "Turning Technology Into a Business Case",
    dek: "I don't just identify technology. I know how to get an enterprise to adopt it.",
    role: "Walmart and Windstream · two enterprise platform decisions",
    stats: [
      { value: "$800K–$1.6M", label: "Annual savings", note: "approved business case" },
      { value: "30%", label: "Faster project cycles", note: "approved business case" },
      { value: "$0", label: "New capital request" },
      { value: "$0", label: "New headcount" },
      { value: "$3–$5", label: "Returned per $1 spent" },
      { value: "$200", label: "Per site, inside existing remodel budgets" },
    ],
    blocks: [
      {
        kind: "flow",
        heading: "The adoption lifecycle, owned end to end",
        steps: [
          { label: "Technology evaluation" },
          { label: "Hands-on platform testing" },
          { label: "Business case" },
          { label: "Financial model" },
          { label: "Legal and contract negotiation" },
          { label: "Enterprise approval" },
          { label: "Implementation" },
          { label: "ROI" },
        ],
      },
      {
        kind: "text",
        heading: "Quantify the problem first",
        paras: [
          "Nobody had put a number on the data problem, so I did (see case study 02). Then I framed inaction as the enterprise risk: data not captured now is permanently lost.",
        ],
      },
      {
        kind: "points",
        heading: "How the case was built",
        items: [
          {
            title: "Self-funding by design",
            body: "**$200** a site, embedded in remodel budgets that already existed. No new budget, no new headcount, no capital request.",
          },
          {
            title: "Sponsor before build",
            body: "A director-grade decision brief, and executive sponsorship secured before rollout, not after.",
          },
          {
            title: "Full procurement, owned",
            body: "Competitive evaluation, hands-on testing of competing platforms, contract negotiation with legal counsel, and security and technology governance approval. Every stage from market scan to signed contract.",
          },
          {
            title: "Governance that outlasts launch",
            body: "Defined the model separating tool deployment from program ownership, so adoption held after go-live.",
          },
        ],
      },
      {
        kind: "text",
        heading: "Done twice",
        paras: [
          "At Windstream I ran the same chain for the platform behind a 24/7 SOC. The first platform we implemented didn't serve the SOC the way it needed to. I made the call to replace it, re-evaluated, and deployed Genetec Security Center as the operational backbone.",
        ],
      },
    ],
    takeaway: "The technology was the easy part. Adoption was the work.",
  },
]

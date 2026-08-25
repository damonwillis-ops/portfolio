// Sourced from ~/knowledge/career/evidence-bank.md (A1) and master-profile.md.
// The "measuring-the-ai" study is sourced from ~/knowledge/career/technical-evidence.md,
// sections 1 and 2, which trace every claim in it to a repo, a file, and a count.
// Two standing constraints from that file apply here: never state an agent
// headcount, and never call this model training. It is evaluation and tuning.
// Never link the repositories from this site — they run on proprietary data.
// Detail paragraphs are the full P/S/O; summary lines are the collapsed
// one-liners a scanning reader sees before expanding. Per Damon's brief,
// the summary has to carry real weight on its own, so both lines below
// carry a concrete number, not just a teaser.

export interface CaseStudy {
  id: string
  tag: string
  title: string
  summary: {
    problem: string
    outcome: string
  }
  detail: {
    problem: string
    solution: string
    outcome: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    id: "buyers-chair",
    tag: "The Buyer’s Chair",
    title: "Two enterprise platform decisions, owned start to finish",
    summary: {
      problem:
        "Windstream and Walmart each needed a platform-scale technology decision with no existing selection framework.",
      outcome:
        "Owned every stage from market scan to signed contract, twice, delivering the Windstream SOC backbone and $800K–$1.6M a year in savings at Walmart.",
    },
    detail: {
      problem:
        "Windstream needed a PSIM system to run a 24/7 SOC being built from nothing. Years later, Walmart needed a lifecycle management platform to replace static, siloed design data across 4,600+ locations, where capital decisions were being made on incomplete information.",
      solution:
        "Owned the full procurement lifecycle for both, start to finish: competitive market research, hands-on testing of competing platforms against each other, business case authorship, contract negotiation with legal counsel, and internal governance approval (SSP and Global Tech at Walmart, equivalent governance at Windstream). Not a champion who influenced someone else's decision. The owner of every stage from market scan to signed contract.",
      outcome:
        "Genetec Security Center deployed as the Windstream SOC backbone. A lifecycle management platform adopted enterprise-wide at Walmart, delivering $800K to $1.6M in annual savings across 4,500+ locations. $327M of budget authority sits behind the Walmart decision alone.",
    },
  },
  {
    id: "building-the-soc",
    tag: "The Operator",
    title: "A 24/7 SOC built from nothing, held through a vendor failure",
    summary: {
      problem:
        "Windstream needed 24/7 security operations for a Fortune 500 telecom, and none of it existed yet.",
      outcome:
        "Built the SOC from scratch, owned the full PSIM lifecycle on Genetec Security Center, and held zero downtime through a live cutover when the vendor missed milestones.",
    },
    detail: {
      problem:
        "A Fortune 500 telecom needed 24/7 security operations and a monitoring backbone built from nothing. No SOC, no access control platform, no PSIM, no protocols.",
      solution:
        "Built and led the SOC from scratch: hired, trained, and managed the operations team, authored security policies and SOPs, owned departmental key management. Implemented C-CURE 9000 as the primary access control platform, then evaluated commercial PSIM offerings, selected Genetec Security Center, and programmed, configured, and deployed it end to end as the operational backbone, establishing all monitoring, triage, and incident response protocols including data center and critical infrastructure coverage. During the live cutover, the vendor missed critical milestones and a two-way system communication gap surfaced mid-deployment. Ran two tracks at once: augmented operational processes to hold full monitoring coverage through the gap, and worked directly with Genetec engineering to build a custom integration fix.",
      outcome:
        "A 24/7 SOC operational from scratch, protecting Fortune 500 critical infrastructure, owned across the complete PSIM chain: evaluation, selection, configuration, deployment, operations. SOC continuity held through the cutover. Zero downtime.",
    },
  },
  {
    id: "analog-to-ai-ready",
    tag: "The Builder",
    title: "A manual, analog design program rebuilt into an AI-ready data product",
    summary: {
      problem:
        "Walmart's enterprise physical security design program was manual, analog, and data-dark. AI-readiness was zero.",
      outcome:
        "Onboarded a lifecycle platform, built a data integration delivering 450,000+ device records annually, and built three production platforms on top of that foundation, one of them company-award-winning.",
    },
    detail: {
      problem:
        "Walmart's design program shipped 1,600+ engineered CCTV and life safety systems a year across 800+ remodel projects, and none of that data survived past sign-off. Designs lived in static files, devices were untracked, and there was no structured security data foundation to build AI on.",
      solution:
        "Drove structural transformation as the organization's AI adoption lead. Onboarded a digital lifecycle management platform across 4,600+ locations. Built a data lake integration delivering high-integrity security device data that had not previously existed at enterprise scale. Launched the first-ever device mapping program, capturing 450,000+ records with images and metadata annually. Then built three platforms on top of that foundation: a design validation and vendor-performance platform used by 24 third-party designers, which won a company innovation award; an AI computer-vision design assurance layer that validates camera placements against codified deployment requirements and moves defect detection upstream of installation; and a multi-agent orchestration engine with a layered decision system, delivering traceable, risk-scored answers to program questions under strict latency SLOs.",
      outcome:
        "A program invisible to the enterprise became a structured, queryable, AI-enabled data product. 450,000+ device records captured annually. Defect detection moved upstream of installation. One platform recognized with a company innovation award.",
    },
  },
  {
    id: "measuring-the-ai",
    tag: "The Part Most Teams Skip",
    title: "Building the AI was half of it. Proving it still worked was the other half.",
    summary: {
      problem:
        "Once leadership started acting on AI-generated answers, nobody could tell whether those answers were getting better or quietly getting worse.",
      outcome:
        "Built the evaluation layer: a held-out gold set, scheduled re-grading, per-pair regression detection, and a tuning loop that refuses to ship a change unless it beats its own baseline on precision, recall, and F1.",
    },
    detail: {
      problem:
        "An AI system that answers questions for executives has a failure mode worse than being wrong: being confidently wrong, gradually, without anyone noticing. Every change to a prompt, a retrieval rule, or a data source can quietly degrade answer quality, and the people consuming the answers are the least equipped to detect it. Plenty of teams ship the model. Far fewer ship the thing that tells you it still works.",
      solution:
        "Built the measurement layer as first-class infrastructure. A held-out gold set of question and answer pairs, either authored directly or promoted from answers that had already been curated as correct. A scheduled evaluation pass that re-asks every one of them and has a second model grade the new answer against the gold. Per-pair regression detection, so a specific answer degrading surfaces rather than averaging away inside an aggregate. A dashboard reading one row for headline health so status stays cheap, with the per-pair detail on the slow path for debugging. Alongside it, a tuning loop scored against a labeled benchmark of positive and negative examples on precision, recall, and F1, which promotes a candidate configuration only when it beats the baseline outright, and a continuous integration guard that blocks a regression from reaching the system at all.",
      outcome:
        "Answer quality became a number instead of an impression. No configuration change shipped without measurably beating what it replaced. The system could be changed with confidence, which is the difference between an AI demo and an AI system people are allowed to depend on.",
    },
  },
  {
    id: "drop-in-delivery",
    tag: "Proof of Range",
    title: "Dropped into someone else's stack, found the real problem, shipped",
    summary: {
      problem:
        "A client had an existing AI build, an unfamiliar codebase, and a stated ask about lead generation, in an industry I knew only at entry level.",
      outcome:
        "Found the real bottleneck was operator bandwidth, not lead volume, shipped a fix, and the client said “that's the money right there,” then spec'd more features unprompted.",
    },
    detail: {
      problem:
        "A real estate client had an existing partial AI build, a codebase I didn't design, and a stated ask about lead generation, in an industry I knew only at entry level. The real constraint wasn't what he asked for.",
      solution:
        "Entered the existing build cold. Read what was already there, worked the client directly, and found that the actual bottleneck was the principal's own bandwidth: manually fetching leads and managing the team consumed his day and blocked expansion. Rebuilt around that: an AI lead generation and conversion pipeline, a per-node conversational monitoring layer with scoped context at each waypoint instead of one undifferentiated data blob, a compliance re-check that fires immediately before every outbound message per lead, catching relists between cadence steps rather than gating once at enrollment, and MLS sync via Playwright-driven automation. Delivered a click-through-verified demo.",
      outcome:
        "Client tested it and responded, “that's the money right there,” then spec'd an additional analytics module unprompted: lead counts, outflow by lead type, opens, closings, 30-day target-vs-actual with flat-line alerting, and year-over-year replay.",
    },
  },
]

// Every claim on this site traces to ~/knowledge/career/{master-profile,
// evidence-bank,technical-evidence,positioning}.md. Do not add one that doesn't.
//
// Markup: **text** renders as amber evidence (see lib/rich.tsx). Use it for
// proof, never for emphasis. If everything is amber, nothing is.
//
// Standing constraints from the vault that shape this copy:
// - No internal former-employer platform names. Systems described by function.
// - No former-employer documents or screenshots. Schematics are redrawn.
// - No former colleagues named. No separation content.
// - The design-assurance tool is a deterministic rules engine: never AI or CV.
// - The eval harness gates on F1 when run. Never "enforced in CI."
// - The data warehouse: drove the requirement, did not build it.
//
// 2026-09-11 revision: cut ~30% of vertical scroll. Case studies cut from
// four to three; the fourth (the ROI/adoption story) is folded into case 02,
// which is where that business case actually happened. Method 9 steps -> 5.
// AI-Ready and Capabilities compressed. Principles 6 -> 3. This is a
// content-architecture cut, not a CSS-compression one: no font size, spacing,
// or component shrank to make room.
//
// 2026-09-11 hero refinement: identity moved INTO the hero as a restrained
// 35% column (headshot, name, title, positioning, pattern line) rather than
// a full-width band below it — two columns, one system, not two cards. `about`
// below is the teaser used there; it does not carry credentials or biography,
// so it never duplicates the real About section further down the page
// (`aboutSection`), which nav "About" actually points to.

export const person = {
  name: "Damon Willis",
  post: "CPP",
  title: "Security Technology & Systems Leader",
  email: "damonwillis@icloud.com",
  linkedin: "https://linkedin.com/in/damon-willis",
  resume: "/Damon_Willis_Resume.pdf",
  location: "Northwest Arkansas · Remote, U.S.",
}

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "How I Think", href: "#how-i-work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export const hero = {
  eyebrow: "Security Technology & Systems",
  headline: "I build the systems that make physical operations smarter.",
  sub: "Security technology and systems leader transforming complex physical infrastructure into scalable, data-driven, AI-ready operations.",
  facts: ["18 years", "Fortune 1 and Fortune 500 scale", "CPP", "U.S. Coast Guard veteran"],
}

/** The claim that earns the signal diagram its space. Distinct wording from
 *  thesis.title and aiReady.close further down the page -- same idea, not a
 *  repeated sentence. */
export const signal = {
  eyebrow: "The signal",
  claim: "I define the standard. I own QA/QC through delivery. Then I build the dataset that runs the business.",
}

/** The hero's identity column. A personal introduction, not a biography —
 *  no credentials, no Coast Guard/DARC/firearms detail. Those live in
 *  `aboutSection`, further down, where nav "About" actually points. */
export const about = {
  name: "Damon Willis, CPP",
  title: "Security Technology & Systems Leader",
  positioning:
    "I build the systems that turn complex physical infrastructure into usable data, scalable operations, and intelligent systems.",
  pattern:
    "The pattern across all of it: I walk into programs that run on drawings, spreadsheets, and memory, and leave them running on data.",
}

/** The real About section. Placed later in the page (not right after the
 *  hero) so it doesn't restate the hero identity column verbatim — it adds
 *  the credentials and the one piece of personal/tactical material that's
 *  strategically relevant, instead of repeating name/title/positioning. */
export const aboutSection = {
  label: "About",
  title: "Beyond the systems.",
  bio: "Ten years as opposing force at the Direct Action Resource Center, running force-on-force against military special operations and law enforcement tactical teams. I have personally run the attack path security designs are meant to stop.",
  credentials: [
    "ASIS Certified Protection Professional (CPP)",
    "U.S. Coast Guard veteran",
    "18 years, Fortune 1 and Fortune 500 scale",
  ],
}

export interface Metric {
  value: string
  label: string
  note?: string
}

/** Two tiers, not a statistics wall: primary is the scope of the program,
 *  secondary is what the program produced. Primary renders larger. */
export const metricsPrimary: Metric[] = [
  { value: "$327M", label: "Physical security capital program" },
  { value: "1,600+", label: "Engineered designs a year" },
  { value: "800+", label: "Remodel projects a year" },
]

export const metricsSecondary: Metric[] = [
  { value: "$800K–$1.6M", label: "Annual savings", note: "approved business case" },
  { value: "30%", label: "Faster project cycles", note: "approved business case" },
  { value: "450K+", label: "Device records a year" },
  { value: "4,500+", label: "Locations on one system of record" },
]

export const metricsNote =
  "Fortune 1 enterprise security program, 2024 to 2026. Savings and cycle time are the figures in the approved platform business case."

export const thesis = {
  label: "The thesis",
  title: "Physical security is becoming infrastructure.",
  statements: [
    "Cameras are sensors.",
    "Access control is identity infrastructure.",
    "Security systems generate operational data.",
    "Physical environments are becoming software-defined.",
  ],
  body: [
    "Every camera terminates on a switch port. Every door is an identity event. Every device is an asset with a lifecycle. At enterprise scale the security estate is a sensor network, and most companies still run it on drawings, spreadsheets, and memory.",
  ],
  dependsLabel: "What that infrastructure now depends on",
  depends: [
    "Data",
    "Automation",
    "Connectivity",
    "Analytics",
    "AI",
    "Lifecycle management",
    "Systems integration",
  ],
  position:
    "My work sits in the gap between the physical estate and the data it should be producing. I understand the systems, the network underneath them, the people who run them, the procurement and construction process that builds them, and the enterprise constraints that decide whether any of it gets adopted. That is what it takes to make AI-enabled physical infrastructure actually work.",
}

export interface MethodStep {
  num: string
  title: string
  what: string
  proof: string
}

export const method = {
  label: "How I work",
  title: "How I Work",
  lead: "An operating method, not a list of traits. Every step below has been done for real.",
  steps: [
    {
      num: "01",
      title: "Understand",
      what: "Find the actual constraint.",
      proof: "A client asked for more leads. The real constraint was his own bandwidth.",
    },
    {
      num: "02",
      title: "Architect",
      what: "Map the system, people, dependencies, and technology.",
      proof: "Asset Protection, Risk, Realty, Construction, GSOC, Investigations, Claims. One deliverable, seven owners.",
    },
    {
      num: "03",
      title: "Prove",
      what: "Prototype, test, and build the business case.",
      proof: "**$200** a site, inside remodel budgets that already existed.",
    },
    {
      num: "04",
      title: "Deploy",
      what: "Align stakeholders and move into production.",
      proof: "A live SOC cutover held at full monitoring coverage when the vendor missed milestones.",
    },
    {
      num: "05",
      title: "Scale",
      what: "Measure the outcome and turn it into an enterprise capability.",
      proof: "Proven in a **$60M** logistics portfolio, then scaled across **4,500+** retail sites.",
    },
  ] satisfies MethodStep[],
}

export const aiReady = {
  label: "The bridge",
  title: "AI starts with the infrastructure underneath it.",
  chain: [
    { label: "Physical world", sub: "sites, doors, rooms" },
    { label: "Sensors", sub: "cameras, readers, LPR" },
    { label: "Digital records", sub: "one per device" },
    { label: "Integrated data", sub: "system of record" },
    { label: "Intelligence", sub: "coverage, lifecycle" },
    { label: "Automation", sub: "gates, checks" },
    { label: "AI", sub: "measured, not assumed" },
  ],
  close:
    "Most of my career has been the left side of that chain: the physical systems, the capture, the data model, the standards. It is the part AI projects in physical operations tend to underestimate. I'm not an AI researcher. I'm the person who makes the physical layer ready for one.",
}

export const capabilities = {
  label: "Capability map",
  title: "Four layers, one system.",
  lead: "Only what the record supports.",
  groups: [
    {
      name: "Physical Infrastructure",
      items: ["Video", "Access", "Intrusion", "Life Safety", "LPR"],
    },
    {
      name: "Digital Systems",
      items: ["Asset Management", "Data Integration", "Automation", "Digital Design", "PSIM"],
    },
    {
      name: "Intelligence",
      items: ["Computer Vision", "LLMs", "AI Evaluation", "Analytics", "Multi-Agent Systems"],
    },
    {
      name: "Enterprise",
      items: ["Program Management", "Capital Planning", "Procurement", "Standards", "Global Deployment"],
    },
  ],
  footnote:
    "I build with Python, FastAPI, React, PostgreSQL, and LLM APIs. Physical security is the domain. The code is how I make the work checkable.",
}

export const principles = {
  label: "Principles",
  title: "What eighteen years taught me to believe.",
  items: [
    "The sensor isn't the system. The data around the sensor is.",
    "Enterprise scale changes the problem.",
    "The hardest part of transformation isn't the technology. It's the operating model around it.",
  ],
}

export interface Role {
  org: string
  title: string
  dates: string
  summary: string
  links?: { label: string; href: string }[]
}

export const experience = {
  label: "Experience",
  title: "Eighteen years, one direction.",
  roles: [
    {
      org: "Walmart",
      title: "Senior Manager, Global Security Strategy & Innovation",
      dates: "Sep 2024 – Jul 2026",
      summary:
        "Led the enterprise security and life safety design program: **$327M** capital authority, **1,600+** designs a year, **4,600+** locations, teams in four countries. The organization's AI adoption lead for physical security.",
      links: [
        { label: "Case 01", href: "#walmart-scale" },
        { label: "Case 02", href: "#cad-to-digital" },
        { label: "Case 03", href: "#device-records" },
      ],
    },
    {
      org: "Black Sail LLC",
      title: "Principal Consultant",
      dates: "2021 – Present",
      summary:
        "Independent client delivery, run alongside full-time roles. A hosted vertical-SaaS product now running a millwork business; an AI lead-conversion platform built inside a client's existing codebase.",
    },
    {
      org: "J.B. Hunt Transport Services",
      title: "Senior Asset Protection Project Manager",
      dates: "Aug 2023 – Sep 2024",
      summary:
        "Personally designed a **$60M** portfolio of **150** concurrent logistics security projects through an 8-person team with no direct authority. Took a lifecycle platform from zero to full deployment, the model later scaled enterprise-wide.",
      links: [{ label: "Case 02", href: "#cad-to-digital" }],
    },
    {
      org: "Windstream Communications",
      title: "GRC Manager, Enterprise PCI DSS & IT Compliance",
      dates: "Jun 2018 – Aug 2023",
      summary:
        "Primary liaison to external QSA firms for PCI DSS Level 1 across merchant and service provider scope, plus NIST 800-53, HIPAA, and SOC 1 and 2. Clean audits year over year.",
    },
    {
      org: "Windstream Communications",
      title: "Manager, Security Operations Center",
      dates: "Mar 2011 – Jun 2018",
      summary:
        "Built a 24/7 SOC from nothing for a Fortune 500 telecom, including data center and critical infrastructure coverage. Owned the PSIM lifecycle end to end on Genetec Security Center, re-platforming to it after the first vendor didn't hold.",
      links: [{ label: "Case 02", href: "#cad-to-digital" }],
    },
    {
      org: "Peabody Hotel Little Rock",
      title: "Assistant Director of Security",
      dates: "2008 – 2010",
      summary:
        "Guest safety, executive protection, and incident command, including VIP operations coordinated with U.S. Secret Service details.",
    },
  ] satisfies Role[],
}

export const contact = {
  label: "Contact",
  title: "Building something complicated?",
  titleSecond: "Let's talk.",
  areas: [
    "Security Technology",
    "Systems Architecture",
    "Physical Infrastructure",
    "Digital Transformation",
    "AI-Ready Operations",
  ],
}

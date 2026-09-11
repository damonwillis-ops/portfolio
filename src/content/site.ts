// Every claim on this site traces to ~/knowledge/career/{master-profile,
// evidence-bank,technical-evidence,positioning}.md. Do not add one that doesn't.
//
// Markup: **text** renders as amber evidence (see lib/rich.tsx). Use it for
// proof, never for emphasis. If everything is amber, nothing is.
//
// Standing constraints from the vault that shape this copy:
// - No internal former-employer platform names. Systems described by function.
// - No former-employer documents or screenshots. Schematics are redrawn.
// - No former colleagues named. No separation content. No personal venture.
// - The design-assurance tool is a deterministic rules engine: never AI or CV.
// - The eval harness gates on F1 when run. Never "enforced in CI."
// - The data warehouse: drove the requirement, did not build it.

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
  { label: "Work", href: "#work" },
  { label: "How I Think", href: "#how-i-work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
]

export const hero = {
  eyebrow: "Security Technology & Systems",
  headline: "I build the systems that make physical operations smarter.",
  sub: "Security technology and systems leader transforming complex physical infrastructure into scalable, data-driven, AI-ready operations.",
  facts: ["18 years", "Fortune 1 and Fortune 500 scale", "CPP", "U.S. Coast Guard veteran"],
}

export interface Metric {
  value: string
  label: string
  note?: string
}

export const metrics: Metric[] = [
  { value: "$327M", label: "Physical security capital program" },
  { value: "1,600+", label: "Engineered designs a year" },
  { value: "800+", label: "Remodel projects a year" },
  { value: "$800K–$1.6M", label: "Annual savings", note: "approved business case" },
  { value: "30%", label: "Faster project cycles", note: "approved business case" },
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
  lead: "An operating method, not a list of traits. Every step below has been done for real, and the line under it is where.",
  steps: [
    {
      num: "01",
      title: "Understand",
      what: "Understand the actual problem.",
      proof: "A client asked for more leads. The real constraint was his own bandwidth.",
    },
    {
      num: "02",
      title: "Map",
      what: "Map the system, stakeholders, dependencies, and constraints.",
      proof: "Asset Protection, Risk, Realty, Construction, GSOC, Investigations, Claims. One deliverable, seven owners.",
    },
    {
      num: "03",
      title: "Challenge",
      what: "Question the existing operating model.",
      proof: "The process delivered a camera into a ceiling tile and nothing carried forward. That was the process working as designed.",
    },
    {
      num: "04",
      title: "Prototype",
      what: "Test the technology in the real environment.",
      proof: "One reference store before **19** more.",
    },
    {
      num: "05",
      title: "Build",
      what: "Develop the business case and implementation model.",
      proof: "**$200** a site, inside remodel budgets that already existed.",
    },
    {
      num: "06",
      title: "Align",
      what: "Bring technical, operational, financial, legal, and executive stakeholders together.",
      proof: "**5** business functions onto one operating model, none of them reporting to me.",
    },
    {
      num: "07",
      title: "Deploy",
      what: "Move from concept into production.",
      proof: "A live SOC cutover held at full monitoring coverage when the vendor missed milestones.",
    },
    {
      num: "08",
      title: "Measure",
      what: "Quantify outcomes.",
      proof: "Benchmarked my own automation against the fastest human, then widened the baseline against myself. Still **45%** time saved per project.",
    },
    {
      num: "09",
      title: "Scale",
      what: "Turn the solution into an enterprise capability.",
      proof: "Proven in a **$60M** logistics portfolio, then scaled across **4,500+** retail sites.",
    },
  ] satisfies MethodStep[],
}

export const aiReady = {
  label: "The bridge",
  title: "AI starts with the infrastructure underneath it.",
  ladder: [
    "Physical infrastructure creates data.",
    "Structured data creates visibility.",
    "Visibility enables intelligence.",
    "Intelligence enables automation.",
    "Automation enables AI.",
  ],
  chain: [
    { label: "Physical world", sub: "sites, doors, rooms" },
    { label: "Sensors", sub: "cameras, readers, LPR" },
    { label: "Digital records", sub: "one per device" },
    { label: "Integrated data", sub: "system of record" },
    { label: "Operational intelligence", sub: "coverage, lifecycle" },
    { label: "Automation", sub: "gates, checks" },
    { label: "AI", sub: "measured, not assumed" },
  ],
  whereLabel: "Where my work sits on that chain",
  where: [
    {
      span: "Physical world → Sensors",
      text: "**1,600+** engineered designs a year. Computer vision and license plate recognition deployed in live stores and parking lots.",
    },
    {
      span: "Digital records",
      text: "The company's first enterprise device mapping program: **450,000+** records a year.",
    },
    {
      span: "Integrated data",
      text: "Security device data delivered into BigQuery and Power BI. Design standards structured for machine retrieval.",
    },
    {
      span: "Intelligence → Automation",
      text: "A validation gate on every design package. A multi-agent orchestration engine running over program data.",
    },
    {
      span: "AI",
      text: "LLM systems built on program data, and the evaluation harness that decides whether a change to one is allowed to ship.",
    },
  ],
  close:
    "Most of my career has been the left side of that chain: the physical systems, the capture, the data model, the standards. It is the part AI projects in physical operations tend to underestimate. When I built on the right side, I built the measurement too. I'm not an AI researcher. I'm the person who makes the physical layer ready for one.",
}

export const capabilities = {
  label: "Capability map",
  title: "Four layers, one system.",
  lead: "Only what the record supports.",
  groups: [
    {
      name: "Physical Infrastructure",
      items: [
        "Video surveillance",
        "Access control",
        "Intrusion detection",
        "Life safety",
        "Public address and in-store radio",
        "License plate recognition",
        "Low-voltage network design: IDF/MDF, PoE, pathways, riser diagrams",
      ],
    },
    {
      name: "Digital Systems",
      items: [
        "Asset and lifecycle management",
        "Data integration: BigQuery, Power BI",
        "Digital design and design validation",
        "Workflow automation",
        "PSIM: Genetec Security Center",
        "Enterprise platforms: C·CURE 9000, Avigilon, Lenel, Milestone, SiteOwl",
      ],
    },
    {
      name: "Intelligence",
      items: [
        "Computer vision deployment",
        "LLM application development",
        "AI evaluation: precision, recall, F1",
        "Multi-agent orchestration",
        "Data analytics",
        "Operational intelligence",
      ],
    },
    {
      name: "Enterprise",
      items: [
        "Program management",
        "Capital planning",
        "Vendor and integrator management",
        "Business cases",
        "Procurement and contract negotiation",
        "Standards and specification authorship",
        "Construction administration",
        "Global deployment: U.S., Canada, Mexico, India",
        "Compliance: PCI DSS Level 1, SOC 1 and 2, NIST 800-53, HIPAA",
      ],
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
    "A security system should produce intelligence, not just evidence.",
    "A gate has to be checkable, not probabilistic.",
    "Honest over complete.",
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
        { label: "Case 04", href: "#business-case" },
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
        "Built a 24/7 SOC from nothing for a Fortune 500 telecom, including data center and critical infrastructure coverage. Owned the PSIM lifecycle end to end on Genetec Security Center.",
      links: [{ label: "Case 04", href: "#business-case" }],
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

export const about = {
  label: "About",
  title: "Physical first. Then the data. Then the intelligence.",
  paras: [
    "I'm a security technology and systems leader based in Northwest Arkansas. Eighteen years, from a hotel security floor to a Fortune 1 capital program, with a SOC build, five years inside audit, and a logistics design portfolio in between.",
    "The pattern across all of it: I walk into programs that run on drawings, spreadsheets, and memory, and leave them running on data. I have sat on the buying side of enterprise platform decisions, run the operations, and built the software the program ran on.",
    "Outside the job: ten years as opposing force at the Direct Action Resource Center, running force-on-force against military special operations and law enforcement tactical teams. I have personally run the attack path security designs are meant to stop.",
  ],
  credentials: [
    "ASIS Certified Protection Professional (CPP)",
    "U.S. Coast Guard veteran",
    "NRA Chief Range Safety Officer and Pistol Instructor",
    "Arkansas concealed carry instructor, 15 years",
  ],
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

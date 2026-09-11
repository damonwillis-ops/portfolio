// Schematics, redrawn by hand. The systems behind them ran on proprietary
// operational data, so the site shows structure, never screenshots.
//
// Visual grammar: gray is the system at rest. Amber is the signal: the path
// that is active, the gate that passes, the result that counts. Pulses are
// drawn beneath boxes so the signal appears to pass through each system.
// SVG marker ids are unique per diagram because they share one document.

import type { ReactNode } from "react"
import { Wide } from "./ui"

function Arrowheads({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-a`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--color-line-2)" strokeWidth="1" />
      </marker>
      <marker id={`${id}-on`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke="var(--color-signal)" strokeWidth="1.25" />
      </marker>
    </defs>
  )
}

function Svg({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="sx block h-auto w-full" role="img" aria-label={label}>
      {children}
    </svg>
  )
}

function Box({
  x,
  y,
  w,
  h,
  title,
  sub,
  on,
}: {
  x: number
  y: number
  w: number
  h: number
  title: string
  sub?: string
  on?: boolean
}) {
  const cx = x + w / 2
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} className={on ? "sx-box-on" : "sx-box"} />
      <text x={cx} y={sub ? y + h / 2 - 3 : y + h / 2 + 4} textAnchor="middle" className="sx-t">
        {title}
      </text>
      {sub && (
        <text x={cx} y={y + h / 2 + 14} textAnchor="middle" className={on ? "sx-m-on" : "sx-m"}>
          {sub}
        </text>
      )}
    </g>
  )
}

function Pulse({ d, delay = 0, dur = 7 }: { d: string; delay?: number; dur?: number }) {
  return (
    <path
      d={d}
      pathLength={100}
      className="sx-pulse"
      style={{ ["--delay" as string]: `${delay}s`, ["--dur" as string]: `${dur}s` }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Case 01: the system map. No single team owns the whole problem.     */

const GROUPS = [
  "Asset Protection",
  "Risk",
  "Realty",
  "Construction",
  "Store Operations",
  "GSOC",
  "Investigations",
  "Claims",
  "Global Tech",
  "Global Procurement",
  "Integrators",
  "Architects of record",
  "Canada · Mexico · India",
]
const CX = 380
const CY = 208
const RX = 240
const RY = 146
const R0 = 54

const SPOKES = GROUPS.map((name, k) => {
  const a = ((-90 + (k * 360) / GROUPS.length) * Math.PI) / 180
  const c = Math.cos(a)
  const s = Math.sin(a)
  const anchor: "start" | "end" | "middle" = c > 0.25 ? "start" : c < -0.25 ? "end" : "middle"
  const r = (n: number) => Math.round(n * 10) / 10
  return {
    name,
    k,
    sx: r(CX + R0 * c),
    sy: r(CY + R0 * s),
    nx: r(CX + RX * c),
    ny: r(CY + RY * s),
    lx: r(CX + (RX + 13) * c),
    ly: r(CY + (RY + 13) * s + (anchor === "middle" ? (s < 0 ? -4 : 12) : 4)),
    anchor,
  }
})

export function SystemMap() {
  return (
    <Wide min={620}>
      <div data-progress>
        <Svg w={760} h={420} label="System map: thirteen stakeholder groups around one security design program">
          {SPOKES.map((p) => (
            <g key={p.name} className="sm-spoke">
              <path
                d={`M${p.sx} ${p.sy} L${p.nx} ${p.ny}`}
                pathLength={1}
                className="sx-line sx-draw"
                style={{ ["--delay" as string]: `${0.1 + p.k * 0.05}s` }}
              />
              <circle cx={p.nx} cy={p.ny} r={4.5} className="sx-node" />
              <text x={p.lx} y={p.ly} textAnchor={p.anchor} className="sx-t2">
                {p.name}
              </text>
            </g>
          ))}
          {[1, 5, 9].map((k, j) => {
            const p = SPOKES[k]
            return <Pulse key={k} d={`M${p.nx} ${p.ny} L${p.sx} ${p.sy}`} delay={j * 2.2} dur={6.6} />
          })}
          <circle cx={CX} cy={CY} r={R0} className="sx-box-on" />
          <text x={CX} y={CY - 3} textAnchor="middle" className="sx-t">
            Security design
          </text>
          <text x={CX} y={CY + 14} textAnchor="middle" className="sx-m-on">
            PROGRAM
          </text>
        </Svg>
      </div>
    </Wide>
  )
}

/* ------------------------------------------------------------------ */
/* Case 03: what a device becomes once it has a record.                */

const RECORD: [string, ReactNode][] = [
  ["Asset ID", <span className="ev font-mono text-[0.9rem]">CAM-0417</span>],
  ["Type", "Fixed dome camera"],
  ["Make / model", "Manufacturer · model number"],
  ["Location", "Site · floor · zone"],
  ["Mount", "15 ft above finished floor"],
  ["Network", "IDF-2 · switch port 14"],
  [
    "Image",
    <svg width="72" height="46" viewBox="0 0 72 46" aria-label="Device photo placeholder" role="img">
      <rect x="0.5" y="0.5" width="71" height="45" rx="2" fill="var(--color-surface-2)" stroke="var(--color-line-2)" />
      <path d="M36 10 V36 M20 23 H52" stroke="var(--color-line-2)" />
      <circle cx="36" cy="23" r="7" fill="none" stroke="var(--color-ink-3)" />
    </svg>,
  ],
  ["Lifecycle", "Installed · under warranty · replace-by date"],
  ["Source", "Field survey, validated against the as-built"],
]

export function AssetRecord() {
  return (
    <div className="grid items-center gap-5 md:grid-cols-[1fr_4rem_1.55fr]">
      <div className="panel p-5">
        <p className="t-meta">Before</p>
        <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-2">
          A camera on a wall. A PDF in someone's inbox. Nothing that says the two are the same thing.
        </p>
      </div>
      <div className="flex justify-center" aria-hidden="true">
        <svg width="64" height="14" viewBox="0 0 64 14" className="rotate-90 md:rotate-0">
          <path d="M2 7 H56" stroke="var(--color-signal)" strokeWidth="1.25" />
          <path d="M52 3 L58 7 L52 11" fill="none" stroke="var(--color-signal)" strokeWidth="1.25" />
        </svg>
      </div>
      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="t-meta">Asset record</span>
          <span className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-signal uppercase">
            <span className="btn-dot" aria-hidden="true" />
            Verified
          </span>
        </div>
        <dl className="grid grid-cols-[7.5rem_1fr] text-[0.92rem] sm:grid-cols-[8.5rem_1fr]">
          {RECORD.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="t-meta border-b border-line px-5 py-3">{k}</dt>
              <dd className="border-b border-line py-3 pr-5 text-ink">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Selected work                                                        */

export function ValidationGate() {
  return (
    <Wide min={640}>
      <div data-progress>
        <Svg w={760} h={250} label="Validation gate: packages below an 80 percent pass return to the designer; passing packages advance">
          <Arrowheads id="vg" />
          <Pulse d="M150 68 H575" dur={5.5} />
          <path d="M150 68 H176" className="sx-line" markerEnd="url(#vg-a)" />
          <path d="M350 68 H386" className="sx-line" markerEnd="url(#vg-a)" />
          <Box x={0} y={40} w={150} h={56} title="Designer submits" sub="PACKAGE + METADATA" />
          <Box x={180} y={40} w={170} h={56} title="Metadata check" sub="12 REFERENCE TABLES" />
          <polygon points="390,68 450,32 510,68 450,104" className="sx-box-on" />
          <text x={450} y={65} textAnchor="middle" className="sx-t">
            ≥ 80%
          </text>
          <text x={450} y={81} textAnchor="middle" className="sx-t2">
            pass?
          </text>
          <path d="M510 68 H571" className="sx-sig" markerEnd="url(#vg-on)" />
          <text x={541} y={58} textAnchor="middle" className="sx-m-on">
            YES
          </text>
          <Box x={575} y={40} w={185} h={56} title="Vendor submission" sub="PACKAGE ADVANCES" on />
          <path d="M450 32 V14 H75 V36" className="sx-dash" markerEnd="url(#vg-a)" />
          <text x={262} y={30} textAnchor="middle" className="sx-m">
            NO · BACK TO THE DESIGNER, EACH ERROR LISTED
          </text>
          <path d="M265 96 V186" className="sx-line" markerEnd="url(#vg-a)" />
          <Box x={180} y={190} w={170} h={50} title="Scorecards" sub="PER DESIGNER · PER FIRM" />
          <path d="M350 215 H575" className="sx-dash" />
          <path d="M457 210 L467 220 M467 210 L457 220" stroke="var(--color-ink-2)" strokeWidth="1.25" />
          <text x={462} y={202} textAnchor="middle" className="sx-m">
            TOOL SCORES EXCLUDED BY RULE
          </text>
          <Box x={575} y={190} w={185} h={50} title="Program KPIs" sub="SYSTEM OF RECORD ONLY" />
        </Svg>
      </div>
    </Wide>
  )
}

export function Lineage() {
  const nodes = [
    { x: 20, tag: "01", title: "Survey QA", sub: "FIELD SURVEY CHECKED", anchor: "start" as const },
    { x: 260, tag: "02", title: "Design validation", sub: "80% GATE · 24 DESIGNERS", anchor: "middle" as const },
    { x: 500, tag: "03", title: "Design assurance", sub: "RULES ENGINE, ON PURPOSE", anchor: "middle" as const },
    { x: 740, tag: "04", title: "AI evaluation", sub: "GOLD SET · JUDGE · P/R/F1", anchor: "end" as const },
  ]
  return (
    <Wide min={620}>
      <div data-progress>
        <Svg w={760} h={120} label="Lineage: survey QA, design validation, design assurance, AI evaluation">
          <path d="M20 40 H740" className="sx-line" />
          <Pulse d="M20 40 H740" dur={6} />
          {nodes.map((n, i) => (
            <g key={n.tag}>
              <text x={n.x} y={22} textAnchor={n.anchor} className={i === 3 ? "sx-m-on" : "sx-m"}>
                {n.tag}
              </text>
              <circle cx={n.x} cy={40} r={6} className={i === 3 ? "sx-node-on" : "sx-node"} />
              <text x={n.x} y={74} textAnchor={n.anchor} className="sx-t">
                {n.title}
              </text>
              <text x={n.x} y={93} textAnchor={n.anchor} className="sx-m">
                {n.sub}
              </text>
            </g>
          ))}
        </Svg>
      </div>
    </Wide>
  )
}

export function EvalLoop() {
  return (
    <Wide min={640}>
      <div data-progress>
        <Svg w={760} h={240} label="Evaluation loop: gold set, fresh answers, a judge model, per-pair regression check, then a baseline gate">
          <Arrowheads id="ev" />
          <Pulse d="M140 57 H545" dur={6} />
          <Pulse d="M622 84 V125 H180 V133" delay={2.6} dur={6} />
          <path d="M140 57 H171" className="sx-line" markerEnd="url(#ev-a)" />
          <path d="M325 57 H356" className="sx-line" markerEnd="url(#ev-a)" />
          <path d="M510 57 H541" className="sx-line" markerEnd="url(#ev-a)" />
          <Box x={0} y={30} w={140} h={54} title="Gold set" sub="KNOWN ANSWERS" on />
          <Box x={175} y={30} w={150} h={54} title="System answers" sub="FRESH EVERY RUN" />
          <Box x={360} y={30} w={150} h={54} title="Second model grades" sub="EACH ANSWER" />
          <Box x={545} y={30} w={155} h={54} title="Regression check" sub="PER PAIR, NOT AVERAGED" />
          <path d="M622 84 V125 H180 V129" className="sx-line" markerEnd="url(#ev-a)" />
          <polygon points="120,165 180,133 240,165 180,197" className="sx-box-on" />
          <text x={180} y={162} textAnchor="middle" className="sx-t">
            Beats
          </text>
          <text x={180} y={178} textAnchor="middle" className="sx-t2">
            baseline?
          </text>
          <path d="M240 165 H290" className="sx-sig" markerEnd="url(#ev-on)" />
          <text x={300} y={162} className="sx-t">
            Promote the configuration
          </text>
          <text x={300} y={178} className="sx-m-on">
            F1 UP, OR TIED WITH PRECISION UP
          </text>
          <path d="M180 197 V222 H290" className="sx-line" markerEnd="url(#ev-a)" />
          <text x={300} y={226} className="sx-t2">
            Otherwise the baseline stays
          </text>
        </Svg>
      </div>
    </Wide>
  )
}

export function StandardCard() {
  const rows: [string, string, boolean?][] = [
    ["Requirement", "One testable statement, in shall and must language."],
    ["Measure", "How compliance is verified, recorded against this requirement alone.", true],
    ["Exception", "Named approval authority. Risk assessment required."],
    ["AI summary", "Plain-language summary and question-and-answer pairs, structured for agent retrieval."],
  ]
  return (
    <div className="panel overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-5 py-3">
        <span className="ev font-mono text-[0.9rem]">SD-CCTV-XXX-001</span>
        <span className="t-meta">Requirement record · illustrative</span>
      </div>
      <dl className="grid grid-cols-[7.5rem_1fr] text-[0.95rem] sm:grid-cols-[9rem_1fr]">
        {rows.map(([k, v, on]) => (
          <div key={k} className="contents">
            <dt className="t-meta flex items-start gap-2 border-b border-line px-5 py-4">
              {k}
              {on && <span className="btn-dot mt-1" aria-label="measured per requirement" />}
            </dt>
            <dd className="border-b border-line py-4 pr-5 text-ink">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function PackageLibrary() {
  const areas = ["Auto care center", "Front end", "Pharmacy", "Entrance vestibule", "Cash office", "Parking lot"]
  const chips = (
    <span className="mt-3 flex flex-wrap gap-1.5" aria-label="equipment, labor, and budget lines">
      {["Equip", "Labor", "Budget"].map((c) => (
        <span key={c} className="rounded-[2px] border border-line-2 px-1.5 py-0.5 font-mono text-[0.7rem] tracking-[0.08em] text-ink-3 uppercase">
          {c}
        </span>
      ))}
    </span>
  )
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="t-meta">Store prototype</span>
        <span className="h-px flex-1 bg-line-2" aria-hidden="true" />
        <span className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-signal uppercase">
          <span className="btn-dot" aria-hidden="true" />
          Cost-coded
        </span>
      </div>
      <div className="panel mt-4 border-signal-dim p-5">
        <p className="font-medium text-ink">Full system upgrade</p>
        {chips}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {areas.map((a) => (
          <li key={a} className="panel p-4">
            <p className="text-[0.95rem] text-ink">{a}</p>
            {chips}
          </li>
        ))}
      </ul>
      <p className="t-caption mt-4">Package names generalized. Each carried its own equipment, labor, and budget line.</p>
    </div>
  )
}

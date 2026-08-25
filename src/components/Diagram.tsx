// Hand-drawn schematics of systems Damon built. These exist because the rest of
// the site is prose, and a builder's portfolio that never shows a built thing is
// asking the reader to take him on faith.
//
// Constraint driving the format: the underlying systems run on proprietary
// operational data, so no screenshots and no repo links (positioning.md hard
// rule 10). A schematic he drew himself is publishable where a screenshot is not.
//
// Colors reference the @theme tokens in index.css rather than repeating hexes.
// Each diagram sits in an overflow-x-auto wrapper: on a phone it scrolls
// sideways instead of shrinking the labels past legibility.

const ACCENT = "var(--color-accent)"
const ACCENT_DIM = "var(--color-accent-dim)"
const BORDER = "var(--color-border)"
const RAISED = "var(--color-bg-raised)"
const TEXT = "var(--color-text)"
const DIM = "var(--color-text-dim)"
const MONO = "var(--font-mono)"
const BODY = "var(--font-body)"

interface BoxProps {
  x: number
  y: number
  w: number
  h: number
  label: string
  sub?: string
  accent?: boolean
}

function Box({ x, y, w, h, label, sub, accent }: BoxProps) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={3}
        fill={RAISED}
        stroke={accent ? ACCENT_DIM : BORDER}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 5 : y + h / 2 + 4}
        textAnchor="middle"
        fill={accent ? ACCENT : TEXT}
        style={{ font: `500 12px ${BODY}` }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 13}
          textAnchor="middle"
          fill={DIM}
          style={{ font: `10px ${MONO}` }}
        >
          {sub}
        </text>
      )}
    </g>
  )
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={BORDER} strokeWidth={1} markerEnd="url(#arrowhead)" />
}

function Defs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6" fill="none" stroke={BORDER} strokeWidth={1} />
      </marker>
    </defs>
  )
}

function Frame({ children, caption, width }: { children: React.ReactNode; caption: string; width: number }) {
  return (
    <figure className="mt-7 mb-1">
      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} 250`}
          role="img"
          style={{ minWidth: `${Math.min(width, 680)}px`, width: "100%", height: "auto" }}
        >
          <Defs />
          {children}
        </svg>
      </div>
      <figcaption className="mt-3 font-mono text-[0.68rem] leading-relaxed tracking-[0.06em] text-text-dim uppercase">
        {caption}
      </figcaption>
    </figure>
  )
}

/** The evaluation loop: how answer quality stayed measurable instead of assumed. */
export function EvalLoopDiagram() {
  return (
    <Frame
      width={760}
      caption="The loop runs on a schedule. Nothing reaches the system without beating the score it replaces."
    >
      <text x={0} y={14} fill={DIM} style={{ font: `10px ${MONO}`, letterSpacing: "0.1em" }}>
        EVALUATION LOOP
      </text>

      <Box x={0} y={40} w={132} h={54} label="Gold set" sub="known answers" accent />
      <Arrow x1={138} y1={67} x2={168} y2={67} />
      <Box x={174} y={40} w={132} h={54} label="System answers" sub="fresh, every run" />
      <Arrow x1={312} y1={67} x2={342} y2={67} />
      <Box x={348} y={40} w={148} h={54} label="Judge model grades" sub="0 to 5, four axes" />
      <Arrow x1={502} y1={67} x2={532} y2={67} />
      <Box x={538} y={40} w={148} h={54} label="Regression check" sub="per pair, not averaged" />

      {/* rubric detail */}
      <text x={348} y={122} fill={DIM} style={{ font: `10px ${MONO}` }}>
        relevance · grounding · completeness · no hallucination
      </text>

      {/* gate */}
      <path
        d="M 60 150 L 120 150 L 150 178 L 120 206 L 60 206 L 30 178 Z"
        fill={RAISED}
        stroke={ACCENT_DIM}
        strokeWidth={1}
      />
      <text x={90} y={175} textAnchor="middle" fill={ACCENT} style={{ font: `500 12px ${BODY}` }}>
        Beats
      </text>
      <text x={90} y={190} textAnchor="middle" fill={ACCENT} style={{ font: `500 12px ${BODY}` }}>
        baseline?
      </text>

      <Arrow x1={604} y1={100} x2={604} y2={124} />
      <line x1={604} y1={124} x2={160} y2={124} stroke={BORDER} strokeWidth={1} />
      <line x1={160} y1={124} x2={160} y2={150} stroke={BORDER} strokeWidth={1} />
      <line x1={160} y1={150} x2={152} y2={150} stroke={BORDER} strokeWidth={1} />

      <Arrow x1={152} y1={168} x2={198} y2={168} />
      <text x={206} y={172} fill={TEXT} style={{ font: `500 12px ${BODY}` }}>
        Yes, it ships
      </text>

      <Arrow x1={152} y1={192} x2={198} y2={192} />
      <text x={206} y={196} fill={DIM} style={{ font: `500 12px ${BODY}` }}>
        No, CI blocks it
      </text>

      <text x={0} y={232} fill={DIM} style={{ font: `10px ${MONO}` }}>
        Judge model and backend stamped on every run, so a score drop is attributable to the system or to the grader.
      </text>
    </Frame>
  )
}

/** Static, siloed design files rebuilt into a queryable data foundation. */
export function DataFoundationDiagram() {
  return (
    <Frame
      width={720}
      caption="Nothing survived past sign-off before. Everything above the line was built on what the capture program created."
    >
      <text x={0} y={14} fill={DIM} style={{ font: `10px ${MONO}`, letterSpacing: "0.1em" }}>
        BEFORE
      </text>
      <Box x={0} y={26} w={118} h={40} label="Static files" />
      <Box x={128} y={26} w={118} h={40} label="Untracked devices" />
      <Box x={256} y={26} w={118} h={40} label="Siloed vendors" />
      <text x={392} y={51} fill={DIM} style={{ font: `11px ${MONO}` }}>
        data dies at sign-off
      </text>

      <line x1={0} y1={88} x2={720} y2={88} stroke={BORDER} strokeWidth={1} strokeDasharray="3 4" />

      <Box x={0} y={104} w={374} h={52} label="Device capture program" sub="450,000+ records a year, imaged and tagged" accent />
      <Arrow x1={187} y1={160} x2={187} y2={182} />

      <text x={410} y={124} fill={DIM} style={{ font: `10px ${MONO}`, letterSpacing: "0.1em" }}>
        BUILT ON TOP
      </text>
      <Box x={410} y={132} w={146} h={44} label="Design validation" sub="24 designers" />
      <Box x={566} y={132} w={154} h={44} label="CV design assurance" sub="gates install sign-off" />
      <Box x={410} y={186} w={310} h={44} label="Orchestration and decision layer" sub="traceable answers, versioned metrics" />

      <Box x={0} y={188} w={374} h={44} label="Queryable, AI-ready data product" accent />
    </Frame>
  )
}

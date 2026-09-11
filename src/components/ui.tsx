import type { CSSProperties, ReactNode } from "react"
import { Rich } from "../lib/rich"
import type { Metric } from "../content/site"
import type { Step } from "../content/caseStudies"

type Vars = CSSProperties & Record<`--${string}`, string | number>

export function SectionHead({
  id,
  label,
  title,
  lead,
  children,
}: {
  id?: string
  label: string
  title: string
  lead?: string
  children?: ReactNode
}) {
  return (
    <header className="grid gap-5 lg:grid-cols-12 lg:gap-10" data-reveal>
      <p className="t-meta sec-label self-start lg:col-span-3 lg:pt-4">{label}</p>
      <div className="lg:col-span-9">
        <h2 id={id} className="t-h1">
          {title}
        </h2>
        {lead && (
          <p className="t-lead mt-6 max-w-3xl">
            <Rich text={lead} />
          </p>
        )}
        {children}
      </div>
    </header>
  )
}

/** A signal chain. Lights node by node as the reader scrolls through it. */
export function Flow({
  steps,
  horizontal = true,
  caption,
  label,
}: {
  steps: Step[]
  horizontal?: boolean
  caption?: string
  label?: string
}) {
  const n = steps.length
  return (
    <figure className="mt-8" aria-label={label}>
      <div className={horizontal ? "flow flow-h" : "flow"} data-progress style={{ "--n": n } as Vars}>
        <ol className="flow-list">
          {steps.map((s, i) => (
            <li key={s.label} className="flow-step" style={{ "--i": i } as Vars}>
              <span className="flow-node" aria-hidden="true" />
              {i < n - 1 && (
                <span className="flow-seg" aria-hidden="true">
                  <span className="flow-pulse" />
                </span>
              )}
              <span className="flow-label text-[0.98rem]">{s.label}</span>
              {s.sub && <span className="flow-sub">{s.sub}</span>}
            </li>
          ))}
        </ol>
      </div>
      {caption && <figcaption className="t-caption mt-6 max-w-2xl">{caption}</figcaption>}
    </figure>
  )
}

export function BeforeAfter({
  before,
  after,
  caption,
}: {
  before: string[]
  after: string[]
  caption?: string
}) {
  return (
    <figure className="mt-8" data-reveal>
      <div className="grid min-[56rem]:grid-cols-[1fr_minmax(9rem,13rem)_1fr]" data-progress>
        <div className="ba-before">
          <p className="t-meta mb-2">Before</p>
          <ul>
            {before.map((b) => (
              <li key={b} className="ba-item">
                <span className="ba-mark" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="ba-signal my-2 min-[56rem]:mx-4 min-[56rem]:my-0" aria-hidden="true">
          <span className="ba-signal-line" />
          <span className="ba-pulse" />
          <span className="ba-signal-label t-meta">Transformation</span>
        </div>
        <div className="ba-after">
          <p className="t-meta mb-2">After</p>
          <ul>
            {after.map((a) => (
              <li key={a} className="ba-item">
                <span className="ba-mark" aria-hidden="true" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {caption && <figcaption className="t-caption mt-6 max-w-2xl">{caption}</figcaption>}
    </figure>
  )
}

export function StatGrid({
  items,
  cols = 4,
  tone = "signal",
}: {
  items: Metric[]
  cols?: 2 | 3 | 4
  tone?: "signal" | "ink"
}) {
  const colClass = cols === 4 ? "lg:grid-cols-4" : cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"
  return (
    <ul className={`grid grid-cols-1 gap-x-8 gap-y-9 min-[26rem]:grid-cols-2 ${colClass}`} data-reveal>
      {items.map((s) => (
        <li key={s.label} className="sigline border-t border-line pt-5">
          <span
            className={`t-stat block whitespace-nowrap ${tone === "ink" ? "text-ink" : ""} ${s.value.length > 7 ? "text-[clamp(1.45rem,1.05rem+1.3vw,2rem)]" : ""}`}
            data-count={s.value}
            aria-hidden="true"
          >
            {s.value}
          </span>
          <span className="sr-only">{s.value}</span>
          <span className="mt-3 block text-[0.95rem] leading-snug text-ink-2">{s.label}</span>
          {s.note && <span className="t-caption mt-1 block">{s.note}</span>}
        </li>
      ))}
    </ul>
  )
}

/** A single disclosure for supporting detail. Collapsed by default so the
 *  compact view is the whole story in ~30-45s; the deeper material is one
 *  click away, not gone. Content stays in the DOM either way, so print
 *  forces it open (see index.css) and it's never hidden from a screen reader
 *  that ignores `open`. */
export function Explore({
  label = "Explore the detail",
  gap = "space-y-20",
  children,
}: {
  label?: string
  gap?: string
  children: ReactNode
}) {
  return (
    <details className="explore mt-10 border-t border-line pt-6" data-reveal>
      <summary className="explore-summary">
        <span className="explore-mark" aria-hidden="true" />
        {label}
      </summary>
      <div className={`explore-body mt-10 ${gap}`}>{children}</div>
    </details>
  )
}

/** Horizontal scroll container for wide schematics. The figure scrolls on a
 *  phone; the page never does. */
export function Wide({ children, min = 640 }: { children: ReactNode; min?: number }) {
  return (
    <div className="-mx-1 overflow-x-auto px-1 pb-2">
      <div style={{ minWidth: `${min}px` }}>{children}</div>
    </div>
  )
}
